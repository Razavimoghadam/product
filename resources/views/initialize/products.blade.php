<div id="component_Products_Setting" data_Remove='component' class="row hidden">
    <!-- Product details -->
    <div id="product" class="row">
        <!-- Details -->
        <div class="x_panel ">
            <div class="x_title">
                <h2> {{ __('Dashboard.public.form.product_added_header') }}
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
                <!-- details and files-->
                <form name="details" class="w3-margin-top form-horizontal form-label-left">
                    <!-- details -->
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <!-- name: -->
                        <div class="item w3-margin-top form-group ">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="name">
                                <small
                                    class="text-navy"> {{__('Dashboard.public.form.first_Name')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="3,32"--}}
                                       name="name"
                                       placeholder="{{__('Dashboard.public.form.first_Name_Placeholder')}}"
                                       required="required" type="text">
                            </div>
                        </div>
                        <!-- barcode: -->
                        <div class="item w3-margin-top form-group ">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="barcode">
                                <small
                                    class="text-navy"> {{__('Dashboard.public.form.barcode')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="3,32"--}}
                                       name="barcode"
                                       placeholder="{{__('Dashboard.public.form.barcode')}}"
                                       required="required" type="text">
                            </div>
                        </div>
                        <!-- price: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="price">
                                <small
                                    class="text-navy">{{__('Dashboard.public.the_amount/amount')}}<span
                                        class="required">*</span>:</small>
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input style="direction: ltr" class="form-control"
                                       {{--data-validate-length-range="3,62" pattern="alpha"--}}
                                       name="price"
                                       placeholder="{{__('Dashboard.public.the_amount/amount')}}"
                                       required="required" type="text">
                            </div>
                        </div>
                        <!-- description: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="description">
                                <small
                                    class="text-navy">{{__('Dashboard.public.form.description')}}</small><span
                                    class="required">*</span>:
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input class="form-control"
                                       {{--data-validate-length-range="1,{{$end_SSN}}"
                                       data-inputmask="'mask' : {{$inputmask}}"--}}
                                       name="description"
                                       placeholder="{{__('Dashboard.public.form.description')}}"
                                       {{--required="required" --}}type="text">
                            </div>
                        </div>
                        <!-- enabled: -->
                        <div class="item form-group custom-control custom-switch">
                            <input id="addProduct_Form_Details_Enabled" name="enabled" type="checkbox"
                                   class="form-control custom-control-input" checked>
                            <label class="control-label col-md-3 col-sm-3 col-xs-12 custom-control-label"
                                   for="addProduct_Form_Details_Enabled">
                                <small class="text-navy">{{__('Dashboard.public.active')}}</small>
                            </label>
                        </div>
                        <!-- qty: -->
                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12"
                                   for="qty">
                                <small
                                    class="text-navy">{{__('Dashboard.public.number')}}<span
                                        class="required">*</span>:</small>
                            </label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                                <input style="direction: ltr" class="form-control"
                                       {{--data-validate-length-range="3,62" pattern="alpha"--}}
                                       name="qty"
                                       placeholder="{{__('Dashboard.public.number')}}"
                                       required="required" type="text">
                            </div>
                        </div>
                    </div>
                    <!-- files -->
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <!-- files:-->
                        <div class="item form-group ">
                            <label class="control-label col-md-12 col-sm-12 col-xs-12"
                                   for="files">
                                <small
                                    class="text-navy @if($rtl_Language_Code->contains(strtolower(app()->getLocale()))) pull-right @else pull-left @endif">{{__('Dashboard.public.product_images')}}
                                    <span class="required">*</span>:</small>
                            </label>
                            <input multiple type="file" class="filepond files col-md-12 col-sm-12 col-xs-12">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- Button product add : -->
        <div class="col-md-12 col-sm-12 col-xs-12">
            <button name="add_Product"
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
            <button name="cancel"
                    type="button"
                    class="col-md-6 col-sm-6 col-xs-6 col-md-push-3 col-sm-push-3 col-xs-push-3 w3-margin-top   btn btn-danger btn-round btn-sm hidden">
                {{__('Dashboard.public.cancel')}}
            </button>
        </div>
    </div>

    <!-- Product added table -->
    <div id="product_Added" class="w3-margin-top">
        <div class="x_panel">
            <div class="x_title">
                <h2> {{ __('Dashboard.public.form.product_added_header') }}
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
                    <li><a id="addPeople_Form_ProductAdded_Table_Btn_Refresh"><i
                                id="addPeople_Form_ProductAdded_Table_Btn_Refresh_Icon" class="fa fa-refresh "></i></a></li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                <!-- Table product list -->
                <div class=" table-responsive">
                    <table name="products"
                           class="table table-striped jambo_table print-padding-tr-td-5">
                        <thead id="addPeople_Form_ProductAdded_Table_Thead">
                        <tr>
                            <th style="width: 1%">#</th>
                            <th>{{__('Dashboard.public.form.first_Name')}}</th>
                            <th>{{__('Dashboard.public.the_amount/amount')}}</th>
                            <th>{{__('Dashboard.public.form.description')}}</th>
                            <th>{{__('Dashboard.public.number')}}</th>
                            <th>{{__('Dashboard.public.form.enable')}}/ {{__('Dashboard.public.form.disable')}}</th>
                            <th style="width: 5%">
                                #{{__('Dashboard.public.form.table_Head_Edit')}}</th>
                        </tr>
                        </thead>
                        <tbody id="addPeople_Form_ProductAdded_Table_Tbody">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>





