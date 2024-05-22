class Form_Create_Wf_Settings {

    constructor() {
        this.modal = $("#modal_Component_WF_Settings");
        this.modal_Projects = $("#modal_Component_WF_Settings_Add_Projects");
        this.modal_Requests = $("#modal_Component_WF_Settings_Add_Requests");
        this.modal_Units = $("#modal_Component_WF_Settings_Add_Units");
        this.modal_Codings = $("#modal_Component_WF_Settings_Add_Codings");

        this.current_Projects_Panel = $("#current_Projects_Panel");
        this.search_Projects_DataTables = this.current_Projects_Panel.find('[name=search_Projects]');

        this.current_Requests_Panel = $("#current_Requests_Panel");
        this.search_Requests_DataTables = this.current_Requests_Panel.find('[name=search_Requests]');

        this.current_Units_Panel = $("#current_Units_Panel");
        this.search_Units_DataTables = this.current_Units_Panel.find('[name=search_Units]');

        this.current_Codings_Panel = $("#current_Codings_Panel");
        this.search_Codings_DataTables = this.current_Codings_Panel.find('[name=search_Codings]');

        this.projectRoles_Panel = $('#projectRoles_Panel');
    }

    init_Startup() {
        let this_Class = this;
    }

    /* init_Tagsinput() {
         let this_Class = this;

         //Initialize tagsinput  --> Currency
         /!* $('#storeCashier_Settings_System_Currency_Input_CurrencyAll').tagsInput({
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
          });*!/
         $('#storeCashier_Settings_System_Currency_Input_CurrencyAll').tagsinput({
             allowDuplicates: false,
             itemValue: 'value',  // this will be used to set id of tag
             itemText: 'text', // this will be used to set text of tag
             trimValue: true,
         });
     }*/

    // Init inputmask
    init_InputMask() {
        let this_Class = this;

        InputMaskManageElements.name(this_Class.modal_Projects.find('[name="name"]'), 120);
        InputMaskManageElements.name(this_Class.modal_Requests.find('[name="name"]'), 120);
        InputMaskManageElements.name(this_Class.modal_Units.find('[name="name"]'), 120);
        InputMaskManageElements.name(this_Class.modal_Codings.find('[name="title"]'), 120);
        InputMaskManageElements.name(this_Class.modal_Codings.find('[name="code"]'), 120);
    }

    //Reset form
    init_Reset_Form() {
        let this_Class = this;
        "use strict";
        return {
            finally: function () {
                "use strict";
                this.project();
                this.request();
                this.project_role();
                this.unit();
                this.coding();

            },
            project: function () {
                "use strict";
                this_Class.modal_Projects.find('form')[0].reset();
            },
            request: function () {
                "use strict";
                this_Class.modal_Requests.find('form')[0].reset();
            },
            project_role: function () {
                "use strict";
                this_Class.projectRoles_Panel.data('id', 0)

                this_Class.projectRoles_Panel.find('[name="project"]').val(null).trigger('change');
                this_Class.projectRoles_Panel.find('[name="role"]').val(null).trigger('change');
                this_Class.projectRoles_Panel.find('[name="user"]').val(null).trigger('change');

                this_Class.projectRoles_Panel.find('[name="cancel"]').addClass('hidden');
                this_Class.projectRoles_Panel.find('[name="add"]').prop('disabled', false);
                reset_Btn_Add(this_Class.projectRoles_Panel.find('[name="add"]'));
            },
            unit: function () {
                "use strict";
                this_Class.modal_Units.find('form')[0].reset();
            },
            coding: function () {
                "use strict";
                this_Class.modal_Codings.find('form')[0].reset();
            },
        }
    }

    //Manage validation
    init_Validation() {
        let this_Class = this;
        "use strict";
        return {
            project: function () {
                "use strict";
                let isValid = true;
                let error = [];

                //Validation name
                if (Validate_Name(this_Class.modal_Projects.find('[name="name"]'), 120) !== true) {
                    error.push(Lang.get('validation.validator.firstName'));
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            },
            request: function () {
                "use strict";
                let isValid = true;
                let error = [];

                //Validation name
                if (Validate_Name(this_Class.modal_Requests.find('[name="name"]'), 120) !== true) {
                    error.push(Lang.get('validation.validator.firstName'));
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            },
            project_role: function () {
                "use strict";
                let isValid = true;
                let error = [];

                //Validation at least one project
                let project_Length = this_Class.projectRoles_Panel.find('[name="project"]').select2('data').length;
                if (project_Length <= 0) {
                    error.push(Lang.get('validation.validator.at_least_one_project_must_be_defined'))
                    isValid = false;
                }

                //Validation at least one role
                let role_Length = this_Class.projectRoles_Panel.find('[name="role"]').select2('data').length;
                if (role_Length <= 0) {
                    error.push(Lang.get('validation.validator.at_least_one_role_must_be_defined'))
                    isValid = false;
                }

                //Validation at least one user
                let user_Length = this_Class.projectRoles_Panel.find('[name="user"]').select2('data').length;
                if (user_Length <= 0) {
                    error.push(Lang.get('validation.validator.at_least_one_role_must_be_defined'))
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            },
            unit: function () {
                "use strict";
                let isValid = true;
                let error = [];

                //Validation name
                if (Validate_Name(this_Class.modal_Units.find('[name="name"]'), 120) !== true) {
                    error.push(Lang.get('validation.validator.firstName'));
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            },
            coding: function () {
                "use strict";
                let isValid = true;
                let error = [];


                //Validation title
                if (Validate_Name(this_Class.modal_Codings.find('[name="title"]'), 120) !== true) {
                    error.push(Lang.get('validation.validator.title'));
                    isValid = false;
                }

                //Validation code
                if (Validate_Name(this_Class.modal_Codings.find('[name="code"]'), 120) !== true) {
                    error.push(Lang.get('validation.validator.code'));
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            }
        };
    };

    // Select2
    init_Select2() {
        let this_Class = this;

        // project
        this_Class.projectRoles_Panel.find('[name="project"]').off('select2:select');
        this_Class.projectRoles_Panel.find('[name="project"]').off('select2:unselect');
        this_Class.projectRoles_Panel.find('[name="project"]').select2({
            //language: 'fa',
            //theme: "classic",
            multiple: true,
            maximumSelectionLength: 1,
            placeholder: Lang.get('Dashboard.public.search_project'),
            minimumInputLength: 0,
            closeOnSelect: true,
            selectOnClose: true,
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
                        Sync: 'ProjectController', // search term
                        SubSync: 'getTotal',
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
                $(this).empty()
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

        // role
        this_Class.projectRoles_Panel.find('[name="role"]').off('select2:select');
        this_Class.projectRoles_Panel.find('[name="role"]').off('select2:unselect');
        this_Class.projectRoles_Panel.find('[name="role"]').select2({
            //language: 'fa',
            //theme: "classic",
            multiple: true,
            maximumSelectionLength: 1,
            placeholder: Lang.get('Dashboard.public.placeholder_Search_Role'),
            minimumInputLength: 0,
            closeOnSelect: true,
            selectOnClose: true,
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
                $(this).empty()
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

        // user
        this_Class.projectRoles_Panel.find('[name="user"]').off('select2:select');
        this_Class.projectRoles_Panel.find('[name="user"]').off('select2:unselect');
        this_Class.projectRoles_Panel.find('[name="user"]').select2({
            //language: 'fa',
            //theme: "classic",
            multiple: true,
            maximumSelectionLength: 1,
            placeholder: Lang.get('Dashboard.public.placeholder_Search_Person'),
            minimumInputLength: 0,
            closeOnSelect: true,
            selectOnClose: true,
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
                        Sync: 'UserController', // search term
                        SubSync: 'getAll',
                        Data: JSON.stringify({
                            search: params.term,
                            page: params.page,
                        }),

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
                return repo.first_name + ' ' + repo.last_name ;
            },
            templateSelection: function (repo) {
                return repo.first_name + ' ' + repo.last_name ;
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
                $(this).empty()
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
            project: function (data) {
                console.log(data)
                if (!isEmpty(data)) {
                    let newOption = $("<option selected='selected'></option>").val(data.id)
                    this_Class.projectRoles_Panel.find('[name="project"]')
                        .empty()
                        .append(newOption);
                    $.each(data, function (key, value) {
                        this_Class.projectRoles_Panel.find('[name="project"]').select2("data")[0][key] = value
                    });
                }
            },
            role: function (data) {
                console.log(data)
                if (!isEmpty(data)) {
                    let newOption = $("<option selected='selected'></option>").val(data.id)
                    this_Class.projectRoles_Panel.find('[name="role"]')
                        .empty()
                        .append(newOption);
                    $.each(data, function (key, value) {
                        this_Class.projectRoles_Panel.find('[name="role"]').select2("data")[0][key] = value
                    });
                }
            },
            user: function (data) {
                console.log(data)
                if (!isEmpty(data)) {
                    let newOption = $("<option selected='selected'></option>").val(data.id)
                    this_Class.projectRoles_Panel.find('[name="user"]')
                        .empty()
                        .append(newOption);
                    $.each(data, function (key, value) {
                        this_Class.projectRoles_Panel.find('[name="user"]').select2("data")[0][key] = value
                    });
                }
            },
        }
    }

    // Init dataTables from server
    init_DataTables() {
        let this_Class = this;
        "use strict";
        return {
            all: function () {
                this.projects();
                this.requests();
                this.project_roles();
                this.units();
                this.codings();
            },
            projects: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.search_Projects_DataTables.DataTable({
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
                                'Sync': 'ProjectController',
                                'SubSync': 'getProjectsTable',
                                /*'Data': {
                                json_Data: {

                                }
                            },*/
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
                            {data: 'id', name: 'name', searchable: false},
                            {data: 'name', name: 'name', searchable: false},
                            {
                                data: 'btn',
                                name: 'btn',
                                orderable: false,
                                searchable: false
                            },
                        ],
                        createdRow: function (row, data, dataIndex) {
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

                            this_Class.init_Event_Reloaded().reload_All();
                        },
                    });
                });
            },
            requests: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.search_Requests_DataTables.DataTable({
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
                                'Sync': 'RequestController',
                                'SubSync': 'getRequestsTable',
                                /*'Data': {
                                json_Data: {

                                }
                            },*/
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
                            {data: 'id', name: 'name', searchable: false},
                            {data: 'name', name: 'name', searchable: false},
                            {
                                data: 'btn',
                                name: 'btn',
                                orderable: false,
                                searchable: false
                            },
                        ],
                        createdRow: function (row, data, dataIndex) {
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

                            this_Class.init_Event_Reloaded().reload_All();
                        },
                    });
                });
            },
            project_roles: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.projectRoles_Panel.find('table[name="project_Roles"]').DataTable({
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
                                'Sync': 'ProjectController',
                                'SubSync': 'getProjectRolesTable',
                                /*'Data': {
                                json_Data: {

                                }
                            },*/
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
                            {data: 'project_id', name: 'project_id', searchable: false},
                            {data: 'role_id', name: 'role_id', searchable: false},
                            {data: 'user_id', name: 'user_id', searchable: false},
                            {
                                data: 'btn',
                                name: 'btn',
                                orderable: false,
                                searchable: false
                            },
                        ],
                        createdRow: function (row, data, dataIndex) {
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

                            this_Class.init_Event_Reloaded().reload_All();
                        },
                    });
                });
            },
            units: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.search_Units_DataTables.DataTable({
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
                                'Sync': 'UnitController',
                                'SubSync': 'getUnitsTable',
                                /*'Data': {
                                json_Data: {

                                }
                            },*/
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
                            {data: 'id', name: 'name', searchable: false},
                            {data: 'name', name: 'name', searchable: false},
                            {
                                data: 'btn',
                                name: 'btn',
                                orderable: false,
                                searchable: false
                            },
                        ],
                        createdRow: function (row, data, dataIndex) {
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

                            this_Class.init_Event_Reloaded().reload_All();
                        },
                    });
                });
            },
            codings: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.search_Codings_DataTables.DataTable({
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
                                'Sync': 'CodingController',
                                'SubSync': 'getCodingsTable',
                                /*'Data': {
                                json_Data: {

                                }
                            },*/
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
                            {data: 'id', name: 'name', searchable: false},
                            {data: 'code', name: 'name', searchable: false},
                            {data: 'title', name: 'name', searchable: false},
                            {
                                data: 'btn',
                                name: 'btn',
                                orderable: false,
                                searchable: false
                            },
                        ],
                        createdRow: function (row, data, dataIndex) {
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

                            this_Class.init_Event_Reloaded().reload_All();
                        },
                    });
                });
            }
        }
    }

    init_Click() {
        let this_Class = this;

        // Project
        this_Class.current_Projects_Panel.find('[name="refreshProjects"]').off("click");
        this_Class.current_Projects_Panel.find('[name="refreshProjects"]').click(function () {
            this_Class.current_Projects_Panel.find('[name="refreshProjects"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable('#search_Projects')) {
                this_Class.search_Projects_DataTables.DataTable().ajax.reload();
            }
            this_Class.current_Projects_Panel.find('[name="refreshProjects"] .fa-refresh').removeClass('fa-spin fa-fw');

        });

        this_Class.current_Projects_Panel.find('[name="addProjects"]').off("click");
        this_Class.current_Projects_Panel.find('[name="addProjects"]').click(function () {
            this_Class.init_Reset_Form().project();
            this_Class.modal_Projects.find('[name="name"]').removeData();
        });

        this_Class.modal_Projects.find('[name="add_or_edit"]').off("click");
        this_Class.modal_Projects.find('[name="add_or_edit"]').click(function () {
            let this_Btn = $(this);

            this_Btn.parent().find('.ajax-load').removeClass('hidden');

            let check_Error = this_Class.init_Validation().project();
            console.log(check_Error);
            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'ProjectController',
                        'SubSync': 'addOrEditProjects',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': function () {
                            let data = this_Class.modal_Projects.find('[name="name"]').data();
                            if (isExist(() => data.id))
                                return {
                                    id: data.id,
                                    name: this_Class.modal_Projects.find('[name="name"]').val(),
                                };
                            else return {
                                name: this_Class.modal_Projects.find('[name="name"]').val()
                            };
                        }(),
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        //------------------------
                        //DataTable product reload
                        if (data.hasOwnProperty('message')) {
                            create_Ul_Li_PNotify([data.message], 'success');
                            //$('#storeCashier_Work_Modal_ElementView').modal('toggle');
                            //panel_Selector.find('.modal').modal('show');
                            this_Class.init_Reset_Form().project();
                            this_Class.modal.find('.modal').modal('hide');
                            this_Class.current_Projects_Panel.find('[name="refreshProjects"]').trigger('click');

                        }else {
                            create_Ul_Li_PNotify([data.error], 'error');
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
                        this_Btn.parent().find('.ajax-load').addClass('hidden');
                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
            alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            }

        });

        // Request
        this_Class.current_Requests_Panel.find('[name="refreshRequests"]').off("click");
        this_Class.current_Requests_Panel.find('[name="refreshRequests"]').click(function () {
            this_Class.current_Requests_Panel.find('[name="refreshRequests"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable('#search_Requests')) {
                this_Class.search_Requests_DataTables.DataTable().ajax.reload();
            }
            this_Class.current_Requests_Panel.find('[name="refreshRequests"] .fa-refresh').removeClass('fa-spin fa-fw');

        });

        this_Class.current_Requests_Panel.find('[name="addRequests"]').off("click");
        this_Class.current_Requests_Panel.find('[name="addRequests"]').click(function () {
            this_Class.init_Reset_Form().request();
            this_Class.modal_Requests.find('[name="name"]').removeData();
        });

        this_Class.modal_Requests.find('[name="add_or_edit"]').off("click");
        this_Class.modal_Requests.find('[name="add_or_edit"]').click(function () {
            let this_Btn = $(this);

            this_Btn.parent().find('.ajax-load').removeClass('hidden');

            let check_Error = this_Class.init_Validation().request();
            console.log(check_Error);
            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'RequestController',
                        'SubSync': 'addOrEditRequests',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': function () {
                            let data = this_Class.modal_Requests.find('[name="name"]').data();
                            if (isExist(() => data.id))
                                return {
                                    id: data.id,
                                    name: this_Class.modal_Requests.find('[name="name"]').val(),
                                };
                            else return {
                                name: this_Class.modal_Requests.find('[name="name"]').val()
                            };
                        }(),
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        //------------------------
                        //DataTable product reload
                        if (data.hasOwnProperty('message')) {
                            create_Ul_Li_PNotify([data.message], 'success');
                            //$('#storeCashier_Work_Modal_ElementView').modal('toggle');
                            //panel_Selector.find('.modal').modal('show');
                            this_Class.init_Reset_Form().project();
                            this_Class.modal.find('.modal').modal('hide');
                            this_Class.current_Requests_Panel.find('[name="refreshRequests"]').trigger('click');

                        }else {
                            create_Ul_Li_PNotify([data.error], 'error');
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
                        this_Btn.parent().find('.ajax-load').addClass('hidden');
                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
            alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            }

        });

        // Unit
        this_Class.current_Units_Panel.find('[name="refreshUnits"]').off("click");
        this_Class.current_Units_Panel.find('[name="refreshUnits"]').click(function () {
            this_Class.current_Units_Panel.find('[name="refreshUnits"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable('#search_Units')) {
                this_Class.search_Units_DataTables.DataTable().ajax.reload();
            }
            this_Class.current_Units_Panel.find('[name="refreshUnits"] .fa-refresh').removeClass('fa-spin fa-fw');

        });

        this_Class.current_Units_Panel.find('[name="addUnits"]').off("click");
        this_Class.current_Units_Panel.find('[name="addUnits"]').click(function () {
            this_Class.init_Reset_Form().unit();
            this_Class.modal_Units.find('[name="name"]').removeData();
        });

        this_Class.modal_Units.find('[name="add_or_edit"]').off("click");
        this_Class.modal_Units.find('[name="add_or_edit"]').click(function () {
            let this_Btn = $(this);

            this_Btn.parent().find('.ajax-load').removeClass('hidden');

            let check_Error = this_Class.init_Validation().unit();
            console.log(check_Error);
            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'UnitController',
                        'SubSync': 'addOrEditUnits',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': function () {
                            let data = this_Class.modal_Units.find('[name="name"]').data();
                            if (isExist(() => data.id))
                                return {
                                    id: data.id,
                                    name: this_Class.modal_Units.find('[name="name"]').val(),
                                };
                            else return {
                                name: this_Class.modal_Units.find('[name="name"]').val()
                            };
                        }(),
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        //------------------------
                        //DataTable product reload
                        if (data.hasOwnProperty('message')) {
                            create_Ul_Li_PNotify([data.message], 'success');
                            //$('#storeCashier_Work_Modal_ElementView').modal('toggle');
                            //panel_Selector.find('.modal').modal('show');
                            this_Class.init_Reset_Form().unit();
                            this_Class.modal.find('.modal').modal('hide');
                            this_Class.current_Units_Panel.find('[name="refreshUnits"]').trigger('click');

                        }else {
                            create_Ul_Li_PNotify([data.error], 'error');
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
                        this_Btn.parent().find('.ajax-load').addClass('hidden');
                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
            alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            }

        });

        // Coding
        this_Class.current_Codings_Panel.find('[name="refreshCodings"]').off("click");
        this_Class.current_Codings_Panel.find('[name="refreshCodings"]').click(function () {
            this_Class.current_Codings_Panel.find('[name="refreshCodings"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable('#search_Codings')) {
                this_Class.search_Codings_DataTables.DataTable().ajax.reload();
            }
            this_Class.current_Codings_Panel.find('[name="refreshCodings"] .fa-refresh').removeClass('fa-spin fa-fw');

        });

        this_Class.current_Codings_Panel.find('[name="addCodings"]').off("click");
        this_Class.current_Codings_Panel.find('[name="addCodings"]').click(function () {
            this_Class.init_Reset_Form().coding();
            this_Class.modal_Codings.find('[name="code"]').removeData();
        });

        this_Class.modal_Codings.find('[name="add_or_edit"]').off("click");
        this_Class.modal_Codings.find('[name="add_or_edit"]').click(function () {
            let this_Btn = $(this);

            this_Btn.parent().find('.ajax-load').removeClass('hidden');

            let check_Error = this_Class.init_Validation().coding();
            console.log(check_Error);
            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'CodingController',
                        'SubSync': 'addOrEditCodings',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': function () {
                            let data = this_Class.modal_Codings.find('[name="code"]').data();
                            if (isExist(() => data.id))
                                return {
                                    id: data.id,
                                    code: this_Class.modal_Codings.find('[name="code"]').val(),
                                    title: this_Class.modal_Codings.find('[name="title"]').val(),
                                };
                            else return {
                                code: this_Class.modal_Codings.find('[name="code"]').val(),
                                title: this_Class.modal_Codings.find('[name="title"]').val(),
                            };
                        }(),
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        //------------------------
                        //DataTable product reload
                        if (data.hasOwnProperty('message')) {
                            create_Ul_Li_PNotify([data.message], 'success');
                            //$('#storeCashier_Work_Modal_ElementView').modal('toggle');
                            //panel_Selector.find('.modal').modal('show');
                            this_Class.init_Reset_Form().project();
                            this_Class.modal.find('.modal').modal('hide');
                            this_Class.current_Codings_Panel.find('[name="refreshCodings"]').trigger('click');

                        }else {
                            create_Ul_Li_PNotify([data.error], 'error');
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
                        this_Btn.parent().find('.ajax-load').addClass('hidden');
                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
            alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            }

        });

        // Project roles
        this_Class.projectRoles_Panel.off("click", '[name="refreshProjectRoles"]');
        this_Class.projectRoles_Panel.on("click", '[name="refreshProjectRoles"]', function () {
            this_Class.projectRoles_Panel.find('[name="refreshProjectRoles"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable(this_Class.projectRoles_Panel.find('table[name="project_Roles"]'))) {
                this_Class.projectRoles_Panel.find('table[name="project_Roles"]').DataTable().ajax.reload();
            }
        });

        this_Class.projectRoles_Panel.off("click", '[name="add"]');
        this_Class.projectRoles_Panel.on("click", '[name="add"]', function () {
            let button = $(this);
            let check_Error = this_Class.init_Validation().project_role();

            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {

                let data = {
                    status: function () {
                        let id = this_Class.projectRoles_Panel.data('id');
                        if (isExist(() => id) && id != 0) {
                            return 'edit';
                        }
                        return 'add';
                    }(),
                    role_id: this_Class.projectRoles_Panel.find('[name="role"]').select2('data')[0].id,
                    project_id: this_Class.projectRoles_Panel.find('[name="project"]').select2('data')[0].id,
                    user_id: this_Class.projectRoles_Panel.find('[name="user"]').select2('data')[0].id,
                }
                let id = this_Class.projectRoles_Panel.data('id');
                if (isExist(() => id) && id != 0) {
                    data.id = id;
                }
                console.log(data);

                this_Class.projectRoles_Panel.find('[name="add"]').parent().find('.ajax-load').removeClass('hidden');
                this_Class.projectRoles_Panel.find('[name="add"]').prop('disabled', true);
                $.ajax({
                    url: '/PostsController',
                    method: 'POST',
                    data: {
                        'Sync': 'ProjectController',
                        'SubSync': 'addOrEditProjectRoles',
                        'Data': data
                        //'Data': JSON.parse(JSON.stringify(data)),
                        //'Data2': json_Data_Final_User,
                    },
                    success: function (data) {
                        reset_Btn_Add(button);
                        if (data.hasOwnProperty('message')) {
                            create_Ul_Li_PNotify([data.message], 'success');
                            this_Class.init_Reset_Form().project_role();
                            this_Class.projectRoles_Panel.find('[name="refreshProjectRoles"]').trigger('click');
                            $([document.documentElement, document.body]).animate({
                                scrollTop: this_Class.projectRoles_Panel.find('table').parent().offset().top
                            }, 1000);

                        }else {
                            create_Ul_Li_PNotify([data.error], 'error');
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
                        this_Class.projectRoles_Panel.find('[name="add"]').parent().find('.ajax-load').addClass('hidden');
                        //------------------------
                        // Reload_Needed.script_Product();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            }
        });

        this_Class.projectRoles_Panel.off("click", '[name="cancel"]');
        this_Class.projectRoles_Panel.on("click", '[name="cancel"]', async function () {
            this_Class.init_Reset_Form().project_role();
        });
    }

    init_Event_Reloaded() {
        let this_Class = this;
        "use strict";
        return {
            reload_All: function () {
                elements_Toggle();
                this.remove_Project();
                this.edit_Project();
                this.remove_Unit();
                this.edit_Unit();
                this.remove_Coding();
                this.edit_Coding();
                this.remove_Project_role();
                this.edit_Project_role();
                this.edit_Request();
            },
            remove_Project: function () {
                $("body").off("click", '#current_Projects_Panel #search_Projects [data-select="remove"]');
                $("body").on("click", '#current_Projects_Panel #search_Projects [data-select="remove"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    $.ajax({
                        url: '/PostsController',
                        method: 'POST',
                        data: {
                            'Sync': 'ProjectController',
                            'SubSync': 'removeProject',
                            //'Data': JSON.stringify(json_Data_Final_Store)
                            'Data': {
                                name: data.name.trim(),
                            },
                            //'Data2': json_Data_Final_User,
                        },
                        success: function (data) {
                            //------------------------
                            //DataTable product reload
                            if (data.hasOwnProperty('message')) {
                                create_Ul_Li_PNotify([data.message], 'success');

                            }else {
                                create_Ul_Li_PNotify([data.error], 'error');
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
                            this_Class.current_Projects_Panel.find('[name="refreshProjects"]').trigger('click');
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
            edit_Project: function () {
                $("body").off("click", '#current_Projects_Panel #search_Projects [data-select="edit"]');
                $("body").on("click", '#current_Projects_Panel #search_Projects [data-select="edit"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.modal_Projects.find('[name="name"]').data(data);
                    this_Class.modal_Projects.find('[name="name"]').val(data.name);

                })
            },
            remove_Unit: function () {
                $("body").off("click", '#current_Units_Panel #search_Units [data-select="remove"]');
                $("body").on("click", '#current_Units_Panel #search_Units [data-select="remove"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    $.ajax({
                        url: '/PostsController',
                        method: 'POST',
                        data: {
                            'Sync': 'UnitController',
                            'SubSync': 'removeUnit',
                            //'Data': JSON.stringify(json_Data_Final_Store)
                            'Data': {
                                id: data.id,
                            },
                            //'Data2': json_Data_Final_User,
                        },
                        success: function (data) {
                            //------------------------
                            //DataTable product reload
                            if (data.hasOwnProperty('message')) {
                                create_Ul_Li_PNotify([data.message], 'success');

                            }else {
                                create_Ul_Li_PNotify([data.error], 'error');
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
                            this_Class.current_Units_Panel.find('[name="refreshUnits"]').trigger('click');
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
            edit_Unit: function () {
                $("body").off("click", '#current_Units_Panel #search_Units [data-select="edit"]');
                $("body").on("click", '#current_Units_Panel #search_Units [data-select="edit"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.modal_Units.find('[name="name"]').data(data);
                    this_Class.modal_Units.find('[name="name"]').val(data.name);

                })
            },
            remove_Coding: function () {
                $("body").off("click", '#current_Codings_Panel #search_Codings [data-select="remove"]');
                $("body").on("click", '#current_Codings_Panel #search_Codings [data-select="remove"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    $.ajax({
                        url: '/PostsController',
                        method: 'POST',
                        data: {
                            'Sync': 'CodingController',
                            'SubSync': 'removeCoding',
                            //'Data': JSON.stringify(json_Data_Final_Store)
                            'Data': {
                                id: data.id,
                            },
                            //'Data2': json_Data_Final_User,
                        },
                        success: function (data) {
                            //------------------------
                            //DataTable product reload
                            if (data.hasOwnProperty('message')) {
                                create_Ul_Li_PNotify([data.message], 'success');

                            }else {
                                create_Ul_Li_PNotify([data.error], 'error');
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
                            this_Class.current_Codings_Panel.find('[name="refreshCodings"]').trigger('click');
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
            edit_Coding: function () {
                $("body").off("click", '#current_Codings_Panel #search_Codings [data-select="edit"]');
                $("body").on("click", '#current_Codings_Panel #search_Codings [data-select="edit"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.modal_Codings.find('[name="code"]').data(data);
                    this_Class.modal_Codings.find('[name="code"]').val(data.code);
                    this_Class.modal_Codings.find('[name="title"]').val(data.title);

                })
            },
            remove_Project_role: function () {
                $("body").off("click", '#projectRoles_Panel [data-select="remove"]');
                $("body").on("click", '#projectRoles_Panel [data-select="remove"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    $.ajax({
                        url: '/PostsController',
                        method: 'POST',
                        data: {
                            'Sync': 'ProjectController',
                            'SubSync': 'removeProjectRole',
                            //'Data': JSON.stringify(json_Data_Final_Store)
                            'Data': {
                                id: data.id,
                            },
                            //'Data2': json_Data_Final_User,
                        },
                        success: function (data) {
                            //------------------------
                            //DataTable product reload
                            if (data.hasOwnProperty('message')) {
                                create_Ul_Li_PNotify([data.message], 'success');

                            }else {
                                create_Ul_Li_PNotify([data.error], 'error');
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
                            this_Class.projectRoles_Panel.find('[name="refreshProjectRoles"]').trigger('click');
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
            edit_Project_role: function () {
                $("body").off("click", '#projectRoles_Panel [data-select="edit"]');
                $("body").on("click", '#projectRoles_Panel [data-select="edit"]', function () {

                    this_Class.init_Reset_Form().project_role();
                    this_Class.projectRoles_Panel.find('[name="cancel"]').removeClass('hidden');

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.projectRoles_Panel.data('id', data.id)

                    this_Class.projectRoles_Panel.find('[name="add"]').children().remove();
                    this_Class.projectRoles_Panel.find('[name="add"]').text(Lang.get('Dashboard.public.form.edit'));

                    // project
                    this_Class.init_Select2_Select_Items().project(data.project);

                    // role
                    this_Class.init_Select2_Select_Items().role(data.role);

                    // user
                    this_Class.init_Select2_Select_Items().user(data.user);

                })
            },
            edit_Request: function () {
                $("body").off("click", '#current_Requests_Panel #search_Requests [data-select="edit"]');
                $("body").on("click", '#current_Requests_Panel #search_Requests [data-select="edit"]', function () {
                    //this_Class.search_ActiveWFs_DataTables.off("click", '[data-select=continueTheProcess"]');
                    //this_Class.search_ActiveWFs_DataTables.on("click", '[data-select="continueTheProcess"]', function () {
                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.modal_Requests.find('[name="name"]').data(data);
                    this_Class.modal_Requests.find('[name="name"]').val(data.name);

                })
            },
        }
    }

    init() {
        this.init_InputMask();
        this.init_Click();
        this.init_Select2();
        this.init_Reset_Form().finally();
        this.init_DataTables().all();

        /*this.wf_data = {
            state: 'step_First',
        };


        this.init_Select2();
        if (!this.addProduct_UploadFiles_Add.find('.upload_Files').hasClass('filepond--root')) {
            this.init_File();
        }
        this.init_Startup();*/
    }
}

window.form_Create_Wf_Settings = new Form_Create_Wf_Settings();
form_Create_Wf_Settings.init();
