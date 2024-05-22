<?php

namespace App\Http\Controllers\User;

use App\Events\User\UserAddOrEditEvent;
use App\Events\User\UserDeleteEvent;
use App\Http\Controllers\Traits\Date\DateTools;
use App\Http\Controllers\Traits\WF\WFTools;
use App\Models\Auth\User\User;
use App\Models\Auth\User\User as User_System;
use App\Models\ProjectRole;
use App\Models\Role;
use App\Models\Role as Role_System;
use App\Models\Unit;
use App\Models\WF;
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


class UserController extends Controller
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
        $this->middleware('admin', ['only' => ['getUsersTable', 'set_Or_Edit_User', 'delete_User']]);
        $this->data_All = Binput::all();
        if (isset($this->data_All['Data'])) {
            //$this->data = Binput::get('Data');
            //$this->data = json_decode(Binput::get('Data'),true);
            $this->data = json_decode($request->input('Data'), true);

        }
        $this->request = $request;
    }

    public function set_Or_Edit_User()
    {

//        $rules = [
//            'status' => 'required|in:add,edit',
//            'first_name' => 'required|string|min:3|max:40',
//            'last_name' => 'required|string|min:3|max:60',
//            'gender' => 'required|in:Mr,Ms',
//            'ssn' => 'nullable|string|min:3|max:40|unique:users',
//            'email' => 'nullable|email|max:255|unique:users',
//            'date_of_birth' => 'nullable|date_format:Y-m-d|before:now',
//        ];
//        $rules = [
//            'status' => 'required|in:add,edit',
//            'first_name' => 'required|string|min:3|max:40',
//            'last_name' => 'required|string|min:3|max:60',
//            'gender' => 'required|in:Mr,Ms',
//            'ssn' => 'nullable|string|min:3|max:40|unique:users',
//            'email' => 'nullable|email|max:255|unique:users',
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
//            $rules['ssn'] = "string|min:3|max:40|unique:users,ssn,{$this->data['id']}";
//            $rules['email'] = "nullable|email|max:255|unique:users,email,{$this->data['id']}";
//        }
//        Validator::make($this->data, $rules)->validate();

        // Add or edit user
        $message = event(new UserAddOrEditEvent($this->data));

        return $message[0];
    }

    public function delete_User()
    {
        // Delete user
        $message = event(new UserDeleteEvent($this->data));

        return $message[0];

    }

    protected function details(Request $request)
    {
        if (\Auth::check()) {
            return response()->json($request->user(), 200);
        } else
            return response()->json("unauthorized", 401);
    }

    protected function getLocaleAndTimezoneUser(Request $request)
    {
        if (\Auth::check()) {
            return response()->json(array('locale' => $request->user()->locale, 'timezone' => $request->user()->timezone, 'country_code_locale' => $request->user()->country_code_locale, 'country_code_timezone' => $request->user()->country_code_timezone), 200);
        } else
            return response()->json("unauthorized", 401);
    }

    protected function setUserActiveRole(Request $request)
    {

        $role = !is_array($this->data['active_role']) ? [$this->data['active_role']] : $this->data['active_role'];
        $role = Role_System::whereIn('name', $role)->get();

        if (\Auth::user()->hasRole($this->data['active_role'])) {
            \Auth::user()->update(['active_role' => $role->first()->id]);
            return response()->json([
                'message' => __('Dashboard.wf_purchase.default_role_changed_successfully')
            ]);
        } else
            return response()->json([
                'error' => __('Dashboard.wf_purchase.default_role_changed_successfully')
            ]);


    }

    protected function setUserSettings(Request $request)
    {

        $user_Settings = \Auth::user()->settings;

        foreach ($this->data['settings'] as $item => $value) {
            $user_Settings[$item] = $value;
        }

        try {
            \Auth::user()->update(['settings' => $user_Settings]);
            return response()->json([
                'status' => 'success',
                'message' => __('validation.succeed.changes_were_made')
            ]);
        }catch (\Exception $e){
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ])->original;
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

        $count = User::where(function ($query) use ($search) {
            $query->where('first_name', 'LIKE', '%' . $search . '%')
            ->orWhere('last_name', 'LIKE', '%' . $search . '%');
        })->count();

        $unit = User::where(function ($query) use ($search) {
            $query->where('first_name', 'LIKE', '%' . $search . '%')
                ->orWhere('last_name', 'LIKE', '%' . $search . '%');
        })
            ->paginate($perPage = 10, $columns = ['*'], $pageName = 'page', $page)
            ->map(function ($value, $key) {
                return $value->only(['id', 'first_name','last_name','created_at', 'updated_at']);
            });

        return response()->json(array(
            'result' => $unit->values()->all(),
            'total' => $count,
        ), 200);

    }

    public function getUsersTable()
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
        $user = User::where(function ($query) use ($search) {
            $query->when(!empty($search), function ($query) use ($search) {
                return $query->where('first_name', 'LIKE', '%' . $search . '%')
                    ->orWhere('last_name', 'LIKE', '%' . $search . '%')
                    ->orWhere('ssn', 'LIKE', '%' . $search . '%')
                    ->orWhere('date_of_birth', 'LIKE', '%' . $search . '%')
                    ->orWhere('email', 'LIKE', '%' . $search . '%')
                    ->orWhereRelation('phones', function ($query) use ($search) {
                        $query->where('number', 'LIKE', '%' . $search . '%');
                    })
                    ->orWhereRelation('addresses', function ($query) use ($search) {
                        $query->where('display_name', 'LIKE', '%' . $search . '%');
                    })
                    ->orWhereRelation('roles', function ($query) use ($search) {
                        $query->whereIn('name', Role::all()->filter(function ($item) use ($search) {
                            return false !== stristr($item->name_text, $search);
                        })->pluck('name'));
                    })
                    ->orWhereRelation('permissions', function ($query) use ($search) {
                        $query->where('name', 'LIKE', '%' . $search . '%');
                    });
            });
        })
            ->orderByDesc('id')
            ->skip($this->data_All['start'])
            ->take($this->data_All['length'])
            ->get()->values()->all();

        // Total record
        $totalData = User::where(function ($query) use ($search) {
            $query->when(!empty($search), function ($query) use ($search) {
                return $query->where('first_name', 'LIKE', '%' . $search . '%')
                    ->orWhere('last_name', 'LIKE', '%' . $search . '%')
                    ->orWhere('ssn', 'LIKE', '%' . $search . '%')
                    ->orWhere('date_of_birth', 'LIKE', '%' . $search . '%')
                    ->orWhere('email', 'LIKE', '%' . $search . '%')
                    ->orWhereRelation('phones', function ($query) use ($search) {
                        $query->where('number', 'LIKE', '%' . $search . '%');
                    })
                    ->orWhereRelation('addresses', function ($query) use ($search) {
                        $query->where('display_name', 'LIKE', '%' . $search . '%');
                    })
                    ->orWhereRelation('roles', function ($query) use ($search) {
                        $query->whereIn('name', Role::all()->filter(function ($item) use ($search) {
                            return false !== stristr($item->name_text, $search);
                        })->pluck('name'));
                    })
                    ->orWhereRelation('permissions', function ($query) use ($search) {
                        $query->where('name', 'LIKE', '%' . $search . '%');
                    });
            });
        })->count();


        // No filter at first so we can assign like this
        $totalFiltered = $totalData;

        $datatables = Datatables::of($user)
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
                $action = '<a class="id">' . $row['first_name'] . '&nbsp;&nbsp;' . $row['last_name'] . '</a><br/><small>' . $small_Text . ' ' . $small_Time . '</small>';
                return new HtmlString($action);
            })
            ->addColumn('img_profile', function ($row) {
                $status = '<img class="img-responsive center-block" src="' . $row['img_profile'] . '">';
                //$status = '<div class=" img_profile"></div>';
                return new HtmlString($status);
            })
            ->addColumn('active', function ($row) {
                $icon = $row['active'] ? 'fa fa-check green user_active' : 'fa fa-remove red user_active';
                $status = '<i class="' . $icon . '"></i>';
                return new HtmlString($status);
            })
            ->addColumn('img_sign', function ($row) {
                $status = '<img class="img-responsive center-block" src="' . $row['img_sign'] . '">';
                //$status = '<div class="img_sign"></div>';
                return new HtmlString($status);
            })
            ->addColumn('gender', function ($row) {
                switch ($row['gender']) {
                    case 'Mr':
                        $gender = __('Dashboard.public.form.gender_Male');
                        break;
                    case 'Ms':
                        $gender = __('Dashboard.public.form.gender_Female');
                        break;
                };
                $status = '<a class="gender">' . $gender . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('ssn', function ($row) {
                $status = '<a class="ssn ">' . $row['ssn'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('date_of_birth', function ($row) {
                $status = '<a class="date_of_birth ">' . $row['date_of_birth'] . '</a>';
                return new HtmlString($status);
            })
            ->addColumn('email', function ($row) {
                $status = '<a class="email ">' . $row['email'] . '</a>';
                return new HtmlString($status);
            })
            ->editColumn('phones', function ($row) {
                $tbody = '';
                $row['phones']->each(function ($value, $key) use (&$tbody, $row) {
                    $tbody .= '<tr><td>' . $key + 1 . '</td><td style="direction: ltr">' . $value['number'] . '</td></tr>';
                });
                $small_Text = '<table style="margin-bottom: 10px" class="table table-bordered table-condensed jambo_table  print-padding-tr-td-5" width="100%"><thead><tr><th style="width:1%">#</th><th>' . __('Dashboard.public.form.phone') . '</th></tr></thead><tbody>' . $tbody . '</tbody></table>';
                return new HtmlString($small_Text);
            })
            ->editColumn('addresses', function ($row) {
                $tbody = '';
                $row['addresses']->each(function ($value, $key) use (&$tbody, $row) {
                    $tbody .= '<tr><td>' . $key + 1 . '</td><td>' . $value['display_name'] . '</td><td>' . $value['postal_code'] . '</td></tr>';
                });
                $small_Text = '<table style="margin-bottom: 10px" class="table table-bordered table-condensed jambo_table  print-padding-tr-td-5" width="100%"><thead><tr><th style="width:1%">#</th><th>' . __('Dashboard.public.form.address') . '</th><th>' . __('Dashboard.public.form.postal_Code') . '</th></tr></thead><tbody>' . $tbody . '</tbody></table>';
                return new HtmlString($small_Text);
            })
            ->editColumn('roles', function ($row) {
                $tbody = '';
                $row['roles']->each(function ($value, $key) use (&$tbody, $row) {
                    $tbody .= '<tr><td>' . $key + 1 . '</td><td>' . $value['name_text'] . '</td></tr>';
                });
                $small_Text = '<table style="margin-bottom: 10px" class="table table-bordered table-condensed jambo_table  print-padding-tr-td-5" width="100%"><thead><tr><th style="width:1%">#</th><th>' . __('Dashboard.public.form.roles') . '</th></tr></thead><tbody>' . $tbody . '</tbody></table>';
                return new HtmlString($small_Text);
            })
            ->editColumn('permissions', function ($row) {
                $tbody = '';
                $row['permissions']->each(function ($value, $key) use (&$tbody, $row) {
                    $tbody .= '<tr><td>' . $key + 1 . '</td><td>' . $value['name'] . '</td></tr>';
                });
                $small_Text = '<table style="margin-bottom: 10px" class="table table-bordered table-condensed jambo_table  print-padding-tr-td-5" width="100%"><thead><tr><th style="width:1%">#</th><th>' . __('Dashboard.public.form.permissions') . '</th></tr></thead><tbody>' . $tbody . '</tbody></table>';
                return new HtmlString($small_Text);
            })
            ->addColumn('btns', function ($row) {
                $actionBtn = '<button class="btn btn-info btn-xs" type="button" data-select="edit" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.edit') . '"><i class="fa fa-pencil"></i></button><button class="btn btn-danger btn-xs " type="button" data-select="remove" data-toggle_tooltip="tooltip" title="' . __('Dashboard.public.form.delete') . '"><i class="fa fa-trash-o"></i></button>';
                return new HtmlString($actionBtn);
            })
            ->rawColumns(['btns'])
            ->removeColumn(['created_at', 'updated_at', 'deleted_at'])
            ->make(true);
        return $datatables;
    }

    public function UsersWithImgName(){

        return response()->json([
            'users' => User::onlyImgName()->where('active',1)->orderBy('first_name')->orderBy('last_name')->get(),
        ], 200);
    }
}
