import * as init_DB from "../database/index";

$.when(
    $.getScript("assets/auth/js/authenticate.js"),
    $.getScript("assets/dashboard/js/initialize/public.js"),
    $.getScript("/assets/dashboard/js/initialize/export.js"),
    $.getScript("assets/dashboard/js/top_nav/top_nav.js"),
    $.getScript("assets/dashboard/js/menu/menu.js"),

    $.Deferred(function (deferred) {
        $(deferred.resolve);
    })
).done(function () {
    $(document).ready(async function () {

        //mobile-bottom-nav
        /*var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
        navItems.forEach(function(e, i) {
            e.addEventListener("click", function(e) {
                navItems.forEach(function(e2, i2) {
                    e2.classList.remove("mobile-bottom-nav__item--active");
                })
                this.classList.add("mobile-bottom-nav__item--active");
            });
        });*/

        /*$.ajaxSetup({
                   headers: {
                       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                   }
               });*/

        /* // Initialize the service worker
         if ('serviceWorker' in navigator) {
             navigator.serviceWorker.register('serviceworker.js', {
                 scope: '.'
             }).then(function (registration) {
                 // Registration was successful
                 console.log('Laravel PWA: ServiceWorker registration successful with scope: ', registration.scope);
             }, function (err) {
                 // registration failed :(
                 console.log('Laravel PWA: ServiceWorker registration failed: ', err);
             });
         }*/


        // Allow get script component
        window.allow_GetScript_Component_Users_Setting = true;
        window.allow_GetScript_Component_Products_Setting = true;
        window.allow_GetScript_Component_CardItems_Setting = true;
        window.allow_GetScript_Component_Cartable_Setting = true;
        window.allow_GetScript_Component_Dashboard_1 = true;
        window.allow_GetScript_Component_Reports_WF_Cartables = true;
        window.allow_GetScript_Component_System_settings = true;
        window.allow_GetScript_Component_Menu = true;


        // assets/app_settings/pwa/images/Logo.png

        // Manage script path
        window.manageScriptPath = function () {
            return {
                ///////////////////////////////// Initialize ////////////////////////////////////
                component_Master: function () {
                    return 'assets/dashboard/js/initialize/master.js';
                },
                component_Users_Setting: function () {
                    return 'assets/dashboard/js/initialize/users_add_edit.js';
                },
                component_Products_Setting: function () {
                    return 'assets/dashboard/js/initialize/products_add_edit.js';
                },
                component_CardItems_Setting: function () {
                    return 'assets/dashboard/js/initialize/card_items_add_edit.js';
                },
                component_Cartable_Setting: function () {
                    return 'assets/dashboard/js/cartable/cartable.js';
                },
                ///////////////////////////////// Public ////////////////////////////////////
                component_Public: function () {
                    return 'assets/dashboard/js/initialize/public.js';
                },
                ///////////////////////////////// Dashboards ////////////////////////////////////
                component_dashboard_1: function () {
                    return 'assets/dashboard/js/initialize/dashboard_1.js';
                },
                ///////////////////////////////// Dashboards ////////////////////////////////////
                component_Reports_WF_Cartables: function () {
                    return 'assets/dashboard/js/reports/wf-cartables.js';
                },
                ///////////////////////////////// Settings ////////////////////////////////////
                component_System: function () {
                    return 'assets/dashboard/js/settings/system.js';
                },
                ///////////////////////////////// TopNav ////////////////////////////////////
                component_TopNav: function () {
                    return 'assets/dashboard/js/top_nav/top_nav.js';
                },
                ///////////////////////////////// Menu ////////////////////////////////////
                component_Menu: function () {
                    return 'assets/dashboard/js/menu/menu.js';
                },
                ///////////////////////////////// etc ////////////////////////////////////
                component_Custom_Dashboard: function () {
                    return 'assets/dashboard/js/custom-dashboard.js';
                },
                component_Export: function () {
                    return 'assets/dashboard/js/initialize/export.js';
                },
            };
        }();

        // Init db offline mode
        let init_DB_Offline_Mode = async function () {
            window.baseServicesDB = new init_DB.BaseServicesDB('draft');
            window.dbResult = await baseServicesDB.init();

            console.warn(dbResult);
            if (dbResult == true) {

                /*let self2 = await baseServicesDB.wfAddPayRequestServices.getWfAddPayRequests();
                console.log(self2);*/

                baseServicesDB.connection.getDbList().then(function (result) {
                    console.log(result)
                });
                baseServicesDB.connection.get('draft').then(function (schema) {
                    console.log(schema)
                });
                /*baseServicesDB.connection.getDbSchema('supermarket').then(function (schema) {
                    console.log(schema)
                });*/

                /*$('#topNav_App_Update').click(async function () {
                    $.ajax({
                        url: '/',
                        method: 'POST',
                        data: {
                            Sync: 'DBSyncController',
                            SubSync: 'sync_Data',
                            Data: {
                                data_max_revision: data_MaxRevision,
                                data_ids: data_IDs,
                                // data_added_or_edited_or_removed: data_AddedOrEditedOrRemoved,
                                /!*json_Data: {

                                }*!/
                            },
                        },
                        success: function (data) {
                            console.log(data)
                            //------------------------
                        },
                        error: function (data) {
                            console.log(data)
                            //------------------------
                            // create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                            //------------------------
                        },
                        complete: function (data) {
                            //------------------------
                            // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                            //import('../initialize/show_Room_Repeat.js');

                            //------------------------
                            /!*console.log('complete : ' + JSON.stringify(data));
                            alert('complete: ' + JSON.stringify(data))*!/
                        }
                    });
                    /!*var gg = await shop.addShop({
                        id: 8,
                        name: "ffff",
                        dealer_type: "fff",
                        web_site_name: "ffff",
                        //open: "08:05:00",
                        logo: "ff",
                        revision: 6,
                        last_modified_by: "",
                        created_at: "",
                        updated_at: "",
                        status: 'remove-user-4'
                    })
                    console.log(gg);

                    var up = await shop.updateShop(8,{
                        id: 8,
                        name: "ffff6",
                        dealer_type: "fff6",
                        web_site_name: "ffff6",
                        //open: "08:05:00",
                        logo: "ff6",
                        revision: 66,
                        last_modified_by: 6,
                        status: 'remove-user-4'
                    })
                    console.log(up);

                    /!*var re = await shop.deleteShop(8);
                    console.log(re);*!/
                    var result5 = await shop.getShop(5);
                    console.log(result5);*!/
                    var result4 = await baseServicesDB.barcodeServices.getBarcodes();
                    console.log(result4);
                })*/
            }
        }

        // Init event listen
        let init_Listen = function () {
            // Listen events
            get_User_Room().then(function (data) {
                listen_Users_Change(data);
            })

        }

        // Init filepond
        let init_Filepond = function () {
            //FilePond.parse(document.body);
            $.getJSON('assets/json/filepond/locale/' + win_Locale + '_ir.json')
                .done(function (data) {
                    FilePond.setOptions(data);
                });
            // First register any plugins
            $.fn.filepond.registerPlugin(FilePondPluginFileEncode);
            $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
            $.fn.filepond.registerPlugin(FilePondPluginImageOverlay);
            $.fn.filepond.registerPlugin(FilePondPluginGetFile);
            $.fn.filepond.registerPlugin(FilePondPluginPdfPreview);
            $.fn.filepond.registerPlugin(FilePondPluginFileValidateType);
            $.fn.filepond.registerPlugin(FilePondPluginImageTransform);

        }

        // Init dataTable
        let init_DataTable = function () {
            $.fn.dataTable.moment('YYYY-MM-DD HH:mm:ss');
            $.fn.dataTable.moment('YYYY/MM/DD HH:mm:ss');
            $.fn.dataTable.moment('HH:mm:ss YYYY-MM-DD');
            $.fn.dataTable.moment('HH:mm:ss YYYY/MM/DD');
            $.fn.dataTable.moment('MM-dd-YYYY');
            $.fn.dataTable.moment('DD.MM.YYYY');
            $.fn.dataTable.moment('HH:mm');
            // $.fn.dataTable.moment( 'YYYY-MM-DD HH:mm:ss');
            // DataTable.datetime('D MMM YYYY');
        }

        // Initialize db offline mode
        await init_DB_Offline_Mode();

        // Animate
        const animateCSS = (element, animation, prefix = 'animate__') =>
            // We create a Promise and return it
            new Promise((resolve, reject) => {
                const animationName = `${prefix}${animation}`;
                const node = document.querySelector(element);

                node.classList.add(`${prefix}animated`, animationName);

                // When the animation ends, we clean the classes and resolve the Promise
                function handleAnimationEnd(event) {
                    event.stopPropagation();
                    node.classList.remove(`${prefix}animated`, animationName);
                    resolve('Animation ended');
                }

                node.addEventListener('animationend', handleAnimationEnd, {once: true});
            });


        // set locale and timezone
        getLocaleAndTimezoneUser().then(function () {

            //  Active WF Cartables
            /*active_View_Without_activeStep('component_Reports_WF_Cartables', manageScriptPath.component_Reports_WF_Cartables());
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();*/

            active_View_Without_activeStep('component_Cartable_Setting', manageScriptPath.component_Cartable_Setting(),true);
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();

            // filepond
            init_Filepond();

            // dataTable
            init_DataTable();

        });
    });
});



