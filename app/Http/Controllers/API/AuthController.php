<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Auth\User\User;
use Auth;
use GrahamCampbell\Binput\Facades\Binput;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{


    protected $request;

    protected $data;

    public function __construct(Request $request)
    {
        $this->data = Binput::all();
        $this->request = $request;
    }

    public function showLoginForm(Request $request)
    {
        if (Auth::check()) {
            return redirect()->intended('dashboard');
        }

        return view('auth.login');
    }

    public function showRegistrationForm()
    {
        return view('auth.register');
    }

    public function authenticate(Request $request)
    {
        $rules = [
            'email' => 'required|email|max:255',
            'password' => 'required|string',
            /* 'password' => 'required|
                min:6|
                regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/|
                confirmed',
            'password' => [
                'required',
                'string',
                //'min:10',             // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                'regex:/[@$!%*#?&]/', // must contain a special character
            ],*/
        ];
        Validator::make($this->data, $rules)->validate();

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        //if (Auth::attempt($credentials)) {
        if (Auth::attempt(['email' => $this->data['email'], 'password' => $this->data['password'], 'active' => 1])) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => __('auth.failed'),
        ])->onlyInput('email');
        //return response()->json(['error' => __('auth.failed')], 401);
    }

    public function register()
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email|max:255|unique:users',
            /* 'password' => 'required|
                min:6|
                regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/|
                confirmed',*/
            /*'password' => [
                'required',
                'string',
                //'min:10',             // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                'regex:/[@$!%*#?&]/', // must contain a special character
            ],*/
            'password' => 'required|
               min:6|
               regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/',
            'password_confirmation' => 'required|
               min:6|
               regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%]).*$/|
               same:password',
        ];

        Validator::make($this->data, $rules);

        /*if ($validator->fails()) {
            return response()->json([ 'error'=> $validator->errors() ]);
        }*/

        //$data = $request->all();

        $data['password'] = Hash::make($this->data->password);

        $user = User::create($data);
        $success['token'] = $user->createToken('AppName')->accessToken;

        return response()->json(['success' => $success], 200);

        /*$oClient = OClient::where('password_client', 1)->first();
        return $this->getTokenAndRefreshToken($oClient, $user->email, $password);*/

    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }













}

