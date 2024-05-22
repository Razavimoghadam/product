// let newWorker;
$('.topNav_Navbar_Dropdown_Setting').click(function () {
    active_View_Without_activeStep('component_System_settings',manageScriptPath.component_System());
    $('[data_Remove="component"]:visible .page_toolbox_control').empty();
})
/*$('.topNav_App_Update').click(function () {
    console.log(1)
    /!*if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceworker.js', {
            scope: '.'
        }).then(function (registration) {
            // Registration was successful
            console.log(2)
            registration.update();
        }, function (err) {
            // registration failed :(
            console.log('Laravel PWA: ServiceWorker registration failed: ', err);
        });
    }
    console.log(3)*!/

    newWorker.postMessage({ action: 'skipWaiting' });
})*/


$('[name="change_User_Active_Role"]').click(function () {
    $.ajax({
        url: '/PostsController',
        method: 'POST',
        data: {
            'Sync': 'UserController',
            'SubSync': 'setUserActiveRole',
            //'Data': JSON.stringify(json_Data_Final_Store)
            'Data': JSON.stringify({
                active_role:$(this).attr('value'),
            }),
            //'Data2': json_Data_Final_User,
        },
        success: function (data) {
            //------------------------
            //DataTable product reload
            if (data.hasOwnProperty('message')) {
                create_Ul_Li_PNotify([data.message], 'success');
                location.reload();
            }
            if (data.hasOwnProperty('error')) {
                create_Ul_Li_PNotify([data.message], 'error');
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
            /*console.log('complete : ' + JSON.stringify(data));
    alert('complete: ' + JSON.stringify(data))*/
        }
    });
});
$('#topNav_CardItems').click(function () {
    active_View_Without_activeStep('component_CardItems_Setting', manageScriptPath.component_CardItems_Setting(), true);
    $('[data_Remove="component"]:visible .page_toolbox_control').empty();
});
