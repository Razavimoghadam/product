class Form_Create_CardItem {

    constructor() {
        this.cardItem_Added = $('#cardItem_Added');
    }


    // Startup
    init_Startup() {
        let this_Class = this;
    }

    // Inputmask
    init_InputMask() {
        let this_Class = this;


    }


    // Reset form
    init_Reset_Form() {
        let this_Class = this;
        "use strict";
        return {
            finally: function () {
                "use strict";
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

        // Refresh
        this_Class.cardItem_Added.off("click", '[name="refresh_DataTable"]');
        this_Class.cardItem_Added.on("click", '[name="refresh_DataTable"]', function () {
            this_Class.cardItem_Added.find('[name="refresh_DataTable"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable(this_Class.cardItem_Added.find('table[name="cardItems"]'))) {
                this_Class.cardItem_Added.find('table[name="cardItems"]').DataTable().ajax.reload();
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
                this.add();
                this.minus();
                this.remove();
                this.user_Number_Of_CardItems();
            },
            add: function () {
                $("body").off("click", '#cardItem_Added [data-select="add"]');
                $("body").on("click", '#cardItem_Added [data-select="add"]', async function () {

                    let button = $(this);

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    button.find('i').addClass('fa-spin fa-fw');
                    $.ajax({
                        url: '/CardItem',
                        method: 'POST',
                        data: {
                            /*'Sync': 'CardItemController',
                            'SubSync': 'add_CardItem',*/
                            'Data': JSON.stringify({id: data.id})
                            //'Data': JSON.parse(JSON.stringify(data)),
                            //'Data2': json_Data_Final_CardItem,
                        },
                        success: function (data) {
                            if (data.hasOwnProperty('status') && data.status == 'success') {
                                create_Ul_Li_PNotify([data.message], 'success');
                                button.find('i').removeClass('fa-spin fa-fw');
                                this_Class.cardItem_Added.find('[name="refresh_DataTable"]').trigger('click');
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
                            // Reload_Needed.script_CardItem();
                            //import('../initialize/show_Room_Repeat.js');
                            //------------------------
                            /*console.log('complete : ' + JSON.stringify(data));
    alert('complete: ' + JSON.stringify(data))*/
                        }
                    });
                })
            },
            minus: function () {
                $("body").off("click", '#cardItem_Added [data-select="minus"]');
                $("body").on("click", '#cardItem_Added [data-select="minus"]', async function () {

                    let button = $(this);

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    button.find('i').addClass('fa-spin fa-fw');
                    $.ajax({
                        url: '/CardItem',
                        method: 'PATCH',
                        data: {
                            'Sync': 'CardItemController',
                            'SubSync': 'minus_CardItem',
                            'Data': JSON.stringify({id: data.id})
                            //'Data': JSON.parse(JSON.stringify(data)),
                            //'Data2': json_Data_Final_CardItem,
                        },
                        success: function (data) {
                            if (data.hasOwnProperty('status') && data.status == 'success') {
                                create_Ul_Li_PNotify([data.message], 'success');
                                button.find('i').removeClass('fa-spin fa-fw');
                                this_Class.cardItem_Added.find('[name="refresh_DataTable"]').trigger('click');
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
                            // Reload_Needed.script_CardItem();
                            //import('../initialize/show_Room_Repeat.js');
                            //------------------------
                            /*console.log('complete : ' + JSON.stringify(data));
    alert('complete: ' + JSON.stringify(data))*/
                        }
                    });
                })
            },
            remove: function () {
                $("body").off("click", '#cardItem_Added [data-select="remove"]');
                $("body").on("click", '#cardItem_Added [data-select="remove"]', async function () {

                    let button = $(this);

                    let tr = $(this).closest("tr");
                    let data = tr.data('dataSend');
                    console.log(data);

                    button.find('i').addClass('fa-spin fa-fw');
                    $.ajax({
                        url: '/CardItem',
                        method: 'DELETE',
                        data: {
                            'Sync': 'CardItemController',
                            'SubSync': 'delete_CardItem',
                            'Data': JSON.stringify({id: data.id})
                            //'Data': JSON.parse(JSON.stringify(data)),
                            //'Data2': json_Data_Final_CardItem,
                        },
                        success: function (data) {
                            if (data.hasOwnProperty('status') && data.status == 'success') {
                                create_Ul_Li_PNotify([data.message], 'success');
                                button.find('i').removeClass('fa-spin fa-fw');
                                this_Class.cardItem_Added.find('[name="refresh_DataTable"]').trigger('click');
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
                            // Reload_Needed.script_CardItem();
                            //import('../initialize/show_Room_Repeat.js');
                            //------------------------
                            /*console.log('complete : ' + JSON.stringify(data));
    alert('complete: ' + JSON.stringify(data))*/
                        }
                    });
                })
            },
            user_Number_Of_CardItems: function () {
                $.ajax({
                    url: '/CardItem/UserNumberOfCardItems',
                    method: 'POST',
                    data: {
                        /*'Sync': 'CartableController',
                        'SubSync': 'add_Cartable',
                        'Data': JSON.stringify({product_id: data.id})*/
                        //'Data': JSON.parse(JSON.stringify(data)),
                        //'Data2': json_Data_Final_Cartable,
                    },
                    success: function (data) {
                        if (data.hasOwnProperty('status') && data.status == 'success') {
                            $('#topNav_CardItems').find('.bg-green').text(data.message);
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
                        // Reload_Needed.script_Cartable();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            },
        }
    }

    // DataTables from server
    init_DataTables() {
        let this_Class = this;
        "use strict";
        return {
            all: function () {
                this.cardItems();
            },
            cardItems: function () {
                get_Language(win_Locale.toLowerCase()).then(function (data) {
                    this_Class.cardItem_Added.find('table[name="cardItems"]').DataTable({
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
                            url: '/CardItem/CardItemsTable',
                            type: "POST",
                            dataType: 'json',
                            data: {
                                /*'Sync': 'CardItemController',
                                'SubSync': 'getCardItemsTable',*/
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
                            {data: 'qty', name: 'qty', searchable: false},
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

                            this_Class.cardItem_Added.find('[name="refresh_DataTable"] .fa-refresh').removeClass('fa-spin fa-fw');
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
        this.init_Reset_Form().finally();
        this.init_DataTables().cardItems();
        this.init_Startup();
    }
}

window.form_Create_CardItem = {};
form_Create_CardItem.instance = new Form_Create_CardItem();
form_Create_CardItem.instance.init();


