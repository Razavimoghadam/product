<?php

namespace App\Http\Controllers\CardItem;

use App\Events\CardItem\CardItemAddEvent;
use App\Events\CardItem\CardItemDeleteEvent;
use App\Events\CardItem\CardItemMinusEvent;
use App\Http\Controllers\Traits\Date\DateTools;
use App\Http\Controllers\Traits\WF\WFTools;
use App\Models\Role;
use App\Models\Role as Role_System;
use App\Models\CardItem;
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


class CardItemController extends Controller
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
        $this->data_All = Binput::all();
        if (isset($this->data_All['Data'])) {
            //$this->data = Binput::get('Data');
            //$this->data = json_decode(Binput::get('Data'),true);
            $this->data = json_decode($request->input('Data'), true);
        }
        $this->request = $request;
    }

    public function add_CardItem()
    {

//        $rules = [
//            'status' => 'required|in:add,edit',
//            'first_name' => 'required|string|min:3|max:40',
//            'last_name' => 'required|string|min:3|max:60',
//            'gender' => 'required|in:Mr,Ms',
//            'ssn' => 'nullable|string|min:3|max:40|unique:cardItems',
//            'email' => 'nullable|email|max:255|unique:cardItems',
//            'date_of_birth' => 'nullable|date_format:Y-m-d|before:now',
//        ];
//        $rules = [
//            'status' => 'required|in:add,edit',
//            'first_name' => 'required|string|min:3|max:40',
//            'last_name' => 'required|string|min:3|max:60',
//            'gender' => 'required|in:Mr,Ms',
//            'ssn' => 'nullable|string|min:3|max:40|unique:cardItems',
//            'email' => 'nullable|email|max:255|unique:cardItems',
//            'date_of_birth' => 'nullable|date_format:Y-m-d|before:now',
//            //'roles' => [new RuleExceptAdmin()],
//            /*
//             |--------------------------------------------------------------------------
//             | phones
//             |--------------------------------------------------------------------------
//             |
//             */
//            'phone.mobile' => 'array|required|min:1',
//            'phone.fixedLine' => 'nullable|array',
//            'phone.mobile.*.number' => 'phone:AUTO,mobile',
//            'phone.fixedLine.*.number' => 'phone:AUTO,fixed_line',
//            'phone.mobile.*.type' => 'in:MOBILE,FIXED_LINE',
//            'phone.fixedLine.*.type' => 'in:MOBILE,FIXED_LINE',
//            'phone.mobile.*.id' => 'integer|distinct',
//            'phone.fixedLine.*.id' => 'integer|distinct',
//            'phone.mobile.*.inputmask' => 'array',
//            'phone.mobile.*.inputmask.mask' => 'string',
//            'phone.fixedLine.*.inputmask' => 'array',
//            'phone.fixedLine.*.inputmask.mask' => 'string',
//            'phone.mobile.*.countrydata' => 'array',
//            'phone.fixedLine.*.countrydata' => 'array',
//            'phone.mobile.*.countrydata.name' => 'string',
//            'phone.fixedLine.*.countrydata.name' => 'string',
//            //'phone.mobile.*.countrydata.iso2' => [new CountryCode()],
//            //'phone.fixedLine.*.countrydata.iso2' => [new CountryCode()],
//            'phone.mobile.*.countrydata.dialCode' => 'integer',
//            'phone.fixedLine.*.countrydata.dialCode' => 'integer',
//            'phone.mobile.*.countrydata.priority' => 'integer',
//            'phone.fixedLine.*.countrydata.priority' => 'integer',
//            'phone.mobile.*.countrydata.areaCode' => 'nullable|string',
//            'phone.fixedLine.*.countrydata.areaCode' => 'nullable|string',
//            /*
//             |--------------------------------------------------------------------------
//             | addresses
//             |--------------------------------------------------------------------------
//             |
//             */
//            'address' => 'array|nullable|min:1',
//            'address.*.id' => 'integer|distinct',
//            'address.*.address' => 'array',
//            //'address.*.address.country_code' => [new CountryCode()],
//            'address.*.postalCode' => 'string',
//            'address.*.display_name' => 'string',
//            'address.*.type' => 'string',
//            //'address.*.lat' . ',' . 'address.*.lon' => ['bail', 'required', new LocationCoordinates()],
//            'address.*.countrydata' => 'array',
//            'address.*.countrydata.name' => 'string',
//            //'address.*.countrydata.iso2' => [new CountryCode()],
//            'address.*.countrydata.dialCode' => 'integer',
//            'address.*.countrydata.priority' => 'integer',
//            'address.*.countrydata.areaCode' => 'nullable|string',
//            'address.*.inputmask' => 'array',
//            'address.*.inputmask.regex' => 'string',
//        ];
//        if ($this->data['status'] == 'edit') {
//            $rules['id'] = 'required|integer|distinct';
//            $rules['ssn'] = "string|min:3|max:40|unique:cardItems,ssn,{$this->data['id']}";
//            $rules['email'] = "nullable|email|max:255|unique:cardItems,email,{$this->data['id']}";
//        }
//        Validator::make($this->data, $rules)->validate();

        // Add or edit cardItem
        $message = event(new CardItemAddEvent($this->data));

        return $message[0];
    }
    public function minus_CardItem()
    {

//        $rules = [
//            'status' => 'required|in:add,edit',
//            'first_name' => 'required|string|min:3|max:40',
//            'last_name' => 'required|string|min:3|max:60',
//            'gender' => 'required|in:Mr,Ms',
//            'ssn' => 'nullable|string|min:3|max:40|unique:cardItems',
//            'email' => 'nullable|email|max:255|unique:cardItems',
//            'date_of_birth' => 'nullable|date_format:Y-m-d|before:now',
//        ];
//        $rules = [
//            'status' => 'required|in:add,edit',
//            'first_name' => 'required|string|min:3|max:40',
//            'last_name' => 'required|string|min:3|max:60',
//            'gender' => 'required|in:Mr,Ms',
//            'ssn' => 'nullable|string|min:3|max:40|unique:cardItems',
//            'email' => 'nullable|email|max:255|unique:cardItems',
//            'date_of_birth' => 'nullable|date_format:Y-m-d|before:now',
//            //'roles' => [new RuleExceptAdmin()],
//            /*
//             |--------------------------------------------------------------------------
//             | phones
//             |--------------------------------------------------------------------------
//             |
//             */
//            'phone.mobile' => 'array|required|min:1',
//            'phone.fixedLine' => 'nullable|array',
//            'phone.mobile.*.number' => 'phone:AUTO,mobile',
//            'phone.fixedLine.*.number' => 'phone:AUTO,fixed_line',
//            'phone.mobile.*.type' => 'in:MOBILE,FIXED_LINE',
//            'phone.fixedLine.*.type' => 'in:MOBILE,FIXED_LINE',
//            'phone.mobile.*.id' => 'integer|distinct',
//            'phone.fixedLine.*.id' => 'integer|distinct',
//            'phone.mobile.*.inputmask' => 'array',
//            'phone.mobile.*.inputmask.mask' => 'string',
//            'phone.fixedLine.*.inputmask' => 'array',
//            'phone.fixedLine.*.inputmask.mask' => 'string',
//            'phone.mobile.*.countrydata' => 'array',
//            'phone.fixedLine.*.countrydata' => 'array',
//            'phone.mobile.*.countrydata.name' => 'string',
//            'phone.fixedLine.*.countrydata.name' => 'string',
//            //'phone.mobile.*.countrydata.iso2' => [new CountryCode()],
//            //'phone.fixedLine.*.countrydata.iso2' => [new CountryCode()],
//            'phone.mobile.*.countrydata.dialCode' => 'integer',
//            'phone.fixedLine.*.countrydata.dialCode' => 'integer',
//            'phone.mobile.*.countrydata.priority' => 'integer',
//            'phone.fixedLine.*.countrydata.priority' => 'integer',
//            'phone.mobile.*.countrydata.areaCode' => 'nullable|string',
//            'phone.fixedLine.*.countrydata.areaCode' => 'nullable|string',
//            /*
//             |--------------------------------------------------------------------------
//             | addresses
//             |--------------------------------------------------------------------------
//             |
//             */
//            'address' => 'array|nullable|min:1',
//            'address.*.id' => 'integer|distinct',
//            'address.*.address' => 'array',
//            //'address.*.address.country_code' => [new CountryCode()],
//            'address.*.postalCode' => 'string',
//            'address.*.display_name' => 'string',
//            'address.*.type' => 'string',
//            //'address.*.lat' . ',' . 'address.*.lon' => ['bail', 'required', new LocationCoordinates()],
//            'address.*.countrydata' => 'array',
//            'address.*.countrydata.name' => 'string',
//            //'address.*.countrydata.iso2' => [new CountryCode()],
//            'address.*.countrydata.dialCode' => 'integer',
//            'address.*.countrydata.priority' => 'integer',
//            'address.*.countrydata.areaCode' => 'nullable|string',
//            'address.*.inputmask' => 'array',
//            'address.*.inputmask.regex' => 'string',
//        ];
//        if ($this->data['status'] == 'edit') {
//            $rules['id'] = 'required|integer|distinct';
//            $rules['ssn'] = "string|min:3|max:40|unique:cardItems,ssn,{$this->data['id']}";
//            $rules['email'] = "nullable|email|max:255|unique:cardItems,email,{$this->data['id']}";
//        }
//        Validator::make($this->data, $rules)->validate();

        // Add or edit cardItem
        $message = event(new CardItemMinusEvent($this->data));

        return $message[0];
    }
    public function delete_CardItem()
    {
        // Delete cardItem
        $message = event(new CardItemDeleteEvent($this->data));

        return $message[0];

    }

    protected function getCardItem()
    {
        return CardItem::with(['user:id,first_name,last_name', 'product'])->find($this->data['id']);
    }

    protected function user_Number_Of_CardItems()
    {
        return response()->json([
            'status' => 'success',
            'message' => \Auth::user()->cardItems()->count()
        ],200);
    }

    public function getCardItemsTable()
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
        $cardItem = \Auth::user()->cardItems()->with(['user:id,first_name,last_name', 'product'])->where(function ($query) use ($search) {
            $query->when(!empty($search), function ($query) use ($search) {
                return $query->whereRelation('product', function ($query) use ($search) {
                    $query->where('name', 'LIKE', '%' . $search . '%');
                })
                    ->orWhereRelation('product', function ($query) use ($search) {
                        $query->where('description', 'LIKE', '%' . $search . '%');
                    });
            });
        })
            ->orderByDesc('id')
            ->skip($this->data_All['start'])
            ->take($this->data_All['length'])
            ->get()->values()->all();

        // Total record
        $totalData = CardItem::where(function ($query) use ($search) {
            $query->when(!empty($search), function ($query) use ($search) {
                return $query->whereRelation('product', function ($query) use ($search) {
                    $query->where('name', 'LIKE', '%' . $search . '%');
                })
                    ->orWhereRelation('product', function ($query) use ($search) {
                        $query->where('description', 'LIKE', '%' . $search . '%');
                    });
            });
        })->count();


        // No filter at first so we can assign like this
        $totalFiltered = $totalData;

        $datatables = Datatables::of($cardItem)
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

                $action = '<a class="id">' . $row['product']['name'] . '</a><br/><small>' . $small_Text . ' ' . $small_Time . '</small>';
                return new HtmlString($action);
            })
            ->addColumn('price', function ($row) {
                $status = '<a class="price ">' . $row['product']['price'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('qty', function ($row) {
                $status = '<a class="qty ">' . $row['qty'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('btns', function ($row) {
                $btns = '<button class="btn btn-success btn-xs " type="button" data-select="add" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.add') . '"><i class="fa fa-plus"></i></button> <button class="btn btn-warning btn-xs " type="button" data-select="minus" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.minus') . '"><i class="fa fa-minus"></i></button> <button class="btn btn-danger btn-xs " type="button" data-select="remove" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.delete') . '"><i class="fa fa-trash-o"></i></button>';


                return new HtmlString($btns);
            })
            ->rawColumns(['btns'])
            ->removeColumn(['created_at', 'updated_at', 'deleted_at'])
            ->make(true);
        return $datatables;
    }
}
