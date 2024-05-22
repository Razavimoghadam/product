export class Public_Classes {

    static event_When_Database_Not_Available() {
        var data_For_Create_Button_Together = {
            'id_Btn1': 'window_Location_Reload',
            'btn1_Class_Color': 'w3-teal',
            'btn1_Text': Lang.get('supermarket/storeCashier/Dashboard.public.reload'),
            'btn1_Attr': {
                /*'data-select': 'userAddSelection',
                'data-toggle': 'modal',
                'data-target': '#storeCashier_Work_Modal_UserAdd',*/
            },
        };
        var single_Button = single_Button_Create(data_For_Create_Button_Together);

        create_Ul_Li_PNotify([Lang.get('validation.validator.database_not_available_reload_page')], 'error',single_Button)

        $('#window_Location_Reload').off('click');
        $('#window_Location_Reload').click(async function () {
            window.location.reload();
        })
    }
    static async check_DB_Exist(dbName) {
        const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(dbName);
        return !!isExisting;
    }
    static async check_Table_Exist(tableName) {
        let db_Schema =await baseServicesDB.connection.getDbSchema('supermarket');

        console.log(db_Schema)

        let table_Names=$.map(db_Schema.tables, function (value, key) {
            return value.name;
        })
        console.log(table_Names)

        return $.inArray(tableName, table_Names)>=0
    }
}
