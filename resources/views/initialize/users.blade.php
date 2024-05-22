<div id="component_Users_Setting" data_Remove='component' class="row hidden">
    <!-- User details -->
    <div id="user" class="row">
        <!-- Details and Roles and Permissions -->
        <div class="col-md-6 col-sm-6 col-xs-12">
            <!-- Details -->
            <div id="user_PanelDetails" class="x_panel">
                <div class="x_title">
                    <h2> {{ __('Dashboard.public.form.people_Plan_Settings') }}
                        <small></small>
                    </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                                class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                            <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                        </li>
                    <!--                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="text_align_right dropdown-menu" role="menu">
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting1') }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting2') }}</a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                <!--<h6 class="page-title">{{__('Dashboard.people_Plan.details_Header')}}</h6>-->
                    <img
                        {{--style="width: 300px;"--}} class="w3-margin-bottom col-md-12 col-sm-12 col-xs-12 img-responsive center-block"
                        src="assets/image/users.jpg">
                    <form class="w3-margin-top form-horizontal form-label-left"
                          id="addPeople_Form_Details">
                        <!-- FirstName: -->
                        <div class="item w3-margin-top form-group ">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="first_Name">
                                <small
                                    class="text-navy"> {{__('Dashboard.public.form.first_Name')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="3,32"--}}
                                       name="first_Name"
                                       placeholder="{{__('Dashboard.public.form.first_Name_Placeholder')}}"
                                       required="required" type="text">
                            </div>
                        </div>
                        <!-- Lastname: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="last_Name">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.last_Name')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="3,62" pattern="alpha"--}}
                                       name="last_Name"
                                       placeholder="{{__('Dashboard.public.form.last_Name_Placeholder')}}"
                                       required="required" type="text">
                            </div>
                        </div>
                        <!-- Gender: -->
                        <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.gender')}}</small><span
                                    class="required">*</span>:</label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div name="gender" class="btn-group" data-toggle="buttons">
                                    <label class="btn btn-sm btn-default" data-toggle-class="btn-primary"
                                           data-toggle-passive-class="btn-primary">
                                        <input type="radio"  value="Mr">
                                        &nbsp; {{__('Dashboard.public.form.gender_Male')}}
                                        &nbsp;
                                    </label>
                                    <label class="btn btn-sm btn-default" data-toggle-class="btn-primary"
                                           data-toggle-passive-class="btn-primary">
                                        <input type="radio" name="gender" value="Ms">
                                        &nbsp; {{__('Dashboard.public.form.gender_Female')}}
                                        &nbsp;
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- SSN: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="ssn">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.ssn')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="1,{{$end_SSN}}"
                                       data-inputmask="'mask' : {{$inputmask}}"--}}
                                       name="ssn"
                                       placeholder="{{__('Dashboard.public.form.ssn_Placeholder')}}"
                                       {{--required="required" --}}type="text">
                            </div>
                        </div>
                        <!-- Date of birth: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="date_Of_Birth">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.date_Of_Birth')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input type="text"
                                       class="form-control"
                                       name="date_Of_Birth"
                                       {{--data-inputmask="'mask': '9999/99/99'"--}}
                                       placeholder="{{__('Dashboard.public.form.date_Of_Birth')}}"
                                    {{--required="required"--}}>
                            </div>
                        </div>
                        <!-- Email: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="email">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.email')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input class="email form-control"
                                       name="email"
                                       placeholder="{{__('Dashboard.public.form.email_Placeholder')}}"
                                       {{--required="required"--}} type="text">
                            </div>
                        </div>
                        <!-- Password: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="password">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.password')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input class="email form-control"
                                       name="password"
                                       placeholder="{{__('Dashboard.public.form.password')}}"
                                       {{--required="required"--}} type="password">
                            </div>
                        </div>
                        <!-- Confirm: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="confirm">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.repeat_Password')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input class="email form-control"
                                       name="confirm"
                                       placeholder="{{__('Dashboard.public.form.repeat_Password')}}"
                                       {{--required="required"--}} type="password">
                            </div>
                        </div>
                        <!-- Active: -->
                        <div class="item form-group custom-control custom-switch">
                            <input id="addPeople_Form_Details_Active" name="active" type="checkbox"
                                   class="form-control custom-control-input" checked>
                            <label class="control-label col-md-3 col-sm-3 col-xs-12 custom-control-label"
                                   for="addPeople_Form_Details_Active">
                                <small class="text-navy">{{__('Dashboard.public.active')}}</small>
                            </label>
                        </div>
                        <!-- img_profile:-->
                        <div class="item form-group ">
                            <label class="control-label col-md-12 col-sm-12 col-xs-12"
                                   for="img_profile">
                                <small
                                    class="text-navy @if($rtl_Language_Code->contains(strtolower(app()->getLocale()))) pull-right @else pull-left @endif">{{__('Dashboard.public.profile_picture')}}
<!--                                    <span class="required">*</span>-->:</small>
                            </label>
                            <input multiple type="file" class="filepond img_profile col-md-12 col-sm-12 col-xs-12">
                        </div>
                        <!-- img_sign:-->
                        <div class="item form-group ">
                            <label class="control-label col-md-12 col-sm-12 col-xs-12"
                                   for="img_sign">
                                <small
                                    class="text-navy @if($rtl_Language_Code->contains(strtolower(app()->getLocale()))) pull-right @else pull-left @endif">{{__('Dashboard.public.signature')}}
                                    <span class="required">*</span>:</small>
                            </label>
                            <input multiple type="file" class="filepond img_sign col-md-12 col-sm-12 col-xs-12">
                        </div>
                    </form>
                </div>
            </div>
            <!-- Roles -->
            <div id="user_PaneRoles" class="x_panel">
                <div class="x_title">
                    <h2> {{ __('Dashboard.public.form.roles_Header') }}
                        <small></small>
                    </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                                class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                            <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                        </li>
                    <!--                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="text_align_right dropdown-menu" role="menu">
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting1') }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting2') }}</a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    {{--<h6 class="page-title">{{__('Dashboard.people_Plan.details_Header')}}</h6>
                        <img
                        class="w3-margin-bottom col-md-12 col-sm-12 col-xs-12 img-responsive center-block"
                        src="assets/image/users.jpg">--}}
                    <form class="w3-margin-top form-horizontal form-label-left"
                          id="addPeople_Form_Roles">
                        <!-- Roles -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="roles">
                                <small
                                    class="text-navy"> {{__('Dashboard.public.form.roles')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <select style="width:100%;"
                                        class="form-control"
                                        name="roles">
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Permissions -->
            <div id="user_PanePermissions" class="x_panel">
                <div class="x_title">
                    <h2> {{ __('Dashboard.public.form.permissions_Header') }}
                        <small></small>
                    </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                                class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                            <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                        </li>
                    <!--                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="text_align_right dropdown-menu" role="menu">
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting1') }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting2') }}</a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    {{--<h6 class="page-title">{{__('Dashboard.people_Plan.details_Header')}}</h6>
                        <img
                        class="w3-margin-bottom col-md-12 col-sm-12 col-xs-12 img-responsive center-block"
                        src="assets/image/users.jpg">--}}
                    <form class="w3-margin-top form-horizontal form-label-left"
                          id="addPeople_Form_Permissions">
                        <!-- Permissions -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="permissions">
                                <small
                                    class="text-navy"> {{__('Dashboard.public.form.permissions')}}</small><!--<span
                                    class="required">*</span>-->:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <select style="width:100%;"
                                        class="form-control"
                                        name="permissions">
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Phone and address -->
        <div class="col-md-6 col-sm-6 col-xs-12">
            <!-- Address -->
            <div id="user_PanelAddresses" class="x_panel">
                <div class="x_title">
                    <h2> {{ __('Dashboard.public.form.addresses_Header') }}
                        <small></small>
                    </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                                class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                            <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                        </li>
                    <!--                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting1') }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting2') }}</a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <!-- Search Address -->
                    <div class="w3-margin-bottom" id="">
                        <select class=" form-control has-feedback-left col-md-12 col-sm-12 col-xs-12"
                                name="address_Search">
                            {{--@foreach(Lang::get('Dashboard.shop_Plan.showroom') as $key=>$value)
                                <option value={{$key }}>{{$value}}</option>
                            @endforeach--}}
                        </select>
                    </div>
                    <!-- Map -->
                    <div class="w3-margin-bottom col-md-12 col-sm-12 col-xs-12"
                         id="addPeople_Form_Addresses_Map"
                         style="height: 240px; width: 100%; border: 1px solid #AAA;"></div>
                    <!-- Addresses & Postalcode -->
                    <form class="w3-margin-top form-horizontal form-label-left"
                          id="addPeople_Form_Addresses">
                        <!-- Postalcode: -->
                        <div class="item w3-margin-top form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="postal_Code">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.postal_Code')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="1,{{$end_SSN}}"--}}
                                       {{--data-inputmask="'mask' : {{$inputmask}}"--}}
                                       {{--data-inputmask="'mask': '99/99/9999'"--}}
                                       name="postal_Code"
                                       placeholder="{{__('Dashboard.public.form.postal_Code_Placeholder')}}"
                                       {{--required="required"--}} type="text">
                            </div>
                        </div>
                        <!-- Addresses: -->
                        <div class="item  form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="address">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.address')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input
                                    class="form-control "
                                    data-validate-length-range="2,300"
                                    name="address"
                                    placeholder="{{__('Dashboard.public.form.address_Placeholder')}}"
                                    {{-- required="required"--}} type="text">
                            </div>

                        </div>
                        <!-- Button add : -->
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <button name="btn_Add_Address"
                                    type="button"
                                    class="col-md-6 col-sm-6 col-xs-6 col-md-push-3 col-sm-push-3 col-xs-push-3 w3-margin-top   btn btn-success btn-xs">
                                <i class="fa fa-plus"></i></button>
                        </div>
                    </form>
                    <!-- Table address list -->
                    <div id="addPeople_Form_Addresses_Table_Add">
                        <div class="col-md-12 col-sm-12 col-xs-12 table-responsive">
                            <table id="addPeople_Form_Addresses_Table"
                                   class="table table-striped projects">
                                <thead id="addPeople_Form_Addresses_Table_Thead">
                                <tr>
                                    <th style="width: 1%">#</th>
                                    <th style="width: 70%">{{__('Dashboard.public.form.address_Table_Head_Addresses_Added')}}</th>
                                    <th style="width: 30%">{{__('Dashboard.public.form.postal_Code')}}</th>
                                    <th style="width: 5%">
                                        #{{__('Dashboard.public.form.table_Head_Edit')}}</th>
                                </tr>
                                </thead>
                                <tbody id="addPeople_Form_Addresses_Table_Tbody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Phone -->
            <div id="user_PanelPhones" class="x_panel">
                <div class="x_title">
                    <h2> {{ __('Dashboard.public.form.phones_Header') }}
                        <small></small>
                    </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                                class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                        <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                            <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                        </li>
                    <!--                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting1') }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ __('Dashboard.people_Plan.setting2') }}</a>
                                </li>

                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <!-- Mobile and Fixed line -->
                    <form class="w3-margin-top form-horizontal form-label-left"
                          id="addPeople_Form_Phones">
                        <!-- Phone MOBILE: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="mobile">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.phone_MOBILE')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input data-select="MOBILE"
                                       class="form-control"
                                       {{--data-validate-length-range="8,20"--}}
                                       name="mobile"
                                       {{--placeholder="{{__('Dashboard.public.form.phone_MOBILE_Placeholder')}}"--}}
                                       required="required" type="text">
                            </div>
                        </div>
                        <!-- Phone FIXED_LINE: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="fixed_Line">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.phone_FIXED_LINE')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-md-9 col-sm-9 col-xs-12">
                                <input data-select="FIXED_LINE"
                                       class="form-control"
                                       {{--data-validate-length-range="8,20"--}}
                                       name="fixed_Line"
                                       {{--required="required"--}} type="text">
                            </div>
                        </div>
                        <!-- Button add : -->
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <button name="btn_Add_Phones"
                                    type="button"
                                    class="col-md-6 col-sm-6 col-xs-6 col-md-push-3 col-sm-push-3 col-xs-push-3 w3-margin-top   btn btn-success btn-xs">
                                <i class="fa fa-plus"></i></button>
                        </div>
                    </form>
                    <!-- Table phone list -->
                    <div id="addPeople_Form_Phones_Table_Add">
                        <div class="col-md-12 col-sm-12 col-xs-12 table-responsive">
                            <table id="addPeople_Form_Phones_Table"
                                   class="table table-striped projects">
                                <thead id="addPeople_Form_Phones_Table_Thead">
                                <tr>
                                    <th style="width: 1%">#</th>
                                    <th style="width: 70%">{{__('Dashboard.public.form.phone_Table_Head_Phones_Added')}}</th>
                                    <th style="width: 30%">{{__('Dashboard.public.form.phone_Type')}}</th>
                                    <th style="width: 5%">
                                        #{{__('Dashboard.public.form.table_Head_Edit')}}</th>
                                </tr>
                                </thead>
                                <tbody id="addPeople_Form_Phones_Table_Tbody">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Button user add : -->
        <div class="col-md-12 col-sm-12 col-xs-12">
            <button name="add_User"
                    type="button"
                    class="col-md-6 col-sm-6 col-xs-6 col-md-push-3 col-sm-push-3 col-xs-push-3 w3-margin-top   btn btn-success btn-round btn-sm">
                <i class="fa fa-plus"></i>
            </button>
            <div class="clearfix"></div>
            <div class="ajax-load text-center hidden">
                <p>
                    <img
                        src="assets/image/loader.gif">{{__('Dashboard.public.loading_more_items')}}
                </p>
            </div>
            <div class="ajax-load-end text-center"></div>
            <button name="cancel_EditUser"
                    type="button"
                    class="col-md-6 col-sm-6 col-xs-6 col-md-push-3 col-sm-push-3 col-xs-push-3 w3-margin-top   btn btn-danger btn-round btn-sm hidden">
                {{__('Dashboard.public.cancel')}}
            </button>
        </div>
    </div>
    <!-- User added table -->
    <div id="user_Added" class="w3-margin-top">
        <div class="x_panel">
            <div class="x_title">
                <h2> {{ __('Dashboard.public.form.user_added_header') }}
                    <small></small>
                </h2>
                <ul class="nav navbar-right panel_toolbox ">
                    <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                            class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                    <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                        <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                    </li>
                    <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.update')}}">
                        <a name="refresh_DataTable" class=""><i class="fa fa-refresh "></i></a>
                    </li>
                <!--                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="#">{{ __('Dashboard.people_Plan.setting1') }}</a>
                            </li>
                            <li>
                                <a href="#">{{ __('Dashboard.people_Plan.setting2') }}</a>
                            </li>
                        </ul>
                    </li>
                    <li><a id="addPeople_Form_UserAdded_Table_Btn_Refresh"><i
                                id="addPeople_Form_UserAdded_Table_Btn_Refresh_Icon" class="fa fa-refresh "></i></a></li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                <!-- Table user list -->
                <div class=" table-responsive">
                    <table name="users"
                           class="table table-striped jambo_table print-padding-tr-td-5">
                        <thead id="addPeople_Form_UserAdded_Table_Thead">
                        <tr>
                            <th style="width: 1%">#</th>
                            <th>{{__('Dashboard.public.form.first_Name')}}</th>
                            <th>{{__('Dashboard.public.active')}}</th>
                            <th>{{__('Dashboard.public.profile_picture')}}</th>
                            <th>{{__('Dashboard.public.signature')}}</th>
                            <th>{{__('Dashboard.public.form.gender')}}</th>
                            <th>{{__('Dashboard.public.form.ssn')}}</th>
                            <th>{{__('Dashboard.public.form.date_Of_Birth')}}</th>
                            <th>{{__('Dashboard.public.form.email')}}</th>
                            <th>{{__('Dashboard.public.form.phone')}}</th>
                            <th>{{__('Dashboard.public.form.address')}}</th>
                            <th>{{__('Dashboard.public.form.roles')}}</th>
                            <th>{{__('Dashboard.public.form.permissions')}}</th>
                            <th style="width: 5%">
                                #{{__('Dashboard.public.form.table_Head_Edit')}}</th>
                        </tr>
                        </thead>
                        <tbody id="addPeople_Form_UserAdded_Table_Tbody">

                        </tbody>
                        {{--<tbody id="addPeople_Form_UserAdded_Table_Tbody">
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="1">
                            <td>
                                <p>1</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    admin
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-21 15:44:22</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    admin
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    زن
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    1998-02-24
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    admin.laravel@oscorp.com
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="2">
                            <td>
                                <p>2</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    demo2
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-29 06:16:00</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    demo2
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    زن
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    1234
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    1979-06-26
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    demo2.laravel@oscorp.com
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="64">
                            <td>
                                <p>3</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-30 12:24:02</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    111ss
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="65">
                            <td>
                                <p>4</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-30 12:25:49</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    111ss
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="66">
                            <td>
                                <p>5</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 01:17:44</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="67">
                            <td>
                                <p>6</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    1111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 01:21:35</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    1111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="68">
                            <td>
                                <p>7</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    1111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 06:41:55</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    1111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="69">
                            <td>
                                <p>8</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 06:45:00</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    11111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="70">
                            <td>
                                <p>9</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 06:48:04</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    11111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="71">
                            <td>
                                <p>10</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:04:51</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    1111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="72">
                            <td>
                                <p>11</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    1111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:12:57</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    11111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="73">
                            <td>
                                <p>12</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:18:00</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    11111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="74">
                            <td>
                                <p>13</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:30:20</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    1111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="75">
                            <td>
                                <p>14</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:31:09</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    1111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="76">
                            <td>
                                <p>15</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    1111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:37:14</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        <tr data-select="userViewOrDeleteOrEditAddedTable" data-id="77">
                            <td>
                                <p>16</p>
                            </td>
                            <td>
                                <a class="first_Name" style="">
                                    1111
                                </a>
                                <br>
                                <small class="text-right" style="direction: ltr;">ویرایش شده</small>
                                <br>
                                <small class="" style="">1399-04-31 07:38:09</small>
                            </td>
                            <td>
                                <a class="last_name" style="">
                                    111
                                </a>
                            </td>
                            <td>
                                <a class="gender" style="">
                                    مرد
                                </a>
                            </td>
                            <td>
                                <a class="ssn" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="date_Of_Birth" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <a class="email" style="">
                                    موجود نمی باشد
                                </a>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPhone" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewAddress" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewPersonType" class="btn btn-primary btn-xs " id="">
                                    <i class="fa fa-eye"></i> مشاهده
                                </button>
                            </td>
                            <td>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewEdit" class="btn btn-info btn-xs " id="">
                                    <i class="fa fa-pencil"></i> ویرایش
                                </button>
                                <button data-select="userViewOrDeleteOrEditAddedTableViewDelete" class="btn btn-danger btn-xs " id="">
                                    <i class="fa fa-trash-o"></i> حذف
                                </button>
                            </td>
                        </tr>
                        </tbody>--}}
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>





