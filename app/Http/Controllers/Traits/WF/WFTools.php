<?php
/*
 * This file is part of M.R.M
 *
 * (c) Mohsen Razavimoghadam <mohsen.razavimoghadam@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Traits\WF;

use App\Models\WF;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Morilog\Jalali\Jalalian;
use Exception;

trait WFTools
{

    protected function lastCurrentActivityWF($wfable_type, $wfable_id)
    {
        try {
            $wf = WF::where('wfable_type', $wfable_type)->where('wfable_id', $wfable_id)->orderByDesc('id')->first();
            return $wf;
        } catch (Exception $e) {
            return false;
        }
    }

    protected function getPriorityDetails($priority_Name_Or_Number)
    {
        switch ($priority_Name_Or_Number) {
            case 'trivial':
            case '0':
                return [
                    'name' => __('system/public.priority_name.trivial'),
                    'src' => 'assets/image/priority/trivial.png',
                    'class' => '',
                ];
            case 'minor':
            case '1':
                return [
                    'name' => __('system/public.priority_name.minor'),
                    'src' => 'assets/image/priority/minor.png',
                    'class' => '',
                ];
            case 'lowest':
            case '2':
                return [
                    'name' => __('system/public.priority_name.lowest'),
                    'src' => 'assets/image/priority/lowest.png',
                    'class' => '',
                ];
            case 'low':
            case '3':
                return [
                    'name' => __('system/public.priority_name.low'),
                    'src' => 'assets/image/priority/low.png',
                    'class' => '',
                ];
            case 'medium':
            case '4':
                return [
                    'name' => __('system/public.priority_name.medium'),
//                    'src'=> 'assets/image/priority/medium.png'
                    'src' => 'assets/image/priority/medium.png',
                    'class' => '',
                ];
            case 'high':
            case '5':
                return [
                    'name' => __('system/public.priority_name.high'),
//                    'src'=> 'assets/image/priority/high.png'
                    'src' => 'assets/image/priority/high.png',
                    'class' => '',
                ];
            case 'highest':
            case '6':
                return [
                    'name' => __('system/public.priority_name.highest'),
                    'src' => 'assets/image/priority/highest.png',
                    'class' => '',
                ];
            case 'major':
            case '7':
                return [
                    'name' => __('system/public.priority_name.major'),
//                    'src'=> 'assets/image/priority/major.png'
                    'src' => 'assets/image/priority/highest.png',
                    'class' => 'w3-text-red',
                ];
            case 'critical':
            case '8':
                return [
                    'name' => __('system/public.priority_name.critical'),
                    'src' => 'assets/image/priority/critical.png',
                    'class' => '',
                ];
            case 'blocker':
            case '9':
                return [
                    'name' => __('system/public.priority_name.blocker'),
                    'src' => 'assets/image/priority/blocker.png',
                    'class' => '',
                ];
            default:
                return [
                    'name' => null,
//                    'src'=> 'assets/image/priority/medium.png'
                    'src' => null,
                    'class' => '',
                ];
        }
    }

    public function history_Key_Translate($model_Type, $key, $value_Old = null, $value_New = null)
    {
        switch ($model_Type) {
            case 'App\Models\PurchaseRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];

                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_designer_reference_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_support_invoicesAttached_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmRequest_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_deputyCEO_confirmRequirement_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_PMO_confirmRequirement_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_accountant_confirmPayRequest_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 8.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmAmount_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 9.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_support_invoicesAttached_2_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 10.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_invoicesAttached_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 11.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_support_confirmRequest_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 12.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_First_invoicesAttached_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 13.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_support_confirmRequest_2_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 14.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 15.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];

                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice1_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice2_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_designer_reference_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_support_invoicesAttached_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmRequest_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_deputyCEO_confirmRequirement_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_PMO_confirmRequirement_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_accountant_confirmPayRequest_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 8.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmAmount_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 9.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_support_invoicesAttached_2_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 10.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_invoicesAttached_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 11.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_support_confirmRequest_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 12.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_First_invoicesAttached_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 13.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_support_confirmRequest_2_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 14.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 15.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];

                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice1_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice2_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_designer_reference_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_support_invoicesAttached_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmRequest_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_deputyCEO_confirmRequirement_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_PMO_confirmRequirement_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_accountant_confirmPayRequest_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 8.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmAmount_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 9.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_support_invoicesAttached_2_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 10.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_invoicesAttached_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 11.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_support_confirmRequest_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 12.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_First_invoicesAttached_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 13.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_support_confirmRequest_2_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 14.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 15.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];

                    case 'step_SaTechnicalOffice_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_designer_reference_confirm':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_support_invoicesAttached_confirm_relevant_invoices_attached':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_projectManager_confirmRequest_confirm_request':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirmRequirement_confirm_purchase_requirement':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_PMO_confirmRequirement_confirm_purchase_requirement':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_accountant_confirmPayRequest_confirm_accountant':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 8.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_CEO_confirmAmount_confirm_final':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 9.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_support_invoicesAttached_2':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 10.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_financialManager_invoicesAttached':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 11.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_support_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 12.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_support_confirmRequest_2':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 14.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 15.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];


                    case 'step_deputyCEO_confirmRequirement_factor_or_contractor':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_required'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_designer_reference_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_PMO_confirmRequirement_factor_or_contractor':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_required'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_financialManager_invoicesAttached_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'). ' 11.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal_signature_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'). ' 15.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                    case 'step_First_invoicesAttached_positive_attached':
                        return [
                            'key' => __('Dashboard.wf_purchase.positive_documents_are_attached'). ' 13.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PurchaseRequest', $value_New),
                        ];
                }
                break;
            case 'App\Models\PayRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];

                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmPayRequest_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_support_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_accountant_confirmPayRequest_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_deputyCEO_confirmTermsOfPayment_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmAmount_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];


                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmPayRequest_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice1_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice2_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_support_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_accountant_confirmPayRequest_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_deputyCEO_confirmTermsOfPayment_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmAmount_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];

                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmPayRequest_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice1_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice2_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_support_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_accountant_confirmPayRequest_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_deputyCEO_confirmTermsOfPayment_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmAmount_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];

                    case 'step_projectManager_confirmRequest_confirm_request':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_support_invoicesAttached_confirm_relevant_invoices_attached':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_accountant_confirmPayRequest_confirm_accountant':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirmRequirement_confirm_purchase_requirement':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_CEO_confirmAmount_confirm_final':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];

                    case 'step_First_confirm_relevant_invoices_attached':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_relevant_invoices_are_attached') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmSizesQuantities':
                        return [
                            'key' => __('Dashboard.wf_purchase.sizes_quantities_confirmed') . ' 3.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmPricesApproved':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_prices_are_approved') . ' 3.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmSizesQuantities':
                        return [
                            'key' => __('Dashboard.wf_purchase.sizes_quantities_confirmed') . ' 4.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmPricesApproved':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_prices_are_approved') . ' 4.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmSizesQuantities':
                        return [
                            'key' => __('Dashboard.wf_purchase.sizes_quantities_confirmed') . ' 4.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmPricesApproved':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_prices_are_approved') . ' 4.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_support_confirmAbsenceGoodsWarehouse':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirmation_absence_goods_warehouse') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_support_confirmPriceRange':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirmation_price_range') . ' 5.' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal_signature_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayRequest', $value_New),
                        ];
                }
                break;
            case 'App\Models\ContractorRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'product_label':
                        return [
                            'key' => __('Dashboard.wf_purchase.code'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_code':
                        return [
                            'key' => __('Dashboard.wf_purchase.code_label'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'name_contracting_party':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_contracting_party'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'date_of_contract':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_contract'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'period':
                        return [
                            'key' => __('Dashboard.wf_purchase.period'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'phone_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.phone_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'subject_and_description_of_services':
                        return [
                            'key' => __('Dashboard.wf_purchase.subject_and_description_of_services'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'address':
                        return [
                            'key' => __('Dashboard.public.form.address'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'guarantee':
                        return [
                            'key' => __('Dashboard.wf_purchase.guarantee_of_fulfillment_of_obligations'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'guarantee_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.guarantee_of_fulfillment_of_obligations') . ' - ' . __('Dashboard.wf_purchase.the_amount/amount'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'good_job':
                        return [
                            'key' => __('Dashboard.wf_purchase.good_job'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'good_job_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.good_job') . ' - ' . __('Dashboard.wf_purchase.the_amount/amount'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'delay_offences':
                        return [
                            'key' => __('Dashboard.wf_purchase.delay_offences/damages'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'delay_offences_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.delay_offences/damages') . ' - ' . __('Dashboard.wf_purchase.the_amount/amount'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'prepayment':
                        return [
                            'key' => __('Dashboard.wf_purchase.prepayment'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'prepayment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.prepayment') . ' - ' . __('Dashboard.wf_purchase.the_amount/amount'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'prepayment_guarantee_check':
                        return [
                            'key' => __('Dashboard.wf_purchase.in_return_for_the_guarantee') . ' - ' . __('Dashboard.wf_purchase.check'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'prepayment_guarantee_promissory_note':
                        return [
                            'key' => __('Dashboard.wf_purchase.in_return_for_the_guarantee') . ' - ' . __('Dashboard.wf_purchase.promissory_note'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'prepayment_other_payments':
                        return [
                            'key' => __('Dashboard.wf_purchase.other_payments'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'prepayment_payment_based_on_status_statement':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_based_on_status_statement'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'prepayment_payment_intervals':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_intervals'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'prepayment_contract_amount_ceiling':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_amount_ceiling'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'bank_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.bank_name'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'account_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.account_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'sheba_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.sheba_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'contract_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'schedule_checked':
                        return [
                            'key' => __('Dashboard.public.no_file') . ' ' . __('Dashboard.wf_purchase.schedule'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'technical_specifications_and_map_checked':
                        return [
                            'key' => __('Dashboard.public.no_file') . ' ' .__('Dashboard.wf_purchase.technical_specifications_and_map'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'rendering_checked':
                        return [
                            'key' => __('Dashboard.public.no_file') . ' ' .__('Dashboard.wf_purchase.rendering'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];

                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_designer_reference_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_PMO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_deputyCEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_ContractsExpert_ConfirmRequest_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 8.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_documentsAreComplete_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 9.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_First_ApprovalDraftContract_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 10.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_archive_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 11.' . __('Dashboard.wf_purchase.archive'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 12.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];

                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice1_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice2_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_designer_reference_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_PMO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_deputyCEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_ContractsExpert_ConfirmRequest_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 8.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_documentsAreComplete_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 9.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_First_ApprovalDraftContract_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 10.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_archive_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 11.' . __('Dashboard.wf_purchase.archive'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 12.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];


                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice1_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice2_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_designer_reference_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_PMO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_deputyCEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_ContractsExpert_ConfirmRequest_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 8.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_documentsAreComplete_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 9.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_First_ApprovalDraftContract_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 10.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_archive_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 11.' . __('Dashboard.wf_purchase.archive'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 12.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_SaTechnicalOffice_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_designer_reference':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_projectManager_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_CEO_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_ContractsExpert_ConfirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_above_is_approved') . ' 8.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_projectManager_documentsAreComplete':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 9.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_First_ApprovalDraftContract':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 10.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_archive_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_received_for_signature_CEO') . ' 11.' . __('Dashboard.wf_purchase.archive'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal':
                        return [
                            'key' => __('Dashboard.wf_purchase.original_guarantees_received') . ' 12.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];

                    case 'step_SaTechnicalOffice_confirm_technical_specifications':
                        return [
                            'key' => __('Dashboard.wf_purchase.technical_specifications_are_approved') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirm_according_to':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_prices_are_approved_according_to') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirm_technical_specifications':
                        return [
                            'key' => __('Dashboard.wf_purchase.technical_specifications_are_approved') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirm_according_to':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_prices_are_approved_according_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirm_technical_specifications':
                        return [
                            'key' => __('Dashboard.wf_purchase.technical_specifications_are_approved') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirm_according_to':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_prices_are_approved_according_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_designer_reference_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.designer'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_necessity_contract':
                        return [
                            'key' => __('Dashboard.wf_purchase.necessity_contract_is_confirmed') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirm_necessity_contract':
                        return [
                            'key' => __('Dashboard.wf_purchase.necessity_contract_is_confirmed') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_choice_contract_party':
                        return [
                            'key' => __('Dashboard.wf_purchase.choice_contract_party_approved') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirm_choice_contract_party':
                        return [
                            'key' => __('Dashboard.wf_purchase.choice_contract_party_approved') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_payment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_amount_and_terms_are_confirmed') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirm_payment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_amount_and_terms_are_confirmed') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_ContractsExpert_confirm_contract_with_amendments':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_was_drafted_with_amendments_initial_request') . ' 8.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_contract_with_amendments':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_was_drafted_with_amendments_initial_request') . ' 8.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_ContractsExpert_confirm_documentsAreComplete':
                        return [
                            'key' => __('Dashboard.wf_purchase.documents_are_complete') . ' 8.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_documentsAreComplete':
                        return [
                            'key' => __('Dashboard.wf_purchase.documents_are_complete') . ' 8.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_archive_confirm_physical_contract_delivered':
                        return [
                            'key' => __('Dashboard.wf_purchase.physical_contract_delivered_to_the_financial_unit') . ' 11.' . __('Dashboard.wf_purchase.archive'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_archive_confirm_contract_deliver_final_version':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_was_deliver_the_final_version_of_the_contract') . ' 11.' . __('Dashboard.wf_purchase.archive'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ContractorRequest', $value_New),
                        ];
                }
                break;
            case 'App\Models\PayContractorRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];

                    case 'contractor_request_id':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_id'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_label':
                        return [
                            'key' => __('Dashboard.wf_purchase.code'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_code':
                        return [
                            'key' => __('Dashboard.wf_purchase.code_label'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'name_contracting_party':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_contracting_party'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'contract_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'status_statement_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.status_statement_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'description_if_necessary':
                        return [
                            'key' => __('Dashboard.wf_purchase.description_if_necessary'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'gross_price_accountant':
                        return [
                            'key' => __('Dashboard.wf_purchase.gross_price'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'net_fee':
                        return [
                            'key' => __('Dashboard.wf_purchase.net_fee'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'gross_price':
                        return [
                            'key' => __('Dashboard.wf_purchase.gross_price'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_type_of_pay_text':
                        return [
                            'key' => __('Dashboard.wf_purchase.terms_of_pay'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_amount_of_cash_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_of_cash'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_cash_obligations':
                        return [
                            'key' => __('Dashboard.wf_purchase.cash_in_the_list_of_obligations'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'invoice_date_of_payment':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_payment'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_installment_terms_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.installment_terms'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_PMO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_ContractsExpert_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_deputyCEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_accountant_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];


                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice1_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice2_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_PMO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_ContractsExpert_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_deputyCEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_accountant_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];


                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice1_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice2_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_PMO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_ContractsExpert_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_deputyCEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_accountant_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_SaTechnicalOffice_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_contract_checked_from_legal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_ContractsExpert_confirm_contract_checked_from_legal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_projectManager_confirm_details':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirm_payment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_accountant_confirm_confirmed_in_net':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_CEO_confirm_amount_conditions':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 8.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];

                    case 'step_technicalOffice1_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                }
                break;
            case 'App\Models\PayGoodPContractorRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];

                    case 'contractor_request_id':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_id'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_label':
                        return [
                            'key' => __('Dashboard.wf_purchase.code'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_code':
                        return [
                            'key' => __('Dashboard.wf_purchase.code_label'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'name_contracting_party':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_contracting_party'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'contract_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'status_statement_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.status_statement_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'description_if_necessary':
                        return [
                            'key' => __('Dashboard.wf_purchase.description_if_necessary'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'gross_price_accountant':
                        return [
                            'key' => __('Dashboard.wf_purchase.gross_price'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'net_fee':
                        return [
                            'key' => __('Dashboard.wf_purchase.net_fee'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'gross_price':
                        return [
                            'key' => __('Dashboard.wf_purchase.gross_price'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_type_of_pay_text':
                        return [
                            'key' => __('Dashboard.wf_purchase.terms_of_pay'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_amount_of_cash_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_of_cash'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_cash_obligations':
                        return [
                            'key' => __('Dashboard.wf_purchase.cash_in_the_list_of_obligations'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'invoice_date_of_payment':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_payment'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_installment_terms_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.installment_terms'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_ContractsExpert_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_deputyCEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_PMO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_accountant_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 7.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 8.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 9.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];


                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice1_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice2_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_ContractsExpert_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_deputyCEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_PMO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_accountant_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 7.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 8.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 9.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];


                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice1_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice2_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_ContractsExpert_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_deputyCEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_PMO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_accountant_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 7.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 8.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 9.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_SaTechnicalOffice_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest':
                        return [
                            'key' => __('Dashboard.public.form.refer_to') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_ContractsExpert_confirm':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_projectManager_confirm_details':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirm_payment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_PMO_confirm_payment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.PMO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_accountant_confirm_confirmed_in_net':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 7.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_CEO_confirm_amount_conditions':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 8.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 9.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];

                    case 'step_technicalOffice1_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirm_choice':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayGoodPContractorRequest', $value_New),
                        ];
                }
                break;
            case 'App\Models\OverchargeRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_New),
                        ];

                    case 'product_label':
                        return [
                            'key' => __('Dashboard.wf_purchase.code'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_code':
                        return [
                            'key' => __('Dashboard.wf_purchase.code_label'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'requested_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.requested_amount'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'amount_of_the_last_overcharge':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_of_the_last_overcharge'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'date_of_the_last_overcharge':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_the_last_overcharge'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'description_if_necessary':
                        return [
                            'key' => __('Dashboard.wf_purchase.description_if_necessary'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'confirmation_date_of_payment':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_payment'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'confirmation_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirmation_amount'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_accountant_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_deputyCEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];


                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_accountant_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_deputyCEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];


                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_accountant_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_deputyCEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_projectManager_confirm':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_New),
                        ];
                    case 'step_accountant_confirm':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_New),
                        ];
                    case 'step_deputyCEO_confirm_payment_amount':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_New),
                        ];
                    case 'step_CEO_confirm_amount_conditions':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_New),
                        ];

                    case 'step_financialManager_confirmFinal_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\OverchargeRequest', $value_New),
                        ];
                }
                break;
            case 'App\Models\MonthlyFeePaymentRequest':
                switch ($key) {
                    case 'name_of_the_requesting':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_of_the_requesting_unit/project'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'priority_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.priority'),
                            'value_old' => $this->getPriorityDetails($value_Old)['name'],
                            'value_new' => $this->getPriorityDetails($value_New)['name'],
                        ];
                    case 'terminate_the_process':
                        return [
                            'key' => __('Dashboard.wf_purchase.terminate_the_process'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];

                    case 'contractor_request_id':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_id'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_label':
                        return [
                            'key' => __('Dashboard.wf_purchase.code'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_code':
                        return [
                            'key' => __('Dashboard.wf_purchase.code_label'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'name_contracting_party':
                        return [
                            'key' => __('Dashboard.wf_purchase.name_contracting_party'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'contract_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'status_statement_number':
                        return [
                            'key' => __('Dashboard.wf_purchase.status_statement_number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'description_if_necessary':
                        return [
                            'key' => __('Dashboard.wf_purchase.description_if_necessary'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'gross_price_accountant':
                        return [
                            'key' => __('Dashboard.wf_purchase.gross_price'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'net_fee':
                        return [
                            'key' => __('Dashboard.wf_purchase.net_fee'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'gross_price':
                        return [
                            'key' => __('Dashboard.wf_purchase.gross_price'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_type_of_pay_text':
                        return [
                            'key' => __('Dashboard.wf_purchase.terms_of_pay'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_amount_of_cash_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_of_cash'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_cash_obligations':
                        return [
                            'key' => __('Dashboard.wf_purchase.cash_in_the_list_of_obligations'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'invoice_date_of_payment':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_payment'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_installment_terms_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.installment_terms'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_First_signature_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_projectManager_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_ContractsExpert_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 3.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_accountant_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 4.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_CEO_confirmRequest_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];
                    case 'step_financialManager_confirmFinal_date':
                        return [
                            'key' => __('Dashboard.wf_purchase.data') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->getDateByTimezone($value_Old),
                            'value_new' => $this->getDateByTimezone($value_New),
                        ];


                    case 'step_First_signature_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice1_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_technicalOffice2_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_projectManager_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_ContractsExpert_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 3.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_accountant_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 4.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_CEO_confirmRequest_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];
                    case 'step_financialManager_confirmFinal_sign':
                        return [
                            'key' => __('Dashboard.wf_purchase.signature') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => '<img class="img-responsive" src="' . $value_Old . '">',
                            'value_new' => '<img class="img-responsive" src="' . $value_New . '">',
                        ];


                    case 'step_First_signature_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 1.' . __('Dashboard.wf_purchase.applicant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_SaTechnicalOffice_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice1_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_technicalOffice2_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_projectManager_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_ContractsExpert_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 3.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_accountant_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 4.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_CEO_confirmRequest_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'step_financialManager_confirmFinal_name':
                        return [
                            'key' => __('Dashboard.public.form.name') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];


                    case 'step_SaTechnicalOffice_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.technical_office_supervisor'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice1_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office1'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_technicalOffice2_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.technical_office2'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_projectManager_confirm_details':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 2.' . __('Dashboard.wf_purchase.project_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_ContractsExpert_confirmRequest':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 3.' . __('Dashboard.wf_purchase.contracts_expert'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_accountant_confirm_confirmed_in_net':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 4.' . __('Dashboard.wf_purchase.accountant'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_CEO_confirm_amount_conditions':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 5.' . __('Dashboard.wf_purchase.CEO'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                    case 'step_financialManager_confirmFinal':
                        return [
                            'key' => __('Dashboard.wf_purchase.confirm_request') . ' 6.' . __('Dashboard.wf_purchase.financial_manager'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];

                    case 'step_financialManager_confirmFinal_checked':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_confirmation'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\PayContractorRequest', $value_New),
                        ];
                }
                break;

            case 'App\Models\PayItem':
            case 'App\Models\ProductItem':
                switch ($key) {
                    case 'catalogue':
                        return [
                            'key' => __('Dashboard.wf_purchase.catalogue'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_label':
                        return [
                            'key' => __('Dashboard.wf_purchase.code'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'product_code':
                        return [
                            'key' => __('Dashboard.wf_purchase.code_label'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'unit':
                        return [
                            'key' => __('Dashboard.wf_purchase.unit'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'number':
                        return [
                            'key' => __('Dashboard.wf_purchase.number'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'type_text':
                        return [
                            'key' => __('Dashboard.wf_purchase.type'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'place_of_use':
                        return [
                            'key' => __('Dashboard.wf_purchase.place_of_use'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'design_unit_description':
                        return [
                            'key' => __('Dashboard.wf_purchase.design_unit'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_type_text':
                        return [
                            'key' => __('Dashboard.wf_purchase.terms_of_purchase'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_amount_of_cash_product':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_of_cash'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_installment_terms_product':
                        return [
                            'key' => __('Dashboard.wf_purchase.installment_terms'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'description_product':
                        return [
                            'key' => __('Dashboard.wf_purchase.description_of_purchase_conditions'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'its_necessary':
                        return [
                            'key' => __('Dashboard.wf_purchase.its_necessary'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ProductItem', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ProductItem', $value_New),
                        ];
                    case 'invoice_subject':
                        return [
                            'key' => __('Dashboard.wf_purchase.invoice_subject/description'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'bank_account_information':
                        return [
                            'key' => __('Dashboard.wf_purchase.bank_account_information'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'amount_numbers':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_in_numbers_(Rials)'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'amount_letters':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_in_letters_(Rials)'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'in_the_name':
                        return [
                            'key' => __('Dashboard.wf_purchase.in_the_name_of_(beneficiary)'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_type_of_pay_text':
                        return [
                            'key' => __('Dashboard.wf_purchase.terms_of_pay'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_amount_of_cash_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.amount_of_cash'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_cash_obligations':
                        return [
                            'key' => __('Dashboard.wf_purchase.cash_in_the_list_of_obligations'),
                            'value_old' => $this->history_Confirm_Translate('App\Models\ProductItem', $value_Old),
                            'value_new' => $this->history_Confirm_Translate('App\Models\ProductItem', $value_New),
                        ];
                    case 'invoice_date_of_payment':
                        return [
                            'key' => __('Dashboard.wf_purchase.date_of_payment'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'invoice_installment_terms_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.installment_terms'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                    case 'description_pay':
                        return [
                            'key' => __('Dashboard.wf_purchase.description_of_payment_terms'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                }
                break;
            case 'App\Models\Paraph':
                switch ($key) {
                    case 'message':
                        return [
                            'key' => __('Dashboard.wf_purchase.paraph'),
                            'value_old' => $value_Old,
                            'value_new' => $value_New,
                        ];
                }
                break;
            case 'App\Models\ContractFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.contract'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\DesignerFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.design_office_documents'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\File':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.proforma_invoice'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\FinalPaymentReceiptFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.the_final_attachment_of_the_payment_receipt'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\FinancialInvoicesFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.payment_receipt_attached'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\IdentityDocumentsFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.identity_documents'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\MeterDocumentationFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.meter_documentation_and_estimates'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\PositiveDocumentFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.attached_are_positive_documents'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\PriceInquiriesFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.3_price_inquiries'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\RenderingFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.rendering'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\SampleFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.applicant_sample_file'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\ScheduleFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.schedule'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\SignedContractFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.signed_copy_of_the_contract'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\StatusStatementFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.initial_status_statement'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\StatusStatementProcessedFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.status_statement_processed'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\SubjectAndDescriptionFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.subject_and_description_of_services_file'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\SupportInvoicesAttached2File':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.attached_the_final_invoice_file'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\TechnicalOfficeSampleFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.technical_office_sample_file'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
            case 'App\Models\TechnicalSpecificationsFile':
                switch ($key) {
                    case 'file':
                        return [
                            'key' => __('Dashboard.wf_purchase.technical_specifications_and_map'),
                            'value_old' => '<div class=" added_file"></div>',
                            'value_new' => '<div class=" added_file"></div>',
                        ];
                }
                break;
        }
    }

    public function history_Confirm_Translate($model_Type, $confirm)
    {
        switch ($model_Type) {
            case 'App\Models\PurchaseRequest':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_designer_reference':
                        return '4. ' . __('Dashboard.wf_purchase.reference_to_the_designer');
                    case 'step_support_invoicesAttached':
                        return '5. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                    case 'step_projectManager_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_deputyCEO_confirmRequirement':
                        return '7. ' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
                    case 'step_PMO_confirmRequirement':
                        return '7. ' . __('Dashboard.wf_purchase.PMO');
                    case 'step_accountant_confirmPayRequest':
                        return '8. ' . __('Dashboard.wf_purchase.accountant');
                    case 'step_CEO_confirmAmount':
                        return '9. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_support_invoicesAttached_2':
                        return '10. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                    case 'step_financialManager_invoicesAttached':
                        return '11. ' . __('Dashboard.wf_purchase.financial_manager');
                    case 'step_support_confirmRequest':
                        return '12. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                    case 'step_First_invoicesAttached':
                        return '13. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_support_confirmRequest_2':
                        return '14. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                    case 'step_financialManager_confirmFinal':
                        return '15. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
            case 'App\Models\ProductItem':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                }
                break;
            case 'App\Models\PayRequest':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_projectManager_confirmPayRequest':
                        return '2. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_support_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                    case 'step_accountant_confirmPayRequest':
                        return '6. ' . __('Dashboard.wf_purchase.accountant');
                    case 'step_deputyCEO_confirmTermsOfPayment':
                        return '7. ' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
                    case 'step_CEO_confirmAmount':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_financialManager_confirmFinal':
                        return '8. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
            case 'App\Models\ContractorRequest':
                switch ($confirm) {
                    case 'prepayment_guarantee_promissory_note':
                    case 'prepayment_guarantee_check':
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case null:
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_designer_reference':
                        return '4. ' . __('Dashboard.wf_purchase.reference_to_the_designer');
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_deputyCEO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
                    case 'step_PMO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.PMO');
                    case 'step_CEO_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_ContractsExpert_ConfirmRequest':
                        return '8. ' . __('Dashboard.wf_purchase.contracts_expert');
                    case 'step_projectManager_documentsAreComplete':
                        return '9. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_First_ApprovalDraftContract':
                        return '10. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_archive_confirmRequest':
                        return '11. ' . __('Dashboard.wf_purchase.archive');
                    case 'step_financialManager_confirmFinal':
                        return '12. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
            case 'App\Models\ContractorAddendumRequest':
                switch ($confirm) {
                    case 'prepayment_guarantee_promissory_note':
                    case 'prepayment_guarantee_check':
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case null:
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_designer_reference':
                        return '4. ' . __('Dashboard.wf_purchase.reference_to_the_designer');
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_deputyCEO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
                    case 'step_PMO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.PMO');
                    case 'step_CEO_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_ContractsExpert_ConfirmRequest':
                        return '8. ' . __('Dashboard.wf_purchase.contracts_expert');
                    case 'step_projectManager_documentsAreComplete':
                        return '9. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_First_ApprovalDraftContract':
                        return '10. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_archive_confirmRequest':
                        return '11. ' . __('Dashboard.wf_purchase.archive');
                    case 'step_financialManager_confirmFinal':
                        return '12. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
            case 'App\Models\PayContractorRequest':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_PMO_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.PMO');
                    case 'step_ContractsExpert_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.contracts_expert');
                    case 'discrepancy':
                        return __('Dashboard.wf_purchase.there_is_a_discrepancy');
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_deputyCEO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
                    case 'step_accountant_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.accountant');
                    case 'step_CEO_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_financialManager_confirmFinal':
                        return '8. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
            case 'App\Models\PayGoodPContractorRequest':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_ContractsExpert_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.contracts_expert');
                    case 'discrepancy':
                        return __('Dashboard.wf_purchase.there_is_a_discrepancy');
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_deputyCEO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
                    case 'step_PMO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.PMO');
                    case 'step_accountant_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.accountant');
                    case 'step_CEO_confirmRequest':
                        return '8. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_financialManager_confirmFinal':
                        return '9. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
            case 'App\Models\OverchargeRequest':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                }
                break;
            case 'App\Models\MonthlyFeePaymentRequest':
                switch ($confirm) {
                    case '1':
                    case 'yes':
                        return __('Dashboard.public.yes');
                    case '0':
                    case 'no':
                        return __('Dashboard.public.no');
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant');
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                    case 'step_projectManager_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.project_manager');
                    case 'step_ContractsExpert_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.contracts_expert');
                    case 'step_accountant_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.accountant');
                    case 'step_CEO_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.CEO');
                    case 'step_financialManager_confirmFinal':
                        return '6. ' . __('Dashboard.wf_purchase.financial_manager');
                }
                break;
        }
    }

    public function getCurrentActivity($wf_Name, $state)
    {
        switch ($wf_Name) {
            case 'App\Models\PurchaseRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant/workshop_supervisor');
                        break;
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                        break;
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                        break;
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                        break;
                    case 'step_designer_reference':
                        return '4. ' . __('Dashboard.wf_purchase.designer');
                        break;
                    case 'step_support_invoicesAttached':
                        return '5. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                        break;
                    case 'step_projectManager_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_PMO_confirmRequirement':
                        return '7. ' . __('Dashboard.wf_purchase.PMO');
                        break;
                    case 'step_accountant_confirmPayRequest':
                        return '8. ' . __('Dashboard.wf_purchase.accountant');
                        break;
                    /*case 'step_deputyCEO_confirmTermsOfPayment':
                        return '8. ' . __('Dashboard.wf_purchase.deputy_CEO');
                        break;*/
                    case 'step_CEO_confirmAmount':
                        return '9. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_support_invoicesAttached_2':
                        return '10. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                        break;
                    case 'step_financialManager_invoicesAttached':
                        return '11. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;
                    case 'step_support_confirmRequest':
                        return '12. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                        break;
                    case 'step_First_invoicesAttached':
                        return '13. ' . __('Dashboard.wf_purchase.applicant/workshop_supervisor');
                        break;
                    case 'step_support_confirmRequest_2':
                        return '14. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '15. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;
                    case 'sub_wf_contractor':
                        return __('Dashboard.wf_purchase.contract_required');
                        break;
                }
                break;
            case 'App\Models\PayRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.first_step');
                        break;
                    case 'step_projectManager_confirmPayRequest':
                        return '2. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                        break;
                    case 'step_technicalOffice1_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.technical_office1');
                        break;
                    case 'step_technicalOffice2_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.technical_office2');
                        break;
                    case 'step_support_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.responsible_for_supplies_and_support');
                        break;
                    case 'step_accountant_confirmPayRequest':
                        return '6. ' . __('Dashboard.wf_purchase.accountant');
                        break;
                    case 'step_CEO_confirmAmount':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '8. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;
                }
                break;
            case 'App\Models\ContractorRequest':
            case 'App\Models\ContractorAddendumRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.first_step');
                        break;
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                        break;
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                        break;
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                        break;
                    case 'step_designer_reference':
                        return '4. ' . __('Dashboard.wf_purchase.designer');
                        break;
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_PMO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.PMO');
                        break;
                    case 'step_CEO_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_ContractsExpert_ConfirmRequest':
                        return '8. ' . __('Dashboard.wf_purchase.contracts_expert');
                        break;
                    case 'step_projectManager_documentsAreComplete':
                        return '9. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_First_ApprovalDraftContract':
                        return '10. ' . __('Dashboard.wf_purchase.first_step');
                        break;
                    case 'step_archive_confirmRequest':
                        return '11. ' . __('Dashboard.wf_purchase.archive');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '12. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;

                }
                break;
            case 'App\Models\PayContractorRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant/workshop_supervisor');
                        break;
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                        break;
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                        break;
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                        break;
                    case 'step_ContractsExpert_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.contracts_expert');
                        break;
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_accountant_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.accountant');
                        break;
                    case 'step_CEO_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '8. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;
                }
                break;
            case 'App\Models\PayGoodPContractorRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.first_step');
                        break;
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                        break;
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                        break;
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                        break;
                    case 'step_ContractsExpert_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.contracts_expert');
                        break;
                    case 'step_projectManager_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_PMO_confirmRequest':
                        return '6. ' . __('Dashboard.wf_purchase.PMO');
                        break;
                    case 'step_accountant_confirmRequest':
                        return '7. ' . __('Dashboard.wf_purchase.accountant');
                        break;
                    case 'step_CEO_confirmRequest':
                        return '8. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '9. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;
                }
                break;
            case 'App\Models\OverchargeRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.first_step');
                        break;
                    case 'step_projectManager_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_accountant_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.accountant');
                        break;
                    case 'step_deputyCEO_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.deputy_CEO');
                        break;
                    case 'step_CEO_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '6. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;

                }
                break;
            case 'App\Models\MonthlyFeePaymentRequest':
                switch ($state) {
                    case 'step_First':
                        return '1. ' . __('Dashboard.wf_purchase.applicant/workshop_supervisor');
                        break;
                    case 'step_SaTechnicalOffice_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.technical_office_supervisor');
                        break;
                    case 'step_technicalOffice1_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office1');
                        break;
                    case 'step_technicalOffice2_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.technical_office2');
                        break;
                    case 'step_projectManager_confirmRequest':
                        return '2. ' . __('Dashboard.wf_purchase.project_manager');
                        break;
                    case 'step_ContractsExpert_confirmRequest':
                        return '3. ' . __('Dashboard.wf_purchase.contracts_expert');
                        break;
                    case 'step_accountant_confirmRequest':
                        return '4. ' . __('Dashboard.wf_purchase.accountant');
                        break;
                    case 'step_CEO_confirmRequest':
                        return '5. ' . __('Dashboard.wf_purchase.CEO');
                        break;
                    case 'step_financialManager_confirmFinal':
                        return '6. ' . __('Dashboard.wf_purchase.financial_manager');
                        break;
                }
                break;
        }
    }
}
















