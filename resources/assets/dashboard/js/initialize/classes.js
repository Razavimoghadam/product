// Stack class
class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    // Functions to be implemented
    // push(item)
    push(element) {
        // push element into the items
        this.items.push(element);
        console.log(this.printStack())
    }

    // pop()
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek()
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // isEmpty()
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }

    // empty()
    empty() {
        this.items = [];
    }

    // printStack()
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

class Collection {
    constructor(data) {
        this.data = data;
    }

    /**
     *
     * The except method returns all items in the array or object except for those with the specified keys.
     *
     * @param except_Data
     */
    except(except_Data = []) {

        if (Array.isArray(this.data)) {
            let new_List = []

            $.each(this.data, function (key, value) {
                const collection = collect(value)
                const filtered = collection.except(except_Data).all();
                new_List.push(filtered)
            })
            return new_List;
        } else if (isObject(this.data)) {
            const collection = collect(this.data)
            return collection.except(except_Data).all();
        }

    }

    sort_CompareNumbers(){
        function compareNumbers(a, b) {
            return a - b;
        }
        return this.data.sort(compareNumbers);
    }

}
////////////////////////////////////////// Event ///////////////////////////////////

// Event phone
class Event_Phone {
    //Event btns phone input
    static event_Remove_Btn_Table_Phone(data_Select_Remove_Btn, data) {
        $('[data-select="' + data_Select_Remove_Btn + '"]').off('click');
        $('[data-select="' + data_Select_Remove_Btn + '"]').click(function () {

            var tr = $(this).closest("tr")
            let id = tr.find("p").text();
            var newData;

            if (tr.data('sendTableType') === 'MOBILE') {
                newData = remove_Node_Object_By_ID(data.phone.mobile, id)
                data.phone.mobile = newData;
            }
            if (tr.data('sendTableType') === 'FIXED_LINE') {
                newData = remove_Node_Object_By_ID(data.phone.fixedLine, id)
                data.phone.fixedLine = newData;
            }

            tr.remove();
            // or $(this).parent().parent().remove();
        })
    }

    static event_Edit_Btn_Table_Phone(data_Select_Edit_Btn, input_Phone_Mobile_Id, input_Phone_Fixed_Line_Id, button_Add_Or_Edit_Id, intl_MOBILE, intl_FIXED_LINE) {
        $('[data-select="' + data_Select_Edit_Btn + '"]').off('click');
        $('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {

            var tr = $(this).closest("tr");
            var type = tr.data('sendTableType');
            var countryData = tr.data('sendTableCountryData');
            var inputmask = tr.data('sendTableInputmask');

            $('[data-select="phoneAddedTable"]').attr('data-edit', 'false')
            tr.attr('data-edit', 'true');

            $('#' + button_Add_Or_Edit_Id).children().remove();
            $('#' + button_Add_Or_Edit_Id).attr('data-edit', 'true');
            $('#' + button_Add_Or_Edit_Id).text(Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'));

            if (type === 'MOBILE') {
                $('#' + input_Phone_Mobile_Id).inputmask('remove');
                $('#' + input_Phone_Mobile_Id).inputmask(inputmask);

                intl_MOBILE.setNumber(tr.find("a.phone").text());
                //$('#' + input_Phone_Mobile_Id).val(tr.find("a.phone").text());
                $('#' + input_Phone_Fixed_Line_Id).prop('disabled', true);
                $('#' + input_Phone_Mobile_Id).attr('data-edit', true);
            }
            if (type === 'FIXED_LINE') {
                $('#' + input_Phone_Fixed_Line_Id).inputmask('remove');
                $('#' + input_Phone_Fixed_Line_Id).inputmask(inputmask);

                intl_FIXED_LINE.setNumber(tr.find("a.phone").text());
                //$('#' + input_Phone_Fixed_Line_Id).val(tr.find("a.phone").text());
                $('#' + input_Phone_Mobile_Id).prop('disabled', true);
                $('#' + input_Phone_Fixed_Line_Id).attr('data-edit', true);
            }
        })
    }
}

// Event address
class Event_Address {
    //Event btns address input
    static event_Remove_Btn_Table_Address(data_Select_Remove_Btn, data) {
        $('[data-select="' + data_Select_Remove_Btn + '"]').off('click');
        $('[data-select="' + data_Select_Remove_Btn + '"]').click(function () {

            var tr = $(this).closest("tr");// or $(this).parent().parent().remove();
            let id = tr.find("p").text();
            var newData;

            newData = remove_Node_Object_By_ID(data.address, id)
            data.address = newData;
            tr.remove();
        })
    }

    static event_Edit_Btn_Table_Address(data_Select_Edit_Btn, input_Address_Id, input_Postal_Code_ID, button_Add_Or_Edit_Id, marker, map, intl_POSTAL_CODE) {
        $('[data-select="' + data_Select_Edit_Btn + '"]').off('click');
        $('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {

            var tr = $(this).closest("tr");

            //sendTableLat sendTableLon sendTableType sendTableAddress sendTableCountryData sendTableInputmask
            var lat = tr.data('sendTableLat');
            var lon = tr.data('sendTableLon');
            var type = tr.data('sendTableType');
            var address = tr.data('sendTableAddress');
            var countryData = tr.data('sendTableCountryData');
            var inputmask = tr.data('sendTableInputmask');

            $('[data-select="addressAddedTable"]').attr('data-edit', 'false')
            tr.attr('data-edit', 'true');

            $('#' + input_Postal_Code_ID).inputmask('remove');
            $('#' + input_Postal_Code_ID).inputmask(inputmask);

            intl_POSTAL_CODE.setCountry(countryData.iso2);

            //$('#'+button_Add_Or_Edit_Id).find("i").remove();
            $('#' + button_Add_Or_Edit_Id).children().remove();
            $('#' + button_Add_Or_Edit_Id).attr('data-edit', 'true');
            $('#' + button_Add_Or_Edit_Id).text(Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'));
            $('#' + input_Address_Id).val(tr.find("a.address").text());
            $('#' + input_Postal_Code_ID).val(tr.find("a.postal_Code").text());
            $('#' + input_Address_Id).data('address', address);
            $('#' + input_Address_Id).data('lat', lat);
            $('#' + input_Address_Id).data('lon', lon);
            $('#' + input_Address_Id).data('type', type);
            // or $(this).parent().parent().remove();
            var location = new L.LatLng(lat, lon);
            map.panTo(location);
            marker.setLatLng([lat, lon], {draggable: 'true'}).bindPopup(tr.find("a.address").text()).update();
            if (type === 'city' || type === 'administrative') {
                map.setView({lon: lon, lat: lat}, 11);
                /* map.setCenter(,);
                map.setZoom(5);*/
            } else {
                map.setView({lon: lon, lat: lat}, 17);
            }

        })
    }
}

// Event user
class Event_User {
    //Event btns view user by modal
    static event_View_Btn_Modal_User(data_Select_View_Btn, data_Select_Name = null) {
        $("body").off("click", '[data-select="' + data_Select_View_Btn + '"]');
        $("body").on("click", '[data-select="' + data_Select_View_Btn + '"]', function () {

            /*var select_All = $('[data-matcher="userSelection"]');

            $.each(select_All, function (key, value) {
                if ($(this).hasClass("select2-hidden-accessible")) {
                    $(this).select2('close');
                }
            });*/

            var data = '';
            var selected_ID = $(this).data('id'); //Or --> var selected_ID =$(this).closest("tr").data('dataSend').id;

            if ($(this).data('select-element') == 'table') {
                var tr = $(this).closest("tr");
                data = tr.data('dataSend');
                if (!isEmpty(data_Select_Name)) {
                    data = data[data_Select_Name];
                }

            }
            if ($(this).data('select-element') == 'select2') {
                var select = $(this).closest(".select2").parent().find('select');
                select.select2("close")
                data = select.select2("data")
                data = $.map(data, function (value, key) {
                    if (value['id'] == selected_ID)
                        return value;
                })[0];
            }


            let first_Name = data.first_name;
            let last_name = data.last_name;
            let table_Add_Selector = $('#storeCashier_Work_Modal_ElementView_ModalBody');
            let Modal_Title_Selector = $('#storeCashier_Work_Modal_ElementView_Title');
            let profile_Text = Lang.get('supermarket/storeCashier/Dashboard.public.profile');
            let text_Modal_Title = profile_Text + ': ' + first_Name + ' ' + last_name;
            Modal_Title_Selector.text(text_Modal_Title);


            table_Add_Selector.empty();
            $("#storeCashier_Work_Modal_ElementView_ModalBody_Search").val('');
            table_Add_Selector.parent().find('.ajax-load').addClass('hidden');
            table_Add_Selector.parent().find('.ajax-load-end').html('');


            var check_Scope = Check_Scope.check_DefaultCustomerUser(data.username);
            if (check_Scope !== true) {
                create_Ul_Li_PNotify([check_Scope], 'error');
                $('#storeCashier_Work_Modal_ElementView').modal('toggle');
            } else {
                table_Add_Selector.append(HTML_Create_View_User.profile_View(data));
            }

        })
    }

    //Event btns edit user
    static event_Edit_Btn_Modal_User(data_Select_Edit_Btn, reset_Form_Method, reload_Event_Single_Btn_Method, data_Json_Selector, phones_Table_Id, address_Table_Id, phones_Table_Tbody_Selector, address_Table_Tbody_Selector) {

        /*$('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {
            //var select = $(this).closest(".select2").parent().find('select');
        })*/

        var data = '';
        var selected_ID = data_Json_Selector.userEditSelectionID;

        if (data_Json_Selector.userEditSelectionElement == 'table') {
            var tr = data_Select_Edit_Btn;
            data = tr.data('dataSend');
            $('[data-select="userAddedTable"]').attr('data-edit', 'false')
            tr.attr('data-edit', 'true');
        }
        if (data_Json_Selector.userEditSelectionElement == 'select2') {
            var select = data_Select_Edit_Btn;
            select.select2("close")
            data = select.select2("data")
            data = $.map(data, function (value, key) {
                if (value['id'] == selected_ID)
                    return value;
            })[0];
        }

        var data_Save = {
            phone: {
                mobile: [],
                fixedLine: [],
            },
            address: []
        };
        reset_Form_Method();
        var data_For_Create_Button_Together = {
            'id_Btn1': data_Json_Selector.id_Btn1_Together,
            'btn1_Text': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'),
            'id_Btn2': data_Json_Selector.id_Btn2_Together,
            'btn2_Text': Lang.get('supermarket/storeCashier/Dashboard.public.cancel')
        };
        var view_Btn_Together = button_Together(data_For_Create_Button_Together);

        data_Json_Selector.id_Btn_Together_Add.empty()
        data_Json_Selector.id_Btn_Together_Add.append(view_Btn_Together);

        reload_Event_Single_Btn_Method();
        data_Save.id = data.id;

        if (!isEmpty(data.ssn)) {
            if (!data.isUserCanBeRemoved) {
                data_Json_Selector.ssn.prop('disabled', true);
            }
        }
        if (!isEmpty(data.email)) {
            if (!data.isUserCanBeRemoved) {
                data_Json_Selector.email.prop('disabled', true);
            }
        }


        if (!isEmpty(data.first_name))
            data_Json_Selector.first_name.val(data.first_name);
        if (!isEmpty(data.last_name))
            data_Json_Selector.last_name.val(data.last_name);
        $("#" + data_Json_Selector.gender + " input[type='radio'][value='" + data.gender + "']").parent('.btn').addClass('active');
        if (!isEmpty(data.ssn))
            data_Json_Selector.ssn.val(data.ssn);


        if (!isEmpty(data.date_of_birth)) {
            // let date_Of_Birth = moment.utc(data.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD');
            let date_Of_Birth = data.date_of_birth;
            data_Json_Selector.date_of_birth.val(date_Of_Birth);
        }

        if (!isEmpty(data.email))
            data_Json_Selector.email.val(data.email);

        // Table phone create for edit
        $.each(data.phones, function (item, value) {
            let id = $('#' + phones_Table_Id + ' tbody tr').length + 1;
            let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
            let small_Time = value.created_at;
            let text_type = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type_MOBILE');

            if (!isEmpty(value.updated_at)) {
                if (value.updated_at != value.created_at) {
                    small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                    small_Time = value.updated_at;
                }
            }
            if (value.type == 'FIXED_LINE')
                text_type = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type_Fixed');

            var td = {
                'select': 'phoneAddedTable',
                'data': {
                    'sendTableType': value.type,//intl_MOBILE.getNumberType(),
                    'sendTableCountryData': JSON.parse(value.country_data),
                    'sendTableInputmask': JSON.parse(value.inputmask),
                },
                'num': [
                    {'number': id},
                ],
                'a_small': [
                    {'data': {'td_style': {"direction": "ltr", "white-space": "nowrap"}, 'td_class': 'text-right'}},
                    {
                        'a': value.number,
                        'a_class': 'phone',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                    },
                    {'enter': ''},
                    /*{'small': small_Text + ' ' + moment(small_Time).locale($('html').attr('lang')).format('YYYY/MM/DD HH:mm:ss')},*/
                    {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')},
                ],
                'numberType': [
                    {'a': text_type, 'a_class': 'phone_Type'},
                ],
                'btn': [
                    {
                        'btn_Edit': {
                            'data': {
                                'select-element': '',
                                'id': '',
                            },
                            'attr': {
                                'data-select': 'userModalPhoneEditTableTrPhone',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'),
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
                                'data-select': 'userModalPhoneDeleteTableTrPhone',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.delete'),
                            //'class': 'class22',
                        }
                    },
                ],
            };

            if (value.type == 'MOBILE')
                save_Phone_Json(data_Save.phone.mobile, id, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask), value.number);
            if (value.type == 'FIXED_LINE')
                save_Phone_Json(data_Save.phone.fixedLine, id, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask), value.number);
            phones_Table_Tbody_Selector.append(create_Component_Tbody_Tr_Table(td));
        });

        // Table address create for edit
        $.each(data.addresses, function (item, value) {
            let id = $('#' + address_Table_Id + ' tbody tr').length + 1;
            let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
            let small_Time = value.created_at;
            let postal_Code_Text;
            let postal_Code_Send;

            if (!isEmpty(value.updated_at)) {
                if (value.updated_at != value.created_at) {
                    small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                    small_Time = value.updated_at;
                }
            }

            if (value.postal_code == 'NotExist') {
                postal_Code_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                postal_Code_Send = 'NotExist';
            } else {
                postal_Code_Text = value.postal_code;
                postal_Code_Send = value.postal_code;
            }
            var td = {
                'select': 'addressAddedTable',
                'data': {
                    'sendTableAddress': JSON.parse(value.address),
                    'sendTableLat': value.latitude,
                    'sendTableLon': value.longitude,
                    'sendTableType': value.type,
                    'sendTableCountryData': JSON.parse(value.country_data),
                    'sendTableInputmask': JSON.parse(value.inputmask),
                },
                'num': [
                    {'number': id}
                ],
                'a_small': [
                    {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                    {'a': value.display_name, 'a_class': 'address'},
                    {'enter': ''},
                    {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
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
                                'data-select': 'userModalAddressEditTableTrAddress',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'),
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
                                'data-select': 'userModalAddressDeleteTableTrAddress',
                                'data-toggle': '',
                                'data-target': '#',
                                'id': ''
                            },
                            'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.delete'),
                            'class': 'class22',
                        }
                    },
                ],
            }
            address_Table_Tbody_Selector.append(create_Component_Tbody_Tr_Table(td));
            save_Address_Json(data_Save.address, id, JSON.parse(value.address), postal_Code_Send, value.display_name, value.latitude, value.longitude, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask));
        });

        set_Data(data_Save, data_Json_Selector.switched)
        Reload_Needed.script_User_Modal();
        console.log(json_Data_Final_User_Add_Modal);
    }

    //Event btns remove selected user
    static event_Remove_Btn_Table_SelectedUser(data_Select_Remove_Btn, manage_User_Class, favorite_Event = function () {
    }) {
        $('[data-select=' + data_Select_Remove_Btn + ']').off('click');
        $('[data-select="' + data_Select_Remove_Btn + '"]').click(function () {

            var tr = $(this).closest("tr")
            let id = $(this).data('id');

            console.log($(this).data())
            console.log(manage_User_Class)
            // console.log(manage_User_Class.data_Reject_ID)
            if (!isEmpty(manage_User_Class.data_Reject_ID)) {
                manage_User_Class.data_Reject_ID = remove_Node_Arr_By_Value(manage_User_Class.data_Reject_ID, id)
            }
            // console.log(manage_User_Class.data_Reject_ID)
            tr.remove();
            favorite_Event();
            // or $(this).parent().parent().remove();
        })
    }

    // Table
    //Event btns phone view
    static event_View_Btn_User_Table_Phone(data_Select_View_Btn) {
        $('[data-select="' + data_Select_View_Btn + '"]').off('click');
        $('[data-select="' + data_Select_View_Btn + '"]').click(function () {


            let tr = $(this).closest("tr");
            let data = tr.data('dataSend');
            console.log(data)
            let first_Name = data.first_name;
            let last_name = data.last_name;
            let table_Add_Selector = $('#storeCashier_Work_Modal_Phone_View_Table_Add');
            let Modal_Title_Selector = $('#storeCashier_Work_Modal_Phone_View_Modal_Title');

            table_Add_Selector.empty();
            table_Add_Selector.parent().find('.ajax-load').addClass('hidden');
            table_Add_Selector.parent().find('.ajax-load-end').html('');

            let phones_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.modal.modal_Title_Phone_View');
            let text_Modal_Title = phones_Text + ': ' + first_Name + ' ' + last_name;
            Modal_Title_Selector.text(text_Modal_Title);

            if (!isEmpty(data.phones)) {
                table_Add_Selector.append(HTML_Create_View_Table.phones(data.phones));
            } else {
                table_Add_Selector.parent().find('.ajax-load-end').html(Lang.get('supermarket/storeCashier/Dashboard.public.no_more_records_found'));
            }
        })
    }

    //Event btns address view
    static event_View_Btn_User_Table_Address(data_Select_View_Btn) {
        $('[data-select="' + data_Select_View_Btn + '"]').off('click');
        $('[data-select="' + data_Select_View_Btn + '"]').click(function () {
            let tr = $(this).closest("tr");
            let data = tr.data('dataSend');
            let first_Name = data.first_name;
            let last_name = data.last_name;
            let table_Add_Selector = $('#storeCashier_Work_Modal_Address_View_Table_Add');
            let Modal_Title_Selector = $('#storeCashier_Work_Modal_Address_View_Modal_Title');

            table_Add_Selector.empty();
            table_Add_Selector.parent().find('.ajax-load').addClass('hidden');
            table_Add_Selector.parent().find('.ajax-load-end').html('');

            let Address_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.modal.modal_Title_Address_View');
            let text_Modal_Title = Address_Text + ': ' + first_Name + ' ' + last_name;
            Modal_Title_Selector.text(text_Modal_Title);

            if (!isEmpty(data.addresses)) {
                console.log(data.addresses)
                table_Add_Selector.append(HTML_Create_View_Table.addresses(data.addresses));
            } else {
                table_Add_Selector.parent().find('.ajax-load-end').html(Lang.get('supermarket/storeCashier/Dashboard.public.no_more_records_found'));
            }
        })
    }

    //Event btns person type view
    static event_View_Btn_User_Table_Person_Type(data_Select_View_Btn) {
        $('[data-select="' + data_Select_View_Btn + '"]').off('click');
        $('[data-select="' + data_Select_View_Btn + '"]').click(function () {
            let tr = $(this).closest("tr");
            let data = tr.data('dataSend');
            console.log(data)
            let first_Name = data.first_name;
            let last_name = data.last_name;
            let table_Add_Selector = $('#storeCashier_AddPeople_Form_UserAdded_Table_Modal_PersonType_Add');
            let Modal_Title_Selector = $('#storeCashier_AddPeople_Form_UserAdded_Table_Modal_PersonType_View_Modal_Title');

            table_Add_Selector.empty();
            table_Add_Selector.parent().find('.ajax-load').addClass('hidden');
            table_Add_Selector.parent().find('.ajax-load-end').html('');

            var person_Type_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.person_Type');
            let text_Modal_Title = person_Type_Text + ': ' + first_Name + ' ' + last_name;
            Modal_Title_Selector.text(text_Modal_Title);


            if (!isEmpty(data.roles)) {
                console.log(data.roles)
                $.each(data.roles, function (item, value) {
                    var div = $('<div></div>');
                    div.addClass('product_price w3-center');
                    div.css({"background-color": "rgba(178,239,228,0.4)"});
                    div.append(value.name_text)
                    table_Add_Selector.append(div);
                });
            } else {
                table_Add_Selector.parent().find('.ajax-load-end').html(Lang.get('supermarket/storeCashier/Dashboard.public.no_more_records_found'));
            }
        })
    }

    //Event btns edit user
    static event_Edit_Btn_Table_User(data_Select_Edit_Btn, reset_Form_Method, reload_Event_Single_Btn_Method, data_Json_Selector, phones_Table_Id, address_Table_Id, phones_Table_Tbody_Selector, address_Table_Tbody_Selector, input_div_CheckBoxes_Id) {
        $('[data-select="' + data_Select_Edit_Btn + '"]').off('click');
        $('[data-select="' + data_Select_Edit_Btn + '"]').click(function () {
            var tr = $(this).closest("tr");
            let data = tr.data('dataSend');
            var data_Save = {
                phone: {
                    mobile: [],
                    fixedLine: [],
                },
                address: []
            };
            reset_Form_Method();

            let data_For_Create_Button_Together = {
                'id_Btn1': data_Json_Selector.id_Btn1_Together,
                //'btn1_Class_Color': 'w3-teal',
                'btn1_Text': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'),
                /*'btn1_Attr': {
                    'data-select': 'userAddSelection',
                    'data-toggle': 'modal',
                    'data-target': '#storeCashier_Work_Modal_UserAdd',
                },*/
                'id_Btn2': data_Json_Selector.id_Btn2_Together,
                //'btn2_Class_Color': 'w3-blue',
                'btn2_Text': Lang.get('supermarket/storeCashier/Dashboard.public.cancel'),
                /*'btn2_Attr': {
                    'data-select': 'dealerAddSelection',
                },*/
            };
            let btn_Together = button_Together(data_For_Create_Button_Together);

            data_Json_Selector.id_Btn_Together_Add.empty()
            data_Json_Selector.id_Btn_Together_Add.append(btn_Together);

            reload_Event_Single_Btn_Method();
            data_Save.id = data.id;

            if (!isEmpty(data.ssn)) {
                if (!data.isUserCanBeRemoved) {
                    data_Json_Selector.ssn.prop('disabled', true);
                }
            }
            if (!isEmpty(data.email)) {
                if (!data.isUserCanBeRemoved) {
                    data_Json_Selector.email.prop('disabled', true);
                }
            }

            /*if (!data.isUserCustomerCanBeRemoved) {
                $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='customer']").prop('disabled', true);
            }
            if (!data.isUserSuppliersCanBeRemoved) {
                $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='supplier']").prop('disabled', true);
            }
            if (!data.isUserOwnersCanBeRemoved) {
                $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='owner']").prop('disabled', true);
            }*/

            if (!isEmpty(data.first_name))
                data_Json_Selector.first_name.val(data.first_name);
            if (!isEmpty(data.last_name))
                data_Json_Selector.last_name.val(data.last_name);
            $("#" + data_Json_Selector.gender + " input[type='radio'][value='" + data.gender + "']").parent('.btn').addClass('active');
            if (!isEmpty(data.ssn))
                data_Json_Selector.ssn.val(data.ssn);
            if (!isEmpty(data.date_of_birth)) {
                // let date_Of_Birth = moment.utc(data.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD');
                let date_Of_Birth = data.date_of_birth;
                data_Json_Selector.date_of_birth.val(date_Of_Birth);
            }
            if (!isEmpty(data.email))
                data_Json_Selector.email.val(data.email);

            // Table phone create for edit
            $.each(data.phones, function (item, value) {
                let id = $('#' + phones_Table_Id + ' tbody tr').length + 1;
                let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
                let small_Time = value.created_at;
                let text_type = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type_MOBILE');

                if (!isEmpty(value.updated_at)) {
                    if (value.updated_at != value.created_at) {
                        small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                        small_Time = value.updated_at;
                    }
                }
                if (value.type == 'FIXED_LINE')
                    text_type = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type_Fixed');

                var td = {
                    'select': 'phoneAddedTable',
                    'data': {
                        'sendTableType': value.type,//intl_MOBILE.getNumberType(),
                        'sendTableCountryData': JSON.parse(value.country_data),
                        'sendTableInputmask': JSON.parse(value.inputmask),
                    },
                    'num': [
                        {'number': id},
                    ],
                    'a_small': [
                        {'data': {'td_style': {"direction": "ltr"}, 'td_class': 'text-right'}},
                        {
                            'a': value.number,
                            'a_class': 'phone',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                        },
                        {'enter': ''},
                        /*{'small': small_Text + ' ' + moment(small_Time).locale($('html').attr('lang')).format('YYYY/MM/DD HH:mm:ss')},*/
                        {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')},
                    ],
                    'numberType': [
                        {'a': text_type, 'a_class': 'phone_Type'},
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
                                'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'),
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
                                'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.delete'),
                                //'class': 'class22',
                            }
                        },
                    ],
                };

                if (value.type == 'MOBILE')
                    save_Phone_Json(data_Save.phone.mobile, id, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask), value.number);
                if (value.type == 'FIXED_LINE')
                    save_Phone_Json(data_Save.phone.fixedLine, id, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask), value.number);


                phones_Table_Tbody_Selector.append(create_Component_Tbody_Tr_Table(td));
            });

            // Table address create for edit
            $.each(data.addresses, function (item, value) {
                let id = $('#' + address_Table_Id + ' tbody tr').length + 1;
                let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
                let small_Time = value.created_at;
                let postal_Code_Text;
                let postal_Code_Send;

                if (!isEmpty(value.updated_at)) {
                    if (value.updated_at != value.created_at) {
                        small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                        small_Time = value.updated_at;
                    }
                }

                if (value.postal_code == 'NotExist') {
                    postal_Code_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                    postal_Code_Send = 'NotExist';
                } else {
                    postal_Code_Text = value.postal_code;
                    postal_Code_Send = value.postal_code;
                }
                var td = {
                    'select': 'addressAddedTable',
                    'data': {
                        'sendTableAddress': JSON.parse(value.address),
                        'sendTableLat': value.latitude,
                        'sendTableLon': value.longitude,
                        'sendTableType': value.type,
                        'sendTableCountryData': JSON.parse(value.country_data),
                        'sendTableInputmask': JSON.parse(value.inputmask),
                    },
                    'num': [
                        {'number': id}
                    ],
                    'a_small': [
                        {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                        {'a': value.display_name, 'a_class': 'address'},
                        {'enter': ''},
                        {'small': small_Text + ' ' + moment.utc(small_Time).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
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
                                'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit'),
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
                                'name': Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.delete'),
                                'class': 'class22',
                            }
                        },
                    ],
                }
                address_Table_Tbody_Selector.append(create_Component_Tbody_Tr_Table(td));
                save_Address_Json(data_Save.address, id, JSON.parse(value.address), postal_Code_Send, value.display_name, value.latitude, value.longitude, value.type, JSON.parse(value.country_data), JSON.parse(value.inputmask));
            });

            // person type checkbox create for edit
            /* $.each(data.relation, function (item, value) {
                 $("#" + input_div_CheckBoxes_Id + " input[type='checkbox'][value='" + value + "']").prop('checked', true);
             });*/

            set_Data(data_Save, data_Json_Selector.switched);
            Reload_Needed.script_User();
        })
    }

    //Event btns remove user
    static event_Remove_Btn_Table_User(data_Select_Remove_Btn, data_Json_Selector, reset_Form_Method) {
        $('[data-select="' + data_Select_Remove_Btn + '"]').off('click');
        $('[data-select="' + data_Select_Remove_Btn + '"]').click(function () {

            if (isOnline()) {
                var tr = $(this).closest("tr");
                $.ajax({
                    url: '/',
                    method: 'POST',
                    data: {
                        'Sync': 'UserAddedController',
                        'SubSync': 'delete_User',
                        //'Data': JSON.stringify(json_Data_Final_Store)
                        'Data': {
                            json_Data: {
                                //'role': data_Json_Selector.role,
                                id: tr.data('id'),
                                id_Btn1_Together: data_Json_Selector.id_Btn1_Together,
                                id_Btn2_Together: data_Json_Selector.id_Btn2_Together
                            }
                        },
                    },
                    success: function (data) {
                        //------------------------
                        if (data.hasOwnProperty('success'))
                            create_Ul_Li_PNotify([data.message], 'success', data.add);
                        $('#' + data_Json_Selector.btn_cancel_user).trigger('click');
                        reset_Form_Method();
                        //--------------------------
                        /*console.log('Done : ' + JSON.stringify(data));
                        alert('done: ' + JSON.stringify(data))*/
                    },
                    error: function (data) {
                        //------------------------
                        create_Ul_Li_PNotify(data.responseJSON.errors, 'error')
                        //------------------------
                        /*console.log('Error : ' + JSON.stringify(data));
                        alert('error: ' + JSON.stringify(data))*/
                    },
                    complete: function (data) {
                        //------------------------
                        //Reload_Needed.script_User();
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                        /*console.log('complete : ' + JSON.stringify(data));
                alert('complete: ' + JSON.stringify(data))*/
                    }
                });
            } else
                create_Ul_Li_PNotify([Lang.get('validation.validator.internet_disconnected')], 'error')

        })
    }

}

////////////////////////////////////////// Manage search ///////////////////////////////////

// Manage user search from server
class Manage_Search_User_Server {
    id;
    data_Reject_ID = [];
    userEditSelectionID = '';
    userEditSelectionElement = 'select2';
    userEditSelectionSelect = '';

    constructor(selector, maximum_Selection_Length, data_Id_Btns, data_Functions = function () {
    }, role = [], id = null) {
        this.selector = selector;
        this.maximum_Selection_Length = maximum_Selection_Length;
        this.data_Id_Btns = data_Id_Btns;
        this.data_Functions = data_Functions;
        this.role = role;
        this.id = id;
    }


    get data_Reject_ID() {
        return this._data_Reject_ID;
    }

    set data_Reject_ID(value) {
        this._data_Reject_ID = value;
    }

    init_User() {
        this.initialize_Select2_User();
        this.reload();
    }

    reload() {
        this.add_Edit();
        this.view();
        this.remove();
    }

    add_Edit() {
        Event_Changed_View.add_Selected_User(this.data_Id_Btns.add);
        Event_Changed_View.edit_Selected_User(this.data_Id_Btns.edit, this);
    }

    remove() {
        var favorite_Event_Btn_Delete_User = function () {
        };

        if (isExist(() => this.data_Functions.favorite_Event_Btn_Delete_User)) {
            favorite_Event_Btn_Delete_User = this.data_Functions.favorite_Event_Btn_Delete_User;
        }

        Event_User.event_Remove_Btn_Table_SelectedUser(this.data_Id_Btns.remove, this, favorite_Event_Btn_Delete_User)
    }

    view() {
        Event_User.event_View_Btn_Modal_User(this.data_Id_Btns.view)
    }

    initialize_Select2_User() {
        var this_Class = this;
        this_Class.selector.select2({
            //language: 'fa',
            //theme: "classic",
            multiple: true,
            maximumSelectionLength: this_Class.maximum_Selection_Length,
            placeholder: Lang.get('supermarket/storeCashier/Dashboard.public.placeholder_Search_Person'),
            minimumInputLength: 1,
            closeOnSelect: true,
            selectOnClose: true,
            //allowClear: true,
            ajax: {
                url: '/',//route('storeCashier.storeCashier_Controller'),
                //url: 'https://nominatim.openstreetmap.org/search',
                /*url: function (params) {
                    return 'https://nominatim.openstreetmap.org/search?format=json&q=' + params.term;
                },*/
                //dataType: 'json',
                delay: 250,
                type: 'post',
                data: function (params) {
                    console.log(this_Class);
                    console.log(this_Class.data_Reject_ID);
                    return {
                        Sync: 'UserAddedController', // search term
                        SubSync: 'get_User_Search',
                        Data: {
                            json_Data: {
                                search: params.term,
                                role: this_Class.role,
                                id: this_Class.data_Reject_ID,
                                page: params.page,
                            }
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
                        results: data,
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
                return '<div>' + repo.first_name + ' ' + repo.last_name + '</div>';
            },
            templateSelection: function (repo) {
                return repo.first_name + ' ' + repo.last_name +
                    '<button type="button" data-toggle="modal" data-target="#storeCashier_Work_Modal_UserAdd" class="btn btn-info btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-select="userEditSelection"> <i class="fa fa-pencil"> &nbsp;' + Lang.get('supermarket/storeCashier/Dashboard.public.form.edit') + '</i></button>' +
                    '<button type="button" data-toggle="modal" data-target="#storeCashier_Work_Modal_ElementView" class="btn btn-primary btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-select="userViewSelection"> <i class="fa fa-eye"> &nbsp;' + Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details') + '</i></button>' || repo.text;
            },
            escapeMarkup: function (Markup) {
                return Markup;
            }
        })
            .on('select2:select', function (e) {
                //------------------------
                var data = this_Class.selector.select2("data");
                console.log(data);
                if (isExist(() => this_Class.data_Functions.on_Select2_Select_Method)) {
                    this_Class.data_Functions.on_Select2_Select_Method();
                }
                this_Class.reload();
                $('input.select2-search__field').trigger('blur')
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
            })
            .on("select2:selecting", function (e) {
                /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
                var data_ID=$.map(data, function (value, key) {
                    return value['id'];
                })*/
                //console.log(this_Class.selector.select2("data"))
                //console.log(ss)
            })
            .on("change", function (e) {
                /* var data = this_Class.selector.select2("data");
                 data = $.map(data, function (value, key) {
                     return value['id'];
                 }) // Or this_Class.selector.val();
                 if (!isEmpty(variable_Save_Data_Val_Text))
                     set_Data(data, variable_Save_Data_Val_Text)*/
            });
    }
}

// Manage user search from indexed db
class Manage_Search_User_Indexed_DB {
    id;
    data_Reject_ID = [];
    userEditSelectionID = '';
    userEditSelectionElement = 'select2';
    userEditSelectionSelect = '';

    constructor(selector, maximum_Selection_Length, data_Id_Btns, data_Functions = function () {
    }, role = [], id = null) {
        this.selector = selector;
        this.maximum_Selection_Length = maximum_Selection_Length;
        this.data_Id_Btns = data_Id_Btns;
        this.data_Functions = data_Functions;
        this.role = role;
        this.id = id;
    }


    get data_Reject_ID() {
        return this._data_Reject_ID;
    }

    set data_Reject_ID(value) {
        this._data_Reject_ID = value;
    }

    async init_User() {
        await this.initialize_Select2_User();
        this.reload();
    }

    async select_Item(item_ID) {
        var this_Class = this;

        if (isExist(() => item_ID) && Number(item_ID) && Number.isInteger(Number(item_ID))) {
            let user = await baseServicesDB.userServices.getUser(item_ID);
            if (!isEmpty(user)) {
                let newOption = $("<option selected='selected'></option>").val(user.id)
                this_Class.selector
                    .empty()
                    .append(newOption);
                $.each(user, function (key, value) {

                    this_Class.selector.select2("data")[0][key] = value
                });
            }

        }
        this.reload();
    }

    async select_First_Item() {
        var this_Class = this;

        let users = await baseServicesDB.userServices.getUsersExceptDefault();
        if (!isEmpty(users)) {
            users = users[0];
            let newOption = $("<option selected='selected'></option>").val(users.id)
            this_Class.selector
                .empty()
                .append(newOption);
            $.each(users, function (key, value) {

                this_Class.selector.select2("data")[0][key] = value
            });
        }
        this.reload();
    }

    reload() {
        this.add_Edit();
        this.view();
        this.remove();
    }

    add_Edit() {
        Event_Changed_View.add_Selected_User(this.data_Id_Btns.add);
        Event_Changed_View.edit_Selected_User(this.data_Id_Btns.edit, this);
    }

    remove() {
        var favorite_Event_Btn_Delete_User = function () {
        };

        if (isExist(() => this.data_Functions.favorite_Event_Btn_Delete_User)) {
            favorite_Event_Btn_Delete_User = this.data_Functions.favorite_Event_Btn_Delete_User;
        }

        Event_User.event_Remove_Btn_Table_SelectedUser(this.data_Id_Btns.remove, this, favorite_Event_Btn_Delete_User)
    }

    view() {
        Event_User.event_View_Btn_Modal_User(this.data_Id_Btns.view)
    }

    async initialize_Select2_User() {
        var this_Class = this;
        await Initialize_Select2.user_Indexed_DB(this.selector, this.maximum_Selection_Length);
        this.selector
            .on('select2:select', function (e) {
                //------------------------
                var data = this_Class.selector.select2("data");
                console.log(data);
                if (isExist(() => this_Class.data_Functions.on_Select2_Select_Method)) {
                    this_Class.data_Functions.on_Select2_Select_Method();
                }
                this_Class.reload();
                $('input.select2-search__field').trigger('blur')
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
            })
            .on("select2:selecting", function (e) {
                /*var data=$('#storeCashier_AddDealer_Form_Supp_Suppliers').select2("data");
                var data_ID=$.map(data, function (value, key) {
                    return value['id'];
                })*/
                //console.log(this_Class.selector.select2("data"))
                //console.log(ss)
            })
            .on("change", function (e) {
                /* var data = this_Class.selector.select2("data");
                 data = $.map(data, function (value, key) {
                     return value['id'];
                 }) // Or this_Class.selector.val();
                 if (!isEmpty(variable_Save_Data_Val_Text))
                     set_Data(data, variable_Save_Data_Val_Text)*/
            });
    }
}

// Factory search classes
class Manage_Search_Factory {

    // Server
    instances_User_Server = [];

    // Indexed db
    instances_User_Indexed_DB = [];

    /*get instances_User_Server() {
        return this._instances_User_Server;
    }

    get instances_Dealer_Server() {
        return this._instances_Dealer_Server;
    }

    get instances_User_Dealer_Server() {
        return this._instances_User_Dealer_Server;
    }

    get instances_Product_Server() {
        return this._instances_Product_Server;
    }

    get instances_User_Indexed_DB() {
        return this._instances_User_Indexed_DB;
    }

    get instances_Dealer_Indexed_DB() {
        return this._instances_Dealer_Indexed_DB;
    }

    get instances_User_Dealer_Indexed_DB() {
        return this._instances_User_Dealer_Indexed_DB;
    }

    get instances_Product_Indexed_DB() {
        return this._instances_Product_Indexed_DB;
    }

    set instances_User_Server(value) {
        this._instances_User_Server = value;
    }

    set _instances_Dealer_Server(value) {
        this.__instances_Dealer_Server = value;
    }

    set instances_User_Dealer_Server(value) {
        this._instances_User_Dealer_Server = value;
    }

    set instances_Product_Server(value) {
        this._instances_Product_Server = value;
    }

    set instances_User_Indexed_DB(value) {
        this._instances_User_Indexed_DB = value;
    }

    set instances_Dealer_Indexed_DB(value) {
        this._instances_Dealer_Indexed_DB = value;
    }

    set instances_User_Dealer_Indexed_DB(value) {
        this._instances_User_Dealer_Indexed_DB = value;
    }

    set instances_Product_Indexed_DB(value) {
        this._instances_Product_Indexed_DB = value;
    }*/

    get_Instances_By_Class_Name(class_Name) {
        switch (class_Name) {
            case 'user_server':
                return this.instances_User_Server;
                break;
            case 'user_indexed_db':
                return this.instances_User_Indexed_DB;
                break;
        }
    }

    get_Manage_Search_Class_By_ID(manage_Search_Class_Name, class_ID) {
        let target_Class;
        target_Class = this.get_Instances_By_Class_Name(manage_Search_Class_Name);
        return target_Class.filter(function (value, index) {
            return value.id == class_ID;
        })[0];
    }

    create_User_Server(selector, maximum_Selection_Length, data_Id_Btns, data_Functions = function () {
    }, role = [], id = null) {
        let tmp = new Manage_Search_User_Server(selector, maximum_Selection_Length, data_Id_Btns, data_Functions, role, id);
        this.instances_User_Server.push(tmp);
        return tmp;
    }

    create_User_Indexed_DB(selector, maximum_Selection_Length, data_Id_Btns, data_Functions = function () {
    }, role = [], id = null) {
        let tmp = new Manage_Search_User_Indexed_DB(selector, maximum_Selection_Length, data_Id_Btns, data_Functions, role, id);
        this.instances_User_Indexed_DB.push(tmp);
        return tmp;
    }
}

////////////////////////////////////////// Update ///////////////////////////////////

class Update_Tables {
    // User
    // As the user changes, the tables used by that user are also updated.
    static userSearchedTableWhenEdit(new_User_Data) {

        // Searched table user data update
        var user_Tables = $('[data-matcher="userTableSelection"]');
        user_Tables = user_Tables.filter(function () {
            return $('tbody tr', this).length > 0;
        });
        $.each(user_Tables, function (key, value) {
            var table_Trs = $('tbody tr', this);
            var table_Tr_Selected_For_Edit = table_Trs.filter(function () {
                return $(this).data('dataSend').id == new_User_Data.id;
            });
            if (table_Tr_Selected_For_Edit.length > 0) {
                table_Tr_Selected_For_Edit.data('dataSend', new_User_Data);
                let display_name = new_User_Data.first_name + ' ' + new_User_Data.last_name;
                let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
                let small_Time = moment.utc(new_User_Data.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                if (!isEmpty(new_User_Data.updated_at)) {
                    if (new_User_Data.updated_at != new_User_Data.created_at) {
                        small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                        small_Time = moment.utc(new_User_Data.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                    }
                }

                $('.name', table_Tr_Selected_For_Edit).text(display_name);
                $('small', table_Tr_Selected_For_Edit).text(small_Text + ' ' + small_Time);
                table_Tr_Selected_For_Edit.attr('data-edit', 'false');
            }
        })
        // no clear
        /*
        var user_All_Tables = $('[data-matcher="userAllTableSelection"]');
        user_All_Tables = user_All_Tables.filter(function () {
            if ($('tbody tr', this).length < 0)
                return false;

            let table_Trs = $('tbody tr', this);
            let table_Tr_Selected_For_Edit = table_Trs.filter(function () {
                return $(this).data('dataSend').id == new_User_Data.id;
            });
            console.log(table_Tr_Selected_For_Edit)
            console.log(table_Tr_Selected_For_Edit.length)

            return table_Tr_Selected_For_Edit.length > 0

        });

        var user_All_Tables = $('[data-matcher="userAllTableSelection"]');
        user_All_Tables = user_All_Tables.filter(function () {
            return $('tbody tr', this).length > 0 ;
        });
        $.each(user_All_Tables, function (key, value) {
            var table_Trs = $('tbody tr', this);
            var table_Tr_Selected_For_Edit = table_Trs.filter(function () {
                return $(this).data('dataSend').id == new_User_Data.id;
            });
            console.log(table_Tr_Selected_For_Edit)
            if (table_Tr_Selected_For_Edit.length > 0) {
                table_Tr_Selected_For_Edit.data('dataSend', new_User_Data);
                let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
                let small_Time = moment.utc(new_User_Data.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                if (!isEmpty(new_User_Data.updated_at)) {
                    if (new_User_Data.updated_at != new_User_Data.created_at) {
                        small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                        small_Time = moment.utc(new_User_Data.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                    }
                }
                let gender = '';
                if (new_User_Data.gender == 'Mr')
                    gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Male');
                if (new_User_Data.gender == 'Ms')
                    gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Female');
                let ssn = new_User_Data.ssn
                if (isEmpty(new_User_Data.ssn))
                    ssn = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                let date_Of_Birth = ''
                if (isEmpty(new_User_Data.date_of_birth))
                    date_Of_Birth = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                else date_Of_Birth = moment.utc(new_User_Data.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD');
                let email = new_User_Data.email;
                if (isEmpty(new_User_Data.email))
                    email = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');


                $('.first_name', table_Tr_Selected_For_Edit).text(new_User_Data.first_name);
                $('.last_name', table_Tr_Selected_For_Edit).text(new_User_Data.last_name);
                $('small', table_Tr_Selected_For_Edit).text(small_Text + ' ' + small_Time);
                $('.gender', table_Tr_Selected_For_Edit).text(gender);
                $('.ssn', table_Tr_Selected_For_Edit).text(ssn);
                $('.date_of_birth', table_Tr_Selected_For_Edit).text(date_Of_Birth);
                $('.email', table_Tr_Selected_For_Edit).text(email);
            } else {

                var table = $(this).DataTable();
                let tr = HTML_Create_View_User.create_Table_Tr_User(new_User_Data);
                table.row.add(tr).draw();
                console.log(tr);
                /!*DataTables.destroy_User($(this).find('tbody'));
                let tr=HTML_Create_View_User.create_Table_Tr_User(new_User_Data);
                $(this).find('tbody').append(tr);

                DataTables.reload_User($(this).find('tbody'));*!/
                // Reload_Needed.script_User();
            }
        })*/

    }

    // As the user delete, the tables used by that user are also updated.
    static userSearchedTableWhenDelete(id) {

        // Searched table user row delete
        var user_Tables = $('[data-matcher="userTableSelection"]');
        user_Tables = user_Tables.filter(function () {
            return $('tbody tr', this).length > 0;
        });
        $.each(user_Tables, function (key, value) {
            var table_Trs = $('tbody tr', this);
            var table_Tr_Selected_For_Edit = table_Trs.filter(function () {
                return $(this).data('dataSend').id == id;
            });
            console.log(id)
            console.log(table_Tr_Selected_For_Edit.length)
            if (table_Tr_Selected_For_Edit.length > 0) {
                table_Tr_Selected_For_Edit.remove();
            }
        })

        // no clear
        /*// Table all user row delete
        var user_All_Tables = $('[data-matcher="userAllTableSelection"]');
        user_All_Tables = user_All_Tables.filter(function () {
            return $('tbody tr', this).length > 0;
        });
        $.each(user_All_Tables, function (key, value) {
            var table_Trs = $('tbody tr', this);
            var table_Tr_Selected_For_Edit = table_Trs.filter(function () {
                return $(this).data('dataSend').id == id;
            });
            if (table_Tr_Selected_For_Edit.length > 0) {
                var table = $(this).DataTable();
                table.row(table_Tr_Selected_For_Edit).remove().draw();
            }
        })*/

    }

    static userAllTable() {
        // Table all user data update
        if (!get_Allow_Script_Loading_For_View('allow_GetScript_Component_Users_Setting')) {
            var user_All_Tables = $('[data-matcher="userAllTableSelection"]');
            if (user_All_Tables.length > 0) {
                $.each(user_All_Tables, function (key, value) {
                    let table_Tbody = $('tbody', this);
                    DataTables.init_User(table_Tbody)
                })
            }
        }

        // Table all dealer data update only relations user
        this.dealerAllTable();
        /*if (!get_Allow_Script_Loading_For_View('allow_GetScript_Component_Dealers_Setting')) {
            var dealer_All_Tables = $('[data-matcher="dealerAllTableSelection"]');
            if (dealer_All_Tables.length > 0) {
                $.each(dealer_All_Tables, function (key, value) {
                    let table_Tbody = $('tbody', this);
                    DataTables.init_Dealer(table_Tbody)
                })
            }
        }*/
    }

}

class Update_Select2 {
    // User select2 data update
    static async userWhenEdit() {

        let select_All = $('[data-matcher_select="userSelection"]');
        let usersIDs = await baseServicesDB.userServices.getUserIDs();
        $.each(select_All, function (key, value) {
            if ($(this).hasClass("select2-hidden-accessible")) {
                let dataSelect2 = $(this).select2('data')[0];
                if (isExist(() => $(this).val()) && !isEmpty($(this).val()))
                    $(this).val(null).empty().select2('destroy')
                Initialize_Select2.user_Indexed_DB($(this), 1);

                if (isExist(() => dataSelect2.id) && $.inArray(Number(dataSelect2.id), usersIDs) >= 0) {
                    $(this).val(dataSelect2.id).trigger('change.select2');
                }
            }
        });

        /*$.each(select_All, function (key, value) {
                    if ($(this).hasClass("select2-hidden-accessible")) {
                        var select2_Data = $(this).select2("data");

                        console.log(select2_Data)

                        // The first method
                        /!* select2_Data.forEach(function (value, key) {
                             if (value['id'] == id) {
                                 console.log('data id true')
                                 if (isExist(() => data.first_name))
                                     value['first_name'] = data.first_name
                                 if (isExist(() => data.first_name))
                                     value['last_name'] = data.last_name
                                 if (isExist(() => data.gender))
                                     value['gender'] = data.gender
                                 if (isExist(() => data.email))
                                     value['email'] = data.email
                                 if (isExist(() => data.ssn))
                                     value['ssn'] = data.ssn
                                 if (isExist(() => data.date_of_birth))
                                     value['date_of_birth'] = data.date_of_birth
                                 if (isExist(() => data.isUserCanBeRemoved))
                                     value['isUserCanBeRemoved'] = data.isUserCanBeRemoved
                                 if (isExist(() => data.created_at))
                                     value['created_at'] = data.created_at
                                 if (isExist(() => data.updated_at))
                                     value['updated_at'] = data.updated_at
                                 if (isExist(() => data.addresses))
                                     value['addresses'] = data.addresses
                                 if (isExist(() => data.phones))
                                     value['phones'] = data.phones
                             }
                         });*!/
                        // The second method
                        select2_Data = $.map(select2_Data, function (value, key) {
                            if (value['id'] == new_User_Data.id) {
                                value = new_User_Data
                                /!*if (isExist(() => new_User_Data.first_name))
                                    value['first_name'] = new_User_Data.first_name
                                if (isExist(() => new_User_Data.last_name))
                                    value['last_name'] = new_User_Data.last_name
                                if (isExist(() => new_User_Data.gender))
                                    value['gender'] = new_User_Data.gender
                                if (isExist(() => new_User_Data.email))
                                    value['email'] = new_User_Data.email
                                if (isExist(() => new_User_Data.ssn))
                                    value['ssn'] = new_User_Data.ssn
                                if (isExist(() => new_User_Data.date_of_birth))
                                    value['date_of_birth'] = new_User_Data.date_of_birth
                                if (isExist(() => new_User_Data.isUserCanBeRemoved))
                                    value['isUserCanBeRemoved'] = new_User_Data.isUserCanBeRemoved
                                if (isExist(() => new_User_Data.created_at))
                                    value['created_at'] = new_User_Data.created_at
                                if (isExist(() => new_User_Data.updated_at))
                                    value['updated_at'] = new_User_Data.updated_at
                                if (isExist(() => new_User_Data.addresses))
                                    value['addresses'] = new_User_Data.addresses
                                if (isExist(() => new_User_Data.phones))
                                    value['phones'] = new_User_Data.phones*!/
                                return value;
                            } else return value;
                        });
                        $(this).select2('data', select2_Data);
                        $(this).trigger('change.select2');
                    }
                })*/

    }

    static async userWhenDelete(id) {

        var select_All = $('[data-matcher_select="userSelection"]');
        let usersIDs = await baseServicesDB.userServices.getUserIDs();
        $.each(select_All, function (key, value) {
            if ($(this).hasClass("select2-hidden-accessible")) {
                let dataSelect2 = $(this).select2('data')[0];
                if (isExist(() => $(this).val()) && !isEmpty($(this).val()))
                    $(this).val(null).empty().select2('destroy')
                Initialize_Select2.user_Indexed_DB($(this), 1);

                if (isExist(() => dataSelect2.id) && $.inArray(Number(dataSelect2.id), usersIDs) >= 0) {
                    $(this).val(dataSelect2.id).trigger('change.select2');
                }
            }
        });
        $.each(manage_Search_Factory.instances_User_Indexed_DB, function (key, value) {
            if (!isEmpty(value.data_Reject_ID)) {
                value.data_Reject_ID = remove_Node_Arr_By_Value(value.data_Reject_ID, id)
            }
        });


        /*$.each(select_All, function (key, value) {
            if ($(this).hasClass("select2-hidden-accessible")) {
                var select2_Data = $(this).select2("data");

                console.log(select2_Data)

                // The second method
                select2_Data = select2_Data.filter(function (data) {
                    return value['id'] != id;
                })
                $(this).select2('data', select2_Data);
                $(this).trigger('change.select2');
            }
        });*/
        /*$.each(select_All, function (key, value) {
            if ($(this).hasClass("select2-hidden-accessible")) {
                var dataSelect2 = $(this).select2('data')[0];
                if (isExist(() => $(this).val()) && !isEmpty($(this).val()))
                    $(this).val(null).empty().select2('destroy')
                $(this).select2({
                    data: set_Data_ProductTypes_For_Init_Select2(data.product_type),
                    templateResult: function (repo) {
                        var div = $('<div></div>');
                        return div.text(repo.text);
                        // return '<div>' + repo.text /!*+ ' ' + repo.last_name*!/ + '</div>';
                    },
                    templateSelection: function (repo) {
                        var div = $('<div></div>');
                        var span = $('<span></span>');
                        var button = $('<button type="button" class="btn btn-info btn-xs " data-toggle="modal" data-target="#storeCashier_Work_Modal_EditProductType" data-select="productTypeEditSelection"><i class="fa fa-pencil"></i></button>');
                        button.append(' ' + Lang.get('supermarket/storeCashier/Dashboard.public.form.edit'))
                        span.text(repo.text)
                        div.append(span)
                        div.append(button)
                        return div;
                    },
                });
                var productTypesIds = $.map(set_Data_ProductTypes_For_Init_Select2(data.product_type), function (value, key) {
                    return value.id;
                });

                if (isExist(() => dataSelect2.id) && $.inArray(Number(dataSelect2.id), productTypesIds) >= 0) {
                    $(this).val(dataSelect2.id).trigger('change.select2');
                }
            }
        });*/

    }

    static async user() {

        let select_All = $('[data-matcher_select="userSelection"]');
        let usersIDs = await baseServicesDB.userServices.getUserIDs();
        $.each(select_All, function (key, value) {
            // Not clear
            /*let view = $(this).closest('[data_Remove="component"]').attr('id');
            var allow_Get_Script = 'allow_GetScript_' + view[0].toUpperCase() + view.slice(1);
            if (get_Allow_Script_Loading_For_View(allow_Get_Script)) {
            }*/

            if ($(this).hasClass("select2-hidden-accessible")) {
                let dataSelect2 = $(this).select2('data')[0];
                if (isExist(() => $(this).val()) && !isEmpty($(this).val()))
                    $(this).val(null).empty().select2('destroy')
                Initialize_Select2.user_Indexed_DB($(this), 1);

                if (isExist(() => dataSelect2.id) && $.inArray(Number(dataSelect2.id), usersIDs) >= 0) {
                    $(this).val(dataSelect2.id).trigger('change.select2');
                }
            }
        });
    }
}

class Update_Elements {
    static userWhenEdit(user) {
        console.log(user);
        Update_Tables.userSearchedTableWhenEdit(user);
        Update_Select2.userWhenEdit();
    }

    static userWhenDelete(id) {
        console.log(id);
        Update_Tables.userSearchedTableWhenDelete(id);
        Update_Select2.userWhenDelete(id)
    }

    static user() {
        Update_Select2.user();
        Update_Tables.userAllTable();
    }
}

////////////////////////////////////////// Sync ///////////////////////////////////

class Sync_Data_Elements {
    static async user() {
        let promise = new Promise(async (resolve, reject) => {
            if (isOnline()) {
                let data_MaxRevision = await baseServicesDB.userServices.getMaxRevision();
                let data_IDs = await baseServicesDB.userServices.getUserIDs();
                // let data_AddedOrEditedOrRemoved =await this.userServices.getAddedOrEditedOrRemoved();
                $.ajax({
                    url: '/',
                    method: 'POST',
                    data: {
                        'Sync': 'UserAddedController',
                        'SubSync': 'refresh_User',
                        'Data': {
                            data_max_revision: data_MaxRevision,
                            data_ids: data_IDs,
                            // data_added_or_edited_or_removed: data_AddedOrEditedOrRemoved,
                            /*json_Data: {

                            }*/
                        },

                    },
                    success: function (data) {
                        console.log(data)
                        //------------------------
                        $.each(data, function (item, value) {
                            switch (item) {
                                case 'result_max_revision':
                                    if (isExist(() => value.add_or_edit) && !isEmpty(value.add_or_edit)) {
                                        baseServicesDB.userServices.updateOrCreateUsers(value.add_or_edit);
                                        $.each(value.add_or_edit, function (item, value) {
                                            Update_Elements.userWhenEdit(value);
                                        })
                                    }
                                    if (isExist(() => value.remove) && !isEmpty(value.remove)) {
                                        $.each(value.remove, function (item, value) {
                                            baseServicesDB.userServices.deleteUser(value.id);
                                            Update_Elements.userWhenDelete(value.id);
                                        })
                                    }
                                    break;
                                case 'result_ids':
                                    if (isExist(() => value) && !isEmpty(value)) {
                                        baseServicesDB.userServices.addUser(value);
                                        $.each(value, function (item, value) {
                                            Update_Elements.userWhenEdit(value);
                                        });
                                    }
                                    break;
                                case 'result_added_edited_removed':
                                    break;
                            }
                        });
                        resolve(true);
                        //--------------------------
                    },
                    error: function (data) {
                        console.log(data)
                        resolve(false);
                        //------------------------
                        create_Ul_Li_PNotify(data.responseJSON.errors, 'error');
                        //------------------------
                    },
                    complete: function (data) {
                        console.log(data)
                        //------------------------
                        Reload_Needed.script_User();
                        // $.getScript(manageScriptPath.component_Store_Setting_Repeat());
                        //import('../initialize/show_Room_Repeat.js');
                        //------------------------
                    }
                });
            } else {
                create_Ul_Li_PNotify([Lang.get('validation.validator.internet_disconnected')], 'error');
                resolve(false);
            }
        });
        let result = await promise;
    }
}

////////////////////////////////////////// Select2 ///////////////////////////////////

class Initialize_Select2 {
    static async user_Indexed_DB(selector, maximum_Selection_Length) {
        let users = await baseServicesDB.userServices.getUsersExceptDefault();
        let timer = null;
        selector
            .empty()
            .select2({
                //data: users,
                placeholder: Lang.get('supermarket/storeCashier/Dashboard.public.placeholder_Search_Person'),
                multiple: true,
                maximumSelectionLength: maximum_Selection_Length,
                minimumInputLength: 1,
                dropdownParent: selector.parent(),
                closeOnSelect: true,
                selectOnClose: true,
                ajax: {
                    delay: 100,
                    transport: async function (params, success, failure) {
                        let pageSize = 10;
                        let term = (params.data.term || '').toLowerCase();
                        let page = (params.data.page || 1);


                        if (timer)
                            clearTimeout(timer);

                        timer = setTimeout(function () {
                            timer = null;
                            let results = users // your base array here
                                .filter(function (value, index) {
                                    // your custom filtering here.
                                    if (value.username == 'default_customer')
                                        return false;
                                    return /*$.inArray(value.id, this_Class.data_Reject_ID) < 0 &&*/ value.first_name.toLowerCase().includes(term) || value.last_name.toLowerCase().includes(term);
                                });
                            /*.map(function (f) {
                                // your custom mapping here.
                                return {id: f, text: f};
                            });*/

                            let paged = results.slice((page - 1) * pageSize, page * pageSize);

                            let options = {
                                results: paged,
                                pagination: {
                                    more: results.length >= page * pageSize
                                }
                            };
                            success(options);

                        }, params.delay);
                    }
                },
                /*query: function (repo) {
                    let pageSize,
                        dataset,
                        that = this;
                    pageSize = 6; // Number of the option loads at a time
                    let results = [];
                    if (repo.term && repo.term !== '') {
                        // HEADS UP; for the _.filter function I use underscore (actually lo-dash) here
                        results = _.filter(that.data, function (e) {
                            return e.first_name.toUpperCase().indexOf(repo.term.toUpperCase()) >= 0 || e.last_name.toUpperCase().indexOf(repo.term.toUpperCase()) >= 0;
                        });
                    } else if (repo.term === '') {
                        results = that.data;
                    }
                    repo.callback({
                        results: results.slice((repo.page - 1) * pageSize, repo.page * pageSize),
                        more: results.length >= repo.page * pageSize,
                    });
                },*/
                templateResult: function (repo) {
                    if (repo.loading) {
                        return repo.text;
                    }
                    return '<div>' + repo.first_name + ' ' + repo.last_name + '</div>';
                },
                templateSelection: function (repo) {
                    return repo.first_name + ' ' + repo.last_name +
                        '<button type="button" data-toggle="modal" data-target="#storeCashier_Work_Modal_UserAdd" class="btn btn-info btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-select="' + selector.attr('data-select_edit') + '"> <i class="fa fa-pencil"> &nbsp;' + Lang.get('supermarket/storeCashier/Dashboard.public.form.edit') + '</i></button>' +
                        '<button type="button" data-toggle="modal" data-target="#storeCashier_Work_Modal_ElementView" class="btn btn-primary btn-xs " data-select-element="select2" data-id="' + repo.id + '" data-select="' + selector.attr('data-select_view') + '"> <i class="fa fa-eye"> &nbsp;' + Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details') + '</i></button>' || repo.text;
                },
                escapeMarkup: function (Markup) {
                    return Markup;
                }
            })
    }
}

////////////////////////////////////////// DataTables ///////////////////////////////////

class DataTables {
    // User
    static async init_User(table_Tbody_Selector) {
        let users = await baseServicesDB.userServices.getUsersExceptDefault();

        console.log(users)
        DataTables.destroy_User(table_Tbody_Selector)
        table_Tbody_Selector.empty();
        $.each(users, function (key, value) {

            let tr = HTML_Create_View_User.create_Table_Tr_User(value)
            table_Tbody_Selector.append(tr)
        });
        get_Language(win_Locale.toLowerCase()).then(async function (data) {
            // Users dataTable
            let table = table_Tbody_Selector.parent().DataTable({
                language: {url: "assets/app/js/json/datatable/language/" + data + ".json"},
                // data: await baseServicesDB.userServices.getUsers(),
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
                /* paging: false,
                 searching: false,*/
                //serverSide: true,  // Server side processing
                processing: true,  // Show processing
                //responsive: true,
                destroy: true,
                keys: true,
                // fixedHeader: true,
                /*ajax: {
                    url: '/',
                    type: "POST",
                    dataType: 'json',
                    data: {
                        'Sync': 'ProductAddedController',
                        'SubSync': 'get_Product_Search_Table',
                        'Data': {
                            json_Data: {
                                'switch_id': 'productAddOrEditViewAddedTableViewEnable',
                            }
                        },
                    },
                    error: function (data) {
                        console.log(data);
                    },
                    /!*success: function(data){
                        console.log(data);
                    }*!/
                },*/
                /*columns: [
                    {"data": "first_name"},
                    {"data": "last_name"},
                    {"data": "gender"},
                    {"data": "ssn"},
                    {"data": "date_of_birth"},
                    {"data": "email"},
                    /!*{ "data": "hr.position" },
                    { "data": "contact.0" },
                    { "data": "contact.1" },
                    { "data": "hr.start_date" },
                    { "data": "hr.salary" },

                    {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                    {data: 'name', name: 'name'},
                    {data: 'enabled', name: 'enabled'},
                    {data: 'barcode', name: 'barcode', orderable: false, searchable: false},
                    {data: 'product_type', name: 'product_type'},
                    {data: 'discount_percent', name: 'discount_percent'},
                    {data: 'vat_percent', name: 'vat_percent'},
                    {data: 'dealer', name: 'dealer', orderable: false, searchable: false},
                    {data: 'description', name: 'description'},
                    {data: 'prices', name: 'prices', orderable: false, searchable: false},
                    {data: 'categories', name: 'categories', orderable: false, searchable: false},
                    {data: 'action', name: 'action', orderable: false, searchable: false},*!/
                ],*/
                createdRow: function (row, data, dataIndex) {
                    /*console.log(data)
                    console.log(dataIndex)*/
                    /*$( row ).find('td:eq(1)').addClass('ssss');
                    $('td', row).eq(1).addClass('successww');*/
                    $(row).find('td:eq(1)').css({"white-space": "nowrap"});
                    $(row).find('td:eq(6)').css({"white-space": "nowrap"});
                    $(row).find('td:eq(11)').css({"white-space": "nowrap"});
                },
                columnDefs: [
                    {
                        "targets": 0,
                        "data": null,
                        "searchable": false,
                        "orderable": false,
                    },
                    /*{
                        "targets": 1,
                        "data": "first_name",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(type)
                            console.log(row)
                            console.log(meta)
                            let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
                            let small_Time = moment.utc(row.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                            if (!isEmpty(row.updated_at)) {
                                if (row.updated_at != row.created_at) {
                                    small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                                    small_Time = moment.utc(row.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                                }
                            }
                            return '<a class="name">' + data + '</a><br/><small>' + small_Text + ' ' + small_Time + '</small>';
                        }
                    },
                    {
                        "targets": 2,
                        "data": "last_name",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/
                            return '<a class="last_name">' + data + '</a>';
                        }
                    },
                    {
                        "targets": 3,
                        "data": "gender",
                        "render": function (data, type, row, meta) {
                            /!*console.log(data)
                            console.log(type)
                            console.log(row)
                            console.log(meta)*!/
                            let gender = '';
                            if (data == 'Mr')
                                gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Male');
                            if (data == 'Ms')
                                gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Female');
                            return '<a class="gender">' + gender + '</a>';
                        }
                    },
                    {
                        "targets": 4,
                        "data": "ssn",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/
                            let ssn = data

                            if (isEmpty(data))
                                ssn = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                            return '<a class="ssn">' + ssn + '</a>';
                        }
                    },
                    {
                        "targets": 5,
                        "data": "date_of_birth",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/

                            let date_Of_Birth = moment.utc(data).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD');

                            if (isEmpty(data))
                                date_Of_Birth = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                            return '<a class="date_of_birth">' + date_Of_Birth + '</a>';
                        }
                    },
                    {
                        "targets": 6,
                        "data": "email",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/
                            var a = $("<a></a>");
                            a.text(data);
                            return a.get(0);
                            // return '<a class="email">' + data + '</a>';
                        }
                    },
                    {
                        "targets": 7,
                        "data": null,
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/

                            let data_Btn = {
                                'data': {
                                    'id': row.id,
                                    /!*'select-element': 'table',
                                    'id': data.id,
                                    'dealer_type': data.dealer_type,*!/
                                },
                                'attr': {
                                    'data-select': 'userViewOrDeleteOrEditAddedTableViewPersonType',
                                    'data-toggle': 'modal',
                                    'data-target': '#userViewOrDeleteOrEditAddedTableViewPersonType',
                                    /!*'id': ''*!/
                                },
                                'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details'),
                                //'class': 'class22',
                            };
                            console.log('111111111111111111111111111111')
                            console.log(HTML_Create_Elements.init('btn_View', data_Btn).clone().html())
                            console.log(HTML_Create_Elements.init('btn_View', data_Btn).prop('outerHTML'))
                            return JSON.stringify(HTML_Create_Elements.init('btn_View', data_Btn).prop('outerHTML'));
                        }
                    },
                    /!*{
                        "targets": 3,
                        "defaultContent":function () {
                            return "<button>Click!</button>"
                        },
                    }*!/*/
                ],
                order: [[1, 'asc']],
                drawCallback: function (settings) {
                    var api = this.api();
                    // Output the data for the visible rows to the browser's console
                    console.log(api.rows({page: 'current'}).data());
                    Reload_Needed.elements_Toggle();
                    if (!get_Allow_Script_Loading_For_View('allow_GetScript_Component_Users_Setting')) {
                        Reload_Needed.script_User();
                    }
                },

            });
            table.on('order.dt search.dt', function () {
                table.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();

            /*setInterval(function () {
                if ($.fn.DataTable.isDataTable('#'+table_Tbody_Selector.parent().attr('id'))) {
                    table_Tbody_Selector.parent().DataTable().destroy();
                }
            },2000)*/

            /*$('[data-select="userViewOrDeleteOrEditAddedTableViewRoles"]').click(function () {
                console.log($(this).data())
            })*/
        })
    }

    static reload_User(table_Tbody_Selector) {
        get_Language(win_Locale.toLowerCase()).then(async function (data) {
            // Users dataTable
            let table = table_Tbody_Selector.parent().DataTable({
                language: {url: "assets/app/js/json/datatable/language/" + data + ".json"},
                // data: await baseServicesDB.userServices.getUsers(),
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
                /* paging: false,
                 searching: false,*/
                //serverSide: true,  // Server side processing
                processing: true,  // Show processing
                //responsive: true,
                destroy: true,
                keys: true,
                // fixedHeader: true,
                /*ajax: {
                    url: '/',
                    type: "POST",
                    dataType: 'json',
                    data: {
                        'Sync': 'ProductAddedController',
                        'SubSync': 'get_Product_Search_Table',
                        'Data': {
                            json_Data: {
                                'switch_id': 'productAddOrEditViewAddedTableViewEnable',
                            }
                        },
                    },
                    error: function (data) {
                        console.log(data);
                    },
                    /!*success: function(data){
                        console.log(data);
                    }*!/
                },*/
                /*columns: [
                    {"data": "first_name"},
                    {"data": "last_name"},
                    {"data": "gender"},
                    {"data": "ssn"},
                    {"data": "date_of_birth"},
                    {"data": "email"},
                    /!*{ "data": "hr.position" },
                    { "data": "contact.0" },
                    { "data": "contact.1" },
                    { "data": "hr.start_date" },
                    { "data": "hr.salary" },

                    {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                    {data: 'name', name: 'name'},
                    {data: 'enabled', name: 'enabled'},
                    {data: 'barcode', name: 'barcode', orderable: false, searchable: false},
                    {data: 'product_type', name: 'product_type'},
                    {data: 'discount_percent', name: 'discount_percent'},
                    {data: 'vat_percent', name: 'vat_percent'},
                    {data: 'dealer', name: 'dealer', orderable: false, searchable: false},
                    {data: 'description', name: 'description'},
                    {data: 'prices', name: 'prices', orderable: false, searchable: false},
                    {data: 'categories', name: 'categories', orderable: false, searchable: false},
                    {data: 'action', name: 'action', orderable: false, searchable: false},*!/
                ],*/
                createdRow: function (row, data, dataIndex) {
                    /*console.log(data)
                    console.log(dataIndex)*/
                    /*$( row ).find('td:eq(1)').addClass('ssss');
                    $('td', row).eq(1).addClass('successww');*/
                    $(row).find('td:eq(1)').css({"white-space": "nowrap"});
                    $(row).find('td:eq(6)').css({"white-space": "nowrap"});
                    $(row).find('td:eq(11)').css({"white-space": "nowrap"});
                },
                columnDefs: [
                    {
                        "targets": 0,
                        "data": null,
                        "searchable": false,
                        "orderable": false,
                    },
                    /*{
                        "targets": 1,
                        "data": "first_name",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(type)
                            console.log(row)
                            console.log(meta)
                            let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
                            let small_Time = moment.utc(row.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                            if (!isEmpty(row.updated_at)) {
                                if (row.updated_at != row.created_at) {
                                    small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                                    small_Time = moment.utc(row.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                                }
                            }
                            return '<a class="name">' + data + '</a><br/><small>' + small_Text + ' ' + small_Time + '</small>';
                        }
                    },
                    {
                        "targets": 2,
                        "data": "last_name",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/
                            return '<a class="last_name">' + data + '</a>';
                        }
                    },
                    {
                        "targets": 3,
                        "data": "gender",
                        "render": function (data, type, row, meta) {
                            /!*console.log(data)
                            console.log(type)
                            console.log(row)
                            console.log(meta)*!/
                            let gender = '';
                            if (data == 'Mr')
                                gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Male');
                            if (data == 'Ms')
                                gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Female');
                            return '<a class="gender">' + gender + '</a>';
                        }
                    },
                    {
                        "targets": 4,
                        "data": "ssn",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/
                            let ssn = data

                            if (isEmpty(data))
                                ssn = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                            return '<a class="ssn">' + ssn + '</a>';
                        }
                    },
                    {
                        "targets": 5,
                        "data": "date_of_birth",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/

                            let date_Of_Birth = moment.utc(data).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD');

                            if (isEmpty(data))
                                date_Of_Birth = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
                            return '<a class="date_of_birth">' + date_Of_Birth + '</a>';
                        }
                    },
                    {
                        "targets": 6,
                        "data": "email",
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/
                            var a = $("<a></a>");
                            a.text(data);
                            return a.get(0);
                            // return '<a class="email">' + data + '</a>';
                        }
                    },
                    {
                        "targets": 7,
                        "data": null,
                        "render": function (data, type, row, meta) {
                            console.log(data)
                            console.log(row)
                            /!*console.log(type)
                            console.log(meta)*!/

                            let data_Btn = {
                                'data': {
                                    'id': row.id,
                                    /!*'select-element': 'table',
                                    'id': data.id,
                                    'dealer_type': data.dealer_type,*!/
                                },
                                'attr': {
                                    'data-select': 'userViewOrDeleteOrEditAddedTableViewPersonType',
                                    'data-toggle': 'modal',
                                    'data-target': '#userViewOrDeleteOrEditAddedTableViewPersonType',
                                    /!*'id': ''*!/
                                },
                                'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details'),
                                //'class': 'class22',
                            };
                            console.log('111111111111111111111111111111')
                            console.log(HTML_Create_Elements.init('btn_View', data_Btn).clone().html())
                            console.log(HTML_Create_Elements.init('btn_View', data_Btn).prop('outerHTML'))
                            return JSON.stringify(HTML_Create_Elements.init('btn_View', data_Btn).prop('outerHTML'));
                        }
                    },
                    /!*{
                        "targets": 3,
                        "defaultContent":function () {
                            return "<button>Click!</button>"
                        },
                    }*!/*/
                ],
                order: [[1, 'asc']],
                drawCallback: function (settings) {
                    var api = this.api();
                    // Output the data for the visible rows to the browser's console
                    console.log(api.rows({page: 'current'}).data());
                    Reload_Needed.elements_Toggle();
                    if (!get_Allow_Script_Loading_For_View('allow_GetScript_Component_Users_Setting')) {
                        Reload_Needed.script_User();
                    }
                },

            });
            table.on('order.dt search.dt', function () {
                table.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
                    cell.innerHTML = i + 1;
                });
            }).draw();
            /*setInterval(function () {
                if ($.fn.DataTable.isDataTable('#'+table_Tbody_Selector.parent().attr('id'))) {
                    table_Tbody_Selector.parent().DataTable().destroy();
                }
            },2000)*/
        })
    }

    static destroy_User(table_Tbody_Selector) {
        if ($.fn.DataTable.isDataTable('#' + table_Tbody_Selector.parent().attr('id'))) {
            table_Tbody_Selector.parent().DataTable().destroy();
        }
    }
}

////////////////////////////////////////// HTML create view ///////////////////////////////////

class HTML_Create_View_Table {

    // Create table phones
    static phones(data_ISO_Phones) {
        var data_For_TablePhones = {
            thead: [
                {name: '#'},
                {name: Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone')},
                {name: Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type')},
            ],
        }
        var table_Phones = create_Table(data_For_TablePhones)

        $.each(data_ISO_Phones, function (item, value) {
            let id_Phones = item + 1;
            let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
            let small_Time = moment.utc(value.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
            if (!isEmpty(value.updated_at)) {
                if (value.updated_at != value.created_at) {
                    small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                    small_Time = moment.utc(value.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                }
            }
            let text_type = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type_MOBILE');
            if (value.type == 'FIXED_LINE')
                text_type = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.phone_Type_Fixed');

            let td = {
                'num': [
                    {'number': id_Phones, 'number_class': 'number'}
                ],
                'name': [
                    {
                        'data': {
                            'td_style': {"direction": "ltr", "white-space": "nowrap"},
                            'td_class': 'text-right'
                        }
                    },
                    {
                        'a': value.number,
                        'a_class': 'phone',/*'a_style': JSON.stringify({"text-align": "left","background-color": "yellow"}),*/
                    },
                    {'enter': ''},
                    {'small': small_Text + ' ' + small_Time},
                ],
                'type': [
                    {'a': text_type, 'a_class': 'type'},
                ],
            }
            table_Phones.find('tbody').append(create_Component_Tbody_Tr_Table(td))
        });

        return table_Phones;
    }

    // Create table addresses
    static addresses(data_ISO_Addresses) {
        var data_For_TableAddresses = {
            thead: [
                {name: '#'},
                {name: Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.address')},
                {name: Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.postal_Code')},
            ],
        }
        var table_Addresses = create_Table(data_For_TableAddresses)

        $.each(data_ISO_Addresses, function (item, value) {
            let id_Addresses = item + 1;
            let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
            let small_Time = moment.utc(value.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
            if (!isEmpty(value.updated_at)) {
                if (value.updated_at != value.created_at) {
                    small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                    small_Time = moment.utc(value.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
                }
            }

            let td = {
                'num': [
                    {'number': id_Addresses, 'number_class': 'number'}
                ],
                'name': [
                    {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                    {'a': value.display_name, 'a_class': 'address'},
                    {'enter': ''},
                    {'small': small_Text + ' ' + small_Time},
                ],
                'postal_code': [
                    {'a': value.postal_code, 'a_class': 'postal_code'},
                ],
            }
            table_Addresses.find('tbody').append(create_Component_Tbody_Tr_Table(td))
        });

        return table_Addresses;
    }

}

class HTML_Create_View_User {

    // User profile view
    static profile_View(data) {

        var profileDetails = $('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 profile_details"></div>');
        var profileView = $('<div class="well profile_view"></div>');

        /*
        |--------------------------------------------------------------------------
        |                               Profile body
        |--------------------------------------------------------------------------
        */

        var profileBody = $('<div class="profile_body col-sm-12"></div>');

        /*
        |--------------------------------------------------------------------------
        |                               Profile body --> header
        |--------------------------------------------------------------------------
        */
        var profileBodyHeader = $('<h4 class="ssn brief"></h4>');
        var i = $('<i class="ssn brief"></i>');
        if (isExist(() => data.ssn) && !isEmpty(data.ssn)) {
            i.text(data.ssn);
        } else i.text(Lang.get('supermarket/storeCashier/Dashboard.public.form.ssn'));
        profileBodyHeader.append(i);

        /*
        |--------------------------------------------------------------------------
        |                               Profile body --> left
        |--------------------------------------------------------------------------
        */
        var profileBodyLeft = $('<div class="col-xs-7"></div>');
        if (Validate_Rtl_By_Language_Code(win_Locale)) {
            profileBodyLeft.addClass('right');
        } else profileBodyLeft.addClass('left');
        // Name
        var name = $('<h2 class="name"></h2>');
        if (isExist(() => data.first_name) || isExist(() => data.last_name)) {
            name.text(data.first_name + ' ' + data.last_name);
        }

        // Append to profile body left name
        profileBodyLeft.append(name);


        /*
        |--------------------------------------------------------------------------
        |                               Profile body --> col 12 email, phones and addresses
        |--------------------------------------------------------------------------
        */
        var profileBodyCol12 = $('<div class="col-xs-12"></div>');

        // Gender
        var gender = $('<p></p>');
        var genderStrong = $('<strong></strong>');
        genderStrong.text(Lang.get('supermarket/storeCashier/Dashboard.public.form.gender') + ': ')
        var genderSmall = $('<small class="gender"></small>');
        if (isExist(() => data.gender) && !isEmpty(data.gender)) {
            genderSmall.attr('value', data.gender);
            let gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Female');
            if (data.gender == 'Mr')
                gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Male');
            genderSmall.text(gender);
        }
        gender.append(genderStrong);
        gender.append(genderSmall);

        // Date of birth
        var dateOfBirth = $('<p></p>');
        var dateOfBirthStrong = $('<strong></strong>');
        dateOfBirthStrong.text(Lang.get('supermarket/storeCashier/Dashboard.public.form.date_Of_Birth') + ': ')
        var dateOfBirthSmall = $('<small class="date-of-birth"></small>');
        if (isExist(() => data.date_of_birth)) {
            dateOfBirthSmall.text(moment.utc(data.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD'));
        }
        dateOfBirth.append(dateOfBirthStrong);
        dateOfBirth.append(dateOfBirthSmall);

        // Email
        var email = $('<p></p>');
        var emailStrong = $('<strong></strong>');
        emailStrong.text(Lang.get('supermarket/storeCashier/Dashboard.public.form.email') + ': ')
        var emailSmall = $('<small class="email"></small>');
        if (isExist(() => data.email)) {
            emailSmall.text(data.email);
        }
        email.append(emailStrong);
        email.append(emailSmall);

        // Addresses and phones
        var addressesAndPhonesUL = $('<ul class="list-unstyled"></ul>');

        if (isExist(() => data.addresses)) {
            $.each(data.addresses, function (item, value) {
                var li = $('<li></li>');
                var strong = $('<strong></strong>');
                var number = item + 1;
                var small = $('<small></small>');
                if (item == 0) {
                    var i_Home = '<i class="fa fa-home"></i>';
                    strong.append(i_Home + ' ' + Lang.get('supermarket/storeCashier/Dashboard.public.form.address') + ': ')
                    li.append(strong);
                    small.append(number + ') ' + value.display_name);
                    li.append(small);
                } else {
                    small.append(number + ') ' + value.display_name);
                    li.append(small);
                }
                addressesAndPhonesUL.append(li);
            });
        }
        if (isExist(() => data.phones)) {
            $.each(data.phones, function (item, value) {
                var li = $('<li></li>');
                var strong = $('<strong></strong>');
                var number = item + 1;
                var small = $('<small></small>');
                var small2 = $('<small style="color: white;font-size: 1px">v</small>');
                if (item == 0) {
                    var i_Phone = '<i class="fa fa-phone"></i>';
                    strong.append(i_Phone + ' ' + Lang.get('supermarket/storeCashier/Dashboard.public.form.phone') + ':')
                    li.append(strong);
                    li.append(small2)
                    small.append(number + ') ' + value.number);
                    li.append(small);
                } else {
                    li.append(small2)
                    small.append(number + ') ' + value.number);
                    li.append(small);
                }
                addressesAndPhonesUL.append(li);
            });
        }

        // Append to profile body col 12, gender, date of birth, email, addresses and phones
        profileBodyCol12.append(gender);
        profileBodyCol12.append(dateOfBirth);
        profileBodyCol12.append(email);
        profileBodyCol12.append(addressesAndPhonesUL);
        /*
        |--------------------------------------------------------------------------
        |                               Profile body --> right
        |--------------------------------------------------------------------------
        */

        var profileBodyRight = $('<div class="col-xs-5 text-center"></div>');
        if (Validate_Rtl_By_Language_Code(win_Locale)) {
            profileBodyRight.addClass('left');
        } else profileBodyRight.addClass('right');

        // Image
        var img = $('<img alt="" class="img-circle img-responsive">');
        if (isExist(() => data.image)) {
            img.attr('src', data.image);
        } else img.attr('src', '/assets/image/user.png');

        // Append to profile body right img
        profileBodyRight.append(img);

        // Append to profile body
        profileBody.append(profileBodyHeader);
        profileBody.append(profileBodyLeft);
        profileBody.append(profileBodyRight);
        profileBody.append(profileBodyCol12);

        /*
        |--------------------------------------------------------------------------
        |                               Profile footer
        |--------------------------------------------------------------------------
        */

        var profileFooter = $('<div class="profile_footer col-xs-12 bottom text-center"></div>');

        /*
        |--------------------------------------------------------------------------
        |                               Profile footer --> ratings
        |--------------------------------------------------------------------------
        */

        // Star
        var profileFooterStar = $('<div style="direction: ltr" class="col-xs-12 col-sm-8 emphasis "></div>');
        if (Validate_Rtl_By_Language_Code(win_Locale)) {
            profileFooterStar.addClass('col-sm-pull-2');
        } else profileFooterStar.addClass('col-sm-push-2 ');
        var p_Ratings = $('<p class="ratings">');
        var a_Ratings = $('<a></a>');
        var a_Star = '<a><span class="fa fa-star"></span></a>';
        var a_Star_O = '<a><span class="fa fa-star-o"></span></a>';
        if (isExist(() => data.a_ratings)) {
            a_Ratings.text(data.a_ratings + ' ');
        } else a_Ratings.text('4.0 ');
        p_Ratings.append(a_Ratings);
        if (isExist(() => data.a_star) && isExist(() => data.a_star_o)) {
            for (var i = 0; i < data.a_star; i++) {
                p_Ratings.append(a_Star);
            }
            for (var i = 0; i < data.a_star_o; i++) {
                p_Ratings.append(a_Star_O);
            }
        }
        // Append to profile footer star
        profileFooterStar.append(p_Ratings);

        /*
        |--------------------------------------------------------------------------
        |                               Profile footer --> btns
        |--------------------------------------------------------------------------
        */

        var profileFooterBtn = $('<div class="col-xs-12 col-sm-4 emphasis"></div>');

        // Btn comments
        var profileFooterBtn_Comment = $('<button type="button" class="btn btn-success btn-xs"><i class="fa fa-user"></i>&nbsp;<i class="fa fa-comments-o"></i></button>');
        if (isExist(() => data.btn_comments.data)) {
            $.each(data.btn_comments.data, function (item, value) {
                profileFooterBtn_Comment.data(item, value)
            });
        }
        if (isExist(() => data.btn_comments.class)) {
            profileFooterBtn_Comment.addClass(data.btn_comments.class)
        }

        // Append to profile footer btn
        profileFooterBtn.append(profileFooterBtn_Comment);


        // Append to profile footer
        profileFooter.append(profileFooterStar)
        profileFooter.append(profileFooterBtn)

        /*
        |--------------------------------------------------------------------------
        |                               Finally
        |--------------------------------------------------------------------------
        */

        profileView.append(profileBody);
        profileView.append(profileFooter);
        profileDetails.append(profileView);

        return profileDetails;

    }

    // Create user table default customer
    static create_Default_Customer_User_Td_For_Table(number) {

        var data = {
            'name': Lang.get('supermarket/storeCashier/Dashboard.work.sales.default_customer'),
            'username': 'default_customer',
            'dealer_type': null,
            'search_type': 'user',
        }
        let display_name = Lang.get('supermarket/storeCashier/Dashboard.work.sales.default_customer');
        var td = {
            'select': 'userAddedTable',
            'data': {
                'dataSend': data,
                'dealer_type': null,
                'search_type': 'user',
            },
            'num': [
                {'number': number}
            ],
            'a_small': [
                {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                {'a': display_name, 'a_class': 'name'},
                {'enter': ''},
                {'small': Lang.get('supermarket/storeCashier/Dashboard.public.form.created_Time') + ' ' + moment.tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss')}
            ],
            'user_accounts': [
                {
                    'i': '',
                    'i_class': 'fa fa-remove red',
                }
            ],
            'user_details': [
                {
                    'i': '',
                    'i_class': 'fa fa-remove red',
                }
            ],
            'btn': [
                {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                {
                    'i': '',
                    'i_class': 'fa fa-remove red',
                }
            ],
        }

        return create_Component_Tbody_Tr_Table(td);
    }

    // Create user tr table
    static create_Table_Tr_User(data_ISO_User) {
        let small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.created_Time');
        let small_Time = moment.utc(data_ISO_User.created_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
        if (!isEmpty(data_ISO_User.updated_at)) {
            if (data_ISO_User.updated_at != data_ISO_User.created_at) {
                small_Text = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.edit_Time');
                small_Time = moment.utc(data_ISO_User.updated_at).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD HH:mm:ss');
            }
        }
        let gender = '';
        if (data_ISO_User.gender == 'Mr')
            gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Male');
        if (data_ISO_User.gender == 'Ms')
            gender = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.gender_Female');
        let ssn = data_ISO_User.ssn
        if (isEmpty(data_ISO_User.ssn))
            ssn = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
        let date_Of_Birth = ''
        if (isEmpty(data_ISO_User.date_of_birth))
            date_Of_Birth = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');
        else {
            date_Of_Birth = moment.utc(data_ISO_User.date_of_birth).tz(win_Timezone).locale(win_Locale).format('YYYY/MM/DD');
            // date_Of_Birth = data_ISO_User.date_of_birth;
        }
        let email = data_ISO_User.email;
        if (isEmpty(data_ISO_User.email))
            email = Lang.get('supermarket/storeCashier/Dashboard.people_Plan.form.not_Exist');

        let td = {
            'select': 'userAddedTable',
            'data': {
                'dataSend': data_ISO_User,
                'id': data_ISO_User.id,
            },
            'num': [
                {'number': data_ISO_User.id, 'number_class': 'number'}
            ],
            'a_small': [
                {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                {'a': data_ISO_User.first_name, 'a_class': 'first_name'},
                {'enter': ''},
                {'small': small_Text + ' ' + small_Time},
            ],
            'last_name': [
                {'a': data_ISO_User.last_name, 'a_class': 'last_name'}
            ],
            'gender': [
                {'a': gender, 'a_class': 'gender'}
            ],
            'ssn': [
                {'a': ssn, 'a_class': 'ssn'}
            ],
            'date_of_birth': [
                {'a': date_Of_Birth, 'a_class': 'date_of_birth'}
            ],
            'email': [
                {'data': {'td_style': {"direction": "ltr"/*, "white-space": "nowrap"*/}, 'td_class': 'text-right'}},
                {'a': email, 'a_class': 'email'}
            ],
            'user_roles': [
                {
                    'btn_View': {
                        'data': {
                            //'selectElement': 'table',
                            'id': data_ISO_User.id,
                        },
                        'attr': {
                            'data-select': 'userViewOrDeleteOrEditAddedTableViewRoles',
                            'data-toggle': 'modal',
                            'data-target': '#storeCashier_AddPeople_Form_UserAdded_Table_Modal_PersonType_View',
                            //'id': ''
                        },
                        'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details'),
                        // 'class': '',
                    }
                }
            ],
            'user_addresses': [
                {
                    'btn_View': {
                        'data': {
                            //'selectElement': 'table',
                            'id': data_ISO_User.id,
                        },
                        'attr': {
                            'data-select': 'userViewOrDeleteOrEditAddedTableViewAddress',
                            'data-toggle': 'modal',
                            'data-target': '#storeCashier_Work_Modal_Address_View',
                            //'id': ''
                        },
                        'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details'),
                        // 'class': '',
                    }
                }
            ],
            'user_phones': [
                {
                    'btn_View': {
                        'data': {
                            //'selectElement': 'table',
                            'id': data_ISO_User.id,
                        },
                        'attr': {
                            'data-select': 'userViewOrDeleteOrEditAddedTableViewPhone',
                            'data-toggle': 'modal',
                            'data-target': '#storeCashier_Work_Modal_Phone_View',
                            //'id': ''
                        },
                        'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.view_details'),
                        // 'class': '',
                    }
                }
            ],
            'btn': [
                {'data': {'td_style': {"white-space": "nowrap"}, /*'td_class': 'text-right'*/}},
                {
                    'btn_Edit': {
                        'data': {
                            //'select-element': 'table',
                            'id': data_ISO_User.id,
                        },
                        'attr': {
                            'data-select': 'userViewOrDeleteOrEditAddedTableViewEdit',
                            /*'data-toggle': 'modal',
                            'data-target': '#storeCashier_Work_Modal_UserAdd',
                            'id': ''*/
                        },
                        'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.edit'),
                        // 'class': '',
                    }
                },
                {
                    'btn_Delete': {
                        'data': {
                            // 'selectElement': 'table',
                            'id': data_ISO_User.id,
                        },
                        'attr': {
                            'data-select': 'userViewOrDeleteOrEditAddedTableViewDelete',
                            /*'data-toggle': '',
                            'data-target': '#',
                            'id': ''*/
                        },
                        'name': Lang.get('supermarket/storeCashier/Dashboard.public.form.delete'),
                        // 'class': '',
                    }
                },
            ],
        }

        return create_Component_Tbody_Tr_Table(td);
    }
}

class HTML_Create_Elements {
    static init(element_Name, value) {
        switch (element_Name) {
            case 'number':
                var p = $("<p></p>");
                if (isExist(() => value.number_class))
                    p.addClass(value.number_class);
                if (isExist(() => value.number_style))
                    p.css(value.number_style)
                p.text(value.number);
                return p;
                //return '<p>' + value.number + '</p>'
                break;
            case 'enter':
                return '<br/>'
                break;
            case 'a':
                var a = $("<a></a>");
                if (isExist(() => value.a_class))
                    a.addClass(value.a_class);
                if (isExist(() => value.a_style))
                    a.css(value.a_style)
                a.text(value.a);
                return a;
                break;
            case 'i':
                var i = $("<i></i>");
                if (isExist(() => value.i_class))
                    i.addClass(value.i_class);
                if (isExist(() => value.i_style))
                    i.css(value.i_style)
                //i.text(value.i);
                return i;
                break;
            case 'p':
                var p = $("<p></p>");
                if (isExist(() => value.class))
                    p.addClass(value.class);
                if (isExist(() => value.style))
                    p.css(value.style)
                if (isExist(() => value.data)) {
                    $.each(value.data, function (item, value) {
                        p.data(item, value)
                    });
                }
                if (isExist(() => value.attr)) {
                    $.each(value.attr, function (item, value) {
                        p.attr(item, value)
                    });
                }
                p.text(value.p);
                return p;
                break;
            case 'small':
                var small = $("<small></small>");
                if (isExist(() => value.small_class))
                    small.addClass(value.small_class);
                if (isExist(() => value.small_style))
                    small.css(value.small_style)
                small.text(value.small);
                return small;
                break;
            case 'small_input':
                let small_Input = $('<small> <input> </small>');
                if (isExist(() => value.value))
                    small_Input.find('input').val(value.value)
                if (isExist(() => value.data)) {
                    $.each(value.data, function (item, value) {
                        small_Input.find('input').data(item, value)
                    });
                }
                if (isExist(() => value.attr)) {
                    $.each(value.attr, function (item, value) {
                        small_Input.find('input').attr(item, value)
                    });
                }

                if (isExist(() => value.class))
                    small_Input.find('input').addClass(value.class)
                if (isExist(() => value.style))
                    small_Input.find('input').css(value.style)

                return small_Input;
                break;
            case 'dropdown':
                let dropdownDiv = $('<div class="btn-group"></div>');
                let dropdownA = $('<a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false"> <span class="caret"></span></a>');
                let dropdownUl = $('<ul class="dropdown-menu animated fadeInDown" role="menu"></ul>');

                if (isExist(() => value.element)) {
                    $.each(value.element, function (item, value) {
                        let dropdownLi = $('<li role="presentation"><a role="button" tabindex="-1"></a></li>');
                        if (isExist(() => value.text))
                            dropdownLi.find('a').text(value.text);
                        if (isExist(() => value.class))
                            dropdownLi.find('a').addClass(value.class)
                        if (isExist(() => value.active) && value.active)
                            dropdownLi.addClass('active')
                        if (isExist(() => value.data)) {
                            $.each(value.data, function (item, value) {
                                dropdownLi.find('a').data(item, value)
                            });
                        }
                        if (isExist(() => value.attr)) {
                            $.each(value.attr, function (item, value) {
                                dropdownLi.find('a').attr(item, value)
                            });
                        }
                        dropdownUl.append(dropdownLi);
                    });
                }
                if (isExist(() => value.class))
                    dropdownDiv.addClass(value.class)
                if (isExist(() => value.name))
                    dropdownA.append(' ' + value.name)

                dropdownDiv.append(dropdownA);
                dropdownDiv.append(dropdownUl);
                return dropdownDiv;
                break;
            case 'switch':
                var switcheryDiv = $("<div class='custom-control custom-switch'></div>");
                var switcheryInput = $("<input class='custom-control-input'></input>");
                var switcheryLable = $("<label class='custom-control-label'></label>");

                if (isExist(() => value.checked) && value.checked)
                    switcheryInput.prop('checked', true).trigger("change");

                if (isExist(() => value.class))
                    switcheryInput.addClass(value.class)

                if (isExist(() => value.data)) {
                    $.each(value.data, function (item, value) {
                        switcheryInput.data(item, value)
                    });
                }
                if (isExist(() => value.attr)) {
                    $.each(value.attr, function (item, value) {
                        switcheryInput.attr(item, value)
                    });
                }
                if (isExist(() => value.lable_text))
                    switcheryLable.append(' ' + value.lable_text)

                if (isExist(() => value.attr.id))
                    switcheryLable.attr('for', value.attr.id)

                switcheryDiv.append(switcheryInput);
                switcheryDiv.append(switcheryLable);

                return switcheryDiv;
                break;
            case 'btn_Edit':
                var button = $("<button type='button'></button>");
                button.addClass('btn btn-info btn-xs ')
                if (isExist(() => value.class))
                    button.addClass(value.class)

                if (isExist(() => value.data)) {
                    $.each(value.data, function (item, value) {
                        button.data(item, value)
                    });
                }
                if (isExist(() => value.attr)) {
                    $.each(value.attr, function (item, value) {
                        button.attr(item, value)
                    });
                }


                button.append('<i class="fa fa-pencil"></i>')
                if (isExist(() => value.name))
                    button.append(' ' + value.name)
                return button;
                break;
            case 'btn_View':
                var button = $("<button type='button'></button>");
                button.addClass('btn btn-primary btn-xs ')
                if (isExist(() => value.class))
                    button.addClass(value.class)

                if (isExist(() => value.data)) {
                    $.each(value.data, function (item, value) {
                        button.data(item, value)
                    });
                }
                if (isExist(() => value.attr)) {
                    $.each(value.attr, function (item, value) {
                        button.attr(item, value)
                    });
                }
                button.append('<i class="fa fa-eye"></i>')
                if (isExist(() => value.name))
                    button.append(' ' + value.name)
                return button;
                break;
            case 'btn_Delete':
                var button = $("<button type='button'></button>");
                button.addClass('btn btn-danger btn-xs ')
                if (isExist(() => value.class))
                    button.addClass(value.class)

                if (isExist(() => value.data)) {
                    $.each(value.data, function (item, value) {
                        button.data(item, value)
                    });
                }
                if (isExist(() => value.attr)) {
                    $.each(value.attr, function (item, value) {
                        button.attr(item, value)
                    });
                }
                button.append('<i class="fa fa-trash-o"></i>')
                if (isExist(() => value.name))
                    button.append(' ' + value.name)
                return button;
                break;
        }
    }
}

////////////////////////////////////////// Reload needed ///////////////////////////////////
class Reload_Needed {
    static elements_Toggle() {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle_tooltip="tooltip"]').tooltip();
        $('input.flat').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        });
    }

    static script_User() {
        //////////////////////////////////// Relative /////////////////////////////////////

        Event_Address.event_Remove_Btn_Table_Address('userAddressDeleteTableTrAddress', json_Data_Final_User);
        Event_Phone.event_Remove_Btn_Table_Phone('userPhoneDeleteTableTrPhone', json_Data_Final_User);

        Event_Address.event_Edit_Btn_Table_Address('userAddressEditTableTrAddress', 'storeCashier_AddPeople_Form_Addresses_Address', 'storeCashier_AddPeople_Form_Addresses_Postal_Code', 'storeCashier_AddPeople_Form_Addresses_Btn_Add_Address', theMarker, map, intl_POSTAL_CODE);

        Event_Phone.event_Edit_Btn_Table_Phone('userPhoneEditTableTrPhone', 'storeCashier_AddPeople_Form_Phones_Phone_MOBILE', 'storeCashier_AddPeople_Form_Phones_Phone_FIXED_LINE', 'storeCashier_AddPeople_Form_Phones_Btn_Add_Phones', intl_MOBILE, intl_FIXED_LINE);

        Event_Cancel_Btn.event_Cancel_Btn_Together_And_Create_Single_Btn('storeCashier_AddPeople_Form_UserAdded_Btn_Cancel_User', $('#storeCashier_AddPeople_Form_UserAdded_Btn_Together_Add_User'), 'storeCashier_AddPeople_Form_UserAdded_Btn_Add_User', Lang.get('supermarket/storeCashier/Dashboard.people_Plan.user_Added_Btn_Add'), storeCashier_AddPeople_Form_Reset, storeCashier_AddPeople_Form_UserAdded_Btn_Add_User);

        //////////////////////////////////// relativeCallRelative1 /////////////////////////////////////

        let data_Json_Selector = {
            first_name: $('#storeCashier_AddPeople_Form_Details_Name'),
            last_name: $('#storeCashier_AddPeople_Form_Details_LastName'),
            gender: "storeCashier_AddPeople_Form_Details_Gender",
            ssn: $('#storeCashier_AddPeople_Form_Details_SSN'),
            date_of_birth: $('#storeCashier_AddPeople_Form_Details_DateOfBirth'),
            email: $('#storeCashier_AddPeople_Form_Details_Email'),
            id_Btn1_Together: 'storeCashier_AddPeople_Form_UserAdded_Btn_Add_User',
            id_Btn2_Together: 'storeCashier_AddPeople_Form_UserAdded_Btn_Cancel_User',
            id_Btn_Together_Add: $('#storeCashier_AddPeople_Form_UserAdded_Btn_Together_Add_User'),
            switched: 'json_Data_Final_User',
        }
        let data_Json_End_Selector = {
            id_Btn1_Together: 'storeCashier_AddPeople_Btn_Repeat_Agree',
            id_Btn2_Together: 'storeCashier_AddPeople_Btn_Repeat_Against',
            userAdded_Table: 'storeCashier_AddPeople_Form_UserAdded_Table',
            locale_toLowerCase: $('html').attr('lang').toLowerCase(),
            //role:  ['customer', 'supplier', 'owner'],
            component_View: 'component_Users_Setting',
            btn_cancel_user: 'storeCashier_AddPeople_Form_UserAdded_Btn_Cancel_User',
        }

        Event_User.event_View_Btn_User_Table_Phone('userViewOrDeleteOrEditAddedTableViewPhone');

        Event_User.event_View_Btn_User_Table_Address('userViewOrDeleteOrEditAddedTableViewAddress');

        Event_User.event_View_Btn_User_Table_Person_Type('userViewOrDeleteOrEditAddedTableViewRoles');

        Event_User.event_Edit_Btn_Table_User('userViewOrDeleteOrEditAddedTableViewEdit', storeCashier_AddPeople_Form_Reset, storeCashier_AddPeople_Form_UserAdded_Btn_Add_User, data_Json_Selector, 'storeCashier_AddPeople_Form_Phones_Table', 'storeCashier_AddPeople_Form_Addresses_Table', $('#storeCashier_AddPeople_Form_Phones_Table_Tbody'), $('#storeCashier_AddPeople_Form_Addresses_Table_Tbody'), 'storeCashier_AddPeople_Form_UserType')

        Event_User.event_Remove_Btn_Table_User('userViewOrDeleteOrEditAddedTableViewDelete', data_Json_End_Selector, storeCashier_AddPeople_Form_Reset);

        //////////////////////////////////// Repeat /////////////////////////////////////
        $('#storeCashier_AddPeople_Btn_Repeat_Agree').click(function () {
            PNotify.removeAll();
        });
        $('#storeCashier_AddPeople_Btn_Repeat_Against').click(function () {

            if (win_Existence_Initial_Steps) {
                activeStep('component_Dealers_Setting', manageScriptPath.component_Dealers_Setting());
            } else {
                if (!stack_Go_Back.isEmpty())
                    active_View_Without_activeStep(stack_Go_Back.pop());
                else
                    active_View_Without_activeStep('component_Dashboard_1', manageScriptPath.component_dashboard_1())
            }
        })
        this.elements_Toggle();

    }

    static script_User_Modal() {
        //////////////////////////////////// Event btns /////////////////////////////////////
        Event_Address.event_Remove_Btn_Table_Address('userModalAddressDeleteTableTrAddress', json_Data_Final_User_Add_Modal);
        Event_Phone.event_Remove_Btn_Table_Phone('userModalPhoneDeleteTableTrPhone', json_Data_Final_User_Add_Modal);

        Event_Address.event_Edit_Btn_Table_Address('userModalAddressEditTableTrAddress', 'storeCashier_Work_Modal_UserAdd_Form_Addresses_Address', 'storeCashier_Work_Modal_UserAdd_Form_Addresses_Postal_Code', 'storeCashier_Work_Modal_UserAdd_Form_Addresses_Btn_Add_Address', theMarker_User_Add_Modal, map_User_Add_Modal, intl_POSTAL_CODE_User_Add_Modal);

        Event_Phone.event_Edit_Btn_Table_Phone('userModalPhoneEditTableTrPhone', 'storeCashier_Work_Modal_UserAdd_Form_Phones_Phone_MOBILE', 'storeCashier_Work_Modal_UserAdd_Form_Phones_Phone_FIXED_LINE', 'storeCashier_Work_Modal_UserAdd_Form_Phones_Btn_Add_Phones', intl_MOBILE_User_Add_Modal, intl_FIXED_LINE_User_Add_Modal);

        Event_Cancel_Btn.event_Cancel_Btn_Together_And_Create_Single_Btn('storeCashier_Work_Modal_UserAdd_Form_UserAdded_Btn_Cancel_User', $('#storeCashier_Work_Modal_UserAdd_Form_UserAdded_Btn_Together_Add_User'), 'storeCashier_Work_Modal_UserAdd_Form_UserAdded_Btn_Add_User', Lang.get('supermarket/storeCashier/Dashboard.people_Plan.user_Added_Btn_Add'), storeCashier_Work_Modal_UserAdd_Form_Reset, storeCashier_Work_Modal_UserAdd_Form_UserAdded_Btn_Add_User);

        //////////////////////////////////// relativeCallRelative1 /////////////////////////////////////
        $('#storeCashier_Work_Modal_UserAdd_Btn_Repeat_Agree').click(function () {
            PNotify.removeAll();
        });
        $('#storeCashier_Work_Modal_UserAdd_Btn_Repeat_Against').click(function () {
            $('#storeCashier_Work_Modal_UserAdd').modal('toggle');
            PNotify.removeAll();
        })
        this.elements_Toggle();
    }

    /*static script_Product(){
        this.elements_Toggle();
    }*/
}

/////////////////////////////////////////// classes ////////////////////////////////////////

