<div id="component_System_settings" data_Remove='component' class="row hidden">

    <!-- Page toolbox control -->
    @if($rtl_Language_Code->contains(strtolower(app()->getLocale())))
        <div id="settings_System_NextStep"
             class="page_toolbox_control col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <a id="settings_System_NextStep_Btn"
               class="pull-left text-center btn btn-sm btn-warning">{{ __('Dashboard.public.next_step') }}
                &nbsp;&nbsp;&nbsp;
                <i class="fa fa-arrow-left"></i> </a>
        </div>

    @else
        <div id="settings_System_NextStep"
             class="page_toolbox_control col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <a id="settings_System_NextStep_Btn"
               class="pull-right text-center btn btn-sm btn-warning">{{ __('Dashboard.public.next_step') }}
                &nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right"></i> </a>
        </div>
@endif
<!-- System settings -->
    <div class="row">
        <!-- Language, timezone & ets -->
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <!-- Language & timezone -->
            <div class="x_panel">
                <div class="x_title">
                    <h2> {{ __('Dashboard.settings.system.language_Timezone.x_title') }}
                        <small></small>
                    </h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <ul class="text_align_right dropdown-menu" role="menu">
                                <li>
                                    <a href="#">{{ __('Dashboard.settings.system.language_Timezone.setting1') }}</a>
                                </li>
                                <li>
                                    <a href="#">{{ __('Dashboard.settings.system.language_Timezone.setting2') }}</a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                {{--<h6 class="page-title">{{__('Dashboard.people_Plan.details_Header')}}</h6>--}}

                <!-- Language: -->
                    <div class="row">
                        <div class="item w3-margin-top w3-margin-bottom form-group">
                            <label class="control-label col-lg-3 col-md-12 col-sm-12 col-xs-12"
                                   for="settings_System_Language_Input_Lang">
                                <small
                                    class="text-navy">{{__('Dashboard.settings.system.language_Timezone.label_Language_Country_Change')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <input id="settings_System_Language_Input_Lang"
                                       class="form-control text-right"
                                       {{--data-validate-length-range="1,{{$end_SSN}}"--}}
                                       {{--data-inputmask="'mask' : {{$inputmask}}"--}}
                                       {{--data-inputmask="'mask': '99/99/9999'"--}}
                                       name="settings_System_Language_Input_Lang"
                                       placeholder="{{__('Dashboard.settings.system.language_Timezone.label_Language_Country_Change_Placeholder')}}"
                                       {{--required="required"--}} type="text">
                            </div>
                        </div>
                        <div style="margin-top: 10px" class="form-group ">
                            <label class="control-label label_form col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                   for="settings_System_Language_Select_Lang"><small
                                    class="text-navy">{{ __('Dashboard.settings.system.language_Timezone.country_Languages') }}</small>
                                {{-- <span class="required required_form">*</span>--}}
                            </label>
                            <div
                                class="form-group form_select2 col-lg-12 col-md-12 col-sm-12 col-xs-12 has-feedback">

                                <select id="settings_System_Language_Select_Lang"
                                        class="input_select2 form-control has-feedback-left "
                                        name="settings_System_Language_Select_Lang">
                                    {{-- @foreach(Lang::get('Dashboard.shop_Plan.showroom') as $key=>$value)
                                         <option value={{$key }}>{{$value}}</option>
                                     @endforeach--}}
                                </select>
                                {{--<span id="set_name_count" class=" form-control-feedback left"
                                      aria-hidden="true"></span>--}}
                            </div>
                        </div>
                    </div>
                    <div class="profile_title ">
                        <h6 class="center-block" id="settings_System_Language_ProfileTitle_Lang"></h6>
                    </div>
                    <!-- Timezone: -->
                    <div class="row">
                        <div class="item w3-margin-top form-group">
                            <label class="control-label col-lg-3 col-md-12 col-sm-12 col-xs-12"
                                   for="settings_System_Language_Input_Timezone">
                                <small
                                    class="text-navy">{{__('Dashboard.settings.system.language_Timezone.label_Timezone_Country_Change')}}</small>{{--<span
                                    class="required">*</span>--}}:
                            </label>
                            <div style="direction: ltr" class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <input id="settings_System_Language_Input_Timezone"
                                       class="form-control text-right"
                                       {{--data-validate-length-range="1,{{$end_SSN}}"--}}
                                       {{--data-inputmask="'mask' : {{$inputmask}}"--}}
                                       {{--data-inputmask="'mask': '99/99/9999'"--}}
                                       name="settings_System_Language_Input_Timezone"
                                       placeholder="{{__('Dashboard.settings.system.language_Timezone.label_Timezone_Country_Change_Placeholder')}}"
                                       {{--required="required"--}} type="text">
                            </div>
                        </div>
                        <div style="margin-top: 10px" class="form-group ">
                            <label class="control-label label_form col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                   for="settings_System_Language_Select_Timezone"><small
                                    class="text-navy">{{ __('Dashboard.settings.system.language_Timezone.country_Timezone') }}</small>
                                {{-- <span class="required required_form">*</span>--}}
                            </label>
                            <div
                                class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12 has-feedback">

                                <select id="settings_System_Language_Select_Timezone"
                                        class="input_select2 form-control has-feedback-left "
                                        name="settings_System_Language_Select_Timezone">
                                    {{-- @foreach(Lang::get('Dashboard.shop_Plan.showroom') as $key=>$value)
                                         <option value={{$key }}>{{$value}}</option>
                                     @endforeach--}}
                                </select>
                                {{--<span id="set_name_count" class=" form-control-feedback left"
                                      aria-hidden="true"></span>--}}
                            </div>
                        </div>
                    </div>
                    <div class="profile_title ">
                        <h6 class="center-block"
                            id="settings_System_Language_ProfileTitle_Timezone"></h6>
                    </div>
                    <!-- Button apply changes : -->
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <button id="settings_System_Language_Btn_Apply_Changes"
                                type="button"
                                class="col-md-6 col-sm-6 col-xs-6 col-md-push-3 col-sm-push-3 col-xs-push-3 w3-margin-top   btn btn-success btn-xs">
                            {{__('Dashboard.public.form.apply_Changes')}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




