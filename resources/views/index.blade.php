<!DOCTYPE html>
@php

        //if (\Illuminate\Support\Facades\App::getLocale()=="fa"){
        if (auth()->user()->locale=="fa"){
        $i = "rtl";
        $end_SSN=12;
        $inputmask="'999-999999-9'";

    } else{
            $i = "ltr";
            $end_SSN=11;
            $inputmask="'999-99-9999'";
        }
     $rtl_Language_Code = collect(['fa']);

@endphp
{{--<html lang="{{ app()->getLocale() }}" dir="{{$i}}">--}}
<html lang="{{ auth()->user()->locale }}" dir="{{$i}}">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{--CSRF Token--}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

<!--    <link rel="manifest" href="assets/app_settings/pwa/manifest.json">-->

    {{--Title and Meta--}}
    <title>{{__('Dashboard.title.dashboard')}}</title>
    <div id="master_CSS">
{{--        @if(App::getLocale()=='fa')--}}
        @if(auth()->user()->locale=='fa')
            {{ Html::style(mix('assets/bootstrap/css/bootstrap.min.css')) }}
            {{ Html::style(mix('assets/bootstrap/css/bootstrap-rtl.min.css')) }}
        @else
            {{ Html::style(mix('assets/bootstrap/css/bootstrap.min.css')) }}
        @endif
        {{ Html::style(mix('assets/dashboard/css/app-dashboard.css')) }}
{{--        @if(App::getLocale()=='fa')--}}
        @if(auth()->user()->locale=='fa')
            {{ Html::style(mix('assets/custom/css/custom_fa.css')) }}
            {{ Html::style(mix('assets/custom/css/progress-wizard_fa.min.css')) }}
        @else
            {{ Html::style(mix('assets/custom/css/custom_en.css')) }}
            {{ Html::style(mix('assets/custom/css/progress-wizard_en.min.css')) }}
        @endif
    </div>
    {{ Html::script(mix('assets/dashboard/js/master-dashboard.js')) }}
    {{ Html::script(mix('assets/moment/jalali/jalali-moment.browser.js')) }}
    {{ Html::script(mix('assets/moment/moment-timezone/moment-timezone-with-data.min.js')) }}




    {{--@if(App::getLocale()=='fa')
        {{ Html::script(mix('assets/supermarket/app/js/moment/jalali/jalali-moment.browser.js')) }}
    @else
        {{ Html::script(mix('assets/supermarket/app/js/moment/milady/moment.js')) }}
    @endif--}}
</head>

<body style="color:black" class="nav-md loaded">
<div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
</div>

<div class="container body">
    <div class="main_container">
        <!-- Menu -->
        <div id="master_Menu">
            @include('menus.menu_gentle')
        </div>
        <!-- Top navigation -->
        <div id="master_TopNav">
            @include('top_navs.top_nav_gentle')
        </div>
        <!-- Page content -->
        <div class="right_col" role="main">
            <!-- top tiles -->
<!--            <div id="master_TopTiles">
                @include('top_tiles.top_tile_gentle')
            </div>-->
            <!-- Component -->
            <div id="master_Body">
                @include('initialize.dashboard_1')
                @include('initialize.users')
                @include('initialize.products')
                @include('initialize.card_items')
                @include('cartable.cartable')
                @include('settings.system')
                <br/>
            </div>
            <!-- /modal  -->
            <!-- ==> public  ==> View etc  -->
            <div>
                @component('components.Modal_Xl',
            [ 'id' => 'modal_Etc_View',
              'modal_Title_Id'=> 'modal_Etc_View_Modal_Title',
              //'modal_Title'=> __('Dashboard.public.modal.modal_Title_Phone_View'),
            ])
                    @slot('modal_Body')
                        <div id="modal_Etc_View_Add"></div>
                        <div class="clearfix"></div>
                        <div class="ajax-load text-center hidden">
                            <p>
                                <img
                                    src="assets/image/loader.gif">{{__('Dashboard.public.loading_more_items')}}
                            </p>
                        </div>
                        <div class="ajax-load-end text-center"></div>
                    @endslot
                @endcomponent
            </div>
        </div>
    </div>
    <!-- Footer content -->
    <footer>
        <div id="master_Footer">
            @include('footers.footer_gentle')
        </div>
    </footer>
</div>

{{--@yield("script")--}}
<div id="master_Js">
    <script src="messages.js?1500"></script>
    {{ Html::script(mix('assets/dashboard/js/app-dashboard.js')) }}
    {{ Html::script(mix('assets/dashboard/js/custom-dashboard.js')) }}
    {{ Html::script(mix('assets/dashboard/js/initialize/master.js')) }}
    {{--{{ Html::script(mix('assets/js/initialize/master.js'),['type'=>'module']) }}--}}
    {{-- <script type="text/javascript">
         // Initialize the service worker
         let newWorker;
         $('.topNav_App_Update').click(function () {
             console.log(1)
             /*if ('serviceWorker' in navigator) {
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
             console.log(3)*/
             newWorker.postMessage({ action: 'skipWaiting' });
         })

         if ('serviceWorker' in navigator) {
             navigator.serviceWorker.register('/serviceworker.js', {
                 scope: '.'
             }).then(function (registration) {
                 // Registration was successful
                 console.log('Laravel PWA: ServiceWorker registration successful with scope: ', registration.scope);
                 registration.addEventListener('updatefound', () => {

                     // An updated service worker has appeared in registration.installing!
                     newWorker = registration.installing;

                     newWorker.addEventListener('statechange', () => {

                         // Has service worker state changed?
                         switch (newWorker.state) {
                             case 'installed':
                                 // There is a new service worker available, show the notification
                                 if (navigator.serviceWorker.controller) {
                                     $('.topNav_App_Update').append(' show');
                                 }
                                 break;
                         }
                     });
                 });

             }, function (err) {
                 // registration failed :(
                 console.log('Laravel PWA: ServiceWorker registration failed: ', err);
             });
         }

         let refreshing;
         // The event listener that is fired when the service worker updates
         // Here we reload the page
         navigator.serviceWorker.addEventListener('controllerchange', function () {
             if (refreshing) return;
             window.location.reload();
             refreshing = true;
         });

     </script>--}}
    {{--Common Scripts--}}
    {{--Scripts--}}
    {{--@yield('scripts')--}}
</div>

</body>
</html>
