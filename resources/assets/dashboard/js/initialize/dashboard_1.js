/*
//variable defining
var input_FIXED_LINE = document.querySelector("#storeCashier_AddDealer_Form_Phones_Phone_FIXED_LINE");
var input_FIXED_LINE_Jquery = $("#storeCashier_AddDealer_Form_Phones_Phone_FIXED_LINE");
var input_POSTAL_CODE = document.querySelector("#storeCashier_AddDealer_Form_Addresses_Postal_Code");
var input_POSTAL_CODE_Jquery = $("#storeCashier_AddDealer_Form_Addresses_Postal_Code");


let inputmask_Phone_Fixed_line = '';
let inputmask_Postal_Code = '';
let inputmask_Email = '';
let inputmask_Name = '';
let inputmask_Date = '';
let inputmask_Time = '';
let inputmask_Url = '';
let inputmask_Ids = '';

window.data_ID_Supplier = [];
window.data_ID_Owner = [];
window.data_ID_ManagingDirector = [];
window.allow_getScript = true;
window.event_Btn_Edit_Click = false;
/!*window.minCheckBox = '';
window.role = '';
window.insert_relation = '';*!/
window.userEditSelectionID = '';
window.userEditSelectionElement = '';
window.userEditSelectionSelect = '';
window.intl_MOBILE_DEALER;
window.intl_FIXED_LINE_DEALER;
window.intl_POSTAL_CODE_DEALER;
window.map_DEALER;
window.theMarker_DEALER = {};
window.json_Data_Final_DEALER = {
    phone: {
        mobile: [],
        fixedLine: [],
    },
    address: [],
    emails: [],
    holidays: [],
    suppliers: [],
    owners: [],
    managing_director: [],
};


// Init inputmask
function init_Inputmask() {
    inputmask_Email = InputMaskManageElements.email($('#storeCashier_AddDealer_Form_Details_Email'));
    inputmask_Name = InputMaskManageElements.firstName($('#storeCashier_AddDealer_Form_Details_Name'));
    InputMaskManageElements.postalCode(input_POSTAL_CODE_Jquery, ipinfo.countryCode).then(function (data) {
        inputmask_Postal_Code = data;
    });
    inputmask_Url = InputMaskManageElements.url($('#storeCashier_AddDealer_Form_Details_WebsiteName'));
    inputmask_Time = InputMaskManageElements.time($('#storeCashier_AddDealer_Form_Details_Open'));
    inputmask_Ids = InputMaskManageElements.firstName($('#storeCashier_AddDealer_Form_IDs_NationalId'));
    inputmask_Ids = InputMaskManageElements.firstName($('#storeCashier_AddDealer_Form_IDs_RegistrationNumber'));
    inputmask_Ids = InputMaskManageElements.firstName($('#storeCashier_AddDealer_Form_IDs_EconomicalNumber'));
}

// Init intlTelInput
function init_IntlTelInput() {
    intl_FIXED_LINE_DEALER = window.intlTelInput(input_FIXED_LINE, {
        //geoIpLookup:  ipinfo.countryCode ,
        //initialCountry: "auto",
        initialCountry: ipinfo.countryCode,
        preferredCountries: ['ir', 'us'],
        placeholderNumberType: 'FIXED_LINE',
        //utilsScript: "assets/dashboard/lib/utils.js",
    });
    intl_POSTAL_CODE_DEALER = window.intlTelInput(input_POSTAL_CODE, {
        //geoIpLookup:  ipinfo.countryCode ,
        //initialCountry: "auto",
        autoPlaceholder: "off",
        initialCountry: ipinfo.countryCode,
        preferredCountries: ['ir', 'us'],
        //placeholderNumberType: 'FIXED_LINE',
        //utilsScript: "assets/dashboard/lib/utils.js",
    });
    intl_FIXED_LINE_DEALER.promise.then(function () {

        input_FIXED_LINE.addEventListener("close:countrydropdown", function () {
            inputmask_Phone_Fixed_line = InputMaskManageElements.phone(input_FIXED_LINE_Jquery);
        });
        inputmask_Phone_Fixed_line = InputMaskManageElements.phone(input_FIXED_LINE_Jquery);
    });
    input_POSTAL_CODE.addEventListener("countrychange", function () {
        var countryData = intl_POSTAL_CODE_DEALER.getSelectedCountryData();
        InputMaskManageElements.postalCode(input_POSTAL_CODE_Jquery, countryData.iso2.toUpperCase()).then(function (data) {
            inputmask_Postal_Code = data;
        })
    });
}

// Init startup
function init_Startup() {
    json_Data_Final_DEALER.lastName = Lang.get('Dashboard.dealer_Plan.shop');
    // tagsinput Emails
    $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput({
        allowDuplicates: false,
        itemValue: 'value',  // this will be used to set id of tag
        itemText: 'text', // this will be used to set text of tag
        trimValue: true,
    });
    // tagsinput Holidays
    $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput({
        allowDuplicates: false,
        itemValue: 'value',  // this will be used to set id of tag
        itemText: 'text', // this will be used to set text of tag
        trimValue: true,
    });
    // hidden ids
    $('#storeCashier_AddDealer_Form_IDs_ShowOnlyFactoryAndCompany').addClass('hidden');
    // Add friday into tags input
    var daySelect = $('#storeCashier_AddDealer_Form_Details_DaysOfTheWeek').select2("data");
    //json_Data_Final_DEALER.holidays.push(daySelect[0].id);
    $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('add', {
        "value": daySelect[0].id,
        "text": daySelect[0].text
    });

    /!*$('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('add', {
        "value": 'aaaa@gmail.com',
        "text": 'aaaa@gmail.com'
    });
    $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('add', {
        "value": 'aaaa@gmail',
        "text": 'aaaa@gmail'
    });
    $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('add', {
        "value": 'aaaa',
        "text": 'aaaa'
    });
    $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('add', {
        "value": 'aaaa@gmail.com',
        "text": 'aaaa@gmail.com'
    });
    $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('add', {
        "value": 'aaaa@gmail',
        "text": 'aaaa@gmail'
    });
    $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('add', {
        "value": 'aaaa',
        "text": 'aaaa'
    });*!/
}

// Init select2
function init_Select2() {
    // select2 Holidays
    $("#storeCashier_AddDealer_Form_Details_DaysOfTheWeek").select2()
        .on('select2:select', function (e) {
            //------------------------
            /!*var langSelect = $('#storeCashier_AddDealer_Form_Details_DaysOfTheWeek').select2("data")
            json_Data_Final_Language.locale = langSelect[0].locale;*!/
        });

    var role = ['companies managing director', 'factories managing director'];
    Reload_Needed.script_Dealer();
    initialize_Select2_User($("#storeCashier_AddDealer_Form_IDs_ManagingDirector"), 'data_ID_ManagingDirector', 1, getScript, role);
    initialize_Select2_User($("#storeCashier_AddDealer_Form_IDs_Owner"), 'data_ID_Owner', 1, getScript);
    initialize_Select2_User($("#storeCashier_AddDealer_Form_Supp_Suppliers"), 'data_ID_Supplier', 1, getScript);

    $("#storeCashier_AddDealer_Form_IDs_ManagingDirector").on('select2:select', function (e) {
        //------------------------
        var data = $(this).select2("data")[0];
        $("#storeCashier_AddDealer_Form_IDs_ManagingDirector_Table_Tbody").empty();
        var isValid = Validate_Select2_UserAdd($(this), $('#storeCashier_AddDealer_Form_IDs_ManagingDirector_Table tbody tr'));
        if (isValid == true) {
            data_ID_ManagingDirector = [];
            data_ID_ManagingDirector.push(data.id);
            let id = $('#storeCashier_AddDealer_Form_IDs_ManagingDirector_Table tbody tr').length + 1
            let display_name = data.first_name + ' ' + data.last_name;
            var td = {
                'select': 'userAddedTable',

                'data': {
                    'dataSend': data,
                    'job-type': 'managing_director',
                },
                'num': [
                    {'number': id}
                ],
                'a_small': [
                    {'data': {'td_style': {"white-space": "nowrap"}, /!*'td_class': 'text-right'*!/}},
                    {'a': display_name, 'a_class': 'name'},
                    {'enter': ''},
                    {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                ],
                'user_details': [
                    {
                        'btn_View': {
                            'data': {
                                'selectElement': 'table',
                                'id': data.id,
                            },
                            'attr': {
                                'data-select': 'userViewSelection',
                                'data-toggle': 'modal',
                                'data-target': '#storeCashier_Work_Modal_ElementView',
                                //'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.view_details'),
                            'class': 'class22',

                        }
                    }
                ],
                'btn': [
                    {
                        'btn_Edit': {
                            'data': {
                                'select-element': 'table',
                                'id': data.id,
                            },
                            'attr': {
                                'data-select': 'userEditSelection',
                                'data-toggle': 'modal',
                                'data-target': '#storeCashier_Work_Modal_UserAdd',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.edit'),
                            'class': 'class22',
                        }
                    },
                    {
                        'btn_Delete': {
                            'data': {
                                'selectElement': 'table',
                                'id': data.id,
                            },
                            'attr': {
                                'data-select': 'userDeleteSelection',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.delete'),
                            'class': 'class22',
                        }
                    },
                ],
            }
            $('#storeCashier_AddDealer_Form_IDs_ManagingDirector_Table_Tbody').append(create_Component_Tbody_Tr_Table(td))
            Reload_Needed.script_Dealer();
            $(this).html(null);
        } else {
            create_Ul_Li_PNotify([isValid], 'error')
        }

    })
}

// Init map
function init_Map() {
    var location = ipinfo.loc.split(',');
    map_DEALER = L.map('storeCashier_AddDealer_Form_Addresses_Map'/!*, { drawControl: true }*!/).setView({
        lat: location[0],
        lon: location[1]
    }, 4);

    // add the OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map_DEALER);

    // show the scale bar on the up-left corner
    L.control.scale().addTo(map_DEALER);

    // show the locate bar on the up-right corner
    var lc = L.control.locate({
        position: 'topright',
        cacheLocation: false,
        strings: {
            title: "Show me where I am, yo!"
        }
    }).addTo(map_DEALER);
    //lc.start();

    // add the OpenStreetMap markersLayer
    var markersLayer = new L.LayerGroup();	//layer contain searched elements
    map_DEALER.addLayer(markersLayer);

    <!-- initialize map on click -->

    theMarker_DEALER = L.marker([location[0], location[1]], {draggable: true}).addTo(map_DEALER);

    <!-- initialize marker on drag -->

    theMarker_DEALER.on('dragend', function (e) {
        //------------------------
        var marker = e.target;
        var position = marker.getLatLng();
        var position_Arr = marker.getLatLng().toString().split('(').pop().split(')').shift().split(',')
        lat = position_Arr[0].trim();
        lon = position_Arr[1].trim();

        map_DEALER.panTo(position);

        var flickerAPI = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon + '&accept-language=' + win_Locale;
        $.getJSON(flickerAPI, {
            //tags: "mount rainier",
            //tagmode: "any",
            format: "json"
        })
            .done(function (data) {
                //------------------------
                //Add a marker to show where you clicked.
                marker.setLatLng(position, {draggable: 'true'}).bindPopup(data.display_name).update();
                initialize_Address_Input(data, 'storeCashier_AddDealer_Form_Addresses_Address');
                //------------------------
                /!* console.log(JSON.stringify(' position: ' + ss))
               console.log(JSON.stringify(' lat: ' + lat + ' lon: ' + lon + ' position2: ' + position_Arr[0]))
                alert(JSON.stringify(data.lat))
                alert(JSON.stringify(data.lon))
                alert(JSON.stringify(data.address))
                alert(JSON.stringify(data.display_name))
                //alert(JSON.stringify(data.address))
                //alert('done' + JSON.stringify(data))*!/
            })
            .fail(function (data) {
                //------------------------
                //------------------------
                //alert('fail' + JSON.stringify(data))
            })
        //------------------------
    });

    <!-- initialize map on click -->
    map_DEALER.on('click', function (e) {
        //------------------------
        lat = e.latlng.lat;
        lon = e.latlng.lng;
        /!*if (theMarker != undefined) {
            map.removeLayer(theMarker);
        }*!/
        var location = new L.LatLng(lat, lon);
        map_DEALER.panTo(location);
        var flickerAPI = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon + '&accept-language=' + win_Locale;
        $.getJSON(flickerAPI, {
            //tags: "mount rainier",
            //tagmode: "any",
            format: "json"
        })
            .done(function (data) {
                //------------------------
                //Add a marker to show where you clicked.
                theMarker_DEALER.setLatLng([lat, lon], {draggable: 'true'}).bindPopup(data.display_name).update();
                initialize_Address_Input(data, 'storeCashier_AddDealer_Form_Addresses_Address');
                //------------------------
                /!*alert(JSON.stringify(data.lat))
                alert(JSON.stringify(data.lon))
                alert(JSON.stringify(data.address))
                alert(JSON.stringify(data.display_name))
                //alert(JSON.stringify(data.address))
                //alert('done' + JSON.stringify(data))*!/
            })
            .fail(function (data) {
                //------------------------
                //------------------------
                //alert('fail' + JSON.stringify(data))
            })
        //------------------------
        //console.log("You clicked the map at LAT: " + lat + " and LONG: " + lon);
        //Clear existing marker,
    });

    <!-- initialize map search address -->
    $("#storeCashier_AddDealer_Form_Addresses_Search_Address").select2({
        //language: 'fa',
        //theme: "classic",
        multiple: true,
        maximumSelectionLength: 1,
        placeholder: Lang.get('Dashboard.public.placeholder_Search_Address'),
        minimumInputLength: 1,
        closeOnSelect: false,
        //selectOnClose: false,
        //disabled:true,
        //allowClear: true,
        ajax: {
            //url: '/',//route('storeCashier.storeCashier_PostsController'),
            url: 'https://nominatim.openstreetmap.org/search',
            /!*url: function (params) {
                return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
            },*!/
            //dataType: 'json',
            delay: 250,
            //type:'post',
            /!* data: function (params) {
                 return {
                     Sync: 'DealersController', // search term
                     SubSync: 'select',
                     Data: params.term,
                     page: params.page
                 };
             },*!/
            data: function (params) {
                return {
                    format: 'json', // search term
                    page: params.page,
                    addressdetails: 1,
                    'accept-language': win_Locale,
                    //limit: '5',
                    q: params.term,
                    //limit:5
                };
            },
            processResults: function (data, params) {
                /!*params.page = params.page || 1;
                return {
                    results: data,
                    pagination: {
                        more: (params.page * 10) < data.total
                    }
                };*!/
                return {
                    results: $.map(data, function (obj) {
                        return {
                            lat: obj.lat,
                            lon: obj.lon,
                            display_name: obj.display_name,
                            type: obj.type,
                            address: obj.address,
                            id: obj.display_name
                        };
                    })
                };
            },
            cache: true
        },
        templateResult: function (repo) {
            if (repo.loading) {
                return repo.text;
            }
            return '<div lon="' + repo.lon + '" lat="' + repo.lat + '">' + repo.display_name + '</div>';
        },
        templateSelection: function (repo) {
            return repo.display_name || repo.text;
        },
        escapeMarkup: function (Markup) {
            return Markup;
        }
    })
        .on('select2:select', function (e) {

            //------------------------
            var addressSelect = $('#storeCashier_AddDealer_Form_Addresses_Search_Address').select2("data")
            initialize_Address_Input(addressSelect[0], 'storeCashier_AddDealer_Form_Addresses_Address');
            //console.log(addressSelect);
            // show a marker on the map
            var location = new L.LatLng(addressSelect[0].lat, addressSelect[0].lon);
            map_DEALER.panTo(location);
            theMarker_DEALER.setLatLng(location, {draggable: 'true'}).bindPopup(addressSelect[0].display_name).update();

            // Map zoom
            if (addressSelect[0].type === 'city' || addressSelect[0].type === 'administrative') {
                map_DEALER.setView({lon: addressSelect[0].lon, lat: addressSelect[0].lat}, 11)
                /!* map.setCenter(,);
                map.setZoom(5);*!/
            } else {
                map_DEALER.setView({lon: addressSelect[0].lon, lat: addressSelect[0].lat}, 17)
            }
            //--------------------------
            //alert(JSON.stringify(addressSelect[0]))
            //alert($('#dealer_Add_Address_Selection').prop('lon'))
            //alert($(this).attr('lon'))
        })
        .on("select2:unselect", function (e) {
            //--------------------------
            var value = e.params.data.id;
            var input_Address = $('#storeCashier_AddDealer_Form_Addresses_Address');
            reset_Address_And_PostalCode_Input(input_Address, input_POSTAL_CODE_Jquery);
            // $('#storeCashier_AddDealer_Form_Addresses_Address').val("")
            //--------------------------
            //alert(JSON.stringify(value));
        });

    //$('#storeCashier_AddDealer_Form_Addresses_Search_Address').val(1).trigger('change.select2');
}

//Manage Validation
function storeCashier_AddDealer_Form_Validation() {
    "use strict";
    var isValid = true;
    var error = [];

    //Validation name
    if (Validate_First_Name($('#storeCashier_AddDealer_Form_Details_Name')) !== true) {
        error.push(Validate_First_Name($('#storeCashier_AddDealer_Form_Details_Name')));
        isValid = false;
        //console.log(1)
    }
    //Validation url
    if (!isEmpty($('#storeCashier_AddDealer_Form_Details_WebsiteName').val())) {
        if (Validate_URL($('#storeCashier_AddDealer_Form_Details_WebsiteName')) !== true) {
            error.push(Validate_URL($('#storeCashier_AddDealer_Form_Details_WebsiteName')));
            isValid = false;
            // console.log(2)
        }
    }
    //Validation emails
    if (!isEmpty($('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('items'))) {
        var check = Validate_Tags_Email($('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('items'));
        if (check !== true) {
            $.each(check, function (key, value) {
                error.push(value)
            })
            isValid = false;
            // console.log(3)
        }
    }
    //Validation time
    if (!isEmpty($('#storeCashier_AddDealer_Form_Details_Open').val())) {
        if (Validate_Time($('#storeCashier_AddDealer_Form_Details_Open')) !== true) {
            error.push(Validate_Time($('#storeCashier_AddDealer_Form_Details_Open')));
            isValid = false;
            // console.log(4)
        }
    }
    //Validation holidays
    if (!isEmpty($('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('items'))) {
        var check = Validate_Tags_DaysOfTheWeek($('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('items'));
        if (check !== true) {
            $.each(check, function (key, value) {
                error.push(value)
            })
            isValid = false;
            // console.log(5)
        }
    }
    //Validation exactly one radio & value checked
    if (Validate_ExactlyOneRadio('storeCashier_AddDealer_Form_DealerType') !== true) {
        error.push(Validate_ExactlyOneRadio('storeCashier_AddDealer_Form_DealerType'));
        isValid = false;
        // console.log(6)
    } else {
        var checked = $('input[type=radio][name=storeCashier_AddDealer_Form_DealerType_Radio]:checked').val()
        if (Validate_Value(checked, ['shop', 'factory', 'company']) !== true) {
            error.push(Validate_Value(checked, ['shop', 'factory', 'company']));
            isValid = false;
            // console.log(7)
        }
    }
    //Validation national id
    if (!isEmpty($('#storeCashier_AddDealer_Form_IDs_NationalId').val())) {
        if (Validate_National_Id($('#storeCashier_AddDealer_Form_IDs_NationalId')) !== true) {
            error.push(Validate_National_Id($('#storeCashier_AddDealer_Form_IDs_NationalId')));
            isValid = false;
            // console.log(8)
        }
    }
    //Validation registration number
    if (!isEmpty($('#storeCashier_AddDealer_Form_IDs_RegistrationNumber').val())) {
        if (Validate_Registration_Number($('#storeCashier_AddDealer_Form_IDs_RegistrationNumber')) !== true) {
            error.push(Validate_Registration_Number($('#storeCashier_AddDealer_Form_IDs_RegistrationNumber')));
            isValid = false;
            // console.log(9)
        }
    }
    //Validation economical number
    if (!isEmpty($('#storeCashier_AddDealer_Form_IDs_EconomicalNumber').val())) {
        if (Validate_Economical_Number($('#storeCashier_AddDealer_Form_IDs_EconomicalNumber')) !== true) {
            error.push(Validate_Economical_Number($('#storeCashier_AddDealer_Form_IDs_EconomicalNumber')));
            isValid = false;
            // console.log(10)
        }
    }

    return {
        isValid: isValid,
        error: error,
    };
};

//Reset form
window.storeCashier_AddDealer_Form_Reset = function storeCashier_AddDealer_Form_Reset() {

    $('#storeCashier_AddDealer_Form_Details')[0].reset();
    $('#storeCashier_AddDealer_Form_Details').find('input').prop('disabled', false);
    $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('removeAll');
    $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('removeAll');
    $('#storeCashier_AddDealer_Form_DealerType')[0].reset();
    $('#storeCashier_AddDealer_Form_DealerType').find('input').prop('disabled', false);
    $('input[type=radio][name=storeCashier_AddDealer_Form_DealerType_Radio][value=shop]').prop("checked", true).trigger("change");
    $('#storeCashier_AddDealer_Form_Phones')[0].reset();
    $('#storeCashier_AddDealer_Form_Phones').find('input').prop('disabled', false);
    $('#storeCashier_AddDealer_Form_Addresses')[0].reset();
    $('#storeCashier_AddDealer_Form_Addresses').find('input').prop('disabled', false);
    $("#storeCashier_AddDealer_Form_Addresses_Table_Tbody").empty();
    $("#storeCashier_AddDealer_Form_Phones_Table_Tbody").empty();
    $("#storeCashier_AddDealer_Form_Supp_Suppliers_Table_Tbody").empty();
    $("#storeCashier_AddDealer_Form_IDs_ManagingDirector_Table_Tbody").empty();
    $("#storeCashier_AddDealer_Form_IDs_Owner_Table_Tbody").empty();
    $('#storeCashier_AddDealer_Form_Supp_Suppliers').html(null);
    $('#storeCashier_AddDealer_Form_IDs_ManagingDirector').html(null);
    $('#storeCashier_AddDealer_Form_IDs_Owner').html(null);
    json_Data_Final_DEALER = {
        phone: {
            mobile: [],
            fixedLine: [],
        },
        address: [],
        emails: [],
        holidays: [],
        suppliers: [],
        owners: [],
        managing_director: [],
    };
    data_ID_Supplier = [];
    data_ID_Owner = [];
    data_ID_ManagingDirector = [];
    json_Data_Final_DEALER.lastName = Lang.get('Dashboard.dealer_Plan.shop');
}

// Init event click
function init_EventClick() {
    //event btn email add to tags input
    $('#storeCashier_AddDealer_Form_Details_Btn_AddEmail').click(function () {
        var input_Email = $('#storeCashier_AddDealer_Form_Details_Email');
        var result = '';
        result = Validate_Email(input_Email.val());
        if (result !== true) {
            create_Ul_Li_PNotify([result], 'error')
        } else {
            $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('add', {
                "value": input_Email.val(),
                "text": input_Email.val()
            });
        }


    })
    //event btn add day holidays add to tags input
    $('#storeCashier_AddDealer_Form_Details_Btn_AddDay').click(function () {
        var daySelect = $('#storeCashier_AddDealer_Form_Details_DaysOfTheWeek').select2("data");
        var result = '';
        result = Validate_DaysOfTheWeek(daySelect[0].id);
        if (result !== true) {
            create_Ul_Li_PNotify([result], 'error')
        } else {
            $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('add', {
                "value": daySelect[0].id,
                "text": daySelect[0].text
            });
        }


    })
    //event btn address add to table
    $('#storeCashier_AddDealer_Form_Addresses_Btn_Add_Address').click(function () {
        var input_Address = $('#storeCashier_AddDealer_Form_Addresses_Address');
        var button = $(this);

        Validate_Address_PostalCode_Input(input_Address, input_POSTAL_CODE_Jquery, intl_POSTAL_CODE_DEALER).then(function (value) {
            if (value == true) {
                if (button.attr('data-edit') === 'true') {
                    reset_Btn_Add(button);
                    var current_Tr_Table_Edit = $('[data-select="addressAddedTable"][data-edit="true"]');
                    update_Tr_Table_Address_Data(current_Tr_Table_Edit, input_Address, input_POSTAL_CODE_Jquery, inputmask_Postal_Code, json_Data_Final_DEALER, intl_POSTAL_CODE_DEALER)
                    reset_Address_And_PostalCode_Input(input_Address, input_POSTAL_CODE_Jquery);

                } else {
                    let id = $('#storeCashier_AddDealer_Form_Addresses_Table tbody tr').length + 1
                    let address = input_Address.data('address');
                    let display_name = input_Address.val();
                    let lat = input_Address.data('lat');
                    let lon = input_Address.data('lon');
                    let type = input_Address.data('type');
                    let countrydata = intl_POSTAL_CODE_DEALER.getSelectedCountryData();
                    let inputmask = input_POSTAL_CODE_Jquery.data('regex');
                    let postal_Code_Text;
                    let postal_Code_Send;

                    if (!isEmpty(input_POSTAL_CODE_Jquery.val())) {
                        postal_Code_Text = input_POSTAL_CODE_Jquery.val();
                        postal_Code_Send = input_POSTAL_CODE_Jquery.val();
                    } else {
                        postal_Code_Text = Lang.get('Dashboard.public.form.not_Exist');
                        postal_Code_Send = 'NotExist';
                    }
                    var td = {
                        'select': 'addressAddedTable',
                        'data': {
                            'sendTableAddress': address,
                            'sendTableLat': lat,
                            'sendTableLon': lon,
                            'sendTableType': type,
                            'sendTableCountryData': countrydata,
                            'sendTableInputmask': inputmask,
                        },
                        'num': [
                            {'number': id}
                        ],
                        'a_small': [
                            {'data': {'td_style': {"white-space": "nowrap"}, /!*'td_class': 'text-right'*!/}},
                            {'a': display_name, 'a_class': 'address'},
                            {'enter': ''},
                            {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
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
                                    'name': Lang.get('Dashboard.public.form.edit'),
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
                                    'name': Lang.get('Dashboard.public.form.delete'),
                                    'class': 'class22',
                                }
                            },
                        ],
                    }
                    $('#storeCashier_AddDealer_Form_Addresses_Table_Tbody').append(create_Component_Tbody_Tr_Table(td))
                    save_Address_Json(json_Data_Final_DEALER.address, id, address, postal_Code_Send, display_name, lat, lon, type, countrydata, inputmask);
                    Reload_Needed.script_Dealer();
                    reset_Address_And_PostalCode_Input(input_Address, input_POSTAL_CODE_Jquery);
                }
            } else {
                new PNotify({
                    title: Lang.get('Dashboard.public.warning'),
                    text: value,
                    type: 'error',
                    hide: false,
                    styling: 'bootstrap3',
                    //addclass: 'dark'
                });
            }
        })

    })
    //event btn owner add to table
    $('#storeCashier_AddDealer_Form_IDs_Owner_Btn_Add_Owner').click(function () {
        var select = $('#storeCashier_AddDealer_Form_IDs_Owner');
        var isValid = Validate_Select2_UserAdd(select, $('#storeCashier_AddDealer_Form_IDs_Owner_Table tbody tr'))
        if (isValid == true) {
            data_ID_Owner.push(select.select2("data")[0].id);
            let id = $('#storeCashier_AddDealer_Form_IDs_Owner_Table tbody tr').length + 1
            let display_name = select.select2("data")[0].first_name + ' ' + select.select2("data")[0].last_name;
            var td = {
                'select': 'userAddedTable',

                'data': {
                    'dataSend': select.select2("data")[0],
                    'job-type': 'owner',
                },
                'num': [
                    {'number': id}
                ],
                'a_small': [
                    {'data': {'td_style': {"white-space": "nowrap"}, /!*'td_class': 'text-right'*!/}},
                    {'a': display_name, 'a_class': 'name'},
                    {'enter': ''},
                    {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                ],
                'user_details': [
                    {
                        'btn_View': {
                            'data': {
                                'selectElement': 'table',
                                'id': select.select2("data")[0].id,
                            },
                            'attr': {
                                'data-select': 'userViewSelection',
                                'data-toggle': 'modal',
                                'data-target': '#storeCashier_Work_Modal_ElementView',
                                //'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.view_details'),
                            'class': 'class22',

                        }
                    }
                ],
                'btn': [
                    {
                        'btn_Edit': {
                            'data': {
                                'select-element': 'table',
                                'id': select.select2("data")[0].id,
                            },
                            'attr': {
                                'data-select': 'userEditSelection',
                                'data-toggle': 'modal',
                                'data-target': '#storeCashier_Work_Modal_UserAdd',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.edit'),
                            'class': 'class22',
                        }
                    },
                    {
                        'btn_Delete': {
                            'data': {
                                'selectElement': 'table',
                                'id': select.select2("data")[0].id,
                            },
                            'attr': {
                                'data-select': 'userDeleteSelection',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.delete'),
                            'class': 'class22',
                        }
                    },
                ],
            }
            $('#storeCashier_AddDealer_Form_IDs_Owner_Table_Tbody').append(create_Component_Tbody_Tr_Table(td))
            Reload_Needed.script_Dealer();
            select.html(null);
        } else {
            create_Ul_Li_PNotify([isValid], 'error')
        }
    })
    //event btn supplier add to table
    $('#storeCashier_AddDealer_Form_Supp_Suppliers_Btn_Add_Supplier').click(function () {
        var select = $('#storeCashier_AddDealer_Form_Supp_Suppliers');
        var isValid = Validate_Select2_UserAdd(select, $('#storeCashier_AddDealer_Form_Supp_Suppliers_Table tbody tr'));
        if (isValid == true) {
            data_ID_Supplier.push(select.select2("data")[0].id);
            let id = $('#storeCashier_AddDealer_Form_Supp_Suppliers_Table tbody tr').length + 1
            let display_name = select.select2("data")[0].first_name + ' ' + select.select2("data")[0].last_name;
            var td = {
                'select': 'userAddedTable',

                'data': {
                    'dataSend': select.select2("data")[0],
                    'job-type': 'suppliers',
                },
                'num': [
                    {'number': id}
                ],
                'a_small': [
                    {'data': {'td_style': {"white-space": "nowrap"}, /!*'td_class': 'text-right'*!/}},
                    {'a': display_name, 'a_class': 'name'},
                    {'enter': ''},
                    {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                ],
                'user_details': [
                    {
                        'btn_View': {
                            'data': {
                                'selectElement': 'table',
                                'id': select.select2("data")[0].id,
                            },
                            'attr': {
                                'data-select': 'userViewSelection',
                                'data-toggle': 'modal',
                                'data-target': '#storeCashier_Work_Modal_ElementView',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.view_details'),
                            'class': 'class22',

                        }
                    }
                ],
                'btn': [
                    {
                        'btn_Edit': {
                            'data': {
                                'select-element': 'table',
                                'id': select.select2("data")[0].id,
                            },
                            'attr': {
                                'data-select': 'userEditSelection',
                                'data-toggle': 'modal',
                                'data-target': '#storeCashier_Work_Modal_UserAdd',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.edit'),
                            'class': 'class22',
                        }
                    },
                    {
                        'btn_Delete': {
                            'data': {
                                'selectElement': 'table',
                                'id': select.select2("data")[0].id,
                            },
                            'attr': {
                                'data-select': 'userDeleteSelection',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('Dashboard.public.form.delete'),
                            'class': 'class22',
                        }
                    },
                ],
            }
            $('#storeCashier_AddDealer_Form_Supp_Suppliers_Table_Tbody').append(create_Component_Tbody_Tr_Table(td))
            Reload_Needed.script_Dealer();
            select.html(null);
        } else {
            create_Ul_Li_PNotify([isValid], 'error')
        }
    })
    //event btn phones add to table
    $('#storeCashier_AddDealer_Form_Phones_Btn_Add_Phones').click(function () {
        var form_input_Phone = $('#storeCashier_AddDealer_Form_Phones');
        var button = $(this);
        var result = Validate_Phones_Input(null, input_FIXED_LINE_Jquery, null, intl_FIXED_LINE_DEALER, json_Data_Final_DEALER);

        if (result == true) {
            if (button.attr('data-edit') === 'true') {

                var current_Tr_Table_Edit = $('[data-select="phoneAddedTable"][data-edit="true"]');
                update_Tr_Table_Phone_Data(current_Tr_Table_Edit, 'storeCashier_AddDealer_Form_Phones', null, inputmask_Phone_Fixed_line, null, intl_FIXED_LINE_DEALER, json_Data_Final_DEALER);
                reset_Btn_Add(button);
                reset_Phone_Input(null, input_FIXED_LINE_Jquery);
            } else {
                if (!isEmpty(input_FIXED_LINE_Jquery.val())) {
                    let id = $('#storeCashier_AddDealer_Form_Phones_Table tbody tr').length + 1;
                    let type = Lang.get('Dashboard.public.form.phone_Type_Fixed');
                    let type_Send = 'FIXED_LINE';
                    let countrydata = intl_FIXED_LINE_DEALER.getSelectedCountryData();
                    let inputmask = input_FIXED_LINE_Jquery.data('regex');
                    let number = intl_FIXED_LINE_DEALER.getNumber();

                    var td = {
                        'select': 'phoneAddedTable',
                        'data': {
                            'sendTableType': 'FIXED_LINE',//intl_FIXED_LINE_DEALER.getNumberType(),
                            'sendTableCountryData': countrydata,
                            'sendTableInputmask': inputmask,
                        },
                        'num': [
                            {'number': id}
                        ],
                        'a_small': [
                            {'data': {'td_style': {"direction": "ltr","white-space": "nowrap"}, 'td_class': 'text-right'}},
                            {
                                'a': number,
                                'a_class': 'phone', /!*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*!/
                            },
                            {'enter': ''},
                            {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                        ],
                        'numberType': [
                            {'a': type, 'a_class': 'phone_Type'}
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
                                    'name': Lang.get('Dashboard.public.form.edit'),
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
                                    'name': Lang.get('Dashboard.public.form.delete'),
                                    //'class': 'class22',
                                }
                            },
                        ],
                    };
                    $('#storeCashier_AddDealer_Form_Phones_Table_Tbody').append(create_Component_Tbody_Tr_Table(td))
                    save_Phone_Json(json_Data_Final_DEALER.phone.fixedLine, id, type_Send, countrydata, inputmask, number);
                }
                Reload_Needed.script_Dealer();
                reset_Phone_Input(null, input_FIXED_LINE_Jquery);
            }
        } else {
            new PNotify({
                title: Lang.get('Dashboard.public.warning'),
                text: result,
                type: 'error',
                hide: false,
                styling: 'bootstrap3',
                //addclass: 'dark'
            });
        }

    })
    //event btn role init
    $('#storeCashier_AddDealer_Form_IDs_ManagingDirector_AddUser').click(function () {
        event_Btn_Edit_Click = false;
        userEditSelectionID = ''

    })
    $('#storeCashier_AddDealer_Form_IDs_Owner_AddUser').click(function () {
        event_Btn_Edit_Click = false;
        userEditSelectionID = ''

    })
    $('#storeCashier_AddDealer_Form_Supp_Suppliers_AddUser').click(function () {
        event_Btn_Edit_Click = false;
        userEditSelectionID = ''

    })
    //event change dealer type radio
    $('input[type=radio][name=storeCashier_AddDealer_Form_DealerType_Radio]').change(function () {
        if (this.value == 'shop') {
            json_Data_Final_DEALER.lastName = Lang.get('Dashboard.dealer_Plan.shop');
            $('#storeCashier_AddDealer_Form_IDs_NationalId').val('');
            $('#storeCashier_AddDealer_Form_IDs_RegistrationNumber').val('');
            $('#storeCashier_AddDealer_Form_IDs_EconomicalNumber').val('');
            $('#storeCashier_AddDealer_Form_IDs_ShowOnlyFactoryAndCompany').addClass('hidden');
            $('#storeCashier_AddDealer_Xtitle_Phone').text(Lang.get('Dashboard.dealer_Plan.phones_shop_header'));
            $('#storeCashier_AddDealer_Xtitle_Address').text(Lang.get('Dashboard.dealer_Plan.addresses_shop_header'));
            $('#storeCashier_AddDealer_Xtitle_Suppliers').text(Lang.get('Dashboard.dealer_Plan.suppliers_shop_header'));
            $('#storeCashier_AddDealer_Form_Supp_Suppliers_Label').text(Lang.get('Dashboard.public.form.shop_supplier'));
            $('#storeCashier_AddDealer_Form_IDs_Owner_Label').text(Lang.get('Dashboard.public.form.shop_owner'));
        }
        if (this.value == 'company') {
            json_Data_Final_DEALER.lastName = Lang.get('Dashboard.dealer_Plan.company');
            $('#storeCashier_AddDealer_Form_IDs_ShowOnlyFactoryAndCompany').removeClass('hidden');
            $('#storeCashier_AddDealer_Xtitle_Phone').text(Lang.get('Dashboard.dealer_Plan.phones_company_header'));
            $('#storeCashier_AddDealer_Xtitle_Address').text(Lang.get('Dashboard.dealer_Plan.addresses_company_header'));
            $('#storeCashier_AddDealer_Xtitle_Suppliers').text(Lang.get('Dashboard.dealer_Plan.suppliers_company_header'));
            $('#storeCashier_AddDealer_Form_Supp_Suppliers_Label').text(Lang.get('Dashboard.public.form.company_supplier'));
            $('#storeCashier_AddDealer_Form_IDs_Owner_Label').text(Lang.get('Dashboard.public.form.company_owner'));
        }
        if (this.value == 'factory') {
            json_Data_Final_DEALER.lastName = Lang.get('Dashboard.dealer_Plan.factory');
            $('#storeCashier_AddDealer_Form_IDs_ShowOnlyFactoryAndCompany').removeClass('hidden');
            $('#storeCashier_AddDealer_Xtitle_Phone').text(Lang.get('Dashboard.dealer_Plan.phones_factory_header'));
            $('#storeCashier_AddDealer_Xtitle_Address').text(Lang.get('Dashboard.dealer_Plan.addresses_factory_header'));
            $('#storeCashier_AddDealer_Xtitle_Suppliers').text(Lang.get('Dashboard.dealer_Plan.suppliers_factory_header'));
            $('#storeCashier_AddDealer_Form_Supp_Suppliers_Label').text(Lang.get('Dashboard.public.form.factory_supplier'));
            $('#storeCashier_AddDealer_Form_IDs_Owner_Label').text(Lang.get('Dashboard.public.form.factory_owner'));
        }
    });
    //Add dealer
    window.storeCashier_AddDealer_Form_DealerAdded_Btn_Add_Dealer = function storeCashier_AddDealer_Form_DealerAdded_Btn_Add_Dealer() {
        $('#storeCashier_AddDealer_Form_DealerAdded_Btn_Add_Dealer').click(function () {
            var this_Btn_Click = $(this);
            var manage_Validation = storeCashier_AddDealer_Form_Validation();

            if (!manage_Validation.isValid) {
                console.log(manage_Validation.error)
                create_Ul_Li_PNotify(manage_Validation.error, 'error')
            } else {
                var checked = '';
                if (isExist(() => json_Data_Final_DEALER.dealer_type))
                    checked = json_Data_Final_DEALER.dealer_type;
                if (!isExist(() => json_Data_Final_DEALER.id)) {
                    checked = $('input[type=radio][name=storeCashier_AddDealer_Form_DealerType_Radio]:checked').val();
                    json_Data_Final_DEALER.dealer_type = checked;
                }
                var emails = $('#storeCashier_AddDealer_Form_Details_Emails').tagsinput('items');
                emails = $.map(emails, function (value, key) {
                    return value.value;
                });
                var holidays = $('#storeCashier_AddDealer_Form_Details_Holidays').tagsinput('items');
                holidays = $.map(holidays, function (value, key) {
                    return value.value;
                });
                // If use select2
                /!*var managing_Director = $('#storeCashier_AddDealer_Form_IDs_ManagingDirector').select2("data");
                managing_Director = $.map(managing_Director, function (value, key) {
                    return value.id;
                });
                var owner = $('#storeCashier_AddDealer_Form_IDs_Owner').select2("data");
                owner = $.map(owner, function (value, key) {
                    return value.id;
                });
                var suppliers = $('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
                suppliers = $.map(suppliers, function (value, key) {
                    return value.id;
                });*!/
                var owners = [];
                var suppliers = [];
                var managing_Director = [];
                $.each($('#storeCashier_AddDealer_Form_IDs_Owner_Table tbody tr'), function (item, value) {
                    owners.push($(this).data('dataSend').id);
                })
                $.each($('#storeCashier_AddDealer_Form_Supp_Suppliers_Table tbody tr'), function (item, value) {
                    suppliers.push($(this).data('dataSend').id);
                })
                $.each($('#storeCashier_AddDealer_Form_IDs_ManagingDirector_Table tbody tr'), function (item, value) {
                    managing_Director.push($(this).data('dataSend').id);
                })
                json_Data_Final_DEALER.firstName = $('#storeCashier_AddDealer_Form_Details_Name').inputmask('unmaskedvalue');
                json_Data_Final_DEALER.website = $('#storeCashier_AddDealer_Form_Details_WebsiteName').val();
                json_Data_Final_DEALER.emails = emails;
                json_Data_Final_DEALER.open = $('#storeCashier_AddDealer_Form_Details_Open').val();
                json_Data_Final_DEALER.holidays = holidays;
                switch (checked) {
                    case 'shop':
                        json_Data_Final_DEALER.suppliers = suppliers;
                        json_Data_Final_DEALER.owners = owners;
                        break;
                    case 'company':
                    case 'factory':
                        json_Data_Final_DEALER.national_id = $('#storeCashier_AddDealer_Form_IDs_NationalId').inputmask('unmaskedvalue');
                        json_Data_Final_DEALER.registration_number = $('#storeCashier_AddDealer_Form_IDs_RegistrationNumber').inputmask('unmaskedvalue');
                        json_Data_Final_DEALER.economical_number = $('#storeCashier_AddDealer_Form_IDs_EconomicalNumber').inputmask('unmaskedvalue');
                        json_Data_Final_DEALER.suppliers = suppliers;
                        json_Data_Final_DEALER.owners = owners;
                        json_Data_Final_DEALER.managing_director = managing_Director;
                        break;
                }
                json_Data_Final_DEALER.role = ['supplier', 'owner'];
                json_Data_Final_DEALER.component_view = 'component_Dealers_Setting';
                //json_Data_Final_DEALER.insert_relation = true;
                json_Data_Final_DEALER.data_Table_Id = {
                    'table_Id': 'storeCashier_AddDealer_Form_DealerAdded_Table',
                    'thead_Id': 'storeCashier_AddDealer_Form_DealerAdded_Table_Thead',
                    'tbody_Id': 'storeCashier_AddDealer_Form_DealerAdded_Table_Tbody'
                };
                //json_Data_Final_DEALER.owners.push(select.select2("data")[0].id);

                $.ajax({
                    url: '/',
                    method: 'POST',
                    data: {
                        'Sync': 'DealerAddedController',
                        'SubSync': 'set_Or_Edit_Dealer',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': {
                            json_Data: json_Data_Final_DEALER,
                            id_Btn1_Together: 'storeCashier_AddDealer_Btn_Repeat_Agree',
                            id_Btn2_Together: 'storeCashier_AddDealer_Btn_Repeat_Against'
                        },
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        //------------------------
                        //DataTable user added
                        if (data.hasOwnProperty('success')) {
                            if (!stack_Go_Back.isEmpty()) {
                                create_Ul_Li_PNotify([data.message], 'success');
                                if (isExist(() => json_Data_Final_DEALER.id))
                                    table_DealerMatcher_Data_Update(json_Data_Final_DEALER.id, json_Data_Final_DEALER.firstName);
                            } else {
                                create_Ul_Li_PNotify([data.message], 'success', data.add);
                            }
                            setTimeout(function () {
                                $('#storeCashier_AddDealer_Form_DealerAdded_Btn_Cancel_Dealer').trigger('click');
                                if (!stack_Go_Back.isEmpty()) {
                                    $('[data_Remove="component"]:visible .page_toolbox_control_return').trigger('click');
                                }
                            }, 700);
                            if ($.fn.DataTable.isDataTable('#storeCashier_AddDealer_Form_DealerAdded_Table')) {
                                $('#storeCashier_AddDealer_Form_DealerAdded_Table').DataTable().destroy();
                            }
                            get_Language(win_Locale.toLowerCase()).then(function (data) {
                                $("#storeCashier_AddDealer_Form_DealerAdded_Table").DataTable({
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
                            })
                            storeCashier_AddDealer_Form_Reset();

                        }

                        //--------------------------
                        /!*console.log('Done : ' + data);
                        alert('done: ' + JSON.stringify(data))*!/
                    },
                    error: function (data) {
                        //------------------------
                        create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                        //------------------------
                        /!*console.log('Error : ' + JSON.stringify(data));
                        alert('error: ' + JSON.stringify(data))*!/
                    },
                    complete: function (data) {
                        //------------------------
                        if (stack_Go_Back.isEmpty()) {
                            Reload_Needed.script_Dealer();
                        }
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /!*console.log('complete : ' + JSON.stringify(data));
                        alert('complete: ' + JSON.stringify(data))*!/
                    }
                });

                //console.log(json_Data_Final_DEALER);

            }
        })
    }
    //Call event add user
    storeCashier_AddDealer_Form_DealerAdded_Btn_Add_Dealer();
    //Refresh user
    $('#storeCashier_AddDealer_Form_DealerAdded_Table_Btn_Refresh').click(function () {
        $('#storeCashier_AddDealer_Form_DealerAdded_Table_Btn_Refresh_Icon').addClass('fa-spin fa-fw');
        $.ajax({
            url: '/',
            method: 'POST',
            data: {
                'Sync': 'DealerAddedController',
                'SubSync': 'broadcast_Dealer',
                'Data': {
                    json_Data: {
                        'component_view': 'component_Dealers_Setting',
                        'data_Table_Id': {
                            'table_Id': 'storeCashier_AddDealer_Form_DealerAdded_Table',
                            'thead_Id': 'storeCashier_AddDealer_Form_DealerAdded_Table_Thead',
                            'tbody_Id': 'storeCashier_AddDealer_Form_DealerAdded_Table_Tbody'
                        }
                    }
                },

            },
            success: function (data) {
                //------------------------
                //DataTable user added

                if ($.fn.DataTable.isDataTable('#storeCashier_AddDealer_Form_DealerAdded_Table')) {
                    $('#storeCashier_AddDealer_Form_DealerAdded_Table').DataTable().destroy();
                }
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    $("#storeCashier_AddDealer_Form_DealerAdded_Table").DataTable({
                        language: {url: "assets/app/js/json/datatable/language/" + data + ".json"},
                        "autoWidth": false,
                        columnDefs: [
                            {"width": "50%", "targets": 1}
                        ],

                        /!* "columns": [
                             null,
                             { "width": "80%" },
                             null,
                             null,
                             null,
                             null
                         ],*!/
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
                })
                //--------------------------
                /!* console.log('Done : ' + JSON.stringify(data));
                 alert('done: ' + JSON.stringify(data))*!/
            },
            error: function (data) {
                //------------------------
                create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                //------------------------
                /!*console.log('Error : ' + JSON.stringify(data));
                alert('error: ' + JSON.stringify(data))*!/
            },
            complete: function (data) {
                //------------------------
                $('#storeCashier_AddDealer_Form_DealerAdded_Table_Btn_Refresh_Icon').removeClass('fa-spin fa-fw');
                // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                //import('../initialize/show_Room_Repeat.js');

                //------------------------
                /!*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*!/
            }
        });
    })
}

// Init btns in the dealerAdd.blade --> Btns not to in Blocks
function init_Btns() {
    $('#storeCashier_AddDealer_PreviousStep_Btn').click(function () {
        activeStep('component_Users_Setting', manageScriptPath.component_Users_Setting());
    });
    $('#storeCashier_AddDealer_NextStep_Btn').click(function () {
        activeStep('component_Products_Setting', manageScriptPath.component_Products_Setting());
    });
}

// Init event Modal
function init_EventModal() {
    $('#storeCashier_Work_Modal_UserAdd').on('shown.bs.modal', function () {
        $('#storeCashier_AddDealer_Form_IDs_Owner').select2('close');
        $('#storeCashier_AddDealer_Form_Supp_Suppliers').select2('close');
        $('#storeCashier_AddDealer_Form_IDs_ManagingDirector').select2('close');
        if (allow_getScript) {
            $.getScript(manageScriptPath.component_Users_Add_By_Modal()).done(function () {
                if (event_Btn_Edit_Click) {
                    $.getScript(manageScriptPath.component_Users_Add_By_Modal_RelativeCallRelative1());
                }
                allow_getScript = false;
            });
        }
        if (!event_Btn_Edit_Click) {
            $('#storeCashier_Work_Modal_UserAdd_Form_UserAdded_Btn_Cancel_User').trigger('click')
        }
        if (!allow_getScript && event_Btn_Edit_Click) {
            $.getScript(manageScriptPath.component_Users_Add_By_Modal_RelativeCallRelative1());
        }
    });
}

// Initialize select2
init_Select2();
// Initialize startup
init_Startup();
// Listen change Dealer
listen_Dealer_Table($('#storeCashier_AddDealer_Form_DealerAdded_Table_Add'));
// Initialize event modal
init_EventModal()
// Initialize inputmask
init_Inputmask();
// Initialize intlTelInput --> Phones And Postal code
init_IntlTelInput();
// Initialize map
init_Map();
// Initialize click
init_EventClick();
// Initialize btns
init_Btns();
*/
console.log('das')

/*let form = $('.form'),
    cache_width = form.width(),
    a4 = [595.28, 841.89]; // for a4 size paper width and height



/!*(function ($) {
    $.fn.html2canvas = function (options) {
        var date = new Date(),
            $message = null,
            timeoutTimer = false,
            timer = date.getTime();
        html2canvas.logging = options && options.logging;
        html2canvas.Preload(this[0], $.extend({
            complete: function (images) {
                var queue = html2canvas.Parse(this[0], images, options),
                    $canvas = $(html2canvas.Renderer(queue, options)),
                    finishTime = new Date();

                $canvas.css({ position: 'absolute', left: 0, top: 0 }).appendTo(document.body);
                $canvas.siblings().toggle();

                $(window).click(function () {
                    if (!$canvas.is(':visible')) {
                        $canvas.toggle().siblings().toggle();
                        throwMessage("Canvas Render visible");
                    } else {
                        $canvas.siblings().toggle();
                        $canvas.toggle();
                        throwMessage("Canvas Render hidden");
                    }
                });
                throwMessage('Screenshot created in ' + ((finishTime.getTime() - timer) / 1000) + " seconds<br />", 4000);
            }
        }, options));

        function throwMessage(msg, duration) {
            window.clearTimeout(timeoutTimer);
            timeoutTimer = window.setTimeout(function () {
                $message.fadeOut(function () {
                    $message.remove();
                });
            }, duration || 2000);
            if ($message)
                $message.remove();
            $message = $('<div ></div>').html(msg).css({
                margin: 0,
                padding: 10,
                background: "#000",
                opacity: 0.7,
                position: "fixed",
                top: 10,
                right: 10,
                fontFamily: 'Tahoma',
                color: '#fff',
                fontSize: 12,
                borderRadius: 12,
                width: 'auto',
                height: 'auto',
                textAlign: 'center',
                textDecoration: 'none'
            }).hide().fadeIn().appendTo('body');
        }
    };
})(jQuery);*!/

//create pdf
function createPDF2() {
    var doc = new jsPDF();
    doc.html(document.getElementById("tablesssss"), {
        callback: function (doc) {
            doc.save();
        },
        x: 10,
        y: 10
    });
}
//create pdf
function createPDF() {
    getCanvas().then(function (canvas) {
        var
            img = canvas.toDataURL("image/png"),
            doc = new jsPDF({
                unit: 'px',
                format: 'a4'
            });
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save('Bhavdip-html-to-pdf.pdf');
        form.width(cache_width);
    });
}

// create canvas object
function getCanvas() {
    form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
    return html2canvas(form, {
        imageTimeout: 2000,
        removeContainer: true
    });
}*/


async function ss(){
    let order = await baseServicesDB.orderServices.getOrder('OI-3-1624012964359');

    let print_Table_Data = {
        order: order,
        items: order.items,
        freight_outward: isExist(()=>Object.values(order.sum_prices.freight_outward)[0])?Object.values(order.sum_prices.freight_outward)[0]:0,
        freight_outward_currency_code: isExist(()=>Object.keys(order.sum_prices.freight_outward)[0])?Object.keys(order.sum_prices.freight_outward)[0]:0,
        sundry_expenses: isExist(()=>Object.values(order.sum_prices.sundry_expenses)[0])?Object.values(order.sum_prices.sundry_expenses)[0]:0,
        sundry_expenses_currency_code: isExist(()=>Object.keys(order.sum_prices.sundry_expenses)[0])?Object.keys(order.sum_prices.sundry_expenses)[0]:0,
    }

    // let print_Header = await HTML_Create_View_Print.print_Header_Billing_Invoice(order);
    // let print_Table = await HTML_Create_View_Print.print_Table_Billing_Invoice(print_Table_Data);
    let print_Billing = await HTML_Create_View_Print.print_Billing_Invoice_Sale_Items(print_Table_Data);


    // let print_Receipt_Header = await HTML_Create_View_Print.print_Header_Receipt_Invoice(order);
    // let print_Receipt_Table = await HTML_Create_View_Print.print_Table_Receipt_Invoice(print_Table_Data);
    // let print_Receipt_Footer = await HTML_Create_View_Print.print_Footer_Receipt_Invoice(order);
    // let div= $('<div></div>');
    // div.append(print_Receipt_Header).append(print_Receipt_Table).append(print_Receipt_Footer);
    let print_Receipt = await HTML_Create_View_Print.print_Receipt_Invoice_Sale_Items(print_Table_Data);



    $('#insert_Invoice').append(print_Receipt);
    $('#insert_Invoice').append(print_Billing);
}

// ss();


$('#create_pdf').on("mousedown", function (){
    $(this).find('.fa-refresh').removeClass('hidden').addClass('fa-spin fa-fw');
});
$('#create_pdf').on('click', async function () {
    $('body').scrollTop(0);

    let opt={
        "margin": [
            0,
            0
        ],
        "filename": "label.pdf",
        "image": {
            "type": "jpeg",
            "quality": 1
        },
        "html2canvas": {
            "scale": 3,
            "letterRendering": true
        },
        "pagebreak": {
            "after": [
                "table.paper"
            ],
            "avoid": "tr.tr_master"
        },
        "jsPDF": {
            "unit": "mm",
            "format": [
                250,
                151
            ],
            "orientation": "landscape"
        }
    }
        /*{
        "text": "",
        "id": 126,
        "title": "",
        "id_change": 126,
        "user_id": 3,
        "name": "letter (8.5 x 11 in)",
        "columns": [],
        "filename": "label.pdf",
        "html2canvas": {
            "scale": "3"
        },
        "image": {
            "type": "jpeg",
            "quality": 1
        },
        "is_table_bordered": 1,
        "is_table_striped": 0,
        "jsPDF": {
            "unit": "mm",
            "format": {
                "custom": 1,
                "width": 100,
                "height": 151
            },
            "orientation": "landscape"
        },
        "margin": [
            24.5,
            10,
            24.5,
            10
        ],
        "pagebreak": {
            "after": [
                ".html2pdf__page-break"
            ],
            "avoid": "tr"
        },
        "type": "label",
        "custom_type": "label_letter",
        "variable": {
            "": ""
        },
        "revision": 8,
        "entered_by": 3,
        "last_modified_by": 3,
        "created_at": "2021-10-10T22:48:35.000000Z",
        "updated_at": "2021-10-10T22:55:04.000000Z",
        "name_text": "letter (8.5 x 11 in)",
        "labels": [
            {
                "id": 31,
                "id_change": 31,
                "print_setting_id": 126,
                "name": "WL-125, 10 labels sheet",
                "label_width": "101.60",
                "label_height": "50.80",
                "label_around": 5,
                "label_across": 2,
                "gap_around": "0.00",
                "gap_across": "3.56",
                "margin_right": "4.57",
                "margin_left": "4.57",
                "margin_top": "12.70",
                "margin_bottom": "12.70",
                "auto_top_bottom": 1,
                "auto_right_left": 1,
                "fixed_top_bottom": 1,
                "fixed_right_left": 1,
                "barcode_display_mode": "horizontal",
                "font_size": 14,
                "created_at": "2021-10-10T22:48:35.000000Z",
                "updated_at": "2021-10-10T22:55:04.000000Z",
                "deleted_at": null
            }
        ],
        "is_send": 0,
        "is_deleted": 0,
        "record_type": "save",
        "status": "none",
        "deleted_at": null
    }*/
    /*$('#insert_Invoice').empty();
    $('#insert_Invoice').append(print_Billing);*/
    let print=new Print($('#insert_Invoice'),opt)

    // await print.billing_Invoice();
    await print.no_Need_To_Change_The_Settings();

    $(this).find('.fa-refresh').addClass('hidden').removeClass('fa-spin fa-fw');
    // $('#insert_Invoice').empty();
});
