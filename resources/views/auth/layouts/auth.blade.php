@extends('layouts.app')

@section('page')

    {{--Region Content--}}
    @yield('content')

@endsection

@section('styles')
    @if(App::getLocale()=='fa')
        {{ Html::style(mix('assets/bootstrap/css/bootstrap.min.css')) }}
        {{ Html::style(mix('assets/bootstrap/css/bootstrap-rtl.min.css')) }}
    @else
        {{ Html::style(mix('assets/bootstrap/css/bootstrap.min.css')) }}
    @endif
    {{ Html::style(mix('assets/auth/css/app-login.css')) }}
    @if(App::getLocale()=='fa')
        {{ Html::style(mix('assets/custom/css/custom_fa.css')) }}
    @else
        {{ Html::style(mix('assets/custom/css/custom_en.css')) }}
    @endif
@endsection











