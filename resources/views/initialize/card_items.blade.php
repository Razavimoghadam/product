<div id="component_CardItems_Setting" data_Remove='component' class="row hidden">
    <!-- Supplier added table -->
    <div id="cardItem_Added" class="w3-margin-top">
        <div class="x_panel">
            <div class="x_title">
                <h2> {{ __('Dashboard.public.your_shopping_cart') }}
                    <small></small>
                </h2>
                <ul class="nav navbar-right panel_toolbox ">
                    <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.public.minimize')}}"><a
                            class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                    <li data-toggle_tooltip="tooltip" title="{{__('Dashboard.dashboard.menu.dashboard_1')}}">
                        <a name="default_Dashboard" class=""><i class="fa fa-home "></i></a>
                    </li>
                    <li><a name="refresh_DataTable" class=""><i class="fa fa-refresh "></i></a></li>
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
                    <li><a id="addPeople_Form_SupplierAdded_Table_Btn_Refresh"><i
                                id="addPeople_Form_SupplierAdded_Table_Btn_Refresh_Icon" class="fa fa-refresh "></i></a></li>
                    <li><a class="close-link"><i class="fa fa-close"></i></a></li>-->
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                <!-- supplier list -->
                <div class=" table-responsive">
                    <table name="cardItems"
                           class="table table-striped jambo_table print-padding-tr-td-5">
                        <thead>
                        <tr>
                            <th style="width: 1%">#</th>
                            <th>{{__('Dashboard.public.form.first_Name')}}</th>
                            <th>{{__('Dashboard.public.the_amount/amount')}}</th>
                            <th>{{__('Dashboard.public.number')}}</th>
                            <th style="width: 5%">
                                #{{__('Dashboard.public.form.table_Head_Edit')}}</th>
                        </tr>
                        </thead>
                        <tbody >
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>





