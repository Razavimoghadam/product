<?php

namespace App\Http\Controllers\Posts;

use GrahamCampbell\Binput\Facades\Binput;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Controllers\Traits\RunsAnotherController;

class PostsController extends Controller
{
    use RunsAnotherController;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    protected $request;
    protected $path;
    protected $sync;
    protected $subsync;


    /**
     * PostsController constructor.
     */
    public function __construct()
    {
        $this->middleware(['auth']);
        $this->request = Binput::all();
        $this->sync = Binput::get('Sync');
        $this->subsync = Binput::get('SubSync');
        $this->path = 'App\Http\Controllers';
    }

    public function findAction(Request $request)
    {
        switch ($this->sync) {

            case 'DashboardController':
                $controller = app()->make($this->path . '\Dashboard\DashboardController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_Showroom':
                        return $this->runController($controller, 'set_Or_Edit_Showroom');
                        break;
                    case 'get_ShowRooms':
                        return $this->runController($controller, 'get_ShowRooms');
                        break;
                    case 'check_Show_Room_Exist':
                        return $this->runController($controller, 'check_Show_Room_Exist');
                        break;
                    case 'receive_number':
                        return $this->runController($controller, 'receive_number');
                        break;
                    case 'delete_Showroom':
                        return $this->runController($controller, 'delete_Showroom');
                        break;
                }
                break;
            case 'UserController':
                $controller = app()->make($this->path . '\User\UserController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_User':
                        return $this->runController($controller, 'set_Or_Edit_User');
                        break;
                    case 'delete_User':
                        return $this->runController($controller, 'delete_User');
                        break;
                    case 'details':
                        return $this->runController($controller, 'details');
                        break;
                    case 'getLocaleAndTimezoneUser':
                        return $this->runController($controller, 'getLocaleAndTimezoneUser');
                        break;
                    case 'setUserActiveRole':
                        return $this->runController($controller, 'setUserActiveRole');
                        break;
                    case 'setUserSettings':
                        return $this->runController($controller, 'setUserSettings');
                        break;
                    case 'getUsersTable':
                        return $this->runController($controller, 'getUsersTable');
                        break;
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'UsersWithImgName':
                        return $this->runController($controller, 'UsersWithImgName');
                        break;
                }
                break;
            case 'SupplierController':
                $controller = app()->make($this->path . '\Supplier\SupplierController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_Supplier':
                        return $this->runController($controller, 'set_Or_Edit_Supplier');
                        break;
                    case 'set_Or_Edit_SupplierPriceLists':
                        return $this->runController($controller, 'set_Or_Edit_SupplierPriceLists');
                        break;
                    case 'delete_Supplier':
                        return $this->runController($controller, 'delete_Supplier');
                        break;
                    case 'delete_SupplierPriceLists':
                        return $this->runController($controller, 'delete_SupplierPriceLists');
                        break;
                    case 'getSuppliersTable':
                        return $this->runController($controller, 'getSuppliersTable');
                        break;
                    case 'getSupplierPriceListsTable':
                        return $this->runController($controller, 'getSupplierPriceListsTable');
                        break;
                    case 'getSupplier':
                        return $this->runController($controller, 'getSupplier');
                        break;
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'SuppliersWithImgName':
                        return $this->runController($controller, 'SuppliersWithImgName');
                        break;
                }
                break;
            case 'SystemSettingController':
                $controller = app()->make($this->path . '\Settings\SystemSettingController');
                switch ($this->subsync) {
                    case 'set_Locale_Timezone':
                        return $this->runController($controller, 'set_Locale_Timezone');
                        break;
                }
                break;
            case 'WFPurchaseRequestController':
                $controller = app()->make($this->path . '\WF\WFPurchaseRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_Product':
                        return $this->runController($controller, 'set_Or_Edit_Product');
                        break;
                    case 'add_ProductItemFile':
                        return $this->runController($controller, 'add_ProductItemFile');
                        break;
                    case 'delete_ProductItemFile':
                        return $this->runController($controller, 'delete_ProductItemFile');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'WFPayRequestController':
                $controller = app()->make($this->path . '\WF\WFPayRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_Pay':
                        return $this->runController($controller, 'set_Or_Edit_Pay');
                        break;
                    case 'add_ProductItemFile':
                        return $this->runController($controller, 'add_PayItemFile');
                        break;
                    case 'delete_ProductItemFile':
                        return $this->runController($controller, 'delete_PayItemFile');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'WFContractorRequestController':
                $controller = app()->make($this->path . '\WF\WFContractorRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_Contractor':
                        return $this->runController($controller, 'set_Or_Edit_Contractor');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                    case 'getContractorRequestActivated':
                        return $this->runController($controller, 'getContractorRequestActivated');
                        break;
                    case 'getContractorRequestActivatedByNoChoice':
                        return $this->runController($controller, 'getContractorRequestActivatedByNoChoice');
                        break;
                    case 'getContractorRequestActivatedDetails':
                        return $this->runController($controller, 'getContractorRequestActivatedDetails');
                        break;
                    case 'getContractor':
                        return $this->runController($controller, 'getContractor');
                        break;
                }
                break;
            case 'WFContractorAddendumRequestController':
                $controller = app()->make($this->path . '\WF\WFContractorAddendumRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_ContractorAddendum':
                        return $this->runController($controller, 'set_Or_Edit_ContractorAddendum');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'WFPayContractorRequestController':
                $controller = app()->make($this->path . '\WF\WFPayContractorRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_PayContractor':
                        return $this->runController($controller, 'set_Or_Edit_PayContractor');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'WFPayGoodPerformanceContractorRequestController':
                $controller = app()->make($this->path . '\WF\WFPayGoodPerformanceContractorRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_PayGoodPerformanceContractor':
                        return $this->runController($controller, 'set_Or_Edit_PayGoodPerformanceContractor');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'WFOverchargeRequestController':
                $controller = app()->make($this->path . '\WF\WFOverchargeRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_OverchargeRequest':
                        return $this->runController($controller, 'set_Or_Edit_OverchargeRequest');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'WFMonthlyFeePaymentRequestController':
                $controller = app()->make($this->path . '\WF\WFMonthlyFeePaymentRequestController');
                switch ($this->subsync) {
                    case 'set_Or_Edit_MonthlyFeePayment':
                        return $this->runController($controller, 'set_Or_Edit_MonthlyFeePayment');
                        break;
                    case 'getHistories':
                        return $this->runController($controller, 'getHistories');
                        break;
                }
                break;
            case 'ReportController':
                $controller = app()->make($this->path . '\Reports\ReportController');
                switch ($this->subsync) {
                    case 'getActiveWFs':
                        return $this->runController($controller, 'getActiveWFs');
                        break;
                    case 'getReferenceWFs':
                        return $this->runController($controller, 'getReferenceWFs');
                        break;
                    case 'getWf':
                        return $this->runController($controller, 'getWf');
                        break;
                }
                break;
            case 'AnalysisController':
                $controller = app()->make($this->path . '\Reports\AnalysisController');
                switch ($this->subsync) {
                    case 'analysis_General_WF_Projects':
                        return $this->runController($controller, 'analysis_General_WF_Projects');
                        break;
                    case 'analysis_Detailed_WF_Projects':
                        return $this->runController($controller, 'analysis_Detailed_WF_Projects');
                        break;
                    case 'analysis_DetailedByRole_WF_Projects':
                        return $this->runController($controller, 'analysis_DetailedByRole_WF_Projects');
                        break;
                    case 'analysis_DetailedByUser_WF_Projects':
                        return $this->runController($controller, 'analysis_DetailedByUser_WF_Projects');
                        break;
                    case 'printAnalysis_DetailedByUser_WF_Projects':
                        return $this->runController($controller, 'printAnalysis_DetailedByUser_WF_Projects');
                        break;
                }
                break;
            case 'CodingController':
                $controller = app()->make($this->path . '\Coding\CodingController');
                switch ($this->subsync) {
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'getCodingsTable':
                        return $this->runController($controller, 'getCodingsTable');
                        break;
                    case 'addOrEditCodings':
                        return $this->runController($controller, 'addOrEditCodings');
                        break;
                    case 'removeCoding':
                        return $this->runController($controller, 'removeCoding');
                        break;
                }
                break;
            case 'ProjectController':
                $controller = app()->make($this->path . '\Project\ProjectController');
                switch ($this->subsync) {
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'getTotal':
                        return $this->runController($controller, 'getTotal');
                        break;
                    case 'getProjectsTable':
                        return $this->runController($controller, 'getProjectsTable');
                        break;
                    case 'getProjectRolesTable':
                        return $this->runController($controller, 'getProjectRolesTable');
                        break;
                    case 'addOrEditProjects':
                        return $this->runController($controller, 'addOrEditProjects');
                        break;
                    case 'addOrEditProjectRoles':
                        return $this->runController($controller, 'addOrEditProjectRoles');
                        break;
                    case 'removeProject':
                        return $this->runController($controller, 'removeProject');
                        break;
                    case 'removeProjectRole':
                        return $this->runController($controller, 'removeProjectRole');
                        break;
                }
                break;
            case 'RequestController':
                $controller = app()->make($this->path . '\Request\RequestController');
                switch ($this->subsync) {
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'getTotal':
                        return $this->runController($controller, 'getTotal');
                        break;
                    case 'getRequestsTable':
                        return $this->runController($controller, 'getRequestsTable');
                        break;
                    case 'addOrEditRequests':
                        return $this->runController($controller, 'addOrEditRequests');
                        break;
                }
                break;
            case 'UnitController':
                $controller = app()->make($this->path . '\Unit\UnitController');
                switch ($this->subsync) {
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'getUnitsTable':
                        return $this->runController($controller, 'getUnitsTable');
                        break;
                    case 'addOrEditUnits':
                        return $this->runController($controller, 'addOrEditUnits');
                        break;
                    case 'removeUnit':
                        return $this->runController($controller, 'removeUnit');
                        break;
                }
                break;
            case 'PermissionController':
                $controller = app()->make($this->path . '\Permission\PermissionController');
                switch ($this->subsync) {
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'getPermissionsTable':
                        return $this->runController($controller, 'getPermissionsTable');
                        break;
                }
                break;
            case 'RoleController':
                $controller = app()->make($this->path . '\Role\RoleController');
                switch ($this->subsync) {
                    case 'getAll':
                        return $this->runController($controller, 'getAll');
                        break;
                    case 'getRolesTable':
                        return $this->runController($controller, 'getRolesTable');
                        break;
                    case 'rolesWithUserImgName':
                        return $this->runController($controller, 'rolesWithUserImgName');
                        break;
                }
                break;
            case 'MarkController':
                $controller = app()->make($this->path . '\Mark\MarkController');
                switch ($this->subsync) {
                    case 'mark_UnMark':
                        return $this->runController($controller, 'mark_UnMark');
                        break;
                }
                break;
            default:
                return response()->json(__('no action found'), 404);
        }

    }
}
