var days_of_the_week = ['friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
window.sort_Step_View = ['component_System_settings', 'component_Show_Room_Setting', 'component_Store_Setting', 'component_Users_Setting', 'component_Dealers_Setting', 'component_Products_Setting', 'component_Dashboard_1'];
var rtl_Language_Code = ['fa'];

//////////////////////////////////// Important /////////////////////////////////////

// Priority
function getPriorityDetails(priority_Number) {
    switch (Number(priority_Number)) {
        case 0:
            return {
                'name': Lang.get('system/public.priority_name.trivial'),
                'src': 'assets/image/priority/trivial.png',
                'class': '',
            };
        case 1:
            return {
                'name':
                    Lang.get('system/public.priority_name.minor'),
                'src':
                    'assets/image/priority/minor.png',
                'class':
                    '',
            }
                ;
        case 2:
            return {
                'name':
                    Lang.get('system/public.priority_name.lowest'),
                'src':
                    'assets/image/priority/lowest.png',
                'class':
                    '',
            }
                ;
        case 3:
            return {
                'name':
                    Lang.get('system/public.priority_name.low'),
                'src':
                    'assets/image/priority/low.png',
                'class':
                    '',
            }
                ;
        case 4:
            return {
                'name':
                    Lang.get('system/public.priority_name.medium'),
//                    'src'=> 'assets/image/priority/medium.png'
                'src':
                    'assets/image/priority/low.png',
                'class':
                    '',
            }
                ;
        case 5:
            return {
                'name':
                    Lang.get('system/public.priority_name.high'),
//                    'src'=> 'assets/image/priority/high.png'
                'src':
                    'assets/image/priority/medium.png',
                'class':
                    '',
            }
                ;
        case 6:
            return {
                'name':
                    Lang.get('system/public.priority_name.highest'),
                'src':
                    'assets/image/priority/highest.png',
                'class':
                    '',
            }
                ;
        case 7:
            return {
                'name':
                    Lang.get('system/public.priority_name.major'),
//                    'src'=> 'assets/image/priority/major.png'
                'src':
                    'assets/image/priority/high.png',
                'class':
                    'w3-text-red',
            }
                ;
        case 8:
            return {
                'name':
                    Lang.get('system/public.priority_name.critical'),
                'src':
                    'assets/image/priority/critical.png',
                'class':
                    '',
            }
                ;
        case 9:
            return {
                'name':
                    Lang.get('system/public.priority_name.blocker'),
                'src':
                    'assets/image/priority/blocker.png',
                'class':
                    '',
            }
                ;
    }
}

function get_Back_Dropdown_WF_Purchase(dropdown_Value) {
    switch (dropdown_Value) {
        case 'yes':
            return Lang.get('Dashboard.public.yes');
        case 'step_First':
            return Lang.get('Dashboard.wf_purchase.applicant');
        case 'step_designer_reference':
            return Lang.get('Dashboard.wf_purchase.reference_to_the_designer');
        case 'step_technicalOffice_confirmSpecifications':
            return Lang.get('Dashboard.wf_purchase.technical_office1');
        case 'step_support_invoicesAttached':
            return Lang.get('Dashboard.wf_purchase.responsible_for_supplies_and_support');
        case 'step_projectManager_confirmRequest':
            return Lang.get('Dashboard.wf_purchase.project_manager');
        case 'step_deputyCEO_confirmRequirement':
            return Lang.get('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
        case 'step_accountant_confirmPayRequest':
            return Lang.get('Dashboard.wf_purchase.accountant');
        case 'step_CEO_confirmAmount':
            return Lang.get('Dashboard.wf_purchase.CEO');
    }
}

function get_Back_Dropdown_WF_Contractor(dropdown_Value) {
    switch (dropdown_Value) {
        case 'yes':
            return Lang.get('Dashboard.public.yes');
        case 'step_projectManager_confirmRequest':
            return Lang.get('Dashboard.wf_purchase.project_manager');
        case 'step_technicalOffice_confirmRequest':
            return Lang.get('Dashboard.wf_purchase.technical_office1');
        case 'step_deputyCEO_confirmRequest':
            return Lang.get('Dashboard.wf_purchase.confirmation_of_the_deputy_CEO');
        case 'step_CEO_confirmRequest':
            return Lang.get('Dashboard.wf_purchase.CEO');
        case 'step_PMO_confirmRequest':
            return Lang.get('Dashboard.wf_purchase.PMO');
    }
}

//Generate URL
function generate_URL(protocol, hostName, path = '') {
    return protocol + '://' + hostName + '/' + path
}

//Get postal code by country code
async function get_PostalCode(countryCode) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/postal-code/postal-codes.json")
            .done(function (data) {
                //------------------------
                let where = "ISO",
                    is = countryCode.toUpperCase(),
                    select = data.filter(function (value, index) {
                        return value[where] == is
                    })[0];
                resolve(select);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    return await promise;
}

//Get language by local code and returned en language
async function get_Language(localCode) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/countries-language/languages.en.min.json")
            .done(function (data) {
                //------------------------
                resolve(data[localCode]);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Get language by local code and returned name & native & rtl
async function get_Language_all(localCode) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/countries-language/languages.all.min.json")
            .done(function (data) {
                //------------------------
                resolve(data[localCode]);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Get revers data from local to country data
async function get_Country_Data_By_LocalCode(localCode) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/countries-language/countries.emoji.min.json")
            .done(function (data) {
                //------------------------
                console.log(get_Level2_Data(data, 'languages', localCode))
                resolve(get_Level2_Data(data, 'languages', localCode))
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Get language by country code and returned name & native & phone & continent & capital & currency & languages & emoji & emojiU
async function get_Language_All_By_Country_Code(country_Code) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/countries-language/countries.emoji.min.json")
            .done(function (data) {
                //------------------------
                resolve(data[country_Code]);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Get timezone by country code and returned timezones & latlng & name & country_code & capital
async function get_Timezone_All_By_Country_Code(country_Code) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/timezone/countries.json")
            .done(function (data) {
                //------------------------
                var where = "country_code", is = country_Code;
                var resolve_Data = get_Level2_Data(data, where, is, false, true);
                resolve(resolve_Data);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Get currency details by currency code and returned symbol & name & symbol_native & decimal_digits & rounding & code & name_plural
async function get_Currency_Details_By_Currency_Code(currency_Code) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/currency/Common-Currency.json")
            .done(function (data) {
                //------------------------
                resolve(data[currency_Code]);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Get language by currency code and returned & country_code name & native & phone & continent & capital & currency & languages & emoji & emojiU
async function get_Language_All_By_Currency_Code(currency_Code) {
    let promise = new Promise((resolve, reject) => {
        $.getJSON("assets/json/countries-language/countries.emoji.min.json")
            .done(function (data) {
                //------------------------
                var where = "currency", is = currency_Code;
                var resolve_Data = get_Level2_Data(data, where, is, false, false);
                resolve(resolve_Data);
                resolve(data[country_Code]);
                //------------------------
                /*console.log(select)
                console.log(data);
                console.log(data[0]);
                console.log(data[ipinfo.countryCode]);*/
            })
            .fail(function () {
                //------------------------
                //------------------------
                //console.log("error");
            })
            .always(function () {
                //------------------------
                //------------------------
                //console.log("complete");
            });
    });
    let result = await promise;
    return result;
}

//Set cookie locale and timezone
function set_Cookie_Locale_And_Timezone(data) {
    let storage = cryptio;

    storage.set('locale', data.locale, function (err, results) {
        if (err) throw err;
        // console.log(results);
    });
    storage.set('timezone', data.timezone, function (err, results) {
        if (err) throw err;
        // console.log(results);
    });
    storage.set('country_code_locale', data.country_code_locale, function (err, results) {
        if (err) throw err;
        // console.log(results);
    });
    storage.set('country_code_timezone', data.country_code_timezone, function (err, results) {
        if (err) throw err;
        // console.log(results);
    });
    /*storage.set('existence_initial_steps', data.existence_Initial_Steps, function (err, results) {
        if (err) throw err;
        // console.log(results);
    });*/
    /* storage.set('login', data.login, function (err, results) {
         if (err) throw err;
         // console.log(results);
     });
     storage.set('hostnames', data.hostnames, function (err, results) {
         if (err) throw err;
         // console.log(results);
     });
     var number= Cookies.get('number');
     console.log(number)
     if (isEmpty(number))
         number=0;*/
    Cookies.set('locale', data.locale, {hostName_Master, secure: true},);
    Cookies.set('timezone', data.timezone, {hostName_Master, secure: true});
    Cookies.set('country_code_locale', data.country_code_locale, {hostName_Master, secure: true});
    Cookies.set('country_code_timezone', data.country_code_timezone, {hostName_Master, secure: true});
    /*Cookies.set('existence_initial_steps', data.existence_Initial_Steps, {
        domain: '.' + hostName_Master,
        secure: true
    });*/

    /*Cookies.set('login', data.login, {domain: '.' + hostName_Master, secure: true});
    Cookies.set('hostnames', data.hostnames, {domain: '.' + hostName_Master, secure: true});
    Cookies.set('number', ++number, {domain: '.' + hostName_Master, secure: true});*/

    /* window.locale=data.locale;
     window.timezone=data.timezone;
     window.country_code_locale=data.country_code_locale;
     window.country_code_timezone=data.country_code_timezone;*/
    window.win_Locale = data.locale;
    window.win_Timezone = data.timezone;
    window.win_CountryCodeLocale = data.country_code_locale;
    window.win_CountryCodeTimezone = data.country_code_timezone;
    //window.win_Existence_Initial_Steps = data.existence_Initial_Steps;
    /*window.win_Login = data.login;
    window.win_Hostnames = data.hostnames;*/
    if (!isUndefined(data.existence_Initial_Steps)) {
        window.win_Existence_Initial_Steps = data.existence_Initial_Steps;
        storage.set('existence_initial_steps', data.existence_Initial_Steps, function (err, results) {
            if (err) throw err;
            // console.log(results);
        });
        Cookies.set('existence_initial_steps', data.existence_Initial_Steps, {
            domain: '.' + hostName_Master,
            secure: true
        });
    }
    /*if (data.existence_Initial_Steps==0||data.existence_Initial_Steps==1||data.existence_Initial_Steps==true||data.existence_Initial_Steps==false||data.existence_Initial_Steps=='true'||data.existence_Initial_Steps=='false') {
        window.win_Existence_Initial_Steps = data.existence_Initial_Steps;
        storage.set('existence_initial_steps', data.existence_Initial_Steps, function (err, results) {
            if (err) throw err;
            // console.log(results);
        });
        Cookies.set('existence_initial_steps', data.existence_Initial_Steps, {
            domain: '.' + hostName_Master,
            secure: true
        });
    }*/


}

//////////////////////////////////// Validator /////////////////////////////////////

// set custom text on initialization:
validator.message.invalid = Lang.get('validation.validator.invalid');
validator.message.empty = Lang.get('validation.validator.empty');
validator.message.min = Lang.get('validation.validator.min');
validator.message.max = Lang.get('validation.validator.max');
validator.message.number_min = Lang.get('validation.validator.number_min');
validator.message.number_max = Lang.get('validation.validator.number_max');
validator.message.url = Lang.get('validation.validator.url');
validator.message.number = Lang.get('validation.validator.number');
validator.message.email = Lang.get('validation.validator.email');
validator.message.email_repeat = Lang.get('validation.validator.email_repeat');
validator.message.password_repeat = Lang.get('validation.validator.password_repeat');
validator.message.repeat = Lang.get('validation.validator.repeat');
validator.message.complete = Lang.get('validation.validator.complete');
validator.message.select = Lang.get('validation.validator.select');

//////////////////////////////////// Inputmask /////////////////////////////////////
$(":input").inputmask();

//Manage mask
InputMaskManageElements = function () {
    "use strict";
    return {
        firstName: function (selector) {
            handle_Create_InputMask_FirstName(selector);
        },
        lastName: function (selector) {
            handle_Create_InputMask_LastName(selector);
        },
        description: function (selector) {
            var inputmask = {
                regex: '^.{3,250}$'
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        name: function (selector, length) {
            var inputmask = {
                regex: '^.{3,' + length + '}$'
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        email: function (selector) {
            handle_Create_InputMask_Email(selector);
        },
        decimal: function (selector) {
            var regex = 'decimal';
            selector.inputmask('decimal', {rightAlign: false});
            return regex;
        },
        phone: function (selector) {
            return handle_Create_InputMask_Phone(selector);
        },
        date: function (selector) {
            handle_Create_InputMask_Date(selector);
        },
        url: function (selector) {
            handle_Create_InputMask_URL(selector);
        },
        time: function (selector) {
            handle_Create_InputMask_Time(selector);
        },
        postalCode: async function (selector, countryCode) {
            var inputmask = '';
            var regex = '';
            selector.val('');

            let promise = new Promise((resolve, reject) => {
                get_PostalCode(countryCode).then(function (data) {
                    console.log(countryCode)
                    console.log(data)
                    inputmask = {regex: data.Regex};
                    selector.data('regex', inputmask)
                    selector.inputmask('remove');
                    selector.inputmask(inputmask);
                    regex = inputmask;
                    resolve(regex);
                })
            });
            let result = await promise;
            return result;
        },
        number_One_To_Infinity: function (selector) {
            var inputmask = {
                regex: '^[1-9][0-9]*$',
                rightAlign: false
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        ssn: function (selector) {
            let inputmask = {
                mask: '999-999999-9',
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        national_Company_ID: function (selector) {
            let inputmask = {
                mask: '99999999999',
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        sheba: function (selector) {
            let inputmask = {mask: 'IR999999999999999999999999'}
            selector.inputmask(inputmask);
            return inputmask;
        },
        bank_Card: function (selector) {
            let inputmask = {mask: '9999-9999-9999-9999'}
            selector.inputmask(inputmask);
            return inputmask;
        },
        number_Zero_To_Infinity: function (selector) {
            var inputmask = {
                regex: '^[0-9]*$',
                rightAlign: false
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        decimal_Zero_To_One: function (selector) {
            let inputmask = {
                alias: "numeric",
                // integerDigits: 3,
                digits: 2,
                // suffix: '',
                min: 0,
                max: 1,
                allowMinus: !1,
                digitsOptional: false,
                placeholder: "0",
                rightAlign: false
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        decimal_Min_To_Max: function (selector, min, max, digits) {
            let inputmask = {
                alias: "numeric",
                // integerDigits: 3,
                digits: digits,
                // suffix: '',
                min: min,
                max: max,
                allowMinus: !1,
                digitsOptional: false,
                placeholder: "0",
                rightAlign: false
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        percentage: function (selector) {
            var inputmask = {
                alias: "numeric",
                integerDigits: 2,
                digits: 2,
                suffix: " %",
                min: 0,
                max: 100,
                allowMinus: !1,
                digitsOptional: false,
                placeholder: "0",
                rightAlign: false
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
        currency: async function (selector, currency_Code) {
            //var regex = 'currency';
            //selector.inputmask('currency');
            var inputmask = '';
            let promise = new Promise((resolve, reject) => {
                get_Currency_Details_By_Currency_Code(currency_Code).then(function (data) {
                    if (isExist(() => data)) {
                        inputmask = {
                            prefix: "",
                            groupSeparator: ",",
                            alias: "numeric",
                            digits: data.decimal_digits,
                            digitsOptional: !1,
                            rightAlign: false
                        }
                        selector.inputmask(inputmask);
                        resolve(inputmask);

                    } else {
                        inputmask = {
                            prefix: "",
                            groupSeparator: ",",
                            alias: "numeric",
                            digits: 2,
                            digitsOptional: !1,
                            rightAlign: false
                        }
                        selector.inputmask(inputmask);
                        resolve(inputmask);
                    }
                });
            });
            let result = await promise;
            return result;
        },
        currency_Desired_Decimal_Digits: async function (selector, decimal_Digits) {
            let inputmask = {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: decimal_Digits,
                digitsOptional: !1,
                rightAlign: false
            }
            selector.inputmask(inputmask);
            return inputmask;
        },
    };
}();

//Email mask
function handle_Create_InputMask_Email(selector) {
    /*var regex = '[a-za-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?';
    var inputmask = {regex: regex};*/
    var regex = 'email';
    selector.inputmask('email');
    /*selector.inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
            }
        }
    });*/
    return regex;
}

//FirstName mask
function handle_Create_InputMask_FirstName(selector) {

    var inputmask = {
        regex: '^.{3,40}$'
    }
    var regex = {
        'mask': '*{3,40}'
    };

    selector.inputmask(inputmask);
    return inputmask;
}

//Url
function handle_Create_InputMask_URL(selector) {
    //var regex = '(?=^.{3,30}$)';
    var regex = "url";
    // var inputmask = {regex: regex/*, clearMaskOnLostFocus: false,placeholder:" ", greedy: true*/};
    selector.inputmask(regex);
    return regex;
}

//LastName mask
function handle_Create_InputMask_LastName(selector) {
    var inputmask = {
        regex: '^.{3,40}$'
    }
    var regex = {
        'min': '3',
        'max': '60',
    };
    selector.inputmask(inputmask);
    return inputmask;
}

//Date mask
function handle_Create_InputMask_Date(selector) {

    /*mask: "y-1-2 h:s",
        placeholder: "yyyy-mm-dd hh:mm",
        leapday: "-02-29",
        separator: "-",
        alias: "yyyy/mm/dd"*/
    //var regex = '(?=^.{3,60}$)';
    var regex = {
        mask: "9999-99-99"
    };
    var inputmask = {
        alias: "datetime",
        inputFormat: "yyyy-mm-dd",/*, clearMaskOnLostFocus: true,placeholder:" ", greedy: false*/
    };
    selector.inputmask(inputmask);
    return inputmask;
}

//Date mask
function handle_Create_InputMask_Time(selector) {
    var inputmask = {
        alias: "datetime",
        hourFormat: "24",
        inputFormat: "HH:MM:ss",/*, clearMaskOnLostFocus: true,placeholder:" ", greedy: false*/
    };
    selector.inputmask(inputmask);
    return inputmask;
}

//Phone mask
function handle_Create_InputMask_Phone(selector) {

    var inputmask = '';
    selector.val('');
    var placeholder = selector.attr('placeholder');
    for (let i = 0; i < placeholder.length; i++) {
        let res = placeholder.substring(i, i + 1);
        if (res == '(' || res == ')' || res == ' ' || res == '-') inputmask = inputmask.concat(res);
        if (/^\d+$/.test(res)) inputmask = inputmask.concat(9);
    }
    var regex = {
        mask: inputmask
    };
    selector.data('regex', regex)
    selector.inputmask(regex);

    return regex;
}

/*//PostalCode mask
function handle_Create_InputMask_PostalCode(selector, countryCode) {

    var inputmask = '';
    var regex = '';
    selector.val('');

    get_PostalCode(countryCode).then(function (data) {
        inputmask = {regex: data.Regex};
        selector.data('regex', inputmask)
        selector.inputmask('remove');
        selector.inputmask(inputmask);
        regex = inputmask;
        return regex;
    })
}*/

//////////////////////////////////// Address input  /////////////////////////////////////
/* 1)
*  */

//Display_name address reverse
function display_name_address_reverse(data) {
    var value = $.map(data, function (value, key) {
        return value;
    }).reverse();
    var display_name = '';
    $.each(value, function (index, value) {
        display_name += '، ' + value;
    });
    display_name = display_name.substr(6)
    return display_name;
}

/* 2)
* var jsonArr = Object.keys(test).map(function(key) {
    return [key, test[key]];
});

jsonArr = jsonArr.reverse();

jsonArr = jsonArr.map(function(key) {
    return key[1];
    //return {key: key[1]};
});
var display_name='';
$.each( jsonArr, function( index, value ){
    display_name += '، '+value;
});*/

//Initialize address input
function initialize_Address_Input(data, address_ELM) {
    var display_name = data.display_name;
    if ($('html').attr('lang') === 'fa') {
        display_name = display_name_address_reverse(data.address);
    }
    address_ELM.val(display_name);
    address_ELM.data('address', data.address);
    address_ELM.data('lat', data.lat);
    address_ELM.data('lon', data.lon);
    address_ELM.data('type', data.type);
}

//Reset address input
function reset_Address_And_PostalCode_Input(id_Address, id_Postal_Code) {
    id_Postal_Code.val('')
    id_Address.val('')
    id_Address.data('address', '')
    id_Address.data('lat', '')
    id_Address.data('lon', '')
    id_Address.data('type', '')
}

//Event btns address input
function event_Remove_Btn_Table_Address(data_Select_Remove_Btn, data) {
    $('[data-select="' + data_Select_Remove_Btn + '"]').click(function () {

        var tr = $(this).closest("tr");// or $(this).parent().parent().remove();
        let id = tr.find("p").text();
        var newData;

        newData = remove_Node_Object_By_ID(data.address, id)
        data.address = newData;
        tr.remove();
    })
}

function event_Edit_Btn_Table_Address(data_Select_Edit_Btn, input_Address_Id, input_Postal_Code_ID, button_Add_Or_Edit_Id, marker, map, intl_POSTAL_CODE) {

    $('[data-select=' + data_Select_Edit_Btn + ']').click(function () {

        var tr = $(this).closest("tr");

        //sendTableLat sendTableLon sendTableType sendTableAddress sendTableCountryData sendTableInputmask
        var lat = tr.data('sendTableLat');
        var lon = tr.data('sendTableLon');
        var type = tr.data('sendTableType');
        var address = tr.data('sendTableAddress');
        var countryData = tr.data('sendTableCountryData');
        var inputmask = tr.data('sendTableInputmask');

        $('[data-select="addressAddedTable"]').attr('data-edit', 'false')
        tr.attr('data-edit', 'true');

        $('#' + input_Postal_Code_ID).inputmask('remove');
        $('#' + input_Postal_Code_ID).inputmask(inputmask);

        intl_POSTAL_CODE.setCountry(countryData.iso2);

        //$('#'+button_Add_Or_Edit_Id).find("i").remove();
        $('#' + button_Add_Or_Edit_Id).children().remove();
        $('#' + button_Add_Or_Edit_Id).attr('data-edit', 'true');
        $('#' + button_Add_Or_Edit_Id).text(Lang.get('Dashboard.people_Plan.form.edit'));
        $('#' + input_Address_Id).val(tr.find("a.address").text());
        $('#' + input_Postal_Code_ID).val(tr.find("a.postal_Code").text());
        $('#' + input_Address_Id).data('address', address);
        $('#' + input_Address_Id).data('lat', lat);
        $('#' + input_Address_Id).data('lon', lon);
        $('#' + input_Address_Id).data('type', type);
        // or $(this).parent().parent().remove();
        var location = new L.LatLng(lat, lon);
        map.panTo(location);
        marker.setLatLng([lat, lon], {draggable: 'true'}).bindPopup(tr.find("a.address").text()).update();
        if (type === 'city' || type === 'administrative') {
            map.setView({lon: lon, lat: lat}, 11);
            /* map.setCenter(,);
            map.setZoom(5);*/
        } else {
            map.setView({lon: lon, lat: lat}, 17);
        }

    })
}

// Update tr table address data
function update_Tr_Table_Address_Data(tr, input_Address, input_Postal_Code, inputmask_Postal_Code, data, intl_POSTAL_CODE) {

    let address = input_Address.data('address');//
    let display_name = input_Address.val();//
    let lat = input_Address.data('lat');//
    let lon = input_Address.data('lon');//
    let type = input_Address.data('type');//
    let countrydata = intl_POSTAL_CODE.getSelectedCountryData();//
    var inputmask = inputmask_Postal_Code;//
    let postal_Code_Send;
    let id = tr.find("p").text();


    console.log(data)

    if (!isEmpty(input_Postal_Code.val())) {
        tr.find("a.postal_Code").text(input_Postal_Code.val());
        postal_Code_Send = input_Postal_Code.val();
        console.log(data)
    } else {
        tr.find("a.postal_Code").text(Lang.get('Dashboard.people_Plan.form.not_Exist'));
        postal_Code_Send = 'NotExist';
        console.log('NotExist')
    }
    tr.find("a.address").text(display_name);
    tr.data('sendTableAddress', address);
    tr.data('sendTableLat', lat);
    tr.data('sendTableLon', lon);
    tr.data('sendTableType', type);
    tr.data('sendTableCountryData', countrydata);
    tr.data('sendTableInputmask', inputmask);
    tr.find("small").text(Lang.get('Dashboard.people_Plan.form.edit_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss'));
    tr.attr('data-edit', 'false');

    var newData = remove_Node_Object_By_ID(data.address, id)
    save_Address_Json(newData, id, address, postal_Code_Send, display_name, lat, lon, type, countrydata, inputmask);
    sorted_Arr_By_Id(newData);
    data.address = newData;
}

//Save data address in json
function save_Address_Json(json, id, address, postalCode, display_name, lat, lon, type, countrydata, inputmask) {
    json.push({
        id: id,
        address: address,
        postalCode: postalCode,
        display_name: display_name,
        lat: lat,
        lon: lon,
        type: type,
        countrydata: countrydata,
        inputmask: inputmask,
    })
}

//////////////////////////////////// Phone input  /////////////////////////////////////

//Event btns phone input
function event_Remove_Btn_Table_Phone(data_Select_Remove_Btn, data) {
    $('[data-select="' + data_Select_Remove_Btn + '"]').click(function () {

        var tr = $(this).closest("tr")
        let id = tr.find("p").text();
        var newData;

        if (tr.data('sendTableType') === 'MOBILE') {
            newData = remove_Node_Object_By_ID(data.phone.mobile, id)
            data.phone.mobile = newData;
        }
        if (tr.data('sendTableType') === 'FIXED_LINE') {
            newData = remove_Node_Object_By_ID(data.phone.fixedLine, id)
            data.phone.fixedLine = newData;
        }

        tr.remove();
        // or $(this).parent().parent().remove();
    })
}

function event_Edit_Btn_Table_Phone(data_Select_Edit_Btn, input_Phone_Mobile_Id, input_Phone_Fixed_Line_Id, button_Add_Or_Edit_Id, intl_MOBILE, intl_FIXED_LINE) {

    $('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {

        var tr = $(this).closest("tr");
        var type = tr.data('sendTableType');
        var countryData = tr.data('sendTableCountryData');
        var inputmask = tr.data('sendTableInputmask');

        $('[data-select="phoneAddedTable"]').attr('data-edit', 'false')
        tr.attr('data-edit', 'true');

        $('#' + button_Add_Or_Edit_Id).children().remove();
        $('#' + button_Add_Or_Edit_Id).attr('data-edit', 'true');
        $('#' + button_Add_Or_Edit_Id).text(Lang.get('Dashboard.people_Plan.form.edit'));

        if (type === 'MOBILE') {
            $('#' + input_Phone_Mobile_Id).inputmask('remove');
            $('#' + input_Phone_Mobile_Id).inputmask(inputmask);

            intl_MOBILE.setNumber(tr.find("a.phone").text());
            //$('#' + input_Phone_Mobile_Id).val(tr.find("a.phone").text());
            $('#' + input_Phone_Fixed_Line_Id).prop('disabled', true);
            $('#' + input_Phone_Mobile_Id).attr('data-edit', true);
        }
        if (type === 'FIXED_LINE') {
            $('#' + input_Phone_Fixed_Line_Id).inputmask('remove');
            $('#' + input_Phone_Fixed_Line_Id).inputmask(inputmask);

            intl_FIXED_LINE.setNumber(tr.find("a.phone").text());
            //$('#' + input_Phone_Fixed_Line_Id).val(tr.find("a.phone").text());
            $('#' + input_Phone_Mobile_Id).prop('disabled', true);
            $('#' + input_Phone_Fixed_Line_Id).attr('data-edit', true);
        }
    })
}

//Update tr table phone data
function update_Tr_Table_Phone_Data(tr, form_Phone_Id, inputmask_MOBILE, inputmask_FIXED_LINE, intl_MOBILE, intl_FIXED_LINE, data) {

    //var current_Phone = $('#' + input_Phone_Mobile_Id + ':not(:disabled),#' + input_Phone_Fixed_Line_Id + ':not(:disabled)');
    //or

    var current_Phone = $('#' + form_Phone_Id + ' input:not(:disabled)');
    let id = tr.find("p").text();
    var number = '';
    var data_type = '';
    var text_type = '';
    var countryData = '';
    var inputmask = '';
    var newData;

    if (current_Phone.data('select') === 'MOBILE') {
        number = intl_MOBILE.getNumber();
        data_type = 'MOBILE';
        text_type = Lang.get('Dashboard.people_Plan.form.phone_Type_MOBILE');
        countryData = intl_MOBILE.getSelectedCountryData();
        inputmask = inputmask_MOBILE;

        newData = remove_Node_Object_By_ID(data.phone.mobile, id);
        save_Phone_Json(newData, id, data_type, countryData, inputmask, number);
        sorted_Arr_By_Id(newData);
        data.phone.mobile = newData;
    }
    if (current_Phone.data('select') === 'FIXED_LINE') {
        number = intl_FIXED_LINE.getNumber();
        data_type = 'FIXED_LINE';
        text_type = Lang.get('Dashboard.people_Plan.form.phone_Type_Fixed');
        countryData = intl_FIXED_LINE.getSelectedCountryData();
        inputmask = inputmask_FIXED_LINE;
        newData = remove_Node_Object_By_ID(data.phone.fixedLine, id)
        save_Phone_Json(newData, id, data_type, countryData, inputmask, number);
        sorted_Arr_By_Id(newData);
        data.phone.fixedLine = newData;
    }
    tr.find("a.phone").text(number);
    tr.find("a.phone_Type").text(text_type);
    tr.data('sendTableCountryData', countryData);
    tr.data('sendTableInputmask', inputmask);
    tr.data('sendTableType', data_type);
    tr.find("small").text(Lang.get('Dashboard.people_Plan.form.edit_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss'));
    tr.attr('data-edit', 'false');
}

//Reset phone input
function reset_Phone_Input(input_Phone_Mobile, input_Phone_Fixed_Line) {

    if (!isEmpty(input_Phone_Mobile)) {
        input_Phone_Mobile.prop('disabled', false);
        input_Phone_Mobile.attr('data-edit', false);
        input_Phone_Mobile.val('');
    }
    if (!isEmpty(input_Phone_Fixed_Line)) {
        input_Phone_Fixed_Line.prop('disabled', false);
        input_Phone_Fixed_Line.attr('data-edit', false);
        input_Phone_Fixed_Line.val('');
    }
}

//Save data phone in json
function save_Phone_Json(json, id, type, countrydata, inputmask, number) {
    json.push({
        id: id,
        number: number,
        type: type,
        countrydata: countrydata,
        inputmask: inputmask,
    })
    /*switch (switched) {
        case 'generate':
            if (type === 'MOBILE') {
                json.push({
                    id: id,
                    number: number,
                    type: type,
                    countrydata: countrydata,
                    inputmask: inputmask,
                })
            }
            if (type === 'FIXED_LINE') {
                json.push({
                    id: id,
                    number: number,
                    type: type,
                    countrydata: countrydata,
                    inputmask: inputmask,
                })
            }
            break;
        case 'add':
            if (type === 'MOBILE') {
                json.mobile.push({
                    id: id,
                    number: number,
                    type: type,
                    countrydata: countrydata,
                    inputmask: inputmask,
                })
            }
            if (type === 'FIXED_LINE') {
                json.fixedLine.push({
                    id: id,
                    number: number,
                    type: type,
                    countrydata: countrydata,
                    inputmask: inputmask,
                })
            }
            break;

    }*/
}

//////////////////////////////////// User table view  /////////////////////////////////////

//Event btns phone view
function event_View_Btn_User_Table_Phone(data_Select_View_Btn, modal_Id, table_Add_Selector, table_Id, thead_Id, tbody_Id, Modal_Title_Selector) {
    $('[data-select="' + data_Select_View_Btn + '"]').click(function () {
        table_Add_Selector.find('.table-responsive').remove()
        var tr = $(this).closest("tr");
        var first_Name = tr.find('.first_Name').text().trim();
        var last_name = tr.find('.last_name').text().trim();
        var phones = Lang.get('Dashboard.people_Plan.modal.modal_Title_Phone_View');
        var text_Modal_Title = phones + ': ' + first_Name + ' ' + last_name;
        Modal_Title_Selector.text(text_Modal_Title);

        $(this).attr('data-toggle', 'modal');
        $(this).attr('data-target', modal_Id);

        table_Add_Selector.parent().find('.ajax-load').removeClass('hidden');
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                'Sync': 'UserAddedController',
                'SubSync': 'get_User_Phones',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {id: tr.data('id'), table_Id: table_Id, thead_Id: thead_Id, tbody_Id: tbody_Id},
            },
            success: function (data) {
                //------------------------
                table_Add_Selector.append(data.view);
                /*//DataTable user added
                $('#storeCashier_AddPeople_Form_UserAdded_Table_Btn_Refresh_Icon').removeClass('fa-spin fa-fw');
                if ($.fn.DataTable.isDataTable('#storeCashier_AddPeople_Form_UserAdded_Table')) {
                    $('#storeCashier_AddPeople_Form_UserAdded_Table').DataTable().destroy();
                }
                get_Language(locale_toLowerCase).then(function (data) {
                    $("#storeCashier_AddPeople_Form_UserAdded_Table").DataTable({
                        language: {url: "assets/app/js/json/datatable/language/" + data + ".json"},
                        /!*dom: "Bfrtip",
                        buttons: [
                            {
                                extend: "copy",
                                className: "btn-sm",
                                text:"<i class='fa fa-copy'></i>"
                            },
                            /!*{
                                extend: "csv",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-xml-o'></i>"
                            },*!/
                            {
                                extend: "excel",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-excel-o'></i>"
                            },
                            {
                                extend: "pdfHtml5",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-pdf-o'></i>"
                            },
                            {
                                extend: "print",
                                className: "btn-sm",
                                text:"<i class='fa fa-print'></i>"
                            },
                        ],*!/
                        //responsive: true,
                        /!* paging: false,
                         searching: false,*!/
                        destroy: true,
                        keys: true,
                        fixedHeader: true,
                    });
                })*/
                //--------------------------
                /*console.log('Done : ' + JSON.stringify(data));
                alert('done: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');
                table_Add_Selector.parent().find('.ajax-load').addClass('hidden');
                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
            }
        });
    })
}

//Event btns address view
function event_View_Btn_User_Table_Address(data_Select_View_Btn, modal_Id, table_Add_Selector, table_Id, thead_Id, tbody_Id, Modal_Title_Selector) {
    $('[data-select="' + data_Select_View_Btn + '"]').click(function () {
        table_Add_Selector.find('.table-responsive').remove()
        var tr = $(this).closest("tr");
        var first_Name = tr.find('.first_Name').text().trim();
        var last_name = tr.find('.last_name').text().trim();
        var Address = Lang.get('Dashboard.people_Plan.modal.modal_Title_Address_View');
        var text_Modal_Title = Address + ': ' + first_Name + ' ' + last_name;
        Modal_Title_Selector.text(text_Modal_Title);

        $(this).attr('data-toggle', 'modal');
        $(this).attr('data-target', modal_Id);

        table_Add_Selector.parent().find('.ajax-load').removeClass('hidden');
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                'Sync': 'UserAddedController',
                'SubSync': 'get_User_Addresses',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {id: tr.data('id'), table_Id: table_Id, thead_Id: thead_Id, tbody_Id: tbody_Id},
            },
            success: function (data) {
                //------------------------
                table_Add_Selector.append(data.view);
                /*//DataTable user added
                $('#storeCashier_AddPeople_Form_UserAdded_Table_Btn_Refresh_Icon').removeClass('fa-spin fa-fw');
                if ($.fn.DataTable.isDataTable('#storeCashier_AddPeople_Form_UserAdded_Table')) {
                    $('#storeCashier_AddPeople_Form_UserAdded_Table').DataTable().destroy();
                }
                get_Language(locale_toLowerCase).then(function (data) {
                    $("#storeCashier_AddPeople_Form_UserAdded_Table").DataTable({
                        language: {url: "assets/app/js/json/datatable/language/" + data + ".json"},
                        /!*dom: "Bfrtip",
                        buttons: [
                            {
                                extend: "copy",
                                className: "btn-sm",
                                text:"<i class='fa fa-copy'></i>"
                            },
                            /!*{
                                extend: "csv",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-xml-o'></i>"
                            },*!/
                            {
                                extend: "excel",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-excel-o'></i>"
                            },
                            {
                                extend: "pdfHtml5",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-pdf-o'></i>"
                            },
                            {
                                extend: "print",
                                className: "btn-sm",
                                text:"<i class='fa fa-print'></i>"
                            },
                        ],*!/
                        //responsive: true,
                        /!* paging: false,
                         searching: false,*!/
                        destroy: true,
                        keys: true,
                        fixedHeader: true,
                    });
                })*/
                //--------------------------
                /*console.log('Done : ' + JSON.stringify(data));
                alert('done: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');
                table_Add_Selector.parent().find('.ajax-load').addClass('hidden');
                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
            }
        });
    })
}

//Event btns person type view
function event_View_Btn_User_Table_Person_Type(data_Select_View_Btn, modal_Id, PersonType_Add_Selector, Modal_Title_Selector) {
    $('[data-select="' + data_Select_View_Btn + '"]').click(function () {

        PersonType_Add_Selector.find('.product_price').remove()
        PersonType_Add_Selector.parent().find('.ajax-load-end').html('');

        var tr = $(this).closest("tr");
        var first_Name = tr.find('.first_Name').text().trim();
        var last_name = tr.find('.last_name').text().trim();
        var person_Type = Lang.get('Dashboard.people_Plan.person_Type');
        var text_Modal_Title = person_Type + ': ' + first_Name + ' ' + last_name;
        Modal_Title_Selector.text(text_Modal_Title);

        $(this).attr('data-toggle', 'modal');
        $(this).attr('data-target', modal_Id);

        PersonType_Add_Selector.parent().find('.ajax-load').removeClass('hidden');
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                'Sync': 'UserAddedController',
                'SubSync': 'get_User_relations',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {id: tr.data('id')/*, relations: ['supplier', 'customer', 'owner']*/},
            },
            success: function (data) {
                //------------------------
                if (!isEmpty(data.result)) {
                    $.each(data.result, function (item, value) {
                        var div = $('<div></div>');
                        div.addClass('product_price w3-center');
                        div.css({"background-color": "rgba(178,239,228,0.4)"});
                        div.append(value)
                        PersonType_Add_Selector.append(div);
                    });
                } else {
                    PersonType_Add_Selector.parent().find('.ajax-load-end').html(Lang.get('Dashboard.public.no_more_records_found'));
                }
                //--------------------------
                /*console.log('Done : ' + JSON.stringify(data));
                alert('done: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');
                PersonType_Add_Selector.parent().find('.ajax-load').addClass('hidden');
                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
            }
        });
    })
}

//Event btns edit user
function event_Edit_Btn_Table_User(data_Select_Edit_Btn, reset_Form_Method, reload_Event_Single_Btn_Method, data_Json_Selector, phones_Table_Id, address_Table_Id, phones_Table_Tbody_Selector, address_Table_Tbody_Selector, input_div_CheckBoxes_Id) {

    $('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {
        var tr = $(this).closest("tr");
        var data_Save = {
            phone: {
                mobile: [],
                fixedLine: [],
            },
            address: []
        };
        reset_Form_Method();
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                'Sync': 'UserAddedController',
                'SubSync': 'get_User_Phones_Addresses',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {
                    id: tr.data('id'),
                    id_Btn1_Together: data_Json_Selector.id_Btn1_Together,
                    id_Btn2_Together: data_Json_Selector.id_Btn2_Together
                },
            },
            success: function (data) {
                //------------------------
                data_Json_Selector.id_Btn_Together_Add.empty()
                data_Json_Selector.id_Btn_Together_Add.append(data.view_Btn_Together);

                reload_Event_Single_Btn_Method();
                data_Save.id = data.user.id;

                if (!isEmpty(data.ssn)) {
                    if (!data.isUserCanBeRemoved) {
                        data_Json_Selector.ssn.prop('disabled', true);
                    }
                }
                if (!isEmpty(data.email)) {
                    if (!data.isUserCanBeRemoved) {
                        data_Json_Selector.email.prop('disabled', true);
                    }
                }

                /*if (!data.isUserCustomerCanBeRemoved) {
                    $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='customer']").prop('disabled', true);
                }
                if (!data.isUserSuppliersCanBeRemoved) {
                    $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='supplier']").prop('disabled', true);
                }
                if (!data.isUserOwnersCanBeRemoved) {
                    $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='owner']").prop('disabled', true);
                }*/

                if (!isEmpty(data.user.first_name))
                    data_Json_Selector.first_name.val(data.user.first_name);
                if (!isEmpty(data.user.last_name))
                    data_Json_Selector.last_name.val(data.user.last_name);
                $("#" + data_Json_Selector.gender + " input[type='radio'][value='" + data.user.gender + "']").parent('.btn').addClass('active');
                if (!isEmpty(data.user.ssn))
                    data_Json_Selector.ssn.val(data.user.ssn);
                if (!isEmpty(data.user.date_of_birth))
                    data_Json_Selector.date_of_birth.val(data.user.date_of_birth);
                if (!isEmpty(data.user.email))
                    data_Json_Selector.email.val(data.user.email);

                // Table phone create for edit
                $.each(data.phones, function (item, value) {
                    let id = $('#' + phones_Table_Id + ' tbody tr').length + 1;
                    let small_Text = Lang.get('Dashboard.people_Plan.form.created_Time');
                    let small_Time = value.created_at;
                    let text_type = Lang.get('Dashboard.people_Plan.form.phone_Type_MOBILE');

                    if (!isEmpty(value.updated_at)) {
                        if (value.updated_at != value.created_at) {
                            small_Text = Lang.get('Dashboard.people_Plan.form.edit_Time');
                            small_Time = value.updated_at;
                        }
                    }
                    if (value.type == 'FIXED_LINE')
                        text_type = Lang.get('Dashboard.people_Plan.form.phone_Type_Fixed');

                    var td = {
                        'select': 'phoneAddedTable',
                        'data': {
                            'sendTableType': value.type,//intl_MOBILE.getNumberType(),
                            'sendTableCountryData': JSON.parse(value.country_data),
                            'sendTableInputmask': JSON.parse(value.inputmask),
                        },
                        'num': [
                            {'number': id},
                        ],
                        'a_small': [
                            {'data': {'td_style': {"direction": "ltr"}, 'td_class': 'text-right'}},
                            {
                                'a': value.number,
                                'a_class': 'phone',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                            },
                            {'enter': ''},
                            /*{'small': small_Text + ' ' + moment(small_Time).locale($('html').attr('lang')).format('YYYY/MM/DD HH:mm:ss')},*/
                            {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')},
                        ],
                        'numberType': [
                            {'a': text_type, 'a_class': 'phone_Type'},
                        ],
                        'btn': [
                            {
                                'btn_Edit': {
                                    'data': {
                                        'select-element': '',
                                        'id': '',
                                    },
                                    'attr': {
                                        'data-select': 'userPhoneEditTableTrPhone',
                                        'data-toggle': '',
                                        'data-target': '#',
                                        'id': ''
                                    },
                                    'name': Lang.get('Dashboard.people_Plan.form.edit'),
                                    //'class': 'class22',
                                }
                            },
                            {
                                'btn_Delete': {
                                    'data': {
                                        'select-element': '',
                                        'id': '',
                                    },
                                    'attr': {
                                        'data-select': 'userPhoneDeleteTableTrPhone',
                                        'data-toggle': '',
                                        'data-target': '#',
                                        'id': ''
                                    },
                                    'name': Lang.get('Dashboard.people_Plan.form.delete'),
                                    //'class': 'class22',
                                }
                            },
                        ],
                    };

                    if (value.type == 'MOBILE')
                        save_Phone_Json(data_Save.phone.mobile, id, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask), value.number);
                    if (value.type == 'FIXED_LINE')
                        save_Phone_Json(data_Save.phone.fixedLine, id, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask), value.number);


                    phones_Table_Tbody_Selector.append(create_Component_Tbody_Tr_Table(td));
                });

                // Table address create for edit
                $.each(data.addresses, function (item, value) {
                    let id = $('#' + address_Table_Id + ' tbody tr').length + 1;
                    let small_Text = Lang.get('Dashboard.people_Plan.form.created_Time');
                    let small_Time = value.created_at;
                    let postal_Code_Text;
                    let postal_Code_Send;

                    if (!isEmpty(value.updated_at)) {
                        if (value.updated_at != value.created_at) {
                            small_Text = Lang.get('Dashboard.people_Plan.form.edit_Time');
                            small_Time = value.updated_at;
                        }
                    }

                    if (value.postal_code == 'NotExist') {
                        postal_Code_Text = Lang.get('Dashboard.people_Plan.form.not_Exist');
                        postal_Code_Send = 'NotExist';
                    } else {
                        postal_Code_Text = value.postal_code;
                        postal_Code_Send = value.postal_code;
                    }
                    var td = {
                        'select': 'addressAddedTable',
                        'data': {
                            'sendTableAddress': JSON.parse(value.address),
                            'sendTableLat': value.latitude,
                            'sendTableLon': value.longitude,
                            'sendTableType': value.type,
                            'sendTableCountryData': JSON.parse(value.country_data),
                            'sendTableInputmask': JSON.parse(value.inputmask),
                        },
                        'num': [
                            {'number': id}
                        ],
                        'a_small': [
                            {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                            {'a': value.display_name, 'a_class': 'address'},
                            {'enter': ''},
                            {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                        ],
                        'postal_Code': [
                            {'a': postal_Code_Text, 'a_class': 'postal_Code'}
                        ],
                        'btn': [
                            {
                                'btn_Edit': {
                                    'data': {
                                        'select-element': '',
                                        'id': '',
                                    },
                                    'attr': {
                                        'data-select': 'userAddressEditTableTrAddress',
                                        'data-toggle': '',
                                        'data-target': '#',
                                        'id': ''
                                    },
                                    'name': Lang.get('Dashboard.people_Plan.form.edit'),
                                    'class': 'class22',
                                }
                            },
                            {
                                'btn_Delete': {
                                    'data': {
                                        'select-element': '',
                                        'id': '',
                                    },
                                    'attr': {
                                        'data-select': 'userAddressDeleteTableTrAddress',
                                        'data-toggle': '',
                                        'data-target': '#',
                                        'id': ''
                                    },
                                    'name': Lang.get('Dashboard.people_Plan.form.delete'),
                                    'class': 'class22',
                                }
                            },
                        ],
                    }
                    address_Table_Tbody_Selector.append(create_Component_Tbody_Tr_Table(td));
                    save_Address_Json(data_Save.address, id, JSON.parse(value.address), postal_Code_Send, value.display_name, value.latitude, value.longitude, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask));
                });

                // person type checkbox create for edit
                /* $.each(data.relation, function (item, value) {
                     $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='" + value + "']").prop('checked', true);
                 });*/

                set_Data(data_Save, data_Json_Selector.switched)
                Reload_Needed.script_User();
                //--------------------------
                /*console.log('Done : ' + JSON.stringify(data));
                alert('done: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');

                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
            }
        });
    })
}

//Event btns remove user
function event_Remove_Btn_Table_User(data_Select_Edit_Btn, data_Json_Selector) {
    $('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {

        var tr = $(this).closest("tr");

        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                'Sync': 'UserAddedController',
                'SubSync': 'delete_User',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {
                    json_Data: {
                        //'role': data_Json_Selector.role,
                        'component_view': data_Json_Selector.component_View,
                        'data_Table_Id': {
                            'table_Id': 'storeCashier_AddPeople_Form_UserAdded_Table',
                            'thead_Id': 'storeCashier_AddPeople_Form_UserAdded_Table_Thead',
                            'tbody_Id': 'storeCashier_AddPeople_Form_UserAdded_Table_Tbody'
                        },
                        id: tr.data('id'),
                        id_Btn1_Together: data_Json_Selector.id_Btn1_Together,
                        id_Btn2_Together: data_Json_Selector.id_Btn2_Together
                    }
                },
            },
            success: function (data) {
                //------------------------
                if (data.hasOwnProperty('success'))
                    create_Ul_Li_PNotify([data.message], 'success', data.add);
                if ($.fn.DataTable.isDataTable('#' + data_Json_Selector.userAdded_Table)) {
                    userAdded_Table.DataTable().destroy();
                }
                get_Language(data_Json_Selector.locale_toLowerCase).then(function (data) {
                    $("#" + data_Json_Selector.userAdded_Table).DataTable({
                        language: {url: "assets/app/js/json/datatable/language/" + data + ".json"},
                        /*dom: "Bfrtip",
                        buttons: [
                            {
                                extend: "copy",
                                className: "btn-sm",
                                text:"<i class='fa fa-copy'></i>"
                            },
                            /!*{
                                extend: "csv",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-xml-o'></i>"
                            },*!/
                            {
                                extend: "excel",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-excel-o'></i>"
                            },
                            {
                                extend: "pdfHtml5",
                                className: "btn-sm",
                                text:"<i class='fa fa-file-pdf-o'></i>"
                            },
                            {
                                extend: "print",
                                className: "btn-sm",
                                text:"<i class='fa fa-print'></i>"
                            },
                        ],*/
                        //responsive: true,
                        /* paging: false,
                         searching: false,*/
                        destroy: true,
                        keys: true,
                        fixedHeader: true,
                    });
                });
                $('#' + data_Json_Selector.btn_cancel_user).trigger('click');
                //--------------------------
                /*console.log('Done : ' + JSON.stringify(data));
                alert('done: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                Reload_Needed.script_User();
                //import('../initialize/show_Room_Repeat.js');
                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
            }
        });
    })
}

//Search for user in view user modal
$("#storeCashier_Work_Modal_ElementView_ModalBody_Search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#storeCashier_Work_Modal_ElementView_ModalBody .profile_details").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});


//////////////////////////////////// Validation  //////////////////////////////////////////////

//Validate phone input
function Validate_Phones_Input(input_Phone_Mobile, input_Phone_Fixed_Line, intl_MOBILE, intl_FIXED_LINE) {

    var isValid;

    console.log(isEmpty(input_Phone_Mobile))
    console.log(isEmpty(input_Phone_Fixed_Line))

    if (!isEmpty(input_Phone_Mobile)) {
        if (!isEmpty(input_Phone_Mobile.val())) {
            if (!intl_MOBILE.isValidNumber())
                return Lang.get('validation.validator.field_Mobile_Phone_Numbers_Validation_Error');
            /* isValid = Inputmask.isValid(input_Phone_Mobile.val(), inputmask_Phone_Mobile);
             if (!isValid)
                 return Lang.get('Dashboard.people_Plan.form.error.field_Mobile_Phone_Numbers_Validation_Error');*/
        }
    }
    if (!isEmpty(input_Phone_Fixed_Line)) {
        if (!isEmpty(input_Phone_Fixed_Line.val())) {
            if (!intl_FIXED_LINE.isValidNumber())
                return Lang.get('validation.validator.field_Fixed_Phone_Numbers_Validation_Error');
            /*isValid = Inputmask.isValid(input_Phone_Fixed_Line.val(), inputmask_Phone_Fixed_line);
            if (!isValid)
                return Lang.get('Dashboard.people_Plan.form.error.field_Fixed_Phone_Numbers_Validation_Error');*/
        }
    }

    if (!isEmpty(input_Phone_Mobile) && !isEmpty(input_Phone_Fixed_Line)) {
        if (isEmpty(input_Phone_Mobile.val()) && isEmpty(input_Phone_Fixed_Line.val()))
            return Lang.get('validation.validator.field_Fixed_And_Mobile_Phone_Numbers_IsEmpty_Validation_Error');
    }
    if (isEmpty(input_Phone_Mobile)) {
        if (isEmpty(input_Phone_Fixed_Line.val()))
            return Lang.get('validation.validator.field_Fixed_Phone_Numbers_IsEmpty_Validation_Error');
    }
    if (isEmpty(input_Phone_Fixed_Line)) {
        if (isEmpty(input_Phone_Mobile.val()))
            return Lang.get('validation.validator.field_Mobile_Phone_Numbers_IsEmpty_Validation_Error');
    }

    return true;
}

//Validate at least one mobile number
function Validate_At_Least_One_Mobile_Number(data) {

    var length = length_Arr(data, 'type', 'MOBILE')

    if (length < 1)
        return Lang.get('validation.validator.field_Mobile_Phone_Numbers_Empty_Validation_Error');

    return true;
}

//Validate address postal code input
async function Validate_Address_PostalCode_Input(input_Address, input_Postal_Code, intl_POSTAL_CODE) {

    var isValid;

    /*if (!isExist(() => input_Address.data('address')) /!*|| !isExist(() => input_Address.data('lat')) || !isExist(() => input_Address.data('lon'))*!/)
        return Lang.get('validation.validator.field_Address_Validation_Error');*/

    if (isEmpty(input_Postal_Code.val()))
        return true;

    if (!isExist(() => input_Postal_Code.data('regex')))
        return Lang.get('validation.validator.field_Postal_Code_Validation_Error');

    //isValid = Inputmask.isValid(input_Postal_Code.val(), JSON.parse(input_Postal_Code.data('regex')));

    var countryData = intl_POSTAL_CODE.getSelectedCountryData();

    let promise = new Promise((resolve, reject) => {
        get_PostalCode(countryData.iso2.toUpperCase()).then(function (data) {
            var regex = {regex: data.Regex};
            isValid = Inputmask.isValid(input_Postal_Code.val(), regex);
            resolve(isValid);
        })
    });
    let result = await promise;
    if (!result)
        return Lang.get('validation.validator.field_Postal_Code_Validation_Error');
    else
        return true;
}

//Validate currency input by currency type selector
async function Validate_Price_By_Currency_Type_Selector(input_Currency, input_Currency_Type_Selection_Selector) {
    let isValid;
    let currencyTypeSelect = input_Currency_Type_Selection_Selector.select2("data")[0];

    let promise = new Promise((resolve, reject) => {
        if (isExist(() => currencyTypeSelect.code) && !isEmpty(currencyTypeSelect.code)) {
            if (!isEmpty(input_Currency.val())) {
                get_Currency_Details_By_Currency_Code(currencyTypeSelect.code).then(function (data) {
                    if (isExist(() => data)) {
                        let inputmask = {
                            prefix: "",
                            groupSeparator: ",",
                            alias: "numeric",
                            digits: data.decimal_digits,
                            digitsOptional: !1
                        }
                        isValid = Inputmask.isValid(input_Currency.val(), inputmask);
                        if (!isValid)
                            resolve(Lang.get('validation.validator.money_invalid'))
                        else
                            resolve(isValid);

                    } else {
                        resolve(Lang.get('validation.validator.currency_code'));
                    }
                });

            } else {
                resolve(Lang.get('validation.validator.price_not_be_empty'));
            }
        } else {
            resolve(Lang.get('validation.validator.choose_currency'));
        }
    });
    let result = await promise;
    return result;
}

//Validate currency input by currency code
async function Validate_Price_By_Currency_Code(input_Currency, currency_Code) {
    var isValid;
    let promise = '';

    if (!isEmpty(input_Currency.val())) {
        promise = new Promise((resolve, reject) => {
            get_Currency_Details_By_Currency_Code(currency_Code).then(function (data) {
                if (isExist(() => data)) {
                    var inputmask = {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: data.decimal_digits,
                        digitsOptional: !1
                    }
                    isValid = Inputmask.isValid(input_Currency.val(), inputmask);
                    if (!isValid)
                        resolve(Lang.get('validation.validator.money_invalid'))
                    else
                        resolve(isValid);

                } else {
                    resolve(Lang.get('validation.validator.currency_code'));
                }
            });
        });
    } else {
        return Lang.get('validation.validator.price_not_be_empty');
    }

    let result = await promise;
    return result;
}

// Validate: The active product must have at least one retail price and the retail and wholesale prices of the product can only have a default value.
function Validate_Product_Atleast_RetailPrice_And_WholesalePrices(retailPrices_Table_Selector, wholesalePrices_Table_Selector, productState) {
    var isValidRetailPrices = true;
    var isValidWholesalePrices = true;
    var quantityDefaultRetailPrices = 0;
    var quantityDefaultWholesalePrice = 0;

    $.each(retailPrices_Table_Selector.find('tbody tr'), function (item, value) {
        console.log($(this).data('sendTablePrices'));
        if ($(this).data('sendTablePrices').default)
            quantityDefaultRetailPrices++;
    })
    $.each(wholesalePrices_Table_Selector.find('tbody tr'), function (item, value) {
        console.log($(this).data('sendTablePrices'));
        if ($(this).data('sendTablePrices').default)
            quantityDefaultWholesalePrice++;
    })
    console.log(quantityDefaultRetailPrices);
    console.log(quantityDefaultWholesalePrice);

    if (productState && quantityDefaultRetailPrices != 1)
        isValidRetailPrices = false;

    if (!productState && quantityDefaultRetailPrices > 1)
        isValidRetailPrices = false;

    if (quantityDefaultWholesalePrice > 1)
        isValidWholesalePrices = false;

    if (!isValidRetailPrices && !isValidWholesalePrices)
        return Lang.get('validation.retail_price_and_wholesale_price_default');

    if (!isValidWholesalePrices)
        return Lang.get('validation.wholesale_price_default');

    if (!isValidRetailPrices)
        return Lang.get('validation.retail_price_default');

    return true;
}

//Validate currency code in system currency
async function Validate_Currency_Code_In_System_Currencies(currency_Code) {
    var isValid = true;
    var promise = new Promise((resolve, reject) => {
        getCurrenciesUser().then(function (data) {
            var system_Currencies = Object.keys(data)
            if ($.inArray(currency_Code, system_Currencies) < 0)
                isValid = Lang.get('validation.validator.currency_code');
            resolve(isValid);
        })
    })
    let result = await promise;
    return result;
}

//Validate first name
function Validate_First_Name(input_First_Name) {

    var isValid = false;

    // Type: 1 not all characters
    /*var regex = {
        'mask': '*{3,40}'
    };
    isValid = Inputmask.isValid(input_First_Name.inputmask('unmaskedvalue'), regex);*/

    // Type: 2
    /*if (/^.{3,40}$/.test(input_First_Name.inputmask('unmaskedvalue'))) {
        isValid = true;
    }*/

    // Type: 3
    var inputmask = {
        regex: '^.{3,40}$'
    }
    isValid = Inputmask.isValid(input_First_Name.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.firstName');
    }
    return isValid;
}

//Validate description
function Validate_Description(input_Description) {

    var isValid = false;

    // Type: 1 not all characters
    /*var regex = {
        'mask': '*{3,40}'
    };
    isValid = Inputmask.isValid(input_First_Name.inputmask('unmaskedvalue'), regex);*/

    // Type: 2
    /*if (/^.{3,40}$/.test(input_First_Name.inputmask('unmaskedvalue'))) {
        isValid = true;
    }*/

    // Type: 3
    var inputmask = {
        regex: '^.{3,250}$'
    }
    isValid = Inputmask.isValid(input_Description.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.description');
    }
    return isValid;
}

//Validate name
function Validate_Name(input_Description, length) {

    var isValid = false;

    var inputmask = {
        regex: '^.{3,' + length + '}$'
    }
    isValid = Inputmask.isValid(input_Description.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.firstName');
    }
    return isValid;
}

//Validate number one to infinity
function Validate_Number_One_to_Infinity(input_Number_One_to_Infinity) {

    var isValid = false;

    var inputmask = {
        regex: '^[1-9][0-9]*$'
    }

    isValid = Inputmask.isValid(input_Number_One_to_Infinity.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.number_invalid');
    }
    return isValid;
}

//Validate number zero to infinity
function Validate_Number_Zero_to_Infinity(input_Number_Zero_to_Infinity) {

    var isValid = false;

    var inputmask = {
        regex: '^[0-9]*$'
    }

    isValid = Inputmask.isValid(input_Number_Zero_to_Infinity.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.number_invalid');
    }
    return isValid;
}

//Validate national id
function Validate_National_Id(input_National_Id) {

    var isValid;

    var inputmask = {
        regex: '^.{3,40}$'
    }
    isValid = Inputmask.isValid(input_National_Id.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.national_id');
    }
    return true;
}

//Validate registration number
function Validate_Registration_Number(input_Registration_Number) {

    var isValid;

    var inputmask = {
        regex: '^.{3,40}$'
    }
    isValid = Inputmask.isValid(input_Registration_Number.inputmask('unmaskedvalue'), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.registration_number');
    }
    return true;
}

//Validate economical number
function Validate_Economical_Number(input_Economical_Number) {

    var isValid;

    var inputmask = {
        regex: '^.{3,40}$'
    }
    isValid = Inputmask.isValid(input_Economical_Number.inputmask('unmaskedvalue'), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.economical_number');
    }
    return true;
}

//Validate url
function Validate_URL(input_URL) {

    var isValid;
    /* var regex = '(?=^.{3,30}$)';
     var inputmask = {regex: regex};*/
    isValid = Inputmask.isValid(input_URL.val(), "url");

    if (!isValid) {
        return Lang.get('validation.validator.url');
    }
    return true;
}

//Validate last name
function Validate_Last_Name(input_Last_Name) {
    var isValid;

    var inputmask = {
        regex: '^.{3,60}$'
    }
    isValid = Inputmask.isValid(input_Last_Name.inputmask('unmaskedvalue'), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.lastName');
    }
    return true;
}

//Validate percentage
function Validate_Percentage(input_Percentage) {
    var isValid = true;

    var inputmask = {
        alias: "numeric",
        integerDigits: 2,
        digits: 2,
        suffix: " %",
        min: 0,
        max: 100,
        allowMinus: !1,
        digitsOptional: false,
        placeholder: "0"
    }
    isValid = Inputmask.isValid(input_Percentage.val(), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.percentage_incorrect');
    }
    return isValid;
}

//Validate percentage
function Validate_Decimal_Zero_To_One(input_Decimal_Zero_To_One) {
    var isValid = true;

    let inputmask = {
        alias: "numeric",
        // integerDigits: 3,
        digits: 2,
        // suffix: '',
        min: 0,
        max: 1,
        allowMinus: !1,
        digitsOptional: false,
        placeholder: "0",
        rightAlign: false
    }
    isValid = Inputmask.isValid(input_Decimal_Zero_To_One.val(), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.decimal_number_between_zero_and_one');
    }
    return isValid;
}

//Validate percentage
function Validate_Decimal_Min_To_Max(input_Decimal_Zero_To_One, min, max, digits) {
    let isValid = true;

    let inputmask = {
        alias: "numeric",
        // integerDigits: 3,
        digits: digits,
        // suffix: '',
        min: min,
        max: max,
        allowMinus: !1,
        digitsOptional: false,
        placeholder: "0",
        rightAlign: false
    }
    isValid = Inputmask.isValid(input_Decimal_Zero_To_One.val(), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.decimal_number_between_min_and_max').replace(":min", min).replace(":max", max);
    }
    return isValid;
}

//Validate currency desired decimal digits
function Validate_Currency_Desired_Decimal_Digits(input_Percentage, decimal_Digits) {
    var isValid = true;

    if (isEmpty(input_Percentage.val()))
        return Lang.get('validation.validator.invalid');

    let inputmask = {
        prefix: "",
        groupSeparator: ",",
        alias: "numeric",
        digits: decimal_Digits,
        digitsOptional: !1,
        rightAlign: false
    }
    isValid = Inputmask.isValid(input_Percentage.val(), inputmask);


    if (!isValid) {
        return Lang.get('validation.validator.invalid');
    }
    return isValid;
}

//Validate gender
function Validate_Gender(input_Gender) {
    if (!isExist(() => input_Gender.find(".active input").val()))
        return Lang.get('validation.validator.gender');
    return true;
}

//Validate gender
function Validate_Input_Radio(input_Input_Radio) {
    if (!isExist(() => input_Input_Radio.find(".active input").val()))
        return Lang.get('validation.validator.gender');
    return true;
}

//Validate ssn
function Validate_SSN(input_Last_SSN) {
    var isValid;
    var inputmask = '';
    var lang = $('html').attr('lang').toLowerCase();
    if (lang == 'fa') {
        inputmask = "999-999999-9";
    }
    if (lang == 'en') {
        inputmask = "999-99-9999";
    }

    isValid = Inputmask.isValid(input_Last_SSN.val(), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.ssn');
    }
    return true;
}

//Validate national_Company_ID
function Validate_National_Company_ID(input_National_Company_ID) {
    var isValid;
    var inputmask = '';
    var lang = $('html').attr('lang').toLowerCase();
    if (lang == 'fa') {
        inputmask = "99999999999";
    }
    if (lang == 'en') {
        inputmask = "9999999999";
    }

    isValid = Inputmask.isValid(input_National_Company_ID.val(), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.national_company_id');
    }
    return true;
}

//Validate sheba
function Validate_Sheba(input_Sheba) {

    let isValid;
    let inputmask = 'IR999999999999999999999999';

    isValid = Inputmask.isValid(input_Sheba.val(), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.sheba');
    }
    return true;
}

//Validate bank_card
function Validate_Bank_Card(input_Bank_Card) {

    let isValid;
    let inputmask = '9999-9999-9999-9999';

    isValid = Inputmask.isValid(input_Bank_Card.val(), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.bank_card');
    }
    return true;
}

//Validate email
function Validate_Email(email) {
    var isValid;
    /* var regex = '[a-za-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?';
     var inputmask = {regex: regex};*/

    isValid = Inputmask.isValid(email, 'email');

    if (!isValid) {
        return Lang.get('validation.validator.email');
    }
    return true;
}

//Validate decimal
function Validate_Decimal(decimal) {
    var isValid;

    isValid = Inputmask.isValid(decimal.val(), 'decimal');

    if (!isValid) {
        return Lang.get('validation.validator.invalid');
    }
    return true;
}

//Validate decimal
function Validate_Input_Item_NumberOfItemsInPackage(NumberOfItemsInPackage_Selector, packageType_Selector) {
    var isValid = true;
    var packageType_Data = packageType_Selector.select2("data")[0];
    var not_In_Arr = ['ton', 'kilogram', 'gram', 'milligram', 'microgram', 'kilometer', 'meter', 'centimeter', 'millimeter', 'micrometer', 'cubic_meters', 'gallon', 'liter', 'cubic_centimeter', 'milliliter', 'cubic_millimeter', 'dozen', 'half_a_dozen'];

    if (!isExist(() => packageType_Data.name) || isEmpty(packageType_Data.name)) {
        return Lang.get('validation.validator.choose_package_type');
    }
    if ($.inArray(packageType_Data.name.toLowerCase(), not_In_Arr) < 0) {
        if (isEmpty(NumberOfItemsInPackage_Selector.val()))
            return Lang.get('validation.validator.number_of_items_in_package_not_be_empty');
        else {
            // isValid = Validate_Number_Zero_to_Infinity(NumberOfItemsInPackage_Selector);
            isValid = Validate_Decimal(NumberOfItemsInPackage_Selector);
            if (isValid !== true)
                return Lang.get('validation.validator.number_of_items_in_package_invalid');
        }
    }
    return true;
}

function Validate_Tags_Email(tags_Email_Items) {
    var isValid = true;
    /* var regex = '[a-za-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?';
     var inputmask = {regex: regex};*/
    var error = [];
    $.each(tags_Email_Items, function (key, value) {
        var check = Validate_Email(value.value)
        if (check !== true) {
            error.push(Lang.get('validation.validator.email') + ' (' + value.value + ')')
            isValid = false;
        }
    })
    if (!isValid) {
        return error;
    }
    return true;
}

//Validate date
function Validate_Date(input_Date) {
    var isValid;

    isValid = Inputmask.isValid(input_Date.val(), {alias: "datetime", inputFormat: "yyyy-mm-dd"});
    //isValid = Inputmask.isValid(input_Date.val(), "9999-99-99");

    if (!isValid) {
        return Lang.get('validation.validator.date');
    }
    return true;
}

//Validate pDatepicker
function Validate_PDatepicker(pDatepicker) {
    var isValid;

    let date = moment(pDatepicker.getState().selected.unixDate).tz(win_Timezone).utc().format('YYYY-MM-DD');
    isValid = Inputmask.isValid(date, {alias: "datetime", inputFormat: "yyyy-mm-dd"});
    //isValid = Inputmask.isValid(input_Date.val(), "9999-99-99");

    if (!isValid) {
        return Lang.get('validation.validator.date');
    }
    return true;
}

//Validate time
function Validate_Time(input_Time) {
    var isValid;

    isValid = Inputmask.isValid(input_Time.val(), {alias: "datetime", hourFormat: "24", inputFormat: "HH:MM:ss"});

    if (!isValid) {
        return Lang.get('validation.validator.time');
    }
    return true;
}

//Validate min check box
function Validate_Min_CheckBox(input_div_CheckBoxes_Id) {
    if ($("#" + input_div_CheckBoxes_Id + " input[type='checkbox']:checked").length < 1)
        return Lang.get('validation.validator.minChecked');
    return true;
}

//Validate It must be exactly a radio
function Validate_ExactlyOneRadio(input_div_Radio_Id) {
    if ($("#" + input_div_Radio_Id + " input[type='radio']:checked").length != 1)
        return Lang.get('validation.validator.exactly_one_radio');
    return true;
}

//Validate Element values
function Validate_Value(value_Send, array_Value_Exist) {
    var isValid = true;

    if ($.inArray(value_Send.toLowerCase(), array_Value_Exist) < 0)
        isValid = false;
    // return select.length

    if (!isValid) {
        return Lang.get('validation.validator.repeat');
    }
    return true;
}

function Validate_Tags_Value(array_Value_Send, array_Value_Exist) {
    var isValid = true;
    /* var regex = '[a-za-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?';
     var inputmask = {regex: regex};*/
    var error = [];
    $.each(array_Value_Send, function (key, value) {
        var check = Validate_Value(value, array_Value_Exist)
        if (check !== true) {
            error.push(Lang.get('validation.validator.repeat') + ' (' + value + ')')
            isValid = false;
        }
    })
    if (!isValid) {
        return error;
    }
    return true;
}

//Validate when add to input tag currencyAll check for non-duplication
function Validate_InputTagCurrencyAll_Non_Duplication(data_InputTag, add_Data_Currency_Code) {
    var isValid = true;

    console.log(data_InputTag)
    var select = $.map(data_InputTag, function (value, key) {
        return value.value;
    })
    console.log(select)
    select = select.map(function (x) {
        return x.toUpperCase()
    })
    if ($.inArray(add_Data_Currency_Code.toUpperCase(), select) >= 0)
        isValid = false;
    // return select.length

    if (!isValid) {
        return Lang.get('validation.validator.currency_duplication');
    }
    return true;
}

//Validate when remove tag in inputtas
async function Validate_InputTagCurrency_When_Remove(currencyCode) {
    var isCurrencyCanBeRemoved = await baseServicesDB.currencyServices.isCurrencyCanBeRemoved(currencyCode);
    if (isCurrencyCanBeRemoved) {
        return true
    } else return Lang.get('Dashboard.settings.system.currency.message.currency_Successfully_CanNotRemoved');
}

//Validate days of the week
function Validate_DaysOfTheWeek(day) {
    var isValid = true;

    if ($.inArray(day.toLowerCase(), days_of_the_week) < 0)
        isValid = false;
    // return select.length

    if (!isValid) {
        return Lang.get('validation.validator.days_of_the_week');
    }
    return true;
}

//Validate select2 user add
function Validate_Select2_UserAdd(select2_Selector, table_Body_Trs_Selector) {
    var isValid = true;
    var dataID = [];
    var select_ID = '';

    if (!isExist(() => select2_Selector.select2("data")[0].id)) {
        isValid = false;
        console.log('//1')
        return Lang.get('validation.validator.person_selection');
    } else select_ID = select2_Selector.select2("data")[0].id;
    console.log('//2')

    $.each(table_Body_Trs_Selector, function (item, value) {
        console.log('//3')
        console.log($(this).data('dataSend'))
        if ($(this).data('dataSend').id == select_ID) {
            isValid = Lang.get('validation.validator.is_exist_person');
            return false;
        }
    })

    return isValid;

    /*$.each(table_Body_Trs_Selector, function (item, value) {
        dataID.push($(this).data('dataSend').id);
    })

    if ($.inArray(select, dataID) >= 0) {
        isValid = false;
        return Lang.get('validation.validator.is_exist_person');
    }
    return isValid;*/
}

//Validate select2 dealer add
function Validate_Select2_DealerAdd(select2_Selector, table_Body_Trs_Selector) {
    var isValid = true;
    var dataForCheck = [];
    var selected_Id = '';
    var selected_Dealer_Type = '';


    if (!isExist(() => select2_Selector.select2("data")[0].id) || !isExist(() => select2_Selector.select2("data")[0].dealer_type)) {
        isValid = false;
        return Lang.get('validation.validator.dealer_selection');
    } else {
        selected_Id = select2_Selector.select2("data")[0].id;
        selected_Dealer_Type = select2_Selector.select2("data")[0].dealer_type;
    }


    $.each(table_Body_Trs_Selector, function (item, value) {
        var dataForPush = {
            id: '',
            dealer_type: '',
        }

        dataForPush.id = $(this).data('id');
        dataForPush.dealer_type = $(this).data('dealer_type');

        dataForCheck.push(dataForPush);
    })

    var check = dataForCheck.filter(function (value, index) {
        return value.id == selected_Id && value.dealer_type == selected_Dealer_Type
    });

    if (check.length > 0) {
        isValid = false;
        return Lang.get('validation.validator.is_exist_dealer');
    }

    return isValid;
}

//Validate select2 user dealer add
function Validate_Select2_UserDealerAdd(select2_Selector, table_Body_Trs_Selector) {
    var isValid = true;
    var dataForCheck = [];
    var selected_Id = '';
    var selected_Search_Type = '';
    var selected_Dealer_Type = '';

    if (!isExist(() => select2_Selector.select2("data")[0].id) || !isExist(() => select2_Selector.select2("data")[0].search_type)) {
        isValid = false;
        return Lang.get('validation.validator.user_Dealer_selection');
    } else {
        selected_Id = select2_Selector.select2("data")[0].id;
        selected_Search_Type = select2_Selector.select2("data")[0].search_type;
        selected_Dealer_Type = select2_Selector.select2("data")[0].dealer_type;
    }

    $.each(table_Body_Trs_Selector, function (item, value) {
        var dataForPush = {
            id: '',
            search_type: '',
            dealer_type: '',
        }

        dataForPush.id = $(this).data('id');
        dataForPush.dealer_type = $(this).data('dealer_type');
        dataForPush.search_type = $(this).data('search_type');

        dataForCheck.push(dataForPush);
    })

    var check = dataForCheck.filter(function (value, index) {
        return value.id == selected_Id && value.search_type == selected_Search_Type && value.dealer_type == selected_Dealer_Type
    });

    if (check.length > 0) {
        isValid = false;
        return Lang.get('validation.validator.is_exist_User_Dealer');
    }
    return isValid;
}

//Validate select2 product add
function Validate_Select2_ProductAdd(select2_Selector, table_Body_Trs_Selector) {
    var isValid = true;
    var dataID = [];
    var select = '';

    if (!isExist(() => select2_Selector.select2("data")[0].id)) {
        isValid = false;
        return Lang.get('validation.validator.product_selection');
    } else select = select2_Selector.select2("data")[0].id;

    $.each(table_Body_Trs_Selector, function (item, value) {
        dataID.push($(this).data('sendProductDetails').id);
    })

    if ($.inArray(select, dataID) >= 0) {
        isValid = false;
        return Lang.get('validation.validator.is_exist_product');
    }
    return isValid;
}

function Validate_Tags_DaysOfTheWeek(tags_DaysOfTheWeek_Items) {
    var isValid = true;
    /* var regex = '[a-za-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?';
     var inputmask = {regex: regex};*/
    var error = [];
    $.each(tags_DaysOfTheWeek_Items, function (key, value) {
        var check = Validate_DaysOfTheWeek(value.value)
        if (check !== true) {
            error.push(Lang.get('validation.validator.days_of_the_week') + ' (' + value.value + ')')
            isValid = false;
        }
    })
    if (!isValid) {
        return error;
    }
    return true;
}

//Validate Rtl by language code
function Validate_Rtl_By_Language_Code(language_Code) {
    var isValid = true;

    if ($.inArray(language_Code.toLowerCase(), rtl_Language_Code) < 0)
        isValid = false;

    return isValid;
}

//Validate is exist barcode in array
function Validate_IsExist_Barcode_In_Array(barcodesArray, barcode) {
    var isExist = false;

    $.each(barcodesArray, function (item, value) {
        if (value.exist) {
            if (value.barcode.barcode == barcode) {
                isExist = true;
                return false; // breaks
            }
        } else {
            if (value.barcode == barcode) {
                isExist = true;
                return false; // breaks
            }
        }
    })
    return isExist;
}

//Validate input tag currency all min at least one value and not duplicate
function Validate_InputTagCurrencyAll(input_Last_SSN) {
    var isValid;
    var inputmask = '';
    var lang = $('html').attr('lang').toLowerCase();
    if (lang == 'fa') {
        inputmask = "999-999999-9";
    }
    if (lang == 'en') {
        inputmask = "999-99-9999";
    }

    isValid = Inputmask.isValid(input_Last_SSN.val(), inputmask);

    if (!isValid) {
        return Lang.get('validation.validator.ssn');
    }
    return true;
}

//Validate payment
function Validate_Payment(data_Order, data_Payment_Method, data_Amount_Payable) {

    let error = [];

    if (!isExist(() => data_Order) || isEmpty(data_Order)) {
        error.push(Lang.get('validation.validator.product_at_least_one_barcode'))
    }
    if (!isExist(() => data_Amount_Payable) || isEmpty(data_Amount_Payable)) {
        error.push(Lang.get('validation.validator.amount_payable_selection'))
    }
    if (!isExist(() => data_Payment_Method) || isEmpty(data_Payment_Method)) {
        error.push(Lang.get('validation.validator.payment_method_selection'))
    }
    return error;
}

//Validate sale on credit
function Validate_Sale_On_Credit(order, sum_Final_Status) {

    let is_Settled = true;
    let is_Credit = false;

    // Check settled prices
    switch (order.payment_type) {
        case 'separate_payment':
            $.each(sum_Final_Status, function (key, value) {
                if (value.status != 'settled') {
                    is_Settled = false;
                    // return false; // breaks
                }
                if (value.status == 'credit') {
                    is_Credit = true;
                }
            });
            break;
        case 'single_currency_payment':
            if (sum_Final_Status.status != 'settled')
                is_Settled = false;
            break;
    }

    /*if (is_Settled)
        return Lang.get('validation.validator.order_amount_settled');*/
    if (is_Credit)
        return Lang.get('validation.validator.credit_amount_must_be_paid_first');

    else {
        if (isEmpty(order.customerable) || isExist(() => order.customerable.username) && order.customerable.username == 'default_customer') {
            return Lang.get('validation.validator.select_desired_customer');
        } else {
            switch (order.customerable.search_type) {
                case "user":
                    if (isEmpty(order.customerable.first_name) || isEmpty(order.customerable.last_name) || isEmpty(order.customerable.ssn) || isEmpty(order.customerable.phones) || isEmpty(order.customerable.addresses)) {
                        return Lang.get('validation.validator.details_customer_not_empty');
                    }
                    break;
                case "dealer":
                    switch (order.customerable.dealer_type) {
                        case 'company':
                        case 'factory':
                            if (isEmpty(order.customerable.name_org) || isEmpty(order.customerable.economical_number) || isEmpty(order.customerable.national_ID) || isEmpty(order.customerable.registration_number) || isEmpty(order.customerable.user_managing_director) || isEmpty(order.customerable.phones) || isEmpty(order.customerable.addresses)) {
                                return Lang.get('validation.validator.details_company_factory_not_empty');
                            }
                            break;
                        case 'shop':
                            if (isEmpty(order.customerable.name_org) || isEmpty(order.customerable.owners) || isEmpty(order.customerable.phones) || isEmpty(order.customerable.addresses)) {
                                return Lang.get('validation.validator.details_shop_not_empty');
                            }
                            break;
                    }
                    break;
            }
        }
    }
    return true;
}

//////////////////////////////////// PRIMITIVE DATA TYPES /////////////////////////////////////

function isBoolean(arg) {
    return typeof arg === 'boolean';
}

function isNumber(arg) {
    return typeof arg === 'number';
}

function isString(arg) {
    return typeof arg === 'string';
}

function isFunction(arg) {
    return typeof arg === 'function';
}

function isObject(arg) {
    return arg !== null && typeof arg === 'object';
}

function isEmptyObject(a) {
    if (typeof a.length === 'undefined') { // it's an Object, not an Array
        var hasNonempty = Object.keys(a).some(function nonEmpty(element) {
            return !isEmpty(a[element]);
        });
        return hasNonempty ? false : isEmptyObject(Object.keys(a));
    }
    return !a.some(function nonEmpty(element) { // check if array is really not empty as JS thinks
        return !isEmpty(element); // at least one element should be non-empty
    });
};

function isEmpty(arg) {
    return arg === false
        || arg == null  // Check for null or undefined
        || arg.length === 0  // Check for empty String (Bonus check for empty Array)
        || (typeof arg === 'object' && Object.keys(arg).length === 0) // Check for empty Object or Array
    //|| (typeof arg === 'object' && isEmptyObject(arg)) // Check for empty Object or Array

}

function isExist(arg) {
    try {
        return arg();
    } catch (e) {
        return false;
    }
}

function isOnline() {
    return (navigator.onLine)
}

function isUndefined(variable) {
    if (typeof variable === 'undefined') {
        return true;
    } else {
        return false;
    }
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

function get_Number_Of_Digits_After_Decimal(value) {
    try {
        return Number(value).toString().split(".")[1].length;
    } catch {
        return 0;
    }
}

//////////////////////////////////// Json & Arr /////////////////////////////////////

//Remove node object by id
function remove_Node_Object_By_ID(object, id) {
    return object.filter(function (emp) {
        if (emp.id == id) {
            return false;
        }
        return true;
    });
}

//Remove node arr by id
function remove_Node_Arr_By_Value(arr, value) {
    return arr.filter(function (arr_Value) {
        if (arr_Value == value) {
            return false;
        }
        return true;
    });
}

//Sorted json by id
function sorted_Arr_By_Id(arr) {
    arr.sort(function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    });
}

//Return length in arr by where , is
function length_Arr(arr, where, is) {
    var select = arr.filter(function (data) {
        return data[where] == is
    });
    return select.length
}

//Return data level 2 by name and where , is
function get_Level2_Data(data, where, is, isarray = true, index = true) {
    var result = {};
    $.map(data, function (value, key) {
        if (!isarray && value[where] == is) {
            if (!index)
                result.countryCode = key;
            else result.index = key;
            $.each(value, function (key, value) {
                result[key] = value
            })
        }
        if (isarray && $.inArray(is, value[where]) >= 0) {
            if (!index)
                result.countryCode = key;
            else result.index = key;
            $.each(value, function (key, value) {
                result[key] = value
            })
        }
    });
    return result;
}

function set_Data(data, switched) {
    switch (switched) {
        case 'json_Data_Final_User':
            json_Data_Final_User = data;
            break;
        case 'json_Data_Final_DEALER':
            json_Data_Final_DEALER = data;
            break;
        case 'json_Data_Final_User_Add_Modal':
            json_Data_Final_User_Add_Modal = data;
            break;
        case 'json_Data_Final_Product':
            json_Data_Final_Product = data;
            break;
        ////////////////// Allow getScript /////////////////
        case 'allow_GetScript_Component_Users_Setting':
            allow_GetScript_Component_Users_Setting = data;
            break;
        case 'allow_GetScript_Component_Users_Setting_Modal':
            allow_GetScript_Component_Users_Setting_Modal = data;
            break;
        case 'allow_GetScript_Component_Products_Setting':
            allow_GetScript_Component_Products_Setting = data;
            break;
        case 'allow_GetScript_Component_CardItems_Setting':
            allow_GetScript_Component_CardItems_Setting = data;
            break;
        case 'allow_GetScript_Component_System_settings':
            allow_GetScript_Component_System_settings = data;
            break;
        case 'allow_GetScript_Component_Dashboard_1':
            allow_GetScript_Component_Dashboard_1 = data;
            break;
        case 'allow_GetScript_Component_Menu':
            allow_GetScript_Component_Menu = data;
            break;
        case 'allow_GetScript_Component_Reports_WF_Cartables':
            allow_GetScript_Component_Reports_WF_Cartables = data;
            break;
    }
}

function get_Data(switched) {
    switch (switched) {
        case 'json_Data_Final_User':
            return json_Data_Final_User;
            break;
        case 'json_Data_Final_DEALER':
            return json_Data_Final_DEALER;
            break;
        case 'json_Data_Final_User_Add_Modal':
            return json_Data_Final_User_Add_Modal;
            break;
        case 'json_Data_Final_Product':
            return json_Data_Final_Product;
            break;
        ////////////////// Allow getScript /////////////////
        case 'allow_GetScript_Component_Users_Setting':
            return allow_GetScript_Component_Users_Setting;
            break;
        case 'allow_GetScript_Component_Users_Setting_Modal':
            return allow_GetScript_Component_Users_Setting_Modal;
            break;
        case 'allow_GetScript_Component_Products_Setting':
            return allow_GetScript_Component_Products_Setting;
            break;
        case 'allow_GetScript_Component_CardItems_Setting':
            return allow_GetScript_Component_CardItems_Setting;
            break;
        case 'allow_GetScript_Component_System_settings':
            return allow_GetScript_Component_System_settings;
            break;
        case 'allow_GetScript_Component_Dashboard_1':
            return allow_GetScript_Component_Dashboard_1;
            break;
        case 'allow_GetScript_Component_Menu':
            return allow_GetScript_Component_Menu;
            break;
        case 'allow_GetScript_Component_Reports_WF_Cartables':
            return allow_GetScript_Component_Reports_WF_Cartables;
            break;
    }
}

//////////////////////////////////// Select2 /////////////////////////////////////

/*// Select2 data update
function select2_UserMatcher_Data_Update(id, get_Script) {

    var select_All = $('[data-matcher="userSelection"]');

    get_User_Details_By_ID(id).then(function (data) {
        $.each(select_All, function (key, value) {
            var select2_Data = $(this).select2("data");

            // The first method
            /!* select2_Data.forEach(function (value, key) {
                 if (value['id'] == id) {
                     console.log('data id true')
                     if (isExist(() => data.first_name))
                         value['first_name'] = data.first_name
                     if (isExist(() => data.first_name))
                         value['last_name'] = data.last_name
                     if (isExist(() => data.gender))
                         value['gender'] = data.gender
                     if (isExist(() => data.email))
                         value['email'] = data.email
                     if (isExist(() => data.ssn))
                         value['ssn'] = data.ssn
                     if (isExist(() => data.date_of_birth))
                         value['date_of_birth'] = data.date_of_birth
                     if (isExist(() => data.isUserCanBeRemoved))
                         value['isUserCanBeRemoved'] = data.isUserCanBeRemoved
                     if (isExist(() => data.created_at))
                         value['created_at'] = data.created_at
                     if (isExist(() => data.updated_at))
                         value['updated_at'] = data.updated_at
                     if (isExist(() => data.addresses))
                         value['addresses'] = data.addresses
                     if (isExist(() => data.phones))
                         value['phones'] = data.phones
                 }
             });*!/
            // The second method
            select2_Data = $.map(select2_Data, function (value, key) {
                if (value['id'] == id) {
                    if (isExist(() => data.first_name))
                        value['first_name'] = data.first_name
                    if (isExist(() => data.first_name))
                        value['last_name'] = data.last_name
                    if (isExist(() => data.gender))
                        value['gender'] = data.gender
                    if (isExist(() => data.email))
                        value['email'] = data.email
                    if (isExist(() => data.ssn))
                        value['ssn'] = data.ssn
                    if (isExist(() => data.date_of_birth))
                        value['date_of_birth'] = data.date_of_birth
                    if (isExist(() => data.isUserCanBeRemoved))
                        value['isUserCanBeRemoved'] = data.isUserCanBeRemoved
                    if (isExist(() => data.created_at))
                        value['created_at'] = data.created_at
                    if (isExist(() => data.updated_at))
                        value['updated_at'] = data.updated_at
                    if (isExist(() => data.addresses))
                        value['addresses'] = data.addresses
                    if (isExist(() => data.phones))
                        value['phones'] = data.phones
                    return value;
                } else return value;
            });
            $(this).select2('data', select2_Data);
            $(this).trigger('change.select2');
        })
        $.getScript(get_Script);
    })
}*/

// Select2 initialize user
function initialize_Select2_User(select2_Selector, variable_Save_Data_Val_Text, maximum_Selection_Length, get_Script, role = []) {
    if (isEmpty(variable_Save_Data_Val_Text))
        variable_Save_Data_Val_Text = [];
    select2_Selector.select2({
        //language: 'fa',
        //theme: "classic",
        multiple: true,
        maximumSelectionLength: maximum_Selection_Length,
        placeholder: Lang.get('Dashboard.public.placeholder_Search_Person'),
        minimumInputLength: 1,
        closeOnSelect: true,
        selectOnClose: true,
        //allowClear: true,
        ajax: {
            url: '/',//route('storeCashier.storeCashier_Controller'),
            //url: 'https://nominatim.openstreetmap.org/search',
            /*url: function (params) {
                return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
            },*/
            //dataType: 'json',
            delay: 250,
            type: 'post',
            data: function (params) {
                return {
                    Sync: 'UserAddedController', // search term
                    SubSync: 'get_User_Search',
                    Data: {
                        json_Data: {
                            search: params.term,
                            role: role,
                            id: get_Data(variable_Save_Data_Val_Text),
                            page: params.page,
                        }
                    },

                };
            },
            /*data: function (params) {
                return {
                    format: 'json', // search term
                    page: params.page,
                    addressdetails: 1,
                    'accept-language': win_Locale,
                    //limit: '5',
                    q: params.term,
                    //limit:5
                };
            },*/
            processResults: function (data, params) {
                // console.log(data);
                params.page = params.page || 1;
                return {
                    results: data,
                    pagination: {
                        more: (params.page * 10) < data.total
                    }
                };
                /* return {
                     results: $.map(data, function (obj) {
                         console.log(obj);
                         return {
                             data: obj,
                             id: obj.id
                            /!* lat: obj.lat,
                             lon: obj.lon,
                             display_name: obj.display_name,
                             type: obj.type,
                             address: obj.address,
                             id: obj.display_name*!/
                         };
                     })
                 };*/
            },
            cache: false
        },
        templateResult: function (repo) {
            if (repo.loading) {
                return repo.text;
            }
            return '<div>' + repo.first_name + ' ' + repo.last_name + '</div>';
        },
        templateSelection: function (repo) {
            return repo.first_name + ' ' + repo.last_name +
                '<button type="button" data-toggle="modal" data-target="#storeCashier_Work_Modal_UserAdd" class="btn btn-info btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-select="userEditSelection"> <i class="fa fa-pencil"> &nbsp;' + Lang.get('Dashboard.public.form.edit') + '</i></button>' +
                '<button type="button" data-toggle="modal" data-target="#storeCashier_Work_Modal_ElementView" class="btn btn-primary btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-select="userViewSelection"> <i class="fa fa-eye"> &nbsp;' + Lang.get('Dashboard.public.form.view_details') + '</i></button>' || repo.text;
        },
        escapeMarkup: function (Markup) {
            return Markup;
        }
    })
        .on('select2:select', function (e) {
            //------------------------
            var data = select2_Selector.select2("data");
            // console.log(data);
            $.getScript(get_Script);
            $('input.select2-search__field').trigger('blur')
        })
        .on("select2:unselect", function (e) {
            //--------------------------
            var data = select2_Selector.select2("data");
            //console.log(data);
            /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
            data_ID=$.map(data, function (value, key) {
                return value['id'];
            })*/
            //$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2('destroy');
            // $('#storeCashier_AddDealer_Form_Supp_Suppliers').html(null);
            /*var value = e.params.data.id;
            console.log(value);
            console.log(e.params.data);*/
        })
        .on("select2:selecting", function (e) {
            /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
            var data_ID=$.map(data, function (value, key) {
                return value['id'];
            })*/
            //console.log(select2_Selector.select2("data"))
            //console.log(ss)
        })
        .on("change", function (e) {
            /* var data = select2_Selector.select2("data");
             data = $.map(data, function (value, key) {
                 return value['id'];
             }) // Or select2_Selector.val();
             if (!isEmpty(variable_Save_Data_Val_Text))
                 set_Data(data, variable_Save_Data_Val_Text)*/

        });
}

// Select2 initialize dealer
function initialize_Select2_Dealer(select2_Selector, dealer_ID_Text, dealer_Type_Text, maximum_Selection_Length, get_Script) {
    if (isEmpty(dealer_ID_Text))
        dealer_ID_Text = [];
    select2_Selector.select2({
        //language: 'fa',
        //theme: "classic",
        multiple: true,
        maximumSelectionLength: maximum_Selection_Length,
        placeholder: Lang.get('Dashboard.public.placeholder_Search_Dealer'),
        minimumInputLength: 1,
        closeOnSelect: true,
        selectOnClose: true,
        //allowClear: true,
        ajax: {
            url: '/',
            //url: 'https://nominatim.openstreetmap.org/search',
            /*url: function (params) {
                return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
            },*/
            //dataType: 'json',
            delay: 250,
            type: 'post',
            data: function (params) {
                return {
                    Sync: 'DealerAddedController', // search term
                    SubSync: 'get_Dealer_Search',
                    Data: {
                        json_Data: {
                            search: params.term,
                            id: get_Data(dealer_ID_Text),
                            dealer_type: get_Data(dealer_Type_Text),
                            page: params.page,
                        }
                    },

                };
            },
            /*data: function (params) {
                return {
                    format: 'json', // search term
                    page: params.page,
                    addressdetails: 1,
                    'accept-language': win_Locale,
                    //limit: '5',
                    q: params.term,
                    //limit:5
                };
            },*/
            processResults: function (data, params) {
                //console.log(data);
                params.page = params.page || 1;
                return {
                    results: data.data,
                    pagination: {
                        more: (params.page * 10) < data.total
                    }
                };
                /* return {
                     results: $.map(data, function (obj) {
                         console.log(obj);
                         return {
                             data: obj,
                             id: obj.id
                            /!* lat: obj.lat,
                             lon: obj.lon,
                             display_name: obj.display_name,
                             type: obj.type,
                             address: obj.address,
                             id: obj.display_name*!/
                         };
                     })
                 };*/
            },
            cache: false
        },
        templateResult: function (repo) {
            if (repo.loading) {
                return repo.text;
            }
            return '<div>' + repo.name /*+ ' ' + repo.last_name*/ + '</div>';
        },
        templateSelection: function (repo) {
            return repo.name /*+ ' ' + repo.last_name*/ +
                '<button type="button" class="btn btn-info btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-dealer_type="' + repo.dealer_type + '" data-select="dealerEditSelection"> <i class="fa fa-pencil"> &nbsp;' + Lang.get('Dashboard.public.form.edit') + '</i></button>' +
                '<button data-toggle="modal" data-target="#storeCashier_Work_Modal_ElementView" type="button" class="btn btn-primary btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-dealer_type="' + repo.dealer_type + '" data-select="dealerViewSelection"> <i class="fa fa-eye"> &nbsp;' + Lang.get('Dashboard.public.form.view_details') + '</i></button>' || repo.text;
        },
        escapeMarkup: function (Markup) {
            return Markup;
        }
    })
        .on('select2:select', function (e) {
            //------------------------
            /*var data = select2_Selector.select2("data");
            // console.log(data);
            $.getScript(get_Script);*/
            $('input.select2-search__field').trigger('blur')
        })
        .on("select2:unselect", function (e) {
            //--------------------------
            var data = select2_Selector.select2("data");
            //console.log(data);
            /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
            data_ID=$.map(data, function (value, key) {
                return value['id'];
            })*/
            //$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2('destroy');
            // $('#storeCashier_AddDealer_Form_Supp_Suppliers').html(null);
            /*var value = e.params.data.id;
            console.log(value);
            console.log(e.params.data);*/
        })
        .on("select2:selecting", function (e) {
            /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
            var data_ID=$.map(data, function (value, key) {
                return value['id'];
            })*/
            //console.log(select2_Selector.select2("data"))
            //console.log(ss)
        })
        .on("change", function (e) {
            /* var data = select2_Selector.select2("data");
             data = $.map(data, function (value, key) {
                 return value['id'];
             }) // Or select2_Selector.val();
             if (!isEmpty(variable_Save_Data_Val_Text))
                 set_Data(data, variable_Save_Data_Val_Text)*/

        });
}

// Set data package types for init select2
function set_Data_PackageTypes_For_Init_Select2(data) {
    var packageType_Native = [];
    $.each(data, function (item, value) {
        var create_Data = {};
        create_Data.id = value.id;
        create_Data.package_type = value.name;
        create_Data.text = value.name_text;
        create_Data.data = value;
        packageType_Native.push(create_Data);
    });
    return packageType_Native;
}

// Set data product types for init select2
function set_Data_ProductTypes_For_Init_Select2(data) {
    var productType_Native = [];
    $.each(data, function (item, value) {
        var create_Data = {};
        create_Data.id = value.id;
        create_Data.product_type = value.name;
        create_Data.text = value.name_text;
        create_Data.data = value;
        productType_Native.push(create_Data);
    });
    return productType_Native;
}

//////////////////////////////////// PNotify /////////////////////////////////////

//Make ul li text pNotify
function make_Ul_Li_Text_PNotify(message, type) {
    var sub_ul = $('<ul/>');
    $.each(message, function (key, value) {
        console.log(value)
        var sub_li = $('<li/>').html(value);
        sub_ul.append(sub_li);
    });

    switch (type) {
        case 'error':
            $(".alert.ui-pnotify-container.alert-danger").find('[class="ui-pnotify-text"]').append(sub_ul);
            break;
        case 'info':
            $(".alert.ui-pnotify-container.alert-info").find('[class="ui-pnotify-text"]').append(sub_ul);
            break;
        case 'success':
            $(".alert.ui-pnotify-container.alert-success").find('[class="ui-pnotify-text"]').append(sub_ul);
            break;
        case 'dark':
            $(".alert.ui-pnotify-container.alert-info").find('[class="ui-pnotify-text"]').append(sub_ul);
            break;
        default:
            $(".alert.ui-pnotify-container.alert-warning").find('[class="ui-pnotify-text"]').append(sub_ul);
            break
    }
}

//Add to text pNotify
function add_To_Text_PNotify(add, type) {
    switch (type) {
        case 'error':
            $(".alert.ui-pnotify-container.alert-danger").find('[class="ui-pnotify-text"]').append(add);
            break;
        case 'info':
            $(".alert.ui-pnotify-container.alert-info").find('[class="ui-pnotify-text"]').append(add);
            break;
        case 'success':
            $(".alert.ui-pnotify-container.alert-success").find('[class="ui-pnotify-text"]').append(add);
            break;
        case 'dark':
            $(".alert.ui-pnotify-container.alert-info").find('[class="ui-pnotify-text"]').append(add);
            break;
        default:
            $(".alert.ui-pnotify-container.alert-warning").find('[class="ui-pnotify-text"]').append(add);
            break
    }
}

//Create ul li pNotify
function create_Ul_Li_PNotify(message, type, add, empty_All_PNotify = true) {
    var title = '';
    var set_Type = '';
    var add_Class = '';
    switch (type) {
        case 'error':
            title = Lang.get('Dashboard.public.error');
            set_Type = 'error';
            break;
        case 'info':
            title = Lang.get('Dashboard.public.message');
            set_Type = 'info';
            break;
        case 'success':
            title = Lang.get('Dashboard.public.message');
            set_Type = 'success';
            break;
        case 'dark':
            title = Lang.get('Dashboard.public.warning');
            set_Type = 'info';
            add_Class = 'dark';
            break;
        default:
            title = Lang.get('Dashboard.public.warning');
            break
    }
    $('.ui-pnotify').remove();
    if (empty_All_PNotify)
        PNotify.removeAll();
    new PNotify({
        title: title,
        titleTrusted: true,
        textTrusted: true,
        text: '',
        type: set_Type,
        hide: false,
        addclass: add_Class,
        styling: 'bootstrap3',
        //addclass: 'dark'
    });
    make_Ul_Li_Text_PNotify(message, type);
    if (!isEmpty(add))
        add_To_Text_PNotify(add, type);
}

//////////////////////////////////// View /////////////////////////////////////

// Create alert view
function create_Alert_View(message, type, dataAdd) {

    $('#component_Alert_Message').empty();
    $('#component_Alert_If_Add').empty();
    $('[data_Remove="component"]').addClass('hidden');
    $('#component_Alert').removeClass('hidden');
    var child = create_Component_Alert_Message(message, type)
    $('#component_Alert_Message').append(child);
    $('#component_Alert_If_Add').append(dataAdd);
    $('#alert_Title').text(Lang.get('Dashboard.public.system_Message'));
}

// Create and append to element, user profile
function create_User_Profile_View(data, user_ID, element_Selector_For_Append) {
    var ssn = '';
    var name = '';
    var gender = Lang.get('Dashboard.people_Plan.form.gender_Female');
    var genderVal = data.gender;
    var dateOfBirth = '';
    var email = '';
    var phones = [];
    var addresses = [];

    if (!isEmpty(data.ssn))
        ssn = data.ssn

    if (!isEmpty(data.first_name) && !isEmpty(data.last_name))
        name = data.first_name + ' ' + data.last_name;

    if (data.gender == 'Mr')
        gender = Lang.get('Dashboard.people_Plan.form.gender_Male');

    if (!isEmpty(data.date_of_birth))
        dateOfBirth = data.date_of_birth;

    if (!isEmpty(data.email))
        email = data.email;

    phones = $.map(data.phones, function (value, key) {
        return value.number;
    });
    addresses = $.map(data.addresses, function (value, key) {
        return value.display_name;
    });

    var data_Create_For_User_View = {
        'ssn': ssn,
        'name': name,
        'gender': gender,
        'gender_val': genderVal,
        'date_of_birth': dateOfBirth,
        'email': email,
        'addresses': addresses,
        'phones': phones,
        'a_star': 4,
        'a_star_o': 1,
        'btn_comments': {
            'data': {
                'id': user_ID,
            }
        },
    }

    var view = create_User_View(data_Create_For_User_View);
    element_Selector_For_Append.append(view);
}

// set allow script loading for view
function set_Allow_Script_Loading_For_View(component_View, allow = true) {
    set_Data(allow, component_View);
}

// get allow script loading for view
function get_Allow_Script_Loading_For_View(component_View) {
    return get_Data(component_View);
}


// get script by view
function get_Script_By_View(view) {
    switch (view) {
        case 'component_Show_Room_Setting':
            return manageScriptPath.component_Show_Room_Setting();
            break;
        case 'component_Store_Setting':
            return manageScriptPath.component_Store_Setting();
            break;
        case 'component_Users_Setting':
            return manageScriptPath.component_Users_Setting();
            break;
        case 'component_Dealers_Setting':
            return manageScriptPath.component_Dealers_Setting();
            break;
        case 'component_System_settings':
            return manageScriptPath.component_System();
        case 'component_Dashboard_Settings_Print':
            return manageScriptPath.component_Dashboard_Settings_Print();
            break;
        case 'component_Products_Setting':
            return manageScriptPath.component_Products_Setting();
            break;
        case 'component_Dashboard_1':
            return manageScriptPath.component_dashboard_1();
            break;
        case 'component_Dashboard_Sales':
            return manageScriptPath.component_Dashboard_Sales();
            break;
        case 'component_Dashboard_Sales_Refunds':
            return manageScriptPath.component_Dashboard_Sales_Refunds();
            break;
        case 'component_Dashboard_Payments_PayDebtSale':
            return manageScriptPath.component_Dashboard_Payments_PayDebtSale();
            break;
        case 'component_Dashboard_Prints_Barcodes':
            return manageScriptPath.component_Dashboard_Prints_Barcodes();
            break;
        case 'component_Dashboard_Prints_BatchBarcode':
            return manageScriptPath.component_Dashboard_Prints_BatchBarcode();
            break;
        case 'component_Dashboard_Reports_SalesInvoice':
            return manageScriptPath.component_Dashboard_Reports_SalesInvoice();
            break;
    }
}

// Reload switchery
function reload_Switchery() {
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
}

//////////////////////////////////// Get and set details /////////////////////////////////////
/*
|--------------------------------------------------------------------------
|                               User
|--------------------------------------------------------------------------
*/

//get User Details
async function get_User_Details() {
    let promise = new Promise((resolve, reject) => {
        $.ajax({
            url: '/details',
            method: 'POST',
            data: {
                /*'Sync': 'UserAddedController',
                'SubSync': 'set_Or_Edit_User',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': json_Data_Final_User,
                //'Data2': json_Data_Final_User,*/
            },
            success: function (data) {
                //------------------------
                resolve(data)
                //--------------------------
                /* console.log('Done : ' + JSON.stringify(data));
                *alert('done: ' + JSON.stringify(data))
                 return data;*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /* console.log('Error : ' + JSON.stringify(data));
                 alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');

                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
                alert('complete: ' + JSON.stringify(data))*/
            }
        });
    });
    let result = await promise;
    return result;

}

/*//set User Details
function Set_User_Details(new_Data) {
    var result = [];
    if (isExist(() => new_Data.first_name))
        result['first_name'] = new_Data.first_name
    if (isExist(() => new_Data.first_name))
        result['last_name'] = new_Data.last_name
    if (isExist(() => new_Data.gender))
        result['gender'] = new_Data.gender
    if (isExist(() => new_Data.email))
        result['email'] = new_Data.email
    if (isExist(() => new_Data.ssn))
        result['ssn'] = new_Data.ssn
    if (isExist(() => new_Data.date_of_birth))
        result['date_of_birth'] = new_Data.date_of_birth
    if (isExist(() => new_Data.isUserCanBeRemoved))
        result['isUserCanBeRemoved'] = new_Data.isUserCanBeRemoved
    if (isExist(() => new_Data.created_at))
        result['created_at'] = new_Data.created_at
    if (isExist(() => new_Data.updated_at))
        result['updated_at'] = new_Data.updated_at
    if (isExist(() => new_Data.addresses))
        result['addresses'] = new_Data.addresses
    if (isExist(() => new_Data.phones))
        result['phones'] = new_Data.phones
    if (isExist(() => new_Data.id))
        result['id'] = new_Data.id
    return result;
}*/

//get User Details
async function get_User_Details_By_ID(id) {
    let promise = new Promise((resolve, reject) => {

        if (isOnline()) {

        } else
            create_Ul_Li_PNotify([Lang.get('validation.validator.internet_disconnected')], 'error')
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                Sync: 'UserAddedController', // search term
                SubSync: 'get_User_By_ID',
                Data: {
                    json_Data: {
                        id: id,
                    }
                },
            },
            success: function (data) {
                //------------------------
                resolve(data)
                //--------------------------
                /* console.log('Done : ' + JSON.stringify(data));
                *alert('done: ' + JSON.stringify(data))
                 return data;*/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /* console.log('Error : ' + JSON.stringify(data));
                 alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');

                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
                alert('complete: ' + JSON.stringify(data))*/
            }
        });
    });
    var result = await promise;
    return result;

}

//get User Room
async function get_User_Room() {
    let promise = new Promise((resolve, reject) => {
        if (isExist(() => room_ID) && !isEmpty(room_ID)) {
            resolve(room_ID);
        } else {
            $.ajax({
                url: '/',
                method: 'POST',
                data: {
                    Sync: 'UserAddedController', // search term
                    SubSync: 'get_User_Room',
                    /*Data: {
                        json_Data: {
                            id: id,
                        }
                    },*/
                },
                success: function (data) {
                    //------------------------
                    room_ID = data
                    resolve(data)
                    //--------------------------
                    /* console.log('Done : ' + JSON.stringify(data));
                    *alert('done: ' + JSON.stringify(data))
                     return data;*/
                },
                error: function (data) {
                    //------------------------
                    create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                    //------------------------
                    /* console.log('Error : ' + JSON.stringify(data));
                     alert('error: ' + JSON.stringify(data))*/
                },
                complete: function (data) {
                    //------------------------
                    // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                    //import('../initialize/show_Room_Repeat.js');

                    //------------------------
                    /*console.log('complete : ' + JSON.stringify(data));
                    alert('complete: ' + JSON.stringify(data))*/
                }
            });
        }
    });
    var result = await promise;
    return result;
}

//Get locale and timezone user
async function getLocaleAndTimezoneUser() {

    let promise = new Promise((resolve, reject) => {

        if (
            isExist(() => Cookies.get('locale')) && !isEmpty(Cookies.get('locale')) &&
            isExist(() => Cookies.get('timezone')) && !isEmpty(Cookies.get('timezone')) &&
            isExist(() => Cookies.get('country_code_timezone')) && !isEmpty(Cookies.get('country_code_timezone')) &&
            isExist(() => Cookies.get('country_code_locale')) && !isEmpty(Cookies.get('country_code_locale'))) {

            let data = {
                locale: Cookies.get('locale'),
                timezone: Cookies.get('timezone'),
                country_code_locale: Cookies.get('country_code_locale'),
                country_code_timezone: Cookies.get('country_code_timezone')
            };
            set_Cookie_Locale_And_Timezone(data)
            resolve(data)
        } else {
            $.ajax({
                url: '/PostsController',
                method: 'POST',
                data: {
                    'Sync': 'UserController',
                    'SubSync': 'getLocaleAndTimezoneUser',
                    //'Data': {showroom_name: $('#set_name').val()}
                },
                success: function (data) {
                    console.log(data);
                    set_Cookie_Locale_And_Timezone(data)
                    //------------------------
                    resolve(data)
                    //--------------------------
                    /* console.log('Done : ' + JSON.stringify(data));
                    *alert('done: ' + JSON.stringify(data))
                     return data;*/
                },
                error: function (data) {
                    console.log(data);
                    //------------------------
                    create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                    //------------------------
                    /* console.log('Error : ' + JSON.stringify(data));
                     alert('error: ' + JSON.stringify(data))*/
                },
                complete: function (data) {
                    //------------------------
                    // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                    //import('../initialize/show_Room_Repeat.js');

                    //------------------------
                    /*console.log('complete : ' + JSON.stringify(data));
                    alert('complete: ' + JSON.stringify(data))*/
                }
            });
        }
    });
    return await promise;

}

//////////////////////////////////// Listen /////////////////////////////////////

//Listen if users change, add or edit or delete
function listen_Users_Change(room_id) {
    console.log(room_id);
    Echo2.join('channel_Supermarket_Users_Change.' + room_id)
        .here((users) => {
            //
        })
        .joining((user) => {
            console.log(user);
        })
        .leaving((user) => {
            console.log(user);
        })
        .listen('.broadcast_Supermarket_Users_Change', async (data) => {
            console.log(data);

            // Update, delete or create user in local db
            $.each(data, async function (key, value) {
                switch (key) {
                    case 'add_or_edit':
                        console.log(key);
                        await baseServicesDB.userServices.updateOrCreateUser(value.id, value);
                        Update_Tables.userSearchedTableWhenEdit(value);
                        Update_Elements.user();
                        break;
                    case 'remove':
                        console.log(key);
                        await baseServicesDB.userServices.deleteUser(value);
                        Update_Tables.userSearchedTableWhenDelete(value);
                        Update_Elements.user();
                        break;
                }
            });

        });
    /*get_User_Details().then(function (data) {
        user = data;
        //var channel = Echo2.channel('my-channel');
        var channel = Echo2.private('channel_Supermarket_UserAddOrEdit.component_Users_Setting.' + user.username + '.' + user.id);
        channel.listen('.broadcast_Supermarket_UserAddOrEdit.component_Users_Setting', function (data) {
            table_Add_Selector.find('.table-responsive').remove()
            table_Add_Selector.append(data.view);
            Reload_Needed.script_User();
            Reload_Needed.script_User();
            //alert(JSON.stringify(data));
            //console.log(data.view)
        })
        //resolve('');
    })*/
}

//////////////////////////////////// Active step /////////////////////////////////////
/**
 * Active step.
 *
 * @return void
 * @param  getScript    array
 * @param  view         string
 */
function activeStep(view, getScript) {
    $.ajax({
        url: '/',//route('storeCashier.storeCashier_PostsController'),
        method: 'POST',
        data: {
            'Sync': 'ActiveStepController',
            'SubSync': 'set_Active_Step',
            'Data': {
                json_Data: {activate_view: view},
            },
        },
        success: function (data) {
            console.log(data)
            //------------------------
            if (data.hasOwnProperty('error')) {
                create_Ul_Li_PNotify([data.error], 'error');
            }
            if (data.hasOwnProperty('success') && data.success) {
                $('[data_Remove="component"]').addClass('hidden');
                $('#' + view).removeClass('hidden');

                var allow_Get_Script = 'allow_GetScript_' + view[0].toUpperCase() + view.slice(1);
                if (isExist(() => getScript) && !isEmpty(getScript)) {
                    if (get_Allow_Script_Loading_For_View(allow_Get_Script)) {
                        $.getScript(getScript)
                            .then(function () {
                                set_Allow_Script_Loading_For_View(allow_Get_Script, false);
                            });
                    }
                }

                if (win_Existence_Initial_Steps) {
                    switch (view) {
                        case 'component_Show_Room_Setting':
                            $.ajax({
                                url: '/',
                                method: 'POST',
                                data: {
                                    'Sync': 'ShowRoomsController',
                                    'SubSync': 'check_Show_Room_Exist',
                                },
                                success: function (data) {
                                    console.log(data)
                                    //------------------------
                                    if (data) {
                                        $('[data_Remove="component"]:visible .page_toolbox_control').empty();
                                        $('[data_Remove="component"]:visible .page_toolbox_control').append(manageCreateButton.btn_forward());
                                        $('[data_Remove="component"]:visible .page_toolbox_control').append(manageCreateButton.btn_back());
                                        manageEventButton.event_Btn_Back();
                                        manageEventButton.event_Btn_Forward();
                                    }
                                    //--------------------------
                                    /* console.log(data);
                                     alert('done: ' + JSON.stringify(data))*/
                                },
                                error: function (data) {
                                    //------------------------
                                    create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                                    //------------------------
                                    /* console.log('Error');
                                     console.log(data);
                                     alert('error: ' + JSON.stringify(data))*/
                                },
                                complete: function (data) {
                                    //------------------------
                                    //------------------------
                                    //alert(JSON.stringify(data))
                                }
                            });
                            break;
                        case 'component_System_settings':
                            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
                            $('[data_Remove="component"]:visible .page_toolbox_control').append(manageCreateButton.btn_forward());
                            manageEventButton.event_Btn_Forward();
                            break;
                        case 'component_Dashboard_1':
                            win_Existence_Initial_Steps = false;
                            storage.set('existence_initial_steps', false, function (err, results) {
                                if (err) throw err;
                                // console.log(results);
                            });
                            Cookies.set('existence_initial_steps', false, {
                                domain: '.' + hostName_Master,
                                secure: true
                            });
                            break;
                        default:
                            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
                            $('[data_Remove="component"]:visible .page_toolbox_control').append(manageCreateButton.btn_forward());
                            $('[data_Remove="component"]:visible .page_toolbox_control').append(manageCreateButton.btn_back());
                            manageEventButton.event_Btn_Back();
                            manageEventButton.event_Btn_Forward();
                            break;
                    }
                }

                PNotify.removeAll();
            }
            //--------------------------
            /* console.log(data);
             alert('done: ' + JSON.stringify(data))*/
        },
        error: function (data) {
            //------------------------
            create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
            //------------------------
            /* console.log('Error');
             console.log(data);
             alert('error: ' + JSON.stringify(data))*/
        },
        complete: function (data) {
            //------------------------
            //------------------------
            //alert(JSON.stringify(data))
        }
    });
}

/**
 * Active view without active step.
 *
 * @return void
 * @param  getScript    array
 * @param  view         string
 * @param forcedGetScript
 */
function active_View_Without_activeStep(view, getScript, forcedGetScript) {
    $('[data_Remove="component"]').addClass('hidden');
    $('#' + view).removeClass('hidden');
    var allow_Get_Script = 'allow_GetScript_' + view[0].toUpperCase() + view.slice(1);
    if (forcedGetScript) {
        $.getScript(getScript)
            .then(function () {
                set_Allow_Script_Loading_For_View(allow_Get_Script, false);
            });
    } else {
        console.log(forcedGetScript)
        if (isExist(() => getScript) && !isEmpty(getScript)) {
            if (get_Allow_Script_Loading_For_View(allow_Get_Script)) {
                $.getScript(getScript)
                    .then(function () {
                        set_Allow_Script_Loading_For_View(allow_Get_Script, false);
                    });
            }
        }
    }

    PNotify.removeAll();

}

// Manage event button
manageEventButton = function () {
    "use strict";
    return {
        event_Btn_Return: function () {
            event_Btn_Return();
        },
        event_Btn_Back: function () {
            event_Btn_Back();
        },
        event_Btn_Forward: function () {
            event_Btn_Forward();
        },
    };
}();

// Event btn return
function event_Btn_Return() {
    $('.page_toolbox_control_return').unbind();
    $('[data_Remove="component"]:visible .page_toolbox_control_return').click(function () {
        $('[data_Remove="component"]:visible .page_toolbox_control').empty();
        active_View_Without_activeStep(stack_Go_Back.pop());
    });
}

// Event btn back
function event_Btn_Back() {
    $('.page_toolbox_control_back').unbind();
    $('[data_Remove="component"]:visible .page_toolbox_control_back').click(function () {
        if (isOnline()) {
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
            var numberStepActive = $.inArray(get_Active_View(), sort_Step_View);
            activeStep(sort_Step_View[(numberStepActive - 1)], get_Script_By_View(sort_Step_View[(numberStepActive - 1)]));
        } else
            create_Ul_Li_PNotify([Lang.get('validation.validator.internet_disconnected')], 'error')

    });
}

// Event btn forward
function event_Btn_Forward() {
    $('.page_toolbox_control_forward').unbind();
    $('[data_Remove="component"]:visible .page_toolbox_control_forward').click(function () {
        if (isOnline()) {
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
            var numberStepActive = $.inArray(get_Active_View(), sort_Step_View);
            // if (Number(numberStepActive+2) <= sort_Step_View.length)
            activeStep(sort_Step_View[(numberStepActive + 1)], get_Script_By_View(sort_Step_View[(numberStepActive + 1)]));
        } else
            create_Ul_Li_PNotify([Lang.get('validation.validator.internet_disconnected')], 'error')
    });
}

// get active view
function get_Active_View() {
    return $('[data_Remove="component"]:visible').attr('id');
}

//Reset btn add etc
function reset_Btn_Add(button_Add_Selector) {
    button_Add_Selector.attr('data-edit', 'false');
    button_Add_Selector.text('');
    button_Add_Selector.append('<i class="fa fa-plus"></i>');
}

function elements_Toggle() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle_tooltip="tooltip"]').tooltip();
    $('input.flat').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
    $('.filepond .filepond--magnify-icon').off("click");
    $('.filepond .filepond--magnify-icon').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $('body').offset().top
        }, 1000);
        /*if ($(this).find('.filepond--magnify-icon').length > 0) {

        }*/
    });
    $("input[type='text'],textarea").each(function () {
        $(this).attr('title', $(this).val());
    })
}






