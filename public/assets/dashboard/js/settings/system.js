var onlyCountries = Lang.get('system/public.supported_Locales_For_Js').split(',');


// Block in the system.blade --> Language_Timezone
let init_Language_Timezone_Ready = function () {

    window.intl_Lang;
    window.intl_Timezone;
    window.json_Data_Final_Language = {};
    var input_Lang = document.querySelector("#settings_System_Language_Input_Lang");
    var input_Timezone = document.querySelector("#settings_System_Language_Input_Timezone");

    //Initialize select2  --> Language And Timezone
    $("#settings_System_Language_Select_Lang").select2({
        //language: 'fa',
        //theme: "classic",
        //multiple: true,
        //maximumSelectionLength: 1,
        //placeholder: Lang.get('Dashboard.public.placeholder_Search_Address'),
        minimumInputLength: 1,
        closeOnSelect: false,
        allowClear: true,
        //selectOnClose: false,
        //disabled:true,
        //allowClear: true,
    })
        .on('select2:select', function (e) {
            //------------------------
            var langSelect = $('#settings_System_Language_Select_Lang').select2("data")
            $('#settings_System_Language_ProfileTitle_Lang').text(langSelect[0].text)
            json_Data_Final_Language.locale = langSelect[0].locale;
        })
    $("#settings_System_Language_Select_Timezone").select2({
        //language: 'fa',
        //theme: "classic",
        //multiple: true,
        //maximumSelectionLength: 1,
        //placeholder: Lang.get('Dashboard.public.placeholder_Search_Address'),
        minimumInputLength: 1,
        closeOnSelect: false,
        allowClear: true,
        //selectOnClose: false,
        //disabled:true,
        //allowClear: true,
    })
        .on('select2:select', function (e) {
            //------------------------
            var timezoneSelect = $('#settings_System_Language_Select_Timezone').select2("data")
            $('#settings_System_Language_ProfileTitle_Timezone').text(timezoneSelect[0].text)
            json_Data_Final_Language.timezone = timezoneSelect[0].timezone;
        })

    //Initialize intlTelInput --> Language, Timezone
    intl_Lang = window.intlTelInput(input_Lang, {
        //geoIpLookup:  ipinfo.countryCode ,
        //initialCountry: "auto",
        initialCountry: "IR",
        onlyCountries: onlyCountries,
        /*nationalMode: true,
        width: '100%',
        autoHideDialCode: false,
        dropdownContainer: null,
        separateDialCode: true,
        customContainer: "col-md-12 no-padding intelinput-styles",*/
        preferredCountries: ['ir', 'us'],
        placeholderNumberType: 'MOBILE',
        utilsScript: "assets/dashboard/lib/utils.js",
    });
    intl_Timezone = window.intlTelInput(input_Timezone, {
        //geoIpLookup:  ipinfo.countryCode ,
        //initialCountry: "auto",
        initialCountry: "IR",
        //onlyCountries: onlyCountries,
        preferredCountries: ['ir', 'us'],
        placeholderNumberType: 'MOBILE',
        utilsScript: "assets/dashboard/lib/utils.js",
    });
    $(".iti__dial-code").empty();

    //Initialize on startup
    getLocaleAndTimezoneUser().then(function (data) {
        /*$('#settings_System_Language_Input_Lang').attr('readonly','readonly');
        $('#settings_System_Language_Input_Timezone').attr('readonly','readonly');*/
        intl_Lang.setCountry(data.country_code_locale);
        intl_Timezone.setCountry(data.country_code_timezone);
        init_Language().then(function () {
            get_Language_all(data.locale).then(function (data) {
                $('#settings_System_Language_ProfileTitle_Lang').text(data.native);
            });
        });
        init_Timezone().then(function () {
            $('#settings_System_Language_ProfileTitle_Timezone').text(data.timezone);
        });
    });

    // Init method
    async function init_Language() {

        let promise = new Promise((resolve, reject) => {
            if (isExist(() => $('#settings_System_Language_Select_Lang').val()) && !isEmpty($('#settings_System_Language_Select_Lang').val()))
                $('#settings_System_Language_Select_Lang').val(null).empty().select2('destroy')

            var countryData = intl_Lang.getSelectedCountryData();
            json_Data_Final_Language.country_code_locale = countryData.iso2;
            var country_Code = countryData.iso2.toUpperCase();
            let lang_Native = [];
            get_Language_All_By_Country_Code(country_Code).then(function (data) {
                $('#settings_System_Language_Input_Lang').val(data.native)
                $.each(data.languages, function (item, value) {
                    var create_Data = {};

                    get_Language_all(value).then(function (data) {
                        if (item == 0) {
                            $('#settings_System_Language_ProfileTitle_Lang').text(data.native)
                            json_Data_Final_Language.locale = value;
                        }
                        create_Data.id = item;
                        create_Data.text = data.native;
                        create_Data.locale = value;
                        lang_Native.push(create_Data);

                        $('#settings_System_Language_Select_Lang').select2({
                            data: lang_Native,
                        });
                    });
                });
                resolve('true')
            })
        });
        let result = await promise;
        return result;
    }

    async function init_Timezone() {

        let promise = new Promise((resolve, reject) => {
            if (isExist(() => $('#settings_System_Language_Select_Timezone').val()) && !isEmpty($('#settings_System_Language_Select_Timezone').val()))
                $('#settings_System_Language_Select_Timezone').val(null).empty().select2('destroy')
            var countryData = intl_Timezone.getSelectedCountryData();
            json_Data_Final_Language.country_code_timezone = countryData.iso2;
            var country_Code = countryData.iso2.toUpperCase();
            let timezone_Native = [];
            get_Language_All_By_Country_Code(country_Code).then(function (data) {
                $('#settings_System_Language_Input_Timezone').val(data.native)
            });
            get_Timezone_All_By_Country_Code(country_Code).then(function (data) {
                $.each(data.timezones, function (item, value) {
                    var create_Data = {};

                    if (item == 0) {
                        $('#settings_System_Language_ProfileTitle_Timezone').text(value)
                        json_Data_Final_Language.timezone = value;
                    }
                    create_Data.id = item;
                    create_Data.text = value;
                    create_Data.timezone = value;
                    timezone_Native.push(create_Data);

                    $('#settings_System_Language_Select_Timezone').select2({
                        data: timezone_Native,
                    });
                });
                resolve('true')
            })
        });
        let result = await promise;
        return result;
    }

    // IntlTelInput country change event
    input_Lang.addEventListener("countrychange", function () {
        init_Language();
    });
    input_Timezone.addEventListener("countrychange", function () {
        init_Timezone();
    });

    // language Finally effect
    $('#settings_System_Language_Btn_Apply_Changes').click(function () {
        //console.log(json_Data_Final_Language)
        $.ajax({
            url: '/PostsController',
            method: 'POST',
            data: {
                'Sync': 'SystemSettingController',
                'SubSync': 'set_Locale_Timezone',
                'Data': {
                    json_Data: json_Data_Final_Language,
                },
            },
            success: function (data) {
                console.log(data);
                //------------------------
                //DataTable user added
                if (data.hasOwnProperty('success')) {
                    create_Ul_Li_PNotify([data.message], 'success', data.add);
                    var data = {
                        locale: json_Data_Final_Language.locale,
                        timezone: json_Data_Final_Language.timezone,
                        country_code_locale: json_Data_Final_Language.country_code_locale,
                        country_code_timezone: json_Data_Final_Language.country_code_timezone,
                    }
                    set_Cookie_Locale_And_Timezone(data);
                    location.reload();
                }
                if (data.hasOwnProperty('error')) {

                    create_Ul_Li_PNotify(data.error, 'error')
                }

                //--------------------------
                /*console.log('Done : ' + data);
                alert('done: ' + JSON.stringify(data))*/
            },
            error: function (data) {
                console.log(data);
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*/
            },
            complete: function (data) {
                //------------------------
                //Reload_Needed.script_User();
                //import('../initialize/show_Room_Repeat.js');
                //------------------------
                /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
            }
        });
    });
}

// Block in the system.blade --> Currency
let init_Currency_Ready = function () {
    window.intl_Currency;
    var input_Currency = document.querySelector("#settings_System_Currency_Input_CurrencyChange");

    //Initialize tagsinput  --> Currency
    /* $('#settings_System_Currency_Input_CurrencyAll').tagsInput({
         //'autocomplete_url': url_to_autocomplete_api,
         //'autocomplete': { option: value, option: value},
         'height': '100px',
         'width': '100%',
         //'interactive':true,
         'defaultText': 'add',
         //'onAddTag':callback_function,
         //'onRemoveTag':callback_function,
         //'onChange' : callback_function,
         //'delimiter': [',',';'],   // Or a string with a single delimiter. Ex: ';'
         //'removeWithBackspace' : true,
         //'minChars' : 0,
         //'maxChars' : 0, // if not provided there is no limit
         'placeholderColor': '#666666'
     });*/
    $('#settings_System_Currency_Input_CurrencyAll').tagsinput({
        allowDuplicates: false,
        itemValue: 'value',  // this will be used to set id of tag
        itemText: 'text', // this will be used to set text of tag
        trimValue: true,
    });

    //Initialize intlTelInput -->  Currency
    intl_Currency = window.intlTelInput(input_Currency, {
        //geoIpLookup:  ipinfo.countryCode ,
        //initialCountry: "auto",
        initialCountry: "IR",
        //onlyCountries: onlyCountries,
        preferredCountries: ['ir', 'us'],
        placeholderNumberType: 'MOBILE',
        utilsScript: "assets/dashboard/lib/utils.js",
    });
    $(".iti__dial-code").empty();
    /*$("#settings_System_Language_Input_Timezone,#settings_System_Language_Input_Lang").parent().addClass("iti-rtl");*/

    //Initialize on startup
    getCurrenciesUser().then(async function (data) {
        var currency_Active_Length = Object.keys(data).length;
        let promise = new Promise((resolve, reject) => {
            var i = 0;
            $.each(data, function (key, value) {
                get_Currency_Details_By_Currency_Code(value.code).then(function (data) {
                    //$('#settings_System_Currency_Input_CurrencyAll').addTag(data.name+' '+data.symbol_native);
                    $('#settings_System_Currency_Input_CurrencyAll').tagsinput('add', {
                        "value": key,
                        "text": data.name + ' ' + data.symbol_native,
                        "currency": key
                    });
                    if (i == currency_Active_Length - 1)
                        resolve('true');
                    i++;
                })

            })
        });
        let result = await promise;
    });

    // Init method
    async function init_Currency() {
        var countryCurrencies_Native = [];

        let promise = new Promise((resolve, reject) => {
            var countryData = intl_Currency.getSelectedCountryData();
            var country_Code = countryData.iso2.toUpperCase();
            $('#settings_System_Currency_ProfileTitle_CurrencyChange').text('');
            get_Language_All_By_Country_Code(country_Code).then(function (data) {
                $('#settings_System_Currency_Input_CurrencyChange').val(data.native);
                if (isExist(() => data.currency) && !isEmpty(data.currency)) {

                    var currency_Code = data.currency.split(',');

                    $.each(currency_Code, function (key, value) {
                        get_Currency_Details_By_Currency_Code(value).then(function (data) {
                            if (isExist(() => data)) {
                                var create_Data = {};
                                create_Data.id = data.code;
                                create_Data.text = data.name + '  ' + data.symbol_native;
                                create_Data.data = data;
                                countryCurrencies_Native.push(create_Data);
                            }

                            if ((currency_Code.length - 1) == key)
                                resolve('true');
                        });
                    });
                } else {
                    create_Ul_Li_PNotify(Lang.get('validation.validator.currency_no_universal_currency'), 'error');
                    resolve('true');
                }
            });
        });

        let result = await promise;
        if (isExist(() => $('#settings_System_Currency_CountryCurrenciesType').val()) && !isEmpty($('#settings_System_Currency_CountryCurrenciesType').val()))
            $('#settings_System_Currency_CountryCurrenciesType').val(null).empty().select2('destroy');
        $('#settings_System_Currency_CountryCurrenciesType').select2({
            data: countryCurrencies_Native,
        });
        return result;
    }

    // IntlTelInput country change event
    input_Currency.addEventListener("countrychange", function () {
        init_Currency();
    });


    // Tagsinput remove event
    function tagsinput_Remove_Event(tagsinput_Selector) {
        tagsinput_Selector.parent().find('.bootstrap-tagsinput span[data-role="remove"]').off('click');
        tagsinput_Selector.parent().find('.bootstrap-tagsinput span[data-role="remove"]').click(async function () {
            var event = $(this).parent().data('item');
            console.log(event)
            var check_Data = await Validate_InputTagCurrency_When_Remove(event.value);
            if (check_Data != true) {
                create_Ul_Li_PNotify([check_Data], 'error');
                $('#settings_System_Currency_Input_CurrencyAll').tagsinput('add', {
                    "value": event.value,
                    "text": event.text,
                    "currency": event.value
                });
            } else {
                if (isOnline()) {
                    $.ajax({
                        url: '/PostsController',
                        method: 'POST',
                        data: {
                            'Sync': 'SystemSettingController',
                            'SubSync': 'delete_Currency',
                            'Data': {
                                json_Data: {currency: event.value},
                            },
                        },
                        success: function (data) {
                            console.log(data);
                            //------------------------
                            if (data.hasOwnProperty('status') && data.status) {
                                create_Ul_Li_PNotify([data.message], 'success');
                            }
                            if (data.hasOwnProperty('status') && !data.status) {
                                $('#settings_System_Currency_Input_CurrencyAll').tagsinput('add', {
                                    "value": event.value,
                                    "text": event.text,
                                    "currency": event.value
                                });
                                create_Ul_Li_PNotify([data.message], 'error');
                            }
                            //--------------------------
                        },
                        error: function (data) {
                            console.log(data);
                            //------------------------
                            create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                            //------------------------
                        },
                        complete: function (data) {
                            //------------------------
                            //Reload_Needed.script_User();
                            //import('../initialize/show_Room_Repeat.js');
                            //------------------------
                        }
                    });
                }
            }
        });
    }

    // currency Finally effect
    $('#settings_System_Currency_Btn_AddCurrency').click(function () {

        var CountryCurrenciesTypeData = $('#settings_System_Currency_CountryCurrenciesType').select2("data")[0];
        console.log(CountryCurrenciesTypeData)
        var check_Data = Validate_InputTagCurrencyAll_Non_Duplication($('#settings_System_Currency_Input_CurrencyAll').tagsinput('items'), CountryCurrenciesTypeData.id);

        if (check_Data != true)
            create_Ul_Li_PNotify([check_Data], 'error')
        else {
            if (isOnline()) {
                var value = CountryCurrenciesTypeData.id;
                var text = CountryCurrenciesTypeData.data.name + ' ' + CountryCurrenciesTypeData.data.symbol_native;
                $('#settings_System_Currency_Input_CurrencyAll').tagsinput('add', {
                    "value": value,
                    "text": text,
                    "currency": value
                }, {data: value});
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'SystemSettingController',
                        'SubSync': 'add_Currency',
                        'Data': {
                            json_Data: {currency: value},
                        },
                    },
                    success: function (data) {
                        console.log(data);
                        //------------------------
                        if (data.hasOwnProperty('status') && data.status) {
                            create_Ul_Li_PNotify([data.message], 'success');
                        }
                        if (data.hasOwnProperty('status') && !data.status) {
                            // event.cancel = true
                            $('#settings_System_Currency_Input_CurrencyAll').tagsinput('remove', {
                                "value": value,
                                "text": text
                            });
                            create_Ul_Li_PNotify([data.message], 'error');
                        }
                        //--------------------------
                    },
                    error: function (data) {
                        console.log(data);
                        //------------------------
                        $('#settings_System_Currency_Input_CurrencyAll').tagsinput('remove', {
                            "value": value,
                            "text": text
                        });
                        create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                        //------------------------
                    },
                    complete: function (data) {
                        //------------------------
                        //Reload_Needed.script_User();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
                alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            } else
                create_Ul_Li_PNotify([Lang.get('validation.validator.internet_disconnected')], 'error')
        }

    });
    $('#settings_System_Currency_Input_CurrencyAll').on('itemAdded', function (event) {
        // event.item: contains the item
        tagsinput_Remove_Event($(this))
    });
}

// Btns in the system.blade --> Btns not to in Blocks
let init_Btns = function () {
    /*$('#settings_System_NextStep_Btn').click(function () {
        activeStep('component_Show_Room_Setting',manageScriptPath.component_Show_Room_Setting());
    });*/
}


// Init all
init_Language_Timezone_Ready();

init_Currency_Ready();


init_Btns()
