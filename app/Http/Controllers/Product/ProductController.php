<?php

namespace App\Http\Controllers\Product;

use App\Events\Product\ProductAddOrEditEvent;
use App\Events\Product\ProductDeleteEvent;
use App\Http\Controllers\Traits\Date\DateTools;
use App\Http\Controllers\Traits\WF\WFTools;
use App\Models\Role;
use App\Models\Role as Role_System;
use App\Models\Product;
use App\Rules\RuleExceptAdmin;
use Axiom\Rules\CountryCode;
use Axiom\Rules\LocationCoordinates;
use GrahamCampbell\Binput\Facades\Binput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\HtmlString;
use Yajra\DataTables\Facades\DataTables;


class ProductController extends Controller
{
    use DateTools;

    protected $request;
    protected $data_All;
    protected $data;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->middleware(['auth']);
        $this->middleware(['permission:اضافه کردن محصول|ویرایش محصول'], ['only' => ['set_Or_Edit_Product']]);
        $this->middleware(['permission:حذف محصول'], ['only' => ['delete_Product']]);

        $this->data_All = Binput::all();
        if (isset($this->data_All['Data'])) {
            //$this->data = Binput::get('Data');
            //$this->data = json_decode(Binput::get('Data'),true);
            $this->data = json_decode($request->input('Data'), true);
        }
        $this->request = $request;
    }

    public function set_Or_Edit_Product()
    {
        try {
            $rules = [
                'name' => 'required|string|min:3|max:500',
                'barcode' => 'required|string|min:3|max:500|unique:products',
                'price' => 'required|integer|min:0',
                'description' => 'required|string|min:3|max:1000',
                'enabled' => 'required|in:0,1,true,false',
                'qty' => 'required|integer|min:0',
            ];
            Validator::make($this->data, $rules)->validate();
        } catch (\Illuminate\Validation\ValidationException $th) {
            return $th->validator->errors();
        }

        // Add or edit product
        $message = event(new ProductAddOrEditEvent($this->data));

        return $message[0];
    }

    public function delete_Product()
    {
        // Delete product
        $message = event(new ProductDeleteEvent($this->data));

        return $message[0];

    }

    protected function getProduct()
    {

        return Product::with([ 'files'])->find($this->data['id']);
    }

    protected function getProducts()
    {
        $search = "";
        if (isset($this->data['search'])) {
            $search = $this->data['search'];
        }
        return Product::with([ 'files'])
            ->where('enabled',true)
            ->where(function ($query) use ($search) {
                $query->when(!empty($search), function ($query) use ($search) {
                    return $query->where('name', 'LIKE', '%' . $search . '%')
                        ->orWhere('price', 'LIKE', '%' . $search . '%')
                        ->orWhere('description', 'LIKE', '%' . $search . '%');
                });
            })
            ->get();
    }

    protected function getAll(Request $request)
    {
        $search = "";
        $page = 1;
        if (isset($this->data['search'])) {
            $search = $this->data['search'];
        }
        if (isset($this->data['page'])) {
            $page = $this->data['page'];
        }

        $count = Product::where(function ($query) use ($search) {
            $query->where('name', 'LIKE', '%' . $search . '%')
                ->orWhere('price', 'LIKE', '%' . $search . '%')
                ->orWhere('description', 'LIKE', '%' . $search . '%');
        })->count();

        $product = Product::where(function ($query) use ($search) {
            $query->where('name', 'LIKE', '%' . $search . '%')
                ->orWhere('price', 'LIKE', '%' . $search . '%')
                ->orWhere('description', 'LIKE', '%' . $search . '%');
        })
            ->orderBy('name')
            ->paginate($perPage = 10, $columns = ['*'], $pageName = 'page', $page)
            ->map(function ($value, $key) {
                /*$value['text'] = $value['title'] = !empty( $value['full_name']) ? $value['full_name'] : $value['first_name'].' '. $value['last_name'];*/
                return $value->only(['id', 'name', 'price', 'description', 'enabled', 'qty', 'created_at', 'updated_at']);
            });

        return response()->json(array(
            'result' => $product->values()->all(),
            'total' => $count,
        ), 200);

    }

    public function getProductsTable()
    {

        /*$rules = [
            'Sync' => 'required|in:InvoiceController',
            'SubSync' => 'required|in:get_Invoice_View_Search_Table',
            'draw' => 'integer',
            'columns' => 'array',
            'columns.*.data' => 'string|min:1|max:120',
            'columns.*.name' => 'string|min:1|max:120',
            'columns.*.searchable' => 'in:true,false',
            'columns.*.orderable' => 'in:true,false',
            'columns.*.search.value' => 'string|min:1|max:200',
            'columns.*.search.regex' => 'in:true,false',
            'order.*.column' => 'integer',
            'order.*.dir' => 'string|min:1|max:120',
            'start' => 'integer',
            'length' => 'integer',
            'search.value' => 'string|min:1|max:200',
            'search.regex' => 'in:true,false',
        ];
        Validator::make($this->data_All, $rules)->validate();*/

        $search = '';
        if (isset($this->data_All['search']['value'])) {
            $search = $this->data_All['search']['value'];
        }

        // Result
        $product = Product::with(['files'])->where(function ($query) use ($search) {
            $query->when(!empty($search), function ($query) use ($search) {
                return $query->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhere('price', 'LIKE', '%' . $search . '%')
                    ->orWhere('description', 'LIKE', '%' . $search . '%');
            });
        })
            ->orderByDesc('id')
            ->skip($this->data_All['start'])
            ->take($this->data_All['length'])
            ->get()->values()->all();

        // Total record
        $totalData = Product::where(function ($query) use ($search) {
            $query->when(!empty($search), function ($query) use ($search) {
                return $query->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhere('price', 'LIKE', '%' . $search . '%')
                    ->orWhere('description', 'LIKE', '%' . $search . '%');
            });
        })->count();


        // No filter at first so we can assign like this
        $totalFiltered = $totalData;

        $datatables = Datatables::of($product)
            ->filter(function () {
            })
            ->skipPaging()
            ->smart(false)
            ->setRowId('id')
            ->setTotalRecords(intval($totalData))
            ->setFilteredRecords(intval($totalFiltered))
            /*->setRowClass(function ($row) {
                return $row->id % 2 == 0 ? 'alert-success' : 'alert-warning';
            })*/
            ->setRowAttr([
                'style' => 'white-space: nowrap',
            ])
            ->setRowData([
                'dataSend' => function ($row) {
                    return $row;
                },
            ])
            ->addIndexColumn()
            ->editColumn('id', function ($row) {
                $small_Text = __('Dashboard.public.form.created_Time');
                $small_Time = $this->getDateByTimezone($row['created_at']);

                if (!empty($row['updated_at'])) {
                    if ($row['updated_at'] != $row['created_at']) {
                        $small_Text = __('Dashboard.public.form.edit_Time');
                        $small_Time = $this->getDateByTimezone($row['updated_at']);
                    }
                }

                $action = '<a class="id">' . $row['name'] . '</a><br/><small>' . $small_Text . ' ' . $small_Time . '</small>';
                return new HtmlString($action);
            })
            ->addColumn('price', function ($row) {
                $status = '<a class="price ">' . $row['price'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('description', function ($row) {
                $status = '<a class="description ">' . $row['description'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('qty', function ($row) {
                $status = '<a class="qty ">' . $row['qty'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('enabled_text', function ($row) {
                $status = '<a class="enabled_text ">' . $row['enabled_text'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('btns', function ($row) {
                $edit_Btn = $delete_Btn = '';
                if (\Auth::user()->can('ویرایش محصول')) {
                    $edit_Btn = '<button class="btn btn-info btn-xs" type="button" data-select="edit" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.edit') . '"><i class="fa fa-pencil"></i></button>';
                }
                if (\Auth::user()->can('حذف محصول')) {
                    $delete_Btn = '<button class="btn btn-danger btn-xs " type="button" data-select="remove" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.delete') . '"><i class="fa fa-trash-o"></i></button>';
                }

                return new HtmlString($edit_Btn . $delete_Btn);
            })
            ->rawColumns(['btns'])
            ->removeColumn(['created_at', 'updated_at', 'deleted_at'])
            ->make(true);
        return $datatables;
    }
}
