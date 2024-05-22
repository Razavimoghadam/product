<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Traits\Date\DateTools;
use App\Models\Coding;
use App\Models\Project;
use App\Models\ProjectRole;
use App\Models\Role;
use App\Models\Unit;
use GrahamCampbell\Binput\Facades\Binput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\HtmlString;
use Yajra\DataTables\Facades\DataTables;

class RoleController extends Controller
{
    use DateTools;

    protected $request;

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
            $this->data = Binput::get('Data');
        }
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

        $count = Role::where(function ($query) use ($search) {
            $query->whereIn('name', Role::all()->filter(function ($item) use ($search) {
                return false !== stristr($item->name_text, $search);
            })->pluck('name'));
        })->count();

        $unit = Role::where(function ($query) use ($search) {
            $query->whereIn('name', Role::all()->filter(function ($item) use ($search) {
                return false !== stristr($item->name_text, $search);
            })->pluck('name'));
        })
            ->paginate($perPage = 10, $columns = ['*'], $pageName = 'page', $page)
            ->map(function ($value, $key) {
                return $value->only(['id', 'name','name_text', 'created_at', 'updated_at']);
            });

        return response()->json(array(
            'result' => $unit->values()->all(),
            'total' => $count,
        ), 200);

    }

    public function getRolesTable()
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

        $result = '';
        $totalData = '';

        $result = Role::where(function ($query) use ($search) {
            $query->whereIn('name', Role::all()->filter(function ($item) use ($search) {
                return false !== stristr($item->name_text, $search);
            })->pluck('name'));
        })
            ->skip($this->data_All['start'])
            ->take($this->data_All['length'])
            ->get();

        //Total record
        $totalData = Role::where(function ($query) use ($search) {
            $query->whereIn('name', Role::all()->filter(function ($item) use ($search) {
                return false !== stristr($item->name_text, $search);
            })->pluck('name'));
        })
            ->count();


        // No filter at first so we can assign like this
        $totalFiltered = $totalData;

        $datatables = Datatables::of($result)
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
            ->editColumn('name_text', function ($row) {
                $small_Text = __('Dashboard.public.form.created_Time');
                $small_Time = $this->getDateByTimezone($row['created_at']);

                if (!empty($row['updated_at'])) {
                    if ($row['updated_at'] != $row['created_at']) {
                        $small_Text = __('Dashboard.public.form.edit_Time');
                        $small_Time = $this->getDateByTimezone($row['updated_at']);
                    }
                }
                $action = '<a class="name_text">' . $row['name_text'] . '</a><br/><small>' . $small_Text . ' ' . $small_Time . '</small>';
                return new HtmlString($action);
            })
            ->addColumn('btn', function ($row) {
                $actionBtn = '<button data-toggle="modal"
                           data-target="#modal_Component_System_Settings_Add_Roles" class="btn btn-info btn-xs" type="button" data-select="edit" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.edit') . '"><i class="fa fa-pencil"></i></button>
<button class="btn btn-danger btn-xs" type="button" data-select="remove" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.delete') . '"><i class="fa fa-trash-o"></i></button>';
                return new HtmlString($actionBtn);
            })
            ->rawColumns(['btn'])
            ->removeColumn(['id', 'created_at', 'updated_at', 'deleted_at'])
            ->make(true);

        return $datatables;


        /*WF::where(function ($query) {
        $query
            ->whereRelation('wfable',function ($query)  {
                $query->where('name_of_the_requesting', 'LIKE', '%' . 'ssسالن' . '%');
            })
            ->orWhereHasMorph('wfable', ['App\Models\PurchaseRequest'], function ($query)  {
                $query->whereRelation('productItems',function ($query)  {
                    $query->where('catalogue', 'LIKE', '%' . '232' . '%');
                });
            });
    })->get()*/
    }

    public function rolesWithUserImgName(){

        return response()->json([
            'roles' => ProjectRole::UserImgName()->get()->merge(Role::UserImgName()->whereNotIn('id', Role::whereIn('name', ['project_manager', 'applicant_workshop_supervisor'])->get()->pluck('id'))->get()),
        ], 200);
    }

    /*protected function addOrEditRoles(Request $request)
    {

        try {
            Role::updateOrCreate(['id' => $this->data['id'] ?? null], ['name' => $this->data['name']]);
            return response()->json([
                'message' => __('Dashboard.wf_purchase.changes_were_made')
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('validation.validator.the_entered_data_is_duplicate')
            ]);
        }


    }

    protected function removeRole(Request $request)
    {

        try {
            Role::where('id', $this->data['id'])->forceDelete();
            return response()->json([
                'message' => __('Dashboard.wf_purchase.changes_were_made')
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => __('Dashboard.wf_purchase.it_is_not_possible_to_delete')
            ]);
        }
    }*/
}
