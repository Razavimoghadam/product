<div class="col-md-3 left_col ">
    <div class="left_col scroll-view">
        <!-- Menu logo -->
        <div class="navbar nav_title" style="border: 0;">
            <a href="{{ config('app.url_not_change') }}">
                <img role="button" {{--style="width: 300px;"--}}
                class="w3-margin-bottom w3-margin-top center-margin col-md-10 col-sm-10 col-xs-12 img-responsive center-block"
                     src="{{ config('app.variable_settings.company_logo') }}">
            </a>
        <!--            <a href="{{ config('app.url') }}" class="site_title"><i
                    class="fa fa-paw"></i> <span>{{ config('app.variable_settings.logo_description') }}</span></a>-->
        </div>
        <div class="clearfix"></div>
        <!-- Menu profile quick info -->
        <div style="margin-top:110px" class="profile clearfix">
            <div class="profile_pic">
                @if(Auth::user()->gender == 'Mr')
                    <img src="assets/image/user-mr.png" class="img-circle profile_img"
                         alt="{{__('Dashboard.dashboard.menu.profile_picture')}}">
                @else
                    <img src="assets/image/user-ms.png" class="img-circle profile_img"
                         alt="{{__('Dashboard.dashboard.menu.profile_picture')}}">
                @endif
            </div>
            <div class="profile_info">
                <span>{{__('Dashboard.dashboard.menu.welcome')}}</span>
                <h2>{{Auth::user()->getField()}}</h2>
            </div>
        </div>
        <br/>
        <!-- Sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <!-- Function -->
            <div class="menu_section">
                <!-- Description -->
                <h3>{{__('Dashboard.dashboard.menu.function')}}</h3>
                <!-- Icons -->
                <ul class="nav side-menu">
                    <!-- Dashboards -->
                    @can('داشبورد')
                        <li><a><i class="fa fa-home"></i> {{__('Dashboard.dashboard.menu.home')}} <span
                                    class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                @can('داشبورد 1')
                                    <li>
                                        <a id="menu_Home_Dashboard_1">{{__('Dashboard.dashboard.menu.dashboard_1')}}</a>
                                    </li>
                                @endcan
                                {{--<li><a href="{{ url('/') }}">Dashboard2</a>
                                </li>
                                <li><a href="{{ url('/') }}">Dashboard3</a>
                                </li>--}}
                            </ul>
                        </li>
                    @endcan

                <!-- Users -->
                    @can('کاربران')
                        <li>
                            <a><i class="fa fa-users"></i> {{__('Dashboard.dashboard.menu.persons_and_users')}} <span
                                    class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                @can('ویرایش کاربران')
                                    <li>
                                        <a id="menu_PersonsAndUsers_AddEdit">{{__('Dashboard.dashboard.menu.add_edit')}}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcan
                <!-- Products -->
                    @can('محصول')
                        <li>
                            <a><i class="fa fa-cubes"></i> {{__('Dashboard.dashboard.menu.products')}} <span
                                    class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                @can('منو -> اضافه/ ویرایش کردن -> محصول')
                                    <li>
                                        <a id="menu_Products_AddEdit">{{__('Dashboard.dashboard.menu.add_edit')}}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcan
                <!-- Settings -->
                    @can('تنظیمات')
                        <li>
                            <a><i class="fa fa-cog"></i> {{__('Dashboard.public.setting')}} <span
                                    class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                @can('ویرایش تنظیمات سیستم')
                                    <li>
                                        <a id="menu_Settings_System">{{__('Dashboard.dashboard.menu.system_settings')}}</a>
                                    </li>
                                @endcan
                                @can('ویرایش تنظیمات پروفایل')
                                    <li>
                                        <a id="menu_Settings_Profile">{{__('Dashboard.dashboard.menu.profile_settings')}}</a>
                                    </li>
                                @endcan
                            </ul>
                        </li>
                    @endcan
                </ul>
            </div>
            <!-- Reports -->
            @can('گزارش')
                <div class="menu_section">
                    <!-- Description -->
                    <h3>{{__('Dashboard.dashboard.menu.reports')}}</h3>
                    <!-- Icons -->
                    <ul class="nav side-menu">
                        <!-- WF project -->
                        @can('تحیل و گزارش پروژه ها')
                            <li>
                                <a><i class="fa fa-bar-chart"></i> {{__('Dashboard.dashboard.menu.analysis_and_reporting_of_projects')}}
                                    <span
                                        class="fa fa-chevron-down"></span></a>
                                <ul class="nav child_menu">
                                    @can('تحیل و گزارش پروژه ها -> گزارش کلی')
                                        <li>
                                            <a id="menu_Report_ReportingOfProjects_AnalysisOfGeneralWf">{{__('Dashboard.dashboard.menu.general_report')}}</a>
                                        </li>
                                    @endcan
                                    @can('تحیل و گزارش پروژه ها -> بر اساس نقش')
                                        <li>
                                            <a id="menu_Report_ReportingOfProjects_AnalysisOfDetailedByRoleWf">{{__('Dashboard.dashboard.menu.report_analysis_by_role')}}</a>
                                        </li>
                                    @endcan
                                    @can('تحیل و گزارش پروژه ها -> بر اساس کاربر')
                                        <li>
                                            <a id="menu_Report_ReportingOfProjects_AnalysisOfDetailedByUserWf">{{__('Dashboard.dashboard.menu.report_analysis_by_user')}}</a>
                                        </li>
                                    @endcan
                                </ul>
                            </li>
                        @endcan

                    <!-- Invoices -->
                    <!--                        <li><a><i class="fa fa-file-text"></i> {{__('Dashboard.dashboard.menu.invoices')}} <span
                                    class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                <li><a id="menu_Reports_SalesInvoice">{{__('Dashboard.dashboard.menu.invoice')}}</a>
                                </li>
                            </ul>
                        </li>-->
                        <!-- Etc -->
                        {{--<li><a><i class="fa fa-windows"></i> Extras <span class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                <li><a href="page_403.html">403 Error</a></li>
                                <li><a href="page_404.html">404 Error</a></li>
                                <li><a href="page_500.html">500 Error</a></li>
                                <li><a href="plain_page.html">Plain Page</a></li>
                                <li><a href="login.html">Login Page</a></li>
                                <li><a href="pricing_tables.html">Pricing Tables</a></li>
                            </ul>
                        </li>
                        <li><a><i class="fa fa-sitemap"></i> Multilevel Menu <span
                                    class="fa fa-chevron-down"></span></a>
                            <ul class="nav child_menu">
                                <li><a href="#level1_1">Level One</a>
                                <li><a>Level One<span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li class="sub_menu"><a href="level2.html">Level Two</a>
                                        </li>
                                        <li><a href="#level2_1">Level Two</a>
                                        </li>
                                        <li><a href="#level2_2">Level Two</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#level1_2">Level One</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)"><i class="fa fa-laptop"></i> Landing Page <span
                                    class="label label-success pull-right">Coming Soon</span></a></li>--}}
                    </ul>
                </div>
            @endcan
        </div>
        <!-- Menu footer buttons -->
        <div class="sidebar-footer hidden-small">
            <a class="topNav_Navbar_Dropdown_Setting" data-toggle="tooltip" data-placement="top"
               title="{{__('Dashboard.public.setting')}}">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top"
               title="{{__('Dashboard.public.fullScreen')}}">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top"
               title="{{__('Dashboard.public.lock')}}">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top"
               title="{{__('Dashboard.public.logout')}}" href="{{ url('/logout') }}">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</div>
