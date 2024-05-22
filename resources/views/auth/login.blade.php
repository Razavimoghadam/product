@extends('auth.layouts.auth')

@section('body_class','login')

@section('content')
    <div>
        <div class="login_wrapper">
            <div class="animate form login_form">
                <section class="login_content">
                    <form method="POST" action="{{ url('/login') }}">
                        @csrf
                        <h1>{{ __('views.auth.login.header') }}</h1>

                        <div>
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}"
                                   placeholder="{{ __('views.auth.login.input_0') }}" required autofocus>
                        </div>
                        <div>
                            <input id="password" type="password" class="form-control" name="password"
                                   placeholder="{{ __('views.auth.login.input_1') }}" required>
                        </div>
<!--                        <div class="checkbox al_left">
                            <label>
                                <input type="checkbox"
                                       name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('views.auth.login.input_2') }}
                            </label>
                        </div>-->

                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif

                        @if (!$errors->isEmpty())
                            <div class="alert alert-danger" role="alert">
                                {!! $errors->first() !!}
                            </div>
                        @endif

                        <div>
                            <button type="submit" id="btn_Login2" class="btn btn-default submit" {{--type="submit"--}}>{{ __('views.auth.login.action_0') }}</button>
<!--                            <a class="reset_pass" href="{{ route('password.request') }}">
                                {{ __('views.auth.login.action_1') }}
                            </a>-->
                        </div>

                        <div class="clearfix"></div>

<!--                        <div class="separator">
                            <span>{{ __('views.auth.login.message_0') }}</span>
                            <div>
                                <a href="{{ route('social.redirect', ['google']) }}" class="btn btn-success btn-google-plus">
                                    <i class="fa fa-google-plus"></i>
                                    Google+
                                </a>
                                <a href="{{ route('social.redirect', ['facebook']) }}" class="btn btn-success btn-facebook">
                                    <i class="fa fa-facebook"></i>
                                    Facebook
                                </a>
                                <a href="{{ route('social.redirect', ['twitter']) }}" class="btn btn-success btn-twitter">
                                    <i class="fa fa-twitter"></i>
                                    Twitter
                                </a>
                            </div>
                        </div>

                        @if(config('auth.users.registration'))
                            <div class="separator">
                                <p class="change_link">{{ __('views.auth.login.message_1') }}
                                    <a href="{{ route('register') }}" class="to_register"> {{ __('views.auth.login.action_2') }} </a>
                                </p>

                                <div class="clearfix"></div>
                                <br/>

                                <div>
                                    <div class="h1">{{ config('app.name') }}</div>
                                    <p>&copy; {{ date('Y') }} {{ config('app.name') }}. {{ __('views.auth.login.copyright') }}</p>
                                </div>
                            </div>
                        @endif-->
                    </form>
                </section>
            </div>
        </div>
    </div>
@endsection

@section('styles')
    @parent

    {{ Html::style(mix('assets/auth/css/custom-login.css')) }}

@endsection
@section('scripts')
    @parent

    {{ Html::script(mix('assets/auth/js/custom-login.js')) }}

@endsection
