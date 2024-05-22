class Form_Create_User {

    user = $('#user');
    user_Added = $('#user_Added');
    user_Details = $('#user_PanelDetails');
    address_Details = $('#user_PanelAddresses');
    phone_Details = $('#user_PanelPhones');
    role_Details = $('#user_PaneRoles');
    permission_Details = $('#user_PanePermissions');


    phone_MOBILE = document.querySelector("#user_PanelPhones input[name='mobile']");
    phone_FIXEDLINE = document.querySelector("#user_PanelPhones input[name='fixed_Line']");
    address_POSTALCODE = document.querySelector("#user_PanelAddresses input[name='postal_Code']");

    phone_Inputmask_MOBILE = '';
    phone_Inputmask_FIXEDLINE = '';
    address_Inputmask_POSTALCODE = '';

    phone_Intl_MOBILE;
    phone_Intl_FIXEDLINE;
    address_Intl_POSTALCODE;

    map;
    theMarker;


    // Startup
    init_Startup() {
        let this_Class = this;
    }

    // Inputmask
    init_InputMask() {
        let this_Class = this;

        InputMaskManageElements.email(this_Class.user_Details.find('[name="email"]'));
        InputMaskManageElements.firstName(this_Class.user_Details.find('[name="first_Name"]'));
        InputMaskManageElements.lastName(this_Class.user_Details.find('[name="last_Name"]'));
        InputMaskManageElements.date(this_Class.user_Details.find('[name="date_Of_Birth"]'));
        InputMaskManageElements.ssn(this_Class.user_Details.find('[name="ssn"]'));
        InputMaskManageElements.postalCode(this_Class.address_Details.find('[name="postal_Code"]'), win_CountryCodeLocale).then(function (data) {
            this_Class.address_Inputmask_POSTALCODE = data;
        });

    }

    // Select2
    init_Select2() {
        let this_Class = this;

        this_Class.phone_Intl_MOBILE = window.intlTelInput(this_Class.phone_MOBILE, {
            //geoIpLookup:  ipinfo.countryCode ,
            //initialCountry: "auto",
            initialCountry: win_CountryCodeLocale,
            preferredCountries: ['ir', 'us'],
            placeholderNumberType: 'MOBILE',
            utilsScript: "assets/dashboard/lib/utils.js",
        });
        this_Class.phone_Intl_FIXEDLINE = window.intlTelInput(this_Class.phone_FIXEDLINE, {
            //geoIpLookup:  ipinfo.countryCode ,
            //initialCountry: "auto",
            initialCountry: win_CountryCodeLocale,
            preferredCountries: ['ir', 'us'],
            placeholderNumberType: 'FIXED_LINE',
            //utilsScript: "assets/dashboard/lib/utils.js",
        });
        this_Class.address_Intl_POSTALCODE = window.intlTelInput(this_Class.address_POSTALCODE, {
            //geoIpLookup:  ipinfo.countryCode ,
            //initialCountry: "auto",
            autoPlaceholder: "off",
            initialCountry: win_CountryCodeLocale,
            preferredCountries: ['ir', 'us'],
            //placeholderNumberType: 'FIXED_LINE',
            //utilsScript: "assets/dashboard/lib/utils.js",
        });

        this_Class.phone_Intl_MOBILE.promise.then(function () {
            this_Class.phone_MOBILE.addEventListener("close:countrydropdown", function () {
                this_Class.phone_Inputmask_MOBILE = InputMaskManageElements.phone(this_Class.phone_Details.find('[name="mobile"]'));
            });
            this_Class.phone_Inputmask_MOBILE = InputMaskManageElements.phone(this_Class.phone_Details.find('[name="mobile"]'));
        });
        this_Class.phone_Intl_FIXEDLINE.promise.then(function () {
            this_Class.phone_FIXEDLINE.addEventListener("close:countrydropdown", function () {
                this_Class.phone_Inputmask_FIXEDLINE = InputMaskManageElements.phone(this_Class.phone_Details.find('[name="fixed_Line"]'));
            });
            this_Class.phone_Inputmask_FIXEDLINE = InputMaskManageElements.phone(this_Class.phone_Details.find('[name="fixed_Line"]'));
        });
        this_Class.address_POSTALCODE.addEventListener("countrychange", function () {
            let countryData = this_Class.address_Intl_POSTALCODE.getSelectedCountryData();
            InputMaskManageElements.postalCode(this_Class.address_Details.find('[name="postal_Code"]'), countryData.iso2.toUpperCase()).then(function (data) {
                this_Class.address_Inputmask_POSTALCODE = data;
            })
        });

        // Select2 Roles
        this_Class.role_Details.find('[name="roles"]').off('select2:select');
        this_Class.role_Details.find('[name="roles"]').off('select2:unselect');
        this_Class.role_Details.find('[name="roles"]').select2({
            //language: 'fa',
            //theme: "classic",
            multiple: true,
            //maximumSelectionLength: 1,
            placeholder: Lang.get('Dashboard.public.placeholder_Search_Role'),
            minimumInputLength: 0,
            /*closeOnSelect: true,
            selectOnClose: true,*/
            //allowClear: true,
            ajax: {
                url: '/PostsController',//route('storeCashier.storeCashier_Controller'),
                //url: 'https://nominatim.openstreetmap.org/search',
                /*url: function (params) {
    return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
},*/
                //dataType: 'json',
                delay: 250,
                type: 'post',
                data: function (params) {
                    return {
                        Sync: 'RoleController', // search term
                        SubSync: 'getAll',
                        Data: {
                            search: params.term,
                            page: params.page,
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
                    console.log(data);
                    params.page = params.page || 1;
                    return {
                        results: data.result,
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
                return repo.name_text;
            },
            templateSelection: function (repo) {
                return repo.name_text;
            },
            escapeMarkup: function (Markup) {
                return Markup;
            }
        })
            .on('select2:select', function (e) {
                //------------------------
                let data = $(this).select2("data");
                console.log(data);
                //$('input.select2-search__field').trigger('blur')
            })
            .on("select2:unselect", function (e) {
                //--------------------------
                // var data = this_Class.selector.select2("data");
                //console.log(data);
                //$(this).empty()
                /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
data_ID=$.map(data, function (value, key) {
    return value['id'];
})*/
                //$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2('destroy');
                // $('#storeCashier_AddDealer_Form_Supp_Suppliers').html(null);
                /*var value = e.params.data.id;
console.log(value);
console.log(e.params.data);*/
            });

        // Select2 Permissions
        this_Class.permission_Details.find('[name="permissions"]').off('select2:select');
        this_Class.permission_Details.find('[name="permissions"]').off('select2:unselect');
        this_Class.permission_Details.find('[name="permissions"]').select2({
            //language: 'fa',
            //theme: "classic",
            multiple: true,
            //maximumSelectionLength: 1,
            placeholder: Lang.get('Dashboard.public.placeholder_Search_Permission'),
            minimumInputLength: 0,
            /*closeOnSelect: true,
            selectOnClose: true,*/
            //allowClear: true,
            ajax: {
                url: '/PostsController',//route('storeCashier.storeCashier_Controller'),
                //url: 'https://nominatim.openstreetmap.org/search',
                /*url: function (params) {
    return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
},*/
                //dataType: 'json',
                delay: 250,
                type: 'post',
                data: function (params) {
                    return {
                        Sync: 'PermissionController', // search term
                        SubSync: 'getAll',
                        Data: {
                            search: params.term,
                            page: params.page,
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
                    console.log(data);
                    params.page = params.page || 1;
                    return {
                        results: data.result,
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
                return repo.name;
            },
            templateSelection: function (repo) {
                return repo.name;
            },
            escapeMarkup: function (Markup) {
                return Markup;
            }
        })
            .on('select2:select', function (e) {
                //------------------------
                let data = $(this).select2("data");
                console.log(data);
                //$('input.select2-search__field').trigger('blur')
            })
            .on("select2:unselect", function (e) {
                //--------------------------
                // var data = this_Class.selector.select2("data");
                //console.log(data);
                //$(this).empty()
                /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
data_ID=$.map(data, function (value, key) {
    return value['id'];
})*/
                //$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2('destroy');
                // $('#storeCashier_AddDealer_Form_Supp_Suppliers').html(null);
                /*var value = e.params.data.id;
console.log(value);
console.log(e.params.data);*/
            });

    }

    // Select2 select items
    init_Select2_Select_Items() {
        let this_Class = this;
        "use strict";
        return {
            roles: function (data) {
                console.log(data)
                if (!isEmpty(data)) {
                    this_Class.role_Details.find('[name="roles"]').empty();
                    $.each(data, function (key, value) {
                        let newOption = $("<option selected='selected'></option>").val(value.id)
                        this_Class.role_Details.find('[name="roles"]').append(newOption);
                        $.each(value, function (key_Entry, value_Entry) {
                            this_Class.role_Details.find('[name="roles"]').select2("data")[key][key_Entry] = value_Entry
                        });
                    });
                }
            },
            permissions: function (data) {
                console.log(data)
                if (!isEmpty(data)) {
                    this_Class.permission_Details.find('[name="permissions"]').empty();
                    $.each(data, function (key, value) {
                        let newOption = $("<option selected='selected'></option>").val(value.id)
                        this_Class.permission_Details.find('[name="permissions"]').append(newOption);
                        $.each(value, function (key_Entry, value_Entry) {
                            this_Class.permission_Details.find('[name="permissions"]').select2("data")[key][key_Entry] = value_Entry
                        });
                    });
                }
            },
        }
    }

    // Map
    init_Map() {
        let this_Class = this;

        // Ip location
        let location = ipinfo.loc.split(',');

        // Icon
        let icon = L.icon({
            iconUrl: 'assets/image/leaflet-color-markers/img/marker-icon-violet.png',
            shadowUrl: 'assets/image/leaflet-color-markers/img/marker-shadow.png',

            iconSize: [25, 41], // size of the icon
            shadowSize: [41, 41], // size of the shadow
            iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
        });

        // Map
        this_Class.map = L.map('addPeople_Form_Addresses_Map'/*, { drawControl: true }*/).setView({
            lat: location[0],
            lon: location[1]
        }, 4);

        // add the OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(this_Class.map);

        // show the scale bar on the up-left corner
        L.control.scale().addTo(this_Class.map);

        // show the located bar on the up-right corner
        let lc = L.control.locate({
            position: 'topright',
            cacheLocation: false,
            strings: {
                title: Lang.get('Dashboard.public.show_me_where_I_am')
            }
        }).addTo(this_Class.map);
        // lc.start();

        // add the OpenStreetMap markersLayer
        let markersLayer = new L.LayerGroup();	//layer contain searched elements
        this_Class.map.addLayer(markersLayer);

        <!-- initialize map on click -->
        this_Class.theMarker = L.marker([location[0], location[1]], {
            draggable: true,
            icon: icon
        }).addTo(this_Class.map);

        <!-- initialize marker on drag -->
        this_Class.theMarker.on('dragend', function (e) {
            //------------------------
            let marker = e.target;
            let position = marker.getLatLng();
            let position_Arr = marker.getLatLng().toString().split('(').pop().split(')').shift().split(',')
            let lat = position_Arr[0].trim();
            let lon = position_Arr[1].trim();

            this_Class.map.panTo(position);

            let nominatimAPI = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon + '&accept-language=' + win_Locale;
            $.getJSON(nominatimAPI, {
                //tags: "mount rainier",
                //tagmode: "any",
                format: "json"
            })
                .done(function (data) {
                    //------------------------
                    //Add a marker to show where you clicked.
                    marker.setLatLng(position, {draggable: 'true'}).bindPopup(data.display_name).update();
                    initialize_Address_Input(data, this_Class.address_Details.find('[name="address"]'));
                    //------------------------
                    /* console.log(JSON.stringify(' position: ' + ss))
                   console.log(JSON.stringify(' lat: ' + lat + ' lon: ' + lon + ' position2: ' + position_Arr[0]))
                    alert(JSON.stringify(data.lat))
                    alert(JSON.stringify(data.lon))
                    alert(JSON.stringify(data.address))
                    alert(JSON.stringify(data.display_name))
                    //alert(JSON.stringify(data.address))
                    //alert('done' + JSON.stringify(data))*/
                })
                .fail(function (data) {
                    //------------------------
                    //------------------------
                    //alert('fail' + JSON.stringify(data))
                })
            //------------------------
        });

        <!-- initialize map on click -->
        this_Class.map.on('click', function (e) {
            //------------------------
            let lat = e.latlng.lat;
            let lon = e.latlng.lng;
            /*if (this_Class.theMarker != undefined) {
                map.removeLayer(this_Class.theMarker);
            }*/
            let location = new L.LatLng(lat, lon);
            this_Class.map.panTo(location);
            let nominatimAPI = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon + '&accept-language=' + win_Locale;
            $.getJSON(nominatimAPI, {
                //tags: "mount rainier",
                //tagmode: "any",
                format: "json"
            })
                .done(function (data) {
                    //------------------------
                    //Add a marker to show where you clicked.
                    this_Class.theMarker.setLatLng([lat, lon], {draggable: 'true'}).bindPopup(data.display_name).update();
                    initialize_Address_Input(data, this_Class.address_Details.find('[name="address"]'));
                    //------------------------
                    /*alert(JSON.stringify(data.lat))
                    alert(JSON.stringify(data.lon))
                    alert(JSON.stringify(data.address))
                    alert(JSON.stringify(data.display_name))
                    //alert(JSON.stringify(data.address))
                    //alert('done' + JSON.stringify(data))*/
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
        this_Class.address_Details.find('[name="address_Search"]').select2({
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
                /*url: function (params) {
                    return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
                },*/
                //dataType: 'json',
                delay: 250,
                //type:'post',
                /* data: function (params) {
                     return {
                         Sync: 'DealersController', // search term
                         SubSync: 'select',
                         Data: params.term,
                         page: params.page
                     };
                 },*/
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
                    /*params.page = params.page || 1;
                    return {
                        results: data,
                        pagination: {
                            more: (params.page * 10) < data.total
                        }
                    };*/
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
                let data = $(this).select2("data");
                console.log(data);

                initialize_Address_Input(data[0], this_Class.address_Details.find('[name="address"]'));

                // show a marker on the map
                let location = new L.LatLng(data[0].lat, data[0].lon);
                this_Class.map.panTo(location);
                this_Class.theMarker.setLatLng(location, {draggable: 'true'}).bindPopup(data[0].display_name).update();

                // Map zoom
                if (data[0].type === 'city' || data[0].type === 'administrative') {
                    this_Class.map.setView({lon: data[0].lon, lat: data[0].lat}, 11)
                    /* map.setCenter(,);
                    map.setZoom(5);*/
                } else {
                    this_Class.map.setView({lon: data[0].lon, lat: data[0].lat}, 17)
                }
            })
            .on("select2:unselect", function (e) {
                //let value = e.params.data.id;
                this_Class.init_Reset_Form().address();
            });
    }

    // Reset form
    init_Reset_Form() {
        let this_Class = this;
        "use strict";
        return {
            finally: function () {
                "use strict";
                this_Class.user.data('id', 0)
                $('#addPeople_Form_Details')[0].reset();
                this_Class.user.find('input').prop('disabled', false);
                this_Class.user_Details.find('[name="gender"] label').removeClass('active')
                $('#addPeople_Form_Phones')[0].reset();
                $('#addPeople_Form_Addresses')[0].reset();
                this_Class.user.find('tbody').empty();
                this_Class.user_Details.find('[name="active"]').prop('checked', true).trigger("change");
                this_Class.user_Details.find('.img_profile').filepond('removeFiles');
                this_Class.user_Details.find('.img_sign').filepond('removeFiles');
                this_Class.user_Details.find('.img_profile').filepond('allowMultiple', false);
                this_Class.user_Details.find('.img_sign').filepond('allowMultiple', false);

                this_Class.address_Details.find('[name="address_Search"]').val(null).trigger('change');
                //this_Class.address_Details.find('[name="address_Search"]').trigger('select2:select');
                this_Class.role_Details.find('[name="roles"]').val(null).trigger('change');
                this_Class.role_Details.find('[name="roles"]').trigger('select2:select');
                this_Class.permission_Details.find('[name="permissions"]').val(null).trigger('change');
                this_Class.permission_Details.find('[name="permissions"]').trigger('select2:select');

                this_Class.user.find('[name="cancel_EditUser"]').addClass('hidden');
                reset_Btn_Add(this_Class.user.find('[name="add_User"]'));

            },
            address: function () {
                "use strict";
                this_Class.address_Details.find('[name="postal_Code"]').val('')
                this_Class.address_Details.find('[name="address"]').val('')
                this_Class.address_Details.find('[name="address"]').data('address', '')
                this_Class.address_Details.find('[name="address"]').data('lat', '')
                this_Class.address_Details.find('[name="address"]').data('lon', '')
                this_Class.address_Details.find('[name="address"]').data('type', '')
            },
            phone: function () {
                "use strict";
                this_Class.phone_Details.find('input').val('').prop('disabled', false).attr('data-edit', false);
            },
        }
    }

    // Validation
    init_Validation() {
        let this_Class = this;
        "use strict";
        return {
            finally: function () {
                "use strict";
                let isValid = true;
                let error = [];

                //Validation first name
                if (Validate_First_Name(this_Class.user_Details.find('[name="first_Name"]')) !== true) {
                    error.push(Validate_First_Name(this_Class.user_Details.find('[name="first_Name"]')));
                    isValid = false;
                }

                //Validation last name
                if (Validate_Last_Name(this_Class.user_Details.find('[name="last_Name"]')) !== true) {
                    error.push(Validate_Last_Name(this_Class.user_Details.find('[name="last_Name"]')));
                    isValid = false;
                }

                //Validation gender
                if (Validate_Gender(this_Class.user_Details.find('[name="gender"]')) !== true) {
                    error.push(Validate_Gender(this_Class.user_Details.find('[name="gender"]')));
                    isValid = false;
                }

                //Validation ssn
                if (!isEmpty(this_Class.user_Details.find('[name="SSN"]').val())) {
                    if (Validate_SSN(this_Class.user_Details.find('[name="SSN"]')) != true) {
                        error.push(Validate_SSN(this_Class.user_Details.find('[name="SSN"]')));
                        isValid = false;
                    }
                }

                //Validation email
                if (!isEmpty(this_Class.user_Details.find('[name="email"]').val())) {
                    if (Validate_Email(this_Class.user_Details.find('[name="email"]').val()) !== true) {
                        error.push(Validate_Email(this_Class.user_Details.find('[name="email"]').val()));
                        isValid = false;
                    }
                }

                //Validation date of birth
                if (!isEmpty(this_Class.user_Details.find('[name="date_Of_Birth"]').val())) {
                    if (Validate_Date(this_Class.user_Details.find('[name="date_Of_Birth"]')) != true) {
                        error.push(Validate_Date(this_Class.user_Details.find('[name="date_Of_Birth"]')));
                        isValid = false;
                    }
                }


                //Validation password
                if (!isExist(() => this_Class.user.data('id')) || this_Class.user.data('id') == 0) {
                    if (isEmpty(this_Class.user_Details.find('[name="password"]').val())) {
                        error.push(Lang.get('validation.validator.password'));
                        isValid = false;
                    }
                }
                if (!isEmpty(this_Class.user_Details.find('[name="password"]').val())) {
                    if (this_Class.user_Details.find('[name="password"]').val() != this_Class.user_Details.find('[name="confirm"]').val()) {
                        error.push(Lang.get('validation.validator.password_repeat'));
                        isValid = false;
                    }
                }

                //Validation signature
                if (this_Class.user_Details.find('.img_sign').filepond('getFiles').length == 0) {
                    error.push(Lang.get('validation.validator.attach_the_signature'));
                    isValid = false;
                }

                //Validation at least one mobile number
                let table_Length = this_Class.phone_Details.find('table tbody tr').length;
                if (table_Length <= 0) {
                    error.push(Lang.get('validation.validator.field_Mobile_Phone_Numbers_Empty_Validation_Error'))
                    isValid = false;
                }

                //Validation at least one role
                let role_Length = this_Class.role_Details.find('[name="roles"]').select2('data').length;
                if (role_Length <= 0) {
                    error.push(Lang.get('validation.validator.at_least_one_role_must_be_defined'))
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            },
        };
    };

    // Click
    init_Click() {
        let this_Class = this;

        //event btn address add to table
        this_Class.address_Details.off("click", '[name="btn_Add_Address"]');
        this_Class.address_Details.on("click", '[name="btn_Add_Address"]', function () {
            let address = this_Class.address_Details.find('[name="address"]');
            let postal_Code = this_Class.address_Details.find('[name="postal_Code"]');
            let button = $(this);

            Validate_Address_PostalCode_Input(address, postal_Code, this_Class.address_Intl_POSTALCODE).then(function (value) {
                if (value == true) {
                    let data = {
                        id: function () {
                            let id = this_Class.address_Details.find('[name="btn_Add_Address"]').data('id')
                            return (isExist(() => id) && !isEmpty(id)) ? id : 0;
                        }(),
                        address: address.data('address'),
                        postal_code: postal_Code.val(),
                        display_name: address.val(),
                        latitude: address.data('lat'),
                        longitude: address.data('lon'),
                        type: address.data('type'),
                        country_data: this_Class.address_Intl_POSTALCODE.getSelectedCountryData(),
                        inputmask: this_Class.address_Inputmask_POSTALCODE,
                    };
                    if (button.attr('data-edit') === 'true') {
                        reset_Btn_Add(button);
                        this_Class.update_Tr_Table().address(data);
                        this_Class.init_Reset_Form().address();
                    } else {
                        let row_Number = this_Class.address_Details.find('tbody tr').length + 1

                        let td = {
                            'select': 'addressAddedTable',
                            'data': {
                                'sendTable': data,
                            },
                            'num': [
                                {'number': row_Number, 'number_class': 'number'}
                            ],
                            'a_small': [
                                {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                                {'a': data.display_name, 'a_class': 'display_name'},
                                {'enter': ''},
                                {'small': Lang.get('Dashboard.people_Plan.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                            ],
                            'postal_code': [
                                {'a': data.postal_code, 'a_class': 'postal_code'}
                            ],
                            'btn': [
                                {
                                    'btn_Edit': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'edit',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.edit'),
                                            // 'data-target': '#',
                                            // 'id': ''
                                        },
                                        //'name': Lang.get('Dashboard.public.form.edit'),
                                        //'class': 'class22',
                                    }
                                },
                                {
                                    'btn_Delete': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'remove',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.delete'),
                                            //'data-target': '#',
                                            //'id': ''
                                        },
                                        // 'name': Lang.get('Dashboard.public.form.delete'),
                                        //'class': 'class22',
                                    }
                                },
                            ],
                        }
                        let tr = create_Component_Tbody_Tr_Table(td);
                        this_Class.address_Details.find('table tbody').append(tr)
                        this_Class.init_Reset_Form().address();
                        this_Class.init_Event_Reloaded().reload_All();

                    }
                } else {
                    create_Ul_Li_PNotify([value], 'error')
                }
            })

        });

        //event btn phones add to table
        this_Class.phone_Details.off("click", '[name="btn_Add_Phones"]');
        this_Class.phone_Details.on("click", '[name="btn_Add_Phones"]', function () {
            let mobile = this_Class.phone_Details.find('[name="mobile"]');
            let fixed_Line = this_Class.phone_Details.find('[name="fixed_Line"]');
            let data_MOBILE = {};
            let data_FIXED_LINE = {};
            let button = $(this);

            let result = Validate_Phones_Input(mobile, fixed_Line, this_Class.phone_Intl_MOBILE, this_Class.phone_Intl_FIXEDLINE);

            if (result == true) {
                if (!isEmpty(mobile.val())) {
                    data_MOBILE = {
                        id: function () {
                            let id = this_Class.phone_Details.find('[name="btn_Add_Phones"]').data('id')
                            return (isExist(() => id) && !isEmpty(id)) ? id : 0;
                        }(),
                        number: this_Class.phone_Intl_MOBILE.getNumber(),
                        type: 'MOBILE',
                        type_text: Lang.get('Dashboard.public.form.phone_Type_MOBILE'),
                        country_data: this_Class.phone_Intl_MOBILE.getSelectedCountryData(),
                        inputmask: this_Class.phone_Inputmask_MOBILE,
                    };
                }
                if (!isEmpty(fixed_Line.val())) {
                    data_FIXED_LINE = {
                        id: function () {
                            let id = this_Class.phone_Details.find('[name="btn_Add_Phones"]').data('id')
                            return (isExist(() => id) && !isEmpty(id)) ? id : 0;
                        }(),
                        number: this_Class.phone_Intl_FIXEDLINE.getNumber(),
                        type: 'FIXED_LINE',
                        type_text: Lang.get('Dashboard.public.form.phone_Type_Fixed'),
                        country_data: this_Class.phone_Intl_FIXEDLINE.getSelectedCountryData(),
                        inputmask: this_Class.phone_Inputmask_FIXEDLINE,
                    };
                }
                /*let data = {
                    number: function () {
                        switch (type) {
                            case 'MOBILE':
                                return this_Class.phone_Intl_MOBILE.getNumber();
                            case 'FIXED_LINE':
                                return this_Class.phone_Intl_FIXEDLINE.getNumber();
                        }
                    }(),
                    type: type,
                    country_data: function (){
                        switch (type) {
                            case 'MOBILE':
                                return this_Class.phone_Intl_MOBILE.getSelectedCountryData();
                            case 'FIXED_LINE':
                                return this_Class.phone_Intl_FIXEDLINE.getSelectedCountryData();
                        }
                    }(),
                    inputmask: function (){
                        switch (type) {
                            case 'MOBILE':
                                return this_Class.phone_Inputmask_MOBILE;
                            case 'FIXED_LINE':
                                return this_Class.phone_Inputmask_FIXED_LINE;
                        }
                    }(),
                };*/

                if (button.attr('data-edit') === 'true') {
                    let data = isEmpty(data_MOBILE) ? data_FIXED_LINE : data_MOBILE;
                    reset_Btn_Add(button);
                    this_Class.update_Tr_Table().phone(data);
                    this_Class.init_Reset_Form().phone();
                } else {
                    if (!isEmpty(data_MOBILE)) {
                        let row_Number = this_Class.phone_Details.find('tbody tr').length + 1
                        let td = {
                            'select': 'phoneAddedTable',
                            'data': {
                                'sendTable': data_MOBILE,//intl_MOBILE.getNumberType(),
                            },
                            'num': [
                                {'row_number': row_Number},
                            ],
                            'a_small': [
                                {
                                    'data': {
                                        'td_style': {"direction": "ltr", "white-space": "nowrap"},
                                        'td_class': 'text-right'
                                    }
                                },
                                {
                                    'a': data_MOBILE.number,
                                    'a_class': 'number',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                                },
                                {'enter': ''},
                                {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')},
                            ],
                            'numberType': [
                                {'a': data_MOBILE.type_text, 'a_class': 'type_text'},
                            ],
                            'btn': [
                                {
                                    'btn_Edit': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'edit',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.edit'),
                                            // 'data-target': '#',
                                            // 'id': ''
                                        },
                                        //'name': Lang.get('Dashboard.public.form.edit'),
                                        //'class': 'class22',
                                    }
                                },
                                {
                                    'btn_Delete': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'remove',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.delete'),
                                            //'data-target': '#',
                                            //'id': ''
                                        },
                                        // 'name': Lang.get('Dashboard.public.form.delete'),
                                        //'class': 'class22',
                                    }
                                },
                            ],
                        };
                        let tr = create_Component_Tbody_Tr_Table(td);
                        this_Class.phone_Details.find('table tbody').append(tr);
                    }
                    if (!isEmpty(data_FIXED_LINE)) {
                        let row_Number = this_Class.phone_Details.find('tbody tr').length + 1
                        let td = {
                            'select': 'phoneAddedTable',
                            'data': {
                                'sendTable': data_FIXED_LINE,//intl_MOBILE.getNumberType(),
                            },
                            'num': [
                                {'row_number': row_Number},
                            ],
                            'a_small': [
                                {
                                    'data': {
                                        'td_style': {"direction": "ltr", "white-space": "nowrap"},
                                        'td_class': 'text-right'
                                    }
                                },
                                {
                                    'a': data_FIXED_LINE.number,
                                    'a_class': 'number',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                                },
                                {'enter': ''},
                                {'small': Lang.get('Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')},
                            ],
                            'numberType': [
                                {'a': data_FIXED_LINE.type_text, 'a_class': 'type_text'},
                            ],
                            'btn': [
                                {
                                    'btn_Edit': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'edit',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.edit'),
                                            // 'data-target': '#',
                                            // 'id': ''
                                        },
                                        //'name': Lang.get('Dashboard.public.form.edit'),
                                        //'class': 'class22',
                                    }
                                },
                                {
                                    'btn_Delete': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'remove',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.delete'),
                                            //'data-target': '#',
                                            //'id': ''
                                        },
                                        // 'name': Lang.get('Dashboard.public.form.delete'),
                                        //'class': 'class22',
                                    }
                                },
                            ],
                        };
                        let tr = create_Component_Tbody_Tr_Table(td);
                        this_Class.phone_Details.find('table tbody').append(tr);
                    }
                    this_Class.init_Reset_Form().phone();
                    this_Class.init_Event_Reloaded().reload_All();
                }
            } else {
                create_Ul_Li_PNotify([result], 'error')
            }

        });

        // Add user
        this_Class.user.off("click", '[name="add_User"]');
        this_Class.user.on("click", '[name="add_User"]', async function () {
            let button = $(this);
            let check_Error = this_Class.init_Validation().finally();

            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {

                let data = {
                    status: function () {
                        let id = this_Class.user.data('id');
                        if (isExist(() => id) && id != 0) {
                            return 'edit';
                        }
                        return 'add';
                    }(),
                    first_name: this_Class.user_Details.find('[name="first_Name"]').inputmask('unmaskedvalue'),
                    last_name: this_Class.user_Details.find('[name="last_Name"]').inputmask('unmaskedvalue'),
                    gender: this_Class.user_Details.find('[name="gender"] .active input').val(),
                    ssn: this_Class.user_Details.find('[name="ssn"]').val(),
                    date_of_birth: this_Class.user_Details.find('[name="date_Of_Birth"]').val(),
                    email: this_Class.user_Details.find('[name="email"]').val(),
                    password: this_Class.user_Details.find('[name="password"]').val(),
                    active: this_Class.user_Details.find('[name="active"]').prop('checked'),
                    //input_Prices_Default.prop('checked', false).trigger("change");
                    img_profile: function () {
                        return $.map(this_Class.user_Details.find('.img_profile').filepond('getFiles'), function (value, key) {
                            return value.getFileEncodeDataURL();
                        })[0];
                    }(),
                    img_sign: function () {
                        return $.map(this_Class.user_Details.find('.img_sign').filepond('getFiles'), function (value, key) {
                            return value.getFileEncodeDataURL();
                        })[0];
                    }(),
                    phones: function () {
                        let phones = [];
                        $.each(this_Class.phone_Details.find('tbody tr'), function (item, value) {
                            let temporary = $(this).data('sendTable');
                            phones.push(temporary);
                        });
                        return JSON.parse(JSON.stringify(phones));
                    }(),
                    addresses: function () {
                        let addresses = [];
                        $.each(this_Class.address_Details.find('tbody tr'), function (item, value) {
                            let temporary = $(this).data('sendTable');
                            addresses.push(temporary);
                        });
                        return JSON.parse(JSON.stringify(addresses));
                    }(),
                    permissions: this_Class.permission_Details.find('[name="permissions"]').select2('data'),
                    roles: this_Class.role_Details.find('[name="roles"]').select2('data'),
                }
                let id = this_Class.user.data('id');
                if (isExist(() => id) && id != 0) {
                    data.id = id;
                }
                console.log(data);

                this_Class.user.find('[name="add_User"]').parent().find('.ajax-load').removeClass('hidden');
                this_Class.user.find('[name="add_User"]').prop('disabled', true);
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'UserController',
                        'SubSync': 'set_Or_Edit_User',
                        'Data': JSON.stringify(data)
                        //'Data': JSON.parse(JSON.stringify(data)),
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        reset_Btn_Add(button);
                        if (data.hasOwnProperty('status') && data.status == 'success') {
                            create_Ul_Li_PNotify([data.message], 'success');
                            this_Class.init_Reset_Form().finally();
                            this_Class.user.find('[name="add_User"]').prop('disabled', false);
                            this_Class.user_Added.find('[name="refresh_DataTable"]').trigger('click');
                            $([document.documentElement, document.body]).animate({
                                scrollTop: this_Class.user_Added.find('table[name="users"]').parent().offset().top
                            }, 1000);
                        }
                        if (data.hasOwnProperty('status') && data.status == 'failed') {
                            create_Ul_Li_PNotify([data.message], 'error', null, false);
                        }
                        //--------------------------
                        console.log(data);
                        // alert('done: ' + JSON.stringify(data))
                    },
                    error: function (data) {
                        //------------------------
                        if (isExist(() => data.responseJSON.message))
                            create_Ul_Li_PNotify([data.responseJSON.message], 'error', null, false)
                        if (isExist(() => data.responseJSON.errors))
                            create_Ul_Li_PNotify(data.responseJSON.errors, 'error', null, false)
                        if (!isExist(() => data.responseJSON.message) && !isExist(() => data.responseJSON.errors))
                            create_Ul_Li_PNotify([Lang.get('validation.validator.unspecified_error')], 'error', null, false)

                        //------------------------
                        console.log(data);
                        // alert('error: ' + JSON.stringify(data))
                    },
                    complete: function (data) {
                        this_Class.user.find('[name="add_User"]').parent().find('.ajax-load').addClass('hidden');

                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
alert('complete: ' + JSON.stringify(data))*/
                    }
                });
                /*$.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'UserController',
                        'SubSync': 'set_Or_Edit_User',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': JSON.parse(JSON.stringify(data)),
                    },
                    success: function (data) {
                        //------------------------
                        //DataTable product reload
                        if (data.hasOwnProperty('message')) {
                            create_Ul_Li_PNotify([data.message], 'success');
                            this_Class.init_Reset_Form().finally();
                            this_Class.user.find('[name="add_User"]').parent().find('.ajax-load').addClass('hidden');
                            this_Class.user.find('[name="add_User"]').prop('disabled', false);
                            this_Class.user.find('[name="refresh_DataTable"]').trigger('click');
                            $([document.documentElement, document.body]).animate({
                                scrollTop: this_Class.user.find('table[name="users"]').parent().offset().top
                            }, 1000);
                        }
                        //--------------------------
                        console.log(data);
                        // alert('done: ' + JSON.stringify(data))
                    },
                    error: function (data) {
                        //------------------------
                        if (isExist(() => data.responseJSON.message))
                            create_Ul_Li_PNotify([data.responseJSON.message], 'error', null, false)
                        if (isExist(() => data.responseJSON.errors))
                            create_Ul_Li_PNotify(data.responseJSON.errors, 'error', null, false)
                        //------------------------
                        console.log(data);
                        // alert('error: ' + JSON.stringify(data))
                    },
                    complete: function (data) {
                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /!*console.log('complete : ' + JSON.stringify(data));
            alert('complete: ' + JSON.stringify(data))*!/
                    }
                });*/
            }
        });

        // cancel edit User
        this_Class.user.off("click", '[name="cancel_EditUser"]');
        this_Class.user.on("click", '[name="cancel_EditUser"]', async function () {
            this_Class.init_Reset_Form().finally();
        });

        // Refresh
        this_Class.user_Added.off("click", '[name="refresh_DataTable"]');
        this_Class.user_Added.on("click", '[name="refresh_DataTable"]', function () {
            this_Class.user_Added.find('[name="refresh_DataTable"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable(this_Class.user_Added.find('table[name="users"]'))) {
                this_Class.user_Added.find('table[name="users"]').DataTable().ajax.reload();
            }
        });

        // event change
        /* this_Class.div_Signature_SuppliesAndSupport_TermsOfPurchase.find('input[name="confirm"]').change(function (){
         this_Class.div_Signature_SuppliesAndSupport_TermsOfPurchase.find('input[name="terms_Of_Purchase_Check"]').val(0);
     });
     this_Class.div_Signature_SuppliesAndSupport_TermsOfPurchase.find('input[name="terms_Of_Purchase_Check"]').on("change keyup",function (){
         this_Class.div_Signature_SuppliesAndSupport_TermsOfPurchase.find('input[name="confirm"]').prop('checked',false);
     });*/


    }

    // Reload
    init_Event_Reloaded() {
        let this_Class = this;
        "use strict";
        return {
            reload_All: function () {
                elements_Toggle();
                this.remove_Btn_Table_Address();
                this.edit_Btn_Table_Address();
                this.remove_Btn_Table_Phone();
                this.edit_Btn_Table_Phone();
                this.remove_Btn_Table_user();
                this.edit_Btn_Table_user();
            },
            remove_Btn_Table_Address: function () {
                $("body").off("click", '#user_PanelAddresses [data-select="remove"]');
                $("body").on("click", '#user_PanelAddresses [data-select="remove"]', async function () {
                    let tr = $(this).closest("tr");// or $(this).parent().parent().remove();
                    tr.remove();
                })
            },
            edit_Btn_Table_Address: function () {
                $("body").off("click", '#user_PanelAddresses [data-select="edit"]');
                $("body").on("click", '#user_PanelAddresses [data-select="edit"]', async function () {

                    this_Class.init_Reset_Form().address();
                    $([document.documentElement, document.body]).animate({
                        scrollTop: this_Class.address_Details.parent().offset().top
                    }, 1000);

                    let tr = $(this).closest("tr");
                    let data = tr.data('sendTable');
                    console.log(data);


                    this_Class.address_Details.find('tbody tr').attr('data-edit', 'false')
                    tr.attr('data-edit', 'true');

                    let id = (isExist(() => data.id) && !isEmpty(data.id)) ? data.id : 0;
                    this_Class.address_Details.find('[name="btn_Add_Address"]').children().remove();
                    this_Class.address_Details.find('[name="btn_Add_Address"]').attr('data-edit', 'true');
                    this_Class.address_Details.find('[name="btn_Add_Address"]').data('id', id);
                    this_Class.address_Details.find('[name="btn_Add_Address"]').text(Lang.get('Dashboard.public.form.edit'));


                    this_Class.address_Details.find('[name="postal_Code"]').inputmask('remove');
                    this_Class.address_Details.find('[name="postal_Code"]').inputmask(data.inputmask);

                    this_Class.address_Intl_POSTALCODE.setCountry(data.country_data.iso2);

                    this_Class.address_Details.find('[name="address"]').val(data.display_name);
                    this_Class.address_Details.find('[name="postal_Code"]').val(data.postal_code);
                    this_Class.address_Details.find('[name="address"]').data('address', data.address);
                    this_Class.address_Details.find('[name="address"]').data('lat', data.latitude);
                    this_Class.address_Details.find('[name="address"]').data('lon', data.longitude);
                    this_Class.address_Details.find('[name="address"]').data('type', data.type);

                    let location = new L.LatLng(data.latitude, data.longitude);
                    this_Class.map.panTo(location);
                    this_Class.theMarker.setLatLng([data.latitude, data.longitude], {draggable: 'true'}).bindPopup(tr.find("a.address").text()).update();
                    this_Class.map.setView({lon: data.longitude, lat: data.latitude}, 11);
                    /*if (type === 'city' || type === 'administrative') {
                        this_Class.map.setView({lon: data.longitude, lat: data.latitude}, 11);
                        /!* map.setCenter(,);
                        map.setZoom(5);*!/
                    } else {
                        this_Class.map.setView({lon: data.longitude, lat: data.latitude}, 17);
                    }*/


                })
            },
            remove_Btn_Table_Phone: function () {
                $("body").off("click", '#user_PanelPhones [data-select="remove"]');
                $("body").on("click", '#user_PanelPhones [data-select="remove"]', async function () {
                    let tr = $(this).closest("tr");// or $(this).parent().parent().remove();
                    tr.remove();
                })
            },
            edit_Btn_Table_Phone: function () {
                $("body").off("click", '#user_PanelPhones [data-select="edit"]');
                $("body").on("click", '#user_PanelPhones [data-select="edit"]', async function () {

                    this_Class.init_Reset_Form().phone();
                    $([document.documentElement, document.body]).animate({
                        scrollTop: this_Class.phone_Details.offset().top
                    }, 1000);

                    let tr = $(this).closest("tr");
                    let data = tr.data('sendTable');
                    console.log(data);

                    this_Class.phone_Details.find('tbody tr').attr('data-edit', 'false')
                    tr.attr('data-edit', 'true');

                    let id = (isExist(() => data.id) && !isEmpty(data.id)) ? data.id : 0;
                    this_Class.phone_Details.find('[name="btn_Add_Phones"]').children().remove();
                    this_Class.phone_Details.find('[name="btn_Add_Phones"]').attr('data-edit', 'true');
                    this_Class.phone_Details.find('[name="btn_Add_Phones"]').data('id', id);
                    this_Class.phone_Details.find('[name="btn_Add_Phones"]').text(Lang.get('Dashboard.public.form.edit'));

                    if (data.type === 'MOBILE') {
                        this_Class.phone_Details.find('[name="mobile"]').inputmask('remove');
                        this_Class.phone_Details.find('[name="mobile"]').inputmask(data.inputmask);
                        this_Class.phone_Details.find('[name="mobile"]').attr('data-edit', true);

                        this_Class.phone_Intl_MOBILE.setNumber(data.number);
                        this_Class.phone_Intl_MOBILE.setCountry(data.country_data.iso2);

                        this_Class.phone_Details.find('[name="fixed_Line"]').prop('disabled', true);
                    }
                    if (data.type === 'FIXED_LINE') {
                        this_Class.phone_Details.find('[name="fixed_Line"]').inputmask('remove');
                        this_Class.phone_Details.find('[name="fixed_Line"]').inputmask(data.inputmask);
                        this_Class.phone_Details.find('[name="fixed_Line"]').attr('data-edit', true);

                        this_Class.phone_Intl_FIXEDLINE.setNumber(data.number);
                        this_Class.phone_Intl_FIXEDLINE.setCountry(data.country_data.iso2);

                        this_Class.phone_Details.find('[name="mobile"]').prop('disabled', true);
                    }
                })
            },
            edit_Btn_Table_user: function () {
                $("body").off("click", '#user_Added [data-select="edit"]');
                $("body").on("click", '#user_Added [data-select="edit"]', async function () {


                    this_Class.init_Reset_Form().finally();
                    this_Class.user.find('[name="cancel_EditUser"]').removeClass('hidden');

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.user.data('id', data.id)

                    this_Class.user.find('[name="add_User"]').children().remove();
                    this_Class.user.find('[name="add_User"]').text(Lang.get('Dashboard.public.form.edit'));

                    // details
                    this_Class.user_Details.find('[name="first_Name"]').val(data.first_name);
                    this_Class.user_Details.find('[name="last_Name"]').val(data.last_name);
                    this_Class.user_Details.find('[name="gender"] input[type="radio"][value="' + data.gender + '"]').parent('.btn').addClass('active');
                    this_Class.user_Details.find('[name="ssn"]').val(data.ssn);
                    this_Class.user_Details.find('[name="date_Of_Birth"]').val(data.date_of_birth);
                    this_Class.user_Details.find('[name="email"]').val(data.email);
                    this_Class.user_Details.find('[name="active"]').prop('checked', data.active).trigger("change");
                    if (isExist(() => data.img_profile) && !isEmpty(data.img_profile))
                        this_Class.user_Details.find('.img_profile').first().filepond('addFile', data.img_profile).then(function (file) {
                            /*console.log('file added', file);
                        console.log('file added', file.getFileEncodeDataURL());*/
                        });
                    this_Class.user_Details.find('.img_sign').first().filepond('addFile', data.img_sign).then(function (file) {
                        /*console.log('file added', file);
                    console.log('file added', file.getFileEncodeDataURL());*/
                    });

                    // phones
                    $.each(data.phones, function (item, value) {
                        let small_Text = Lang.get('Dashboard.public.form.created_Time');
                        let small_Time = value.created_at;

                        if (!isEmpty(value.updated_at)) {
                            if (value.updated_at != value.created_at) {
                                small_Text = Lang.get('Dashboard.public.form.edit_Time');
                                small_Time = value.updated_at;
                            }
                        }

                        let row_Number = this_Class.phone_Details.find('tbody tr').length + 1;
                        let td = {
                            'select': 'phoneAddedTable',
                            'data': {
                                'sendTable': value,//intl_MOBILE.getNumberType(),
                            },
                            'num': [
                                {'row_number': row_Number},
                            ],
                            'a_small': [
                                {
                                    'data': {
                                        'td_style': {"direction": "ltr", "white-space": "nowrap"},
                                        'td_class': 'text-right'
                                    }
                                },
                                {
                                    'a': value.number,
                                    'a_class': 'number',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                                },
                                {'enter': ''},
                                {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                            ],
                            'numberType': [
                                {'a': value.type_text, 'a_class': 'type_text'},
                            ],
                            'btn': [
                                {
                                    'btn_Edit': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'edit',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.edit'),
                                            // 'data-target': '#',
                                            // 'id': ''
                                        },
                                        //'name': Lang.get('Dashboard.public.form.edit'),
                                        //'class': 'class22',
                                    }
                                },
                                {
                                    'btn_Delete': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'remove',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.delete'),
                                            //'data-target': '#',
                                            //'id': ''
                                        },
                                        // 'name': Lang.get('Dashboard.public.form.delete'),
                                        //'class': 'class22',
                                    }
                                },
                            ],
                        };
                        let tr = create_Component_Tbody_Tr_Table(td);
                        this_Class.phone_Details.find('table tbody').append(tr);
                    });

                    // addresses
                    $.each(data.addresses, function (item, value) {
                        let small_Text = Lang.get('Dashboard.public.form.created_Time');
                        let small_Time = value.created_at;

                        if (!isEmpty(value.updated_at)) {
                            if (value.updated_at != value.created_at) {
                                small_Text = Lang.get('Dashboard.public.form.edit_Time');
                                small_Time = value.updated_at;
                            }
                        }

                        let row_Number = this_Class.address_Details.find('tbody tr').length + 1;

                        let td = {
                            'select': 'addressAddedTable',
                            'data': {
                                'sendTable': value,
                            },
                            'num': [
                                {'number': row_Number, 'number_class': 'number'}
                            ],
                            'a_small': [
                                {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                                {'a': value.display_name, 'a_class': 'display_name'},
                                {'enter': ''},
                                {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
                            ],
                            'postal_code': [
                                {'a': value.postal_code, 'a_class': 'postal_code'}
                            ],
                            'btn': [
                                {
                                    'btn_Edit': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'edit',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.edit'),
                                            // 'data-target': '#',
                                            // 'id': ''
                                        },
                                        //'name': Lang.get('Dashboard.public.form.edit'),
                                        //'class': 'class22',
                                    }
                                },
                                {
                                    'btn_Delete': {
                                        'data': {
                                            //'select-element': '',
                                            //'id': '',
                                        },
                                        'attr': {
                                            'data-select': 'remove',
                                            'data-toggle': 'tooltip',
                                            // 'data-placement': 'left',
                                            'title': Lang.get('Dashboard.public.form.delete'),
                                            //'data-target': '#',
                                            //'id': ''
                                        },
                                        // 'name': Lang.get('Dashboard.public.form.delete'),
                                        //'class': 'class22',
                                    }
                                },
                            ],
                        }
                        let tr = create_Component_Tbody_Tr_Table(td);
                        this_Class.address_Details.find('table tbody').append(tr);
                    });

                    // roles
                    this_Class.init_Select2_Select_Items().roles(data.roles);

                    // permissions
                    this_Class.init_Select2_Select_Items().permissions(data.permissions);

                    this_Class.init_Event_Reloaded().reload_All();

                    $([document.documentElement, document.body]).animate({
                        scrollTop: this_Class.user.parent().offset().top
                    }, 1000);
                })
            },
            remove_Btn_Table_user: function () {
                $("body").off("click", '#user_Added [data-select="remove"]');
                $("body").on("click", '#user_Added [data-select="remove"]', async function () {

                    let button= $(this);

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    button.find('i').addClass('fa-spin fa-fw');
                    $.ajax({
                        url: '/PostsController',
                        method: 'POST',
                        data: {
                            'Sync': 'UserController',
                            'SubSync': 'delete_User',
                            'Data': JSON.stringify({id:data.id})
                            //'Data': JSON.parse(JSON.stringify(data)),
                            //'Data2': json_Data_Final_User,
                        },
                        success: function (data) {
                            if (data.hasOwnProperty('status') && data.status == 'success') {
                                create_Ul_Li_PNotify([data.message], 'success');
                                button.find('i').removeClass('fa-spin fa-fw');
                                this_Class.user_Added.find('[name="refresh_DataTable"]').trigger('click');
                            }
                            if (data.hasOwnProperty('status') && data.status == 'failed') {
                                create_Ul_Li_PNotify([data.message], 'error', null, false);
                                button.find('i').removeClass('fa-spin fa-fw');
                            }
                            //--------------------------
                            console.log(data);
                            // alert('done: ' + JSON.stringify(data))
                        },
                        error: function (data) {
                            //------------------------
                            if (isExist(() => data.responseJSON.message))
                                create_Ul_Li_PNotify([data.responseJSON.message], 'error', null, false)
                            if (isExist(() => data.responseJSON.errors))
                                create_Ul_Li_PNotify(data.responseJSON.errors, 'error', null, false)
                            if (!isExist(() => data.responseJSON.message) && !isExist(() => data.responseJSON.errors))
                                create_Ul_Li_PNotify([Lang.get('validation.validator.unspecified_error')], 'error', null, false)
                            button.find('i').removeClass('fa-spin fa-fw');
                            //------------------------
                            console.log(data);
                            // alert('error: ' + JSON.stringify(data))
                        },
                        complete: function (data) {
                            //------------------------
                            // Reload_Needed.script_Product();
                            //import('../initialize/show_Room_Repeat.js');
                            //------------------------
                            /*console.log('complete : ' + JSON.stringify(data));
    alert('complete: ' + JSON.stringify(data))*/
                        }
                    });
                })
            },
        }
    }

    // Update tr table
    update_Tr_Table() {
        let this_Class = this;
        "use strict";
        return {
            address: function (new_Data) {
                let tr = this_Class.address_Details.find('tbody [data-edit="true"]');

                tr.find("a.display_name").text(new_Data.display_name);
                tr.find("a.postal_code").text(new_Data.postal_code);
                tr.find("small").text(Lang.get('Dashboard.public.form.edit_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss'));
                tr.data('sendTable', JSON.parse(JSON.stringify(new_Data)));
                tr.attr('data-edit', 'false');
            },
            phone: function (new_Data) {
                let tr = this_Class.phone_Details.find('tbody [data-edit="true"]');

                tr.find("a.number").text(new_Data.number);
                tr.find("a.type_text").text(new_Data.type_text);
                tr.data('sendTable', JSON.parse(JSON.stringify(new_Data)));
                tr.find("small").text(Lang.get('Dashboard.public.form.edit_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss'));
                tr.attr('data-edit', 'false');
            },
        }
    }

    // HTML_Create
    HTML_Create() {
        let this_Class = this;
        "use strict";
        return {
            product_Invoice: function (src_Data) {
                let product_Invoice_Details = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 barcodes_details"></div>');
                let product_Invoice_Img = $('<img class="img-responsive w3-margin-top center-margin product_Invoice_Img"/>');
                let product_Invoice_A = $('<a target="_blank" class="btn w3-margin-top center-margin product_Invoice_a">' + Lang.get('Dashboard.wf_purchase.view_invoice') + '</a>');

                console.log(src_Data.split(";"))
                switch (src_Data.split(";")[0]) {
                    case 'data:image/jpeg':
                    case 'data:image/png':
                        product_Invoice_Img.attr('src', src_Data);
                        product_Invoice_Details.append(product_Invoice_Img);
                        break;
                    case 'data:application/pdf':
                        product_Invoice_A.attr('href', src_Data);
                        product_Invoice_Details.append(product_Invoice_A);
                        break;
                }


                return product_Invoice_Details;
            },
            filepond: function (src_Data, element_Add_Selector, col_6 = true) {
                if (!isEmpty(src_Data))
                    src_Data = src_Data.substring(0, 3) == 'JVB' ? 'data:application/pdf;base64,' + src_Data : src_Data;

                let product_Invoice_Details = $('<div class=" barcodes_details"></div>');
                let file = $('<input type="file" class="filepond added_files">');
                product_Invoice_Details.append(file);

                col_6 == true ? product_Invoice_Details.addClass('col-lg-6 col-md-6 col-sm-6 col-xs-12') : '';
                element_Add_Selector.append(product_Invoice_Details)
                file.filepond({
                    allowMultiple: false,
                    disabled: true,
                    imagePreviewTransparencyIndicator: 'grid',
                    imagePreviewMarkupShow: false,
                    labelButtonImageOverlay: 'custom label', // by default 'Open image in overlay file'
                    // server: '/filepond',
                    allowFileEncode: true,
                    allowFileTypeValidation: true,
                    acceptedFileTypes: ['image/png', 'image/jpeg', 'application/pdf'],
                    labelFileTypeNotAllowed: Lang.get('validation.file_not_authorized'),

                });
                file.first().filepond('addFile', src_Data).then(function (file) {
                    /*file.setMetadata('id', value.id, true);
                    file.setMetadata('fileable_id', value.fileable_id, true);
                    file.setMetadata('fileable_type', value.fileable_type, true);*/
                    /*console.log('file added', file);
    console.log('file added', file.getFileEncodeDataURL());*/

                });
                $('.added_files').on('FilePond:addfile', function (e) {
                    elements_Toggle();
                });
                return product_Invoice_Details;
            }
        }
    }

    // Tagsinput
    init_Tagsinput() {
        let this_Class = this;

        this_Class.role_Details.find('[name="roles"]').tagsinput({
            allowDuplicates: false,
            itemValue: 'value',  // this will be used to set id of tag
            itemText: 'text', // this will be used to set text of tag
            trimValue: true,
        });
    }

    // Files
    init_File() {
        let this_Class = this;

        // Turn input element into a pond
        this_Class.user.find('.filepond').filepond({
            allowMultiple: false,
            labelButtonImageOverlay: 'custom label', // by default 'Open image in overlay file'
            // server: '/filepond',
            allowFileEncode: true,
            imageTransformOutputQuality: 60,
            allowFileTypeValidation: true,
            acceptedFileTypes: ['image/png', 'image/jpeg'],
            labelFileTypeNotAllowed: Lang.get('validation.file_not_authorized'),
        });

        /*$('#wf_Purchase_PanelRequest_Form_AddProduct_UploadFiles .filepond').on('FilePond:addfile', function (e) {
        console.log('file added event', e);
        //console.log('file added', e.detail.file.getFileEncodeBase64String());

        $.ajax({
            url: '/PostsController',
            method: 'POST',
            data: {
                'Sync': 'WFPurchaseRequestController',
                'SubSync': 'add_ProductItemFile',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {
                    file: e.detail.file.getFileEncodeBase64String(),
                    product_item_id: $('[name="selectProduct"]').select2('data')[0].id,
                },
            },
            success: function (data) {
                //------------------------
                //DataTable product reload
                if (data.hasOwnProperty('message') && data.hasOwnProperty('file_id')) {
                    create_Ul_Li_PNotify([data.message], 'success');
                    e.detail.file.setMetadata('file_id',data.file_id);
                }
                //--------------------------
                console.log(data);
                // alert('done: ' + JSON.stringify(data))
            },
            error: function (data) {
                //------------------------
                if (isExist(() => data.responseJSON.message))
                    create_Ul_Li_PNotify([data.responseJSON.message], 'error', null, false)
                if (isExist(() => data.responseJSON.errors))
                    create_Ul_Li_PNotify(data.responseJSON.errors, 'error', null, false)
                //------------------------
                console.log(data);
                // alert('error: ' + JSON.stringify(data))
            },
            complete: function (data) {
                //------------------------
                // Reload_Needed.script_Product();
                //import('../initialize/show_Room_Repeat.js');
                //------------------------
                /!*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*!/
            }
        });


    });
    $('#wf_Purchase_PanelRequest_Form_AddProduct_UploadFiles .filepond').on('FilePond:removefile', function (file,e) {
        console.log('removeFiles event', file);
        console.log('removeFiles event', e);
        console.log('removeFiles', file.detail.file.getMetadata('prdid'));


        $.ajax({
            url: '/PostsController',
            method: 'POST',
            data: {
                'Sync': 'WFPurchaseRequestController',
                'SubSync': 'delete_ProductItemFile',
                //'Data': JSON.stringify(json_Data_Final_Store)
                'Data': {
                    file_id: file.detail.file.getMetadata('file_id'),
                    product_item_id: $('[name="selectProduct"]').select2('data')[0].id,
                },
            },
            success: function (data) {
                //------------------------
                //DataTable product reload
                if (data.hasOwnProperty('message')) {
                    create_Ul_Li_PNotify([data.message], 'success');
                }
                //--------------------------
                console.log(data);
                // alert('done: ' + JSON.stringify(data))
            },
            error: function (data) {
                //------------------------
                if (isExist(() => data.responseJSON.message))
                    create_Ul_Li_PNotify([data.responseJSON.message], 'error', null, false)
                if (isExist(() => data.responseJSON.errors))
                    create_Ul_Li_PNotify(data.responseJSON.errors, 'error', null, false)
                //------------------------
                console.log(data);
                // alert('error: ' + JSON.stringify(data))
            },
            complete: function (data) {
                //------------------------
                // Reload_Needed.script_Product();
                //import('../initialize/show_Room_Repeat.js');
                //------------------------
                /!*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*!/
            }
        });
    });*/
        // Manually add a file using the addfile method
        /* $('#wf_Purchase_PanelRequest_Form_AddProduct_UploadFiles .filepond').first().filepond('addFile', 'assets/image/american-express.png').then(function (file) {
         console.log('file added', file);
         console.log('file added', file.getFileEncodeDataURL());

     });*/
    }

    // DataTables from server
    init_DataTables() {
        let this_Class = this;
        "use strict";
        return {
            all: function () {
                this.users();
            },
            users: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.user_Added.find('table[name="users"]').DataTable({
                        language: {url: "assets/json/datatable/language/" + data + ".json"},
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
                        /* paging: false,*/
                        searching: true,
                        pageLength: 10,
                        serverSide: true,  // Server side processing
                        processing: true,  // Show processing
                        searchDelay: 2000,
                        info: true,
                        autoWidth: false,
                        destroy: true,
                        keys: true,
                        // fixedHeader: true,
                        ajax: {
                            url: '/PostsController',
                            type: "POST",
                            dataType: 'json',
                            data: {
                                'Sync': 'UserController',
                                'SubSync': 'getUsersTable',
                                /*'Data': function (d) {
                                    return JSON.stringify($.extend(d, {
                                        "wfable_type": this_Class.panel_Current_Cartable.find('[name=wfable_Type]').select2('data')[0].id
                                    }));
                                }*/
                            },
                            error: function (data) {
                                console.log(data);
                            },
                            /*success: function(data){
                            console.log(data);
                        }*/
                        },
                        columns: [
                            {data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false},
                            {data: 'id', name: 'id', searchable: false},
                            {data: 'active', name: 'id', orderable: false, searchable: false},
                            {data: 'img_profile', name: 'img_profile', orderable: false, searchable: false},
                            {data: 'img_sign', name: 'img_sign', orderable: false, searchable: false},
                            {data: 'gender', name: 'gender', searchable: false},
                            {data: 'ssn', name: 'ssn', searchable: false},
                            {data: 'date_of_birth', name: 'date_of_birth', searchable: false},
                            {data: 'email', name: 'email', searchable: false},
                            {
                                data: 'phones',
                                name: 'phones',
                                orderable: false,
                                searchable: false
                            },
                            {
                                data: 'addresses',
                                name: 'addresses',
                                orderable: false,
                                searchable: false
                            },
                            {
                                data: 'roles',
                                name: 'roles',
                                orderable: false,
                                searchable: false
                            },
                            {
                                data: 'permissions',
                                name: 'permissions',
                                orderable: false,
                                searchable: false
                            },
                            {
                                data: 'btns',
                                name: 'btns',
                                orderable: false,
                                searchable: false
                            },
                        ],
                        createdRow: function (row, data, dataIndex) {
                            /*let dataSend = data.DT_RowData.dataSend;
                            let img_Profile = $(row).find('.img_profile');
                            let img_Sign = $(row).find('.img_sign');
                            if (img_Profile.length > 0) {
                                this_Class.HTML_Create().filepond(dataSend.img_profile, img_Profile, false);
                            }
                            if (img_Sign.length > 0) {
                                this_Class.HTML_Create().filepond(dataSend.img_sign, img_Sign, false);
                            }*/

                            /*$( row ).find('td:eq(1)').addClass('ssss');
                        $('td', row).eq(1).addClass('successww');*/
                            // $(row).find('td:eq(1)').css({"white-space": "nowrap"});
                            // $(row).find('td:eq(11)').css({"white-space": "nowrap"});
                        },
                        "drawCallback": function (settings) {
                            let api = this.api();

                            // Output the data for the visible rows to the browser's console
                            console.log(api.rows({page: 'current'}).data());
                            // $('[data-toggle="tooltip"]').tooltip();
                            //Reload_Needed.script_Reports_SalesInvoice();

                            this_Class.user_Added.find('[name="refresh_DataTable"] .fa-refresh').removeClass('fa-spin fa-fw');
                            this_Class.init_Event_Reloaded().reload_All();
                        },
                    });
                });
            },
        }
    }

    init() {
        this.init_InputMask();
        this.init_Click();
        this.init_Select2();
        if (!this.user_Details.find('.img_profile').hasClass('filepond--root')) {
            this.init_File();
        }
        this.init_Reset_Form().finally();
        this.init_DataTables().users();
        this.init_Startup();
        this.init_Map();
    }
}

window.form_Create_User = {};
form_Create_User.instance = new Form_Create_User();
form_Create_User.instance.init();

