class Form_Create_Cartable {

    constructor() {
        this.cartable = $('#cartable');
    }


    // Startup
    async init_Startup() {
        let this_Class = this;

        $('body').removeClass('loaded');
        let promise = new Promise((resolve, reject) => {
            $.ajax({
                url: '/Product/Products',
                method: 'POST',
                data: {
                    /*'Sync': 'WFContractorRequestController',
                    'SubSync': 'getContractor',*/
                    //'Data': JSON.stringify(json_Data_Final_Store)
                    'Data': JSON.stringify({
                        "search": this_Class.cartable.find('search').val(),
                    })
                    //'Data2': json_Data_Final_User,
                },
                success: function (data) {
                    resolve(data);
                    //------------------------
                    //DataTable product reload
                    /*if (data.hasOwnProperty('message')) {
                        this_Class.btn_NextStep.parent().find('.ajax-load').addClass('hidden');
                        this_Class.btn_NextStep.prop('disabled', false);
                    }*/
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
                    $('body').addClass('loaded');
                    //------------------------
                    // Reload_Needed.script_Product();
                    //import('../initialize/show_Room_Repeat.js');
                    //------------------------
                    /*console.log('complete : ' + JSON.stringify(data));
        alert('complete: ' + JSON.stringify(data))*/
                }
            });
        });
        let products = await promise;

        this_Class.cartable.find('.x_content').empty();

        if (!isEmpty(products)) {
            $.each(products, function (item, value) {
                this_Class.cartable.find('.x_content').append(this_Class.HTML_Create().product_Profile(value));
            });
        } else {
            this_Class.cartable.find('.x_content').append(Lang.get('Dashboard.public.no_more_records_found'));
        }

        this_Class.init_Event_Reloaded().reload_All();
    }


    // Reset form
    init_Reset_Form() {
        let this_Class = this;
        "use strict";
        return {
            finally: function () {
                "use strict";
                this_Class.cartable.find('search').val('');
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

    // HTML_Create
    HTML_Create() {
        let this_Class = this;
        "use strict";
        return {
            product_Profile: function (data) {
                let profile = $('<div class="col-md-4 col-sm-4 col-xs-12 profile_details">\n' +
                    '    <div class="well profile_view">\n' +
                    '        <div class="col-sm-12">\n' +
                    '            <h4 name="barcode" class="brief w3-margin-bottom"></h4>\n' +
                    '            <img name="file" class="w3-margin-bottom col-md-12 col-sm-12 col-xs-12 img-responsive center-block"\n' +
                    '                 src="">\n' +
                    '\n' +
                    '                <div class="">\n' +
                    '                    <h2 name="name"></h2>\n' +
                    '                    <strong name="price"></strong>\n' +
                    '                    <p name="description"></p>\n' +
                    '\n' +
                    '                </div>\n' +
                    '\n' +
                    '        </div>\n' +
                    '        <div class="col-xs-12 bottom text-center">\n' +
                    '            <button class="btn btn-success btn-xs" type="button" data-select="add" data-toggle_tooltip="tooltip"\n' +
                    '                     style="width: 80%"><i class="fa fa-plus"></i></button>\n' +
                    '\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</div>');

                profile.data('dataSend', data);
                profile.find('[name="barcode"]').text(data.barcode);
                profile.find('[name="name"]').text(data.name);
                profile.find('[name="price"]').text(formatMoney(data.price, 0) + ' ' + Lang.get('Dashboard.public.rial'));
                profile.find('[name="description"]').text(data.description);
                profile.find('[name="file"]').attr('src', data.files[0].file);


                return profile;
            },
        }
    }

    // Click
    init_Click() {
        let this_Class = this;

        // Refresh
        this_Class.cartable.off("click", '[name="refresh_DataTable"]');
        this_Class.cartable.on("click", '[name="refresh_DataTable"]', function () {
            this_Class.init_Startup();

            /*this_Class.cartable_Added.find('[name="refresh_DataTable"] .fa-refresh').addClass('fa-spin fa-fw');
            if ($.fn.DataTable.isDataTable(this_Class.cartable_Added.find('table[name="cartables"]'))) {
                this_Class.cartable_Added.find('table[name="cartables"]').DataTable().ajax.reload();
            }*/
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
            },
            add: function () {
                $("body").off("click", '#cartable [data-select="add"]');
                $("body").on("click", '#cartable [data-select="add"]', async function () {

                    let button = $(this);

                    let profile_details = $(this).closest(".profile_details");
                    let data = profile_details.data('dataSend');
                    console.log(data);

                    button.find('i').addClass('fa-spin fa-fw');
                    $.ajax({
                        url: '/CardItem',
                        method: 'POST',
                        data: {
                            /*'Sync': 'CartableController',
                            'SubSync': 'add_Cartable',*/
                            'Data': JSON.stringify({product_id: data.id})
                            //'Data': JSON.parse(JSON.stringify(data)),
                            //'Data2': json_Data_Final_Cartable,
                        },
                        success: function (data) {
                            if (data.hasOwnProperty('status') && data.status == 'success') {
                                create_Ul_Li_PNotify([data.message], 'success');
                                button.find('i').removeClass('fa-spin fa-fw');
                                this_Class.init_Event_Reloaded().user_Number_Of_CardItems();
                                // this_Class.cartable_Added.find('[name="refresh_DataTable"]').trigger('click');
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


    init() {
        this.init_Click();
        this.init_Reset_Form().finally();
        this.init_Startup();
    }
}

window.form_Create_Cartable = {};
form_Create_Cartable.instance = new Form_Create_Cartable();
form_Create_Cartable.instance.init();


