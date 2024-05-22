class Form_Create_Menu {
    init_Startup() {
    }

    init_Select2() {
    }

    init_Click() {


        // Users
        $('#menu_PersonsAndUsers_AddEdit').click(function () {
            active_View_Without_activeStep('component_Users_Setting', manageScriptPath.component_Users_Setting(), true);
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
        })

        // Product
        $('#menu_Products_AddEdit').click(function () {
            active_View_Without_activeStep('component_Products_Setting', manageScriptPath.component_Products_Setting(), true);
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
        })

        // Settings
        $('#menu_Settings_System').click(function () {
            active_View_Without_activeStep('component_System_settings', manageScriptPath.component_System())
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
        })

        // Cartable
        $('#menu_Home_Dashboard_1, [name="default_Dashboard"]').click(function () {
            active_View_Without_activeStep('component_Cartable_Setting', manageScriptPath.component_Cartable_Setting(),true);
            $('[data_Remove="component"]:visible .page_toolbox_control').empty();
        })
    }

    init() {
        this.init_Click();
    }
}

let form_Create_Menu = new Form_Create_Menu();
form_Create_Menu.init();
