<?php
/**
 * Created by PhpStorm.
 * User: M.R
 * Date: 1/15/2020
 * Time: 12:39 AM
 */


return [
    'company_name' => 'Tamim Bonyan',
    'supported_Locales' => ['ir', 'us'],
    // Be careful that the words are not spaced
    'supported_Locales_For_Js' => "ir,us",
    'not_change_metric_units' => "ton,kilogram,gram,milligram,microgram,kilometer,meter,centimeter,millimeter,micrometer,cubic_meters,gallon,liter,cubic_centimeter,milliliter,cubic_millimeter,half_a_dozen,dozen",
    'gateways' => '{
        "paypal" : "Paypal",
        "stripe" : "Stripe",
        "targetpay" : "Targetpay",
        "wordpay" : "Wordpay"
    }',
    'transaction_types' => '{
        "S" : "Payment/Sale/Debit",
        "C" : "Credit/Refund"
    }',
    'payment_methods' => '{
        "cash" : "Cash payment",
        "EFTPOS" : "Payment by EFTPOS",
        "ewallet" : "Payment through wallet or customer account",
        "bank_cards" : "Payment by bank card",
        "online" : "Online payment",
        "cheque" : "Payment by cheque",
        "money_order" : "Payment by money order",
        "coupons_and_vouchers" : "Payment via coupons and vouchers",
        "letter_of_credit" : "Payment by letter of credit"
    }',
    'wfable_type' => [
        'App\Models\PurchaseRequest' => 'Purchase request',
        'App\Models\PayRequest' => 'Payment request',
        'App\Models\ContractorRequest' => 'Contractor request',
        'App\Models\ContractorAddendumRequest' => 'Contractor Addendum request',
        'App\Models\PayContractorRequest' => 'Contract payment request',
        'App\Models\PayGoodPContractorRequest' => 'Pay good performance contractor request',
        'App\Models\OverchargeRequest' => 'Overcharge request',
        'App\Models\MonthlyFeePaymentRequest' => 'Monthly fee payment request',
    ],
    'roles' => [
        'administrator' => 'administrator',
        'applicant_workshop_supervisor' => 'Applicant workshop supervisor',
        'project_manager' => 'Project manager',
        'technical_office_supervisor' => 'Technical office supervisor',
        'deputy_CEO' => 'Deputy CEO',
        'responsible_for_supplies_and_support' => 'Responsible for supplies and support',
        'financial_manager' => 'Financial manager',
        'CEO' => 'CEO',
        'officer' => 'officer',
        'executive_supervisor' => 'Executive supervisor',
        'technical_office_expert1' => 'Technical office expert 1',
        'technical_office_expert2' => 'Technical office expert 2',
        'contracts_expert' => 'Contracts expert',
        'PMO' => 'PMO',
        'accountant' => 'Accountant',
        'designer' => 'Designer',
        'no_role' => 'No role',
    ],
    'status_wf_delayed' => [
        'medium' => '36 hours',
        'high' => 'Between 36 and 60 hours',
        'major' => 'More than 60 hours',
    ],
    'priority_name' => [
        'blocker' => 'Blocker',
        'critical' => 'Critical',
        'major' => 'Major (at least 3 days)',
        'highest' => 'Highest',
        'high' => 'High (at least 15 days)',
        'medium' => 'Medium (at least 20 days)',
        'low' => 'Low',
        'lowest' => 'Lowest',
        'minor' => 'Minor',
        'trivial' => 'Trivial',
    ],
    'priority_number' => [
        'blocker' => 9,
        'critical' => 8,
        'major' => 7,
        'highest' => 6,
        'high' => 5,
        'medium' => 4,
        'low' => 3,
        'lowest' => 2,
        'minor' => 1,
        'trivial' => 0,
    ],
    'units' => [
        'number' => 'number',
        'kg' => 'kg',
        'ton' => 'ton',
        'meters_long' => 'meters long',
        'square_meters' => 'Square meters',
        'cubic_meter' => 'cubic meter',
        'cubic_decimeter' => 'cubic decimeter',
        'branch' => 'Branch',
        '3_meter_branch' => '3 meter branch',
        '6_meter_branch' => '6 meter branch',
        '12_meter_branch' => '12 meter branch',
        'set' => 'set',
        'ring' => 'Ring',
        'closed' => 'Closed',
        'device' => 'device',
        'coil' => 'coil',
        'other' => 'other',
    ]
];
