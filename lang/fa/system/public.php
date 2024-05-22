<?php
/**
 * Created by PhpStorm.
 * User: M.R
 * Date: 1/15/2020
 * Time: 12:39 AM
 */


return [

    'company_name' => 'تمیم بنیان',
    'supported_Locales' => ['ir', 'us'],
    // Be careful that the words are not spaced
    'supported_Locales_For_Js' => "ir,us",
    'not_change_metric_units' => "ton,kilogram,gram,milligram,microgram,kilometer,meter,centimeter,millimeter,micrometer,cubic_meters,gallon,liter,cubic_centimeter,milliliter,cubic_millimeter,half_a_dozen,dozen",
    'gateways' => '{
        "paypal" : "پی پال",
        "stripe" : "استرایپ",
        "targetpay" : "تارگت پی",
        "wordpay" : "ورد پی"
    }',
    'transaction_types' => '{
        "S" : "پرداخت/فروش/بدهکاری",
        "C" : "بستانکاری/مرجوعی"
    }',
    'payment_methods' => '{
        "cash" : "پرداخت نقدی",
        "EFTPOS" : "پرداخت از طریق سامانه پردازه(پوز)",
        "ewallet" : "پرداخت از طریق کیف پول یا حساب مشتری",
        "bank_cards" : "پرداخت از طریق کارت های بانکی",
        "online" : "پرداخت آنلاین",
        "cheque" : "پرداخت از طریق چک",
        "money_order" : "پرداخت از طریق حواله",
        "coupons_and_vouchers" : "پرداخت از طریق کوپن ها و کارت های تخفیف",
        "letter_of_credit" : "پرداخت از طریق اعتبار اسنادی"
    }',
    'wfable_type' => [
        'App\Models\PurchaseRequest' => 'درخواست خرید',
        'App\Models\PayRequest' => 'درخواست پرداخت غیر قراردادی',
        'App\Models\ContractorRequest' => 'درخواست انعقاد قرارداد',
        'App\Models\ContractorAddendumRequest' => 'درخواست الحاقیه قرارداد',
        'App\Models\PayContractorRequest' => 'درخواست پرداخت قراردادی',
        'App\Models\PayGoodPContractorRequest' => 'درخواست پرداخت حسن انجام کار',
        'App\Models\OverchargeRequest' => 'درخواست شارژ تنخواه',
        'App\Models\MonthlyFeePaymentRequest' => 'درخواست پرداخت حق الزحمه ماهانه',
    ],
    'roles' => [
        'administrator' => 'ادمین',
        'applicant_workshop_supervisor' => 'سرپرست کارگاه',
        'project_manager' => 'مدیر پروژه',
        'technical_office_supervisor' => 'سرپرست دفتر فنی',
        'deputy_CEO' => 'معاونت فنی',
        'responsible_for_supplies_and_support' => 'تدارکات و پشتیبانی',
        'financial_manager' => 'مسئول مالی',
        'CEO' => 'مدیرعامل',
        'officer' => 'امور اداری',
        'executive_supervisor' => 'سرپرست اجرایی',
        'technical_office_expert1' => 'کارشناس دفتر فنی 1',
        'technical_office_expert2' => 'کارشناس دفتر فنی 2',
        'contracts_expert' => 'امور قراردادها',
        'PMO' => 'PMO',
        'accountant' => 'مسئول حسابداری',
        'designer' => 'دفتر طراحی',
        'no_role' => 'بدون نقش',
    ],
    'status_wf_delayed' => [
        'medium' => '36 ساعت',
        'high' => 'بین 36 تا 60 ساعت',
        'major' => 'بیشتر از 60 ساعت',
    ],
    'priority_name' => [
        'blocker' => 'مسدود کننده',
        'critical' => 'بحرانی',
        'major' => 'فورس ماژور (حداقل 10 روزه)',
        'highest' => 'بالاترین',
        'high' => 'اولویت بالا (حداقل 15 روزه)',
        'medium' => 'اولویت متوسط (حداقل 20 روزه)',
        'low' => 'کم',
        'lowest' => 'پایین ترین',
        'minor' => 'جزئی',
        'trivial' => 'ناچیز',
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
        'number' => 'عدد',
        'kg' => 'کیلوگرم',
        'ton' => 'تن',
        'meters_long' => 'متر طول',
        'square_meters' => 'متر مربع',
        'cubic_meter' => 'متر مکعب',
        'cubic_decimeter' => 'دسیمتر مکعب',
        'branch' => 'شاخه',
        '3_meter_branch' => 'شاخه 3 متری',
        '6_meter_branch' => 'شاخه 6 متری',
        '12_meter_branch' => 'شاخه 12 متری',
        'set' => 'ست',
        'ring' => 'حلقه',
        'closed' => 'بسته',
        'device' => 'دستگاه',
        'coil' => 'کلاف',
        'other' => 'سایر',
    ]
];
