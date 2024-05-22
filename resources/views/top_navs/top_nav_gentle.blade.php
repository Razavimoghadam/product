<div class="top_nav">
    <div class="nav_menu">
        <nav>
            <!-- Menu toggle -->
            <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
            </div>
            <!-- Message & Setting -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Setting -->
                <li class="">
                    <ul class="dropdown-menu  ">
                        <li>
                            <a {{--href="javascript:;"--}}>
                                <span class="">{{__('Dashboard.public.profile')}}</span>
                                <i class="fa fa-user pull-right"></i>
                            </a>
                        </li>
                        <li>
                            <a class="topNav_Navbar_Dropdown_Setting">
                                <span class="">{{__('Dashboard.public.setting')}}</span>
                                <span class="badge bg-red fa fa-cog pull-right">50%</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="">{{__('Dashboard.public.help')}}</span>
                                <i class="fa fa-2x fa-question pull-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="{{ url('/logout') }}">
                                <span class="">{{__('Dashboard.public.logout')}}</span>
                                <i class="fa fa-sign-out  pull-right"></i>
                            </a>
                        </li>
                    </ul>
                    <a href="javascript:" class="user-profile dropdown-toggle" data-toggle="dropdown"
                       aria-expanded="false">
                        @if(Auth::user()->gender == 'Mr')
                            <img src="assets/image/user-mr.png"
                                 alt="{{__('Dashboard.dashboard.menu.profile_picture')}}">
                        @else
                            <img src="assets/image/user-ms.png"
                                 alt="{{__('Dashboard.dashboard.menu.profile_picture')}}">
                        @endif
                        {{Auth::user()->getField()}}
                        <span class="fa fa-angle-down"></span>
                    </a>
                </li>
                <!-- Message -->
                <!--                <li role="presentation" class="dropdown">
                    <a href="javascript:" class="dropdown-toggle info-number" data-toggle="dropdown"
                       aria-expanded="false">
                        <i class="fa fa-envelope-o"></i>
                        <span class="badge bg-green">6</span>
                    </a>
                    <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                        <li>
                            <a>
                                        <span class="image"><img src="/assets/image/img.jpg"
                                                                 alt="Profile Image"/></span>
                                <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                                <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                        <span class="image"><img src="/assets/image/img.jpg"
                                                                 alt="Profile Image"/></span>
                                <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                                <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                        <span class="image"><img src="/assets/image/img.jpg"
                                                                 alt="Profile Image"/></span>
                                <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                                <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                        <span class="image"><img src="/assets/image/img.jpg"
                                                                 alt="Profile Image"/></span>
                                <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                                <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                            </a>
                        </li>
                        <li>
                            <div class="text-center">
                                <a>
                                    <strong>See All Alerts</strong>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>-->
                <!-- App update -->
                {{--<li>
                    <a role="button" class="topNav_App_Update" id="topNav_App_Update">
                        <i class="fa fa-refresh"></i>&nbsp;&nbsp;
                        {{__('Dashboard.dashboard.top_nav.software_update')}}
                        <span class="badge bg-green">6</span>
                    </a>
                </li>--}}
                <!-- User active role -->
                <li class="">
                    <ul class="dropdown-menu  topNav_User_Active_Role">
                        @foreach(Auth::user()->roles()->get() as $key=>$value)
                            <li>
                                <a value="{{$value->name}}" name="change_User_Active_Role">
                                    <span class="">{{$value->name_text}}</span>
                                </a>
                            </li>
                        @endforeach
                    </ul>
                    <a href="javascript:" class=" dropdown-toggle" data-toggle="dropdown"
                       aria-expanded="false">
                        {{Auth::user()->active_role()->first()->name_text}}
                        <span class="fa fa-angle-down"></span>
                    </a>
                </li>
                <!-- card items -->
                <li>
                    <a role="button" class="topNav_CardItems" id="topNav_CardItems">
                        <i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;
                        {{__('Dashboard.dashboard.top_nav.shopping_cart')}}
                        <span class="badge bg-green">{{Auth::user()->cardItems()->count()}}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
