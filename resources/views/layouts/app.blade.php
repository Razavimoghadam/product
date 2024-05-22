<!DOCTYPE html>
@php

        if (\Illuminate\Support\Facades\App::getLocale()=="fa"){
        $dir = "rtl";
        $text_align='text-right';
    }
        else{
            $dir = "ltr";
            $text_align='text-left';
        }

@endphp
<html lang="fa" dir="{{$dir}}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--CSRF Token--}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{--Title and Meta--}}

        {{--Common App Styles--}}
{{--        {{ Html::style(mix('assets/app/css/app.css')) }}--}}

        {{--Styles--}}
        @yield('styles')
        {{ Html::script(mix('assets/auth/js/app-login.js')) }}
        {{--Head--}}
        @yield('head')

    </head>
    <body class="@yield('body_class') {{$text_align}}">

        {{--Page--}}
        @yield('page')

        {{--Common Scripts--}}
        <script src="messages.js?1500"></script>

        {{--Laravel Js Variables--}}
        {{--@tojs--}}

        {{--Scripts--}}
        @yield('scripts')
    </body>
</html>
