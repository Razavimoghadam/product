class Form_Create_Product {

    constructor() {

        this.product = $('#product');
        this.product_Added = $('#product_Added');
        this.details = this.product.find('[name="details"]');

    }


    // Startup
    init_Startup() {
        let this_Class = this;
    }

    // Inputmask
    init_InputMask() {
        let this_Class = this;

        InputMaskManageElements.name(this_Class.details.find('[name="name"]'),500);
        InputMaskManageElements.name(this_Class.details.find('[name="barcode"]'),500);
        InputMaskManageElements.name(this_Class.details.find('[name="description"]'),1000);
        InputMaskManageElements.number_Zero_To_Infinity(this_Class.details.find('[name="qty"]'));
        InputMaskManageElements.currency_Desired_Decimal_Digits(this_Class.details.find('[name="price"]'), 0);
    }


    // Reset form
    init_Reset_Form() {
        let this_Class = this;
        "use strict";
        return {
            finally: function () {
                "use strict";
                this_Class.product.data('id', 0);
                this_Class.details[0].reset();
                this_Class.details.find('input').prop('disabled', false);

                this_Class.details.find('[name="enabled"]').prop('checked', true).trigger("change");
                this_Class.details.find('.files').filepond('removeFiles');

                this_Class.product.find('[name="cancel"]').addClass('hidden');
                reset_Btn_Add(this_Class.product.find('[name="add_Product"]'));

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

                //Validation name
                if (Validate_Name(this_Class.details.find('[name="name"]'), 500) !== true) {
                    error.push(Lang.get('validation.validator.firstName'));
                    isValid = false;
                }

                //Validation barcode
                if (Validate_Name(this_Class.details.find('[name="barcode"]'), 500) !== true) {
                    error.push(Lang.get('validation.validator.product_at_least_one_barcode'));
                    isValid = false;
                }

                //Validation description
                if (Validate_Name(this_Class.details.find('[name="description"]'), 1000) !== true) {
                    error.push(Lang.get('validation.validator.description'));
                    isValid = false;
                }

                //Validation price
                if (Validate_Currency_Desired_Decimal_Digits(this_Class.details.find('[name="price"]'), 0) !== true) {
                    error.push(Lang.get('validation.validator.amount_in_numbers'));
                    isValid = false;
                }

                //Validation qty
                if (Validate_Number_Zero_to_Infinity(this_Class.details.find('[name="qty"]')) !== true) {
                    error.push(Lang.get('validation.validator.number_of_product_invalid'));
                    isValid = false;
                }

                //files
                if (this_Class.details.find('.files').filepond('getFiles').length == 0) {
                    error.push(Lang.get('validation.validator.images_are_not_attached'));
                    isValid = false;
                }

                return {
                    isValid: isValid,
                    error: error,
                };
            },
        };
    };

    // Data
    init_Data() {
        let this_Class = this;

        let data = {
            status: function () {
                let id = this_Class.product.data('id');
                if (isExist(() => id) && id != 0) {
                    return 'edit';
                }
                return 'add';
            }(),

            name:this_Class.details.find('[name="name"]').inputmask('unmaskedvalue'),
            barcode:this_Class.details.find('[name="barcode"]').inputmask('unmaskedvalue'),
            price:this_Class.details.find('[name="price"]').inputmask('unmaskedvalue').replace(/[^0-9]/g, ""),
            description:this_Class.details.find('[name="description"]').inputmask('unmaskedvalue'),
            enabled: this_Class.details.find('[name="enabled"]').prop('checked'),
            qty:this_Class.details.find('[name="qty"]').inputmask('unmaskedvalue').replace(/[^0-9]/g, ""),
            files: function () {
                let files = [];
                $.map(this_Class.details.find('.files').filepond('getFiles'), function (value, key) {
                    files.push({
                        file: value.getFileEncodeDataURL(),
                        id: value.getMetadata().id,
                        fileable_id: value.getMetadata().fileable_id,
                        fileable_type: value.getMetadata().fileable_type,
                    });
                });
                return files;
            }(),

        }
        let id = this_Class.product.data('id');
        if (isExist(() => id) && id != 0) {
            data.id = id;
        }

        return data;
    }

    // Click
    init_Click() {
        let this_Class = this;

        // Add product
        this_Class.product.off("click", '[name="add_Product"]');
        this_Class.product.on("click", '[name="add_Product"]', async function () {
            let button = $(this);
            let check_Error = this_Class.init_Validation().finally();

            if (!check_Error.isValid) {
                create_Ul_Li_PNotify(check_Error.error, 'error')
            } else {

                let data = this_Class.init_Data();

                console.log(data);

                this_Class.product.find('[name="add_Product"]').parent().find('.ajax-load').removeClass('hidden');
                this_Class.product.find('[name="add_Product"]').prop('disabled', true);
                $.ajax({
                    url: '/Product',
                    method: 'POST',
                    data: {
                        /*'Sync': 'ProductController',
                        'SubSync': 'set_Or_Edit_Product',*/
                        'Data': JSON.stringify(data)
                        //'Data': JSON.parse(JSON.stringify(data)),
                        //'Data2': json_Data_Final_Product,
                    },
                    success: function (data) {
                        reset_Btn_Add(button);
                        if (data.hasOwnProperty('status') && data.status == 'success') {
                            create_Ul_Li_PNotify([data.message], 'success');
                            this_Class.init_Reset_Form().finally();
                            this_Class.product_Added.find('[name="refresh_DataTable"]').trigger('click');
                            $([document.documentElement, document.body]).animate({
                                scrollTop: this_Class.product_Added.find('table[name="products"]').parent().offset().top
                            }, 1000);
                            return;
                        }
                        if (data.hasOwnProperty('status') && data.status == 'failed') {
                            create_Ul_Li_PNotify([data.message], 'error', null, false);
                            return;
                        }
                        // Handle error Validation
                        let error = [];
                        $.each(data, function (item, value){
                            error.push(value);
                        });
                        create_Ul_Li_PNotify(error, 'error', null, false)

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
                        this_Class.product.find('[name="add_Product"]').prop('disabled', false);
                        this_Class.product.find('[name="add_Product"]').parent().find('.ajax-load').addClass('hidden');

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

        // cancel edit Product
        this_Class.product.off("click", '[name="cancel"]');
        this_Class.product.on("click", '[name="cancel"]', async function () {
            this_Class.init_Reset_Form().finally();
        });

        // Refresh
        this_Class.product_Added.off("click", '[name="refresh_DataTable"]');
        this_Class.product_Added.on("click", '[name="refresh_DataTable"]', function () {
            this_Class.product_Added.find('[name="refresh_DataTable"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable(this_Class.product_Added.find('table[name="products"]'))) {
                this_Class.product_Added.find('table[name="products"]').DataTable().ajax.reload();
            }
        });

    }

    // Reload
    init_Event_Reloaded() {
        let this_Class = this;
        "use strict";
        return {
            reload_All: function () {
                elements_Toggle();
                this.remove();
                this.edit();
            },
            edit: function () {
                $("body").off("click", '#product_Added [data-select="edit"]');
                $("body").on("click", '#product_Added [data-select="edit"]', async function () {

                    this_Class.init_Reset_Form().finally();
                    this_Class.product.find('[name="cancel"]').removeClass('hidden');

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    this_Class.product.data('id', data.id)

                    this_Class.product.find('[name="add_Product"]').children().remove();
                    this_Class.product.find('[name="add_Product"]').text(Lang.get('Dashboard.public.form.edit'));

                    // details
                    this_Class.details.find('[name="name"]').val(data.name);
                    this_Class.details.find('[name="barcode"]').val(data.barcode);
                    this_Class.details.find('[name="price"]').val(data.price);
                    this_Class.details.find('[name="description"]').val(data.description);
                    this_Class.details.find('[name="enabled"]').prop('checked', data.enabled).trigger("change");
                    this_Class.details.find('[name="qty"]').val(data.qty);

                    $.each(data.files, function (item, value) {
                        this_Class.details.find('.files').first().filepond('addFile', value.file).then(function (file) {
                            file.setMetadata('id', value.id, true);
                            file.setMetadata('fileable_id', value.fileable_id, true);
                            file.setMetadata('fileable_type', value.fileable_type, true);
                        });
                    });

                    this_Class.init_Event_Reloaded().reload_All();

                    $([document.documentElement, document.body]).animate({
                        scrollTop: this_Class.product.parent().offset().top
                    }, 1000);
                })
            },
            remove: function () {
                $("body").off("click", '#product_Added [data-select="remove"]');
                $("body").on("click", '#product_Added [data-select="remove"]', async function () {

                    let button = $(this);

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    button.find('i').addClass('fa-spin fa-fw');
                    $.ajax({
                        url: '/Product',
                        method: 'DELETE',
                        data: {
                            /*'Sync': 'ProductController',
                            'SubSync': 'delete_Product',*/
                            'Data': JSON.stringify({id: data.id})
                            //'Data': JSON.parse(JSON.stringify(data)),
                            //'Data2': json_Data_Final_Product,
                        },
                        success: function (data) {
                            if (data.hasOwnProperty('status') && data.status == 'success') {
                                create_Ul_Li_PNotify([data.message], 'success');
                                button.find('i').removeClass('fa-spin fa-fw');
                                this_Class.product_Added.find('[name="refresh_DataTable"]').trigger('click');
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

    // Files
    init_File() {
        let this_Class = this;

        // Turn input element into a pond
        this_Class.product.find('.filepond').filepond({
            allowMultiple: true,
            labelButtonImageOverlay: 'custom label', // by default 'Open image in overlay file'
            // server: '/filepond',
            allowFileEncode: true,
            imageTransformOutputQuality: 60,
            allowFileTypeValidation: true,
            acceptedFileTypes: ['image/png', 'image/jpeg', 'application/pdf'],
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
                this.products();
            },
            products: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.product_Added.find('table[name="products"]').DataTable({
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
                            url: '/Product/ProductsTable',
                            type: "POST",
                            dataType: 'json',
                            data: {
                                /*'Sync': 'ProductController',
                                'SubSync': 'getProductsTable',*/
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
                            {data: 'price', name: 'price', searchable: false},
                            {data: 'description', name: 'description', searchable: false},
                            {data: 'qty', name: 'qty', searchable: false},
                            {data: 'enabled_text', name: 'enabled_text', searchable: false},
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

                            this_Class.product_Added.find('[name="refresh_DataTable"] .fa-refresh').removeClass('fa-spin fa-fw');
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
        if (!this.details.find('.files').hasClass('filepond--root')) {
            this.init_File();
        }
        this.init_Reset_Form().finally();
        this.init_DataTables().products();
        this.init_Startup();
    }
}

window.form_Create_Product = {};
form_Create_Product.instance = new Form_Create_Product();
form_Create_Product.instance.init();

