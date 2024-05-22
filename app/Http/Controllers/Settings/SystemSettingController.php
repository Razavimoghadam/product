<?php

namespace App\Http\Controllers\Settings;


use App\Models\Auth\User\User as User_System;

use App\Rules\Timezone;
use Axiom\Rules\CountryCode;
use GrahamCampbell\Binput\Facades\Binput;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class SystemSettingController extends Controller
{

    protected $request;
    protected $data;
    protected $data_All;
    protected $user;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->middleware(['auth']);
        $this->data_All = Binput::all();
        if (isset($this->data_All['Data'])) {
            $this->data = Binput::get('Data');
        }
        /* $this->middleware('user', ['only' => ['set_Or_Edit_User']]);
         $this->middleware('initialize_Supermarket', ['only' => ['broadcast_User']]);*/
//        $this->data = json_decode($this->data, true);
    }

    public function set_Locale_Timezone()
    {
        $rules = [
            'country_code_locale' => [new CountryCode(), 'required'],
            'country_code_timezone' => [new CountryCode(), 'required'],
            'locale' => 'required|string|min:2|max:2',
            'timezone' => [new Timezone(), 'required'],
        ];
        Validator::make($this->data['json_Data'], $rules)->validate();

        $rules = [
            'Sync' => 'required|in:SystemSettingController',
            'SubSync' => 'required|in:set_Locale_Timezone',
        ];
        Validator::make($this->data_All, $rules)->validate();

        try {
            DB::transaction(function () {
                User_System::where('id', \request()->user()->id)->update(['locale' => $this->data['json_Data']['locale'], 'timezone' => $this->data['json_Data']['timezone'], 'country_code_locale' => $this->data['json_Data']['country_code_locale'], 'country_code_timezone' => $this->data['json_Data']['country_code_timezone']]);
            });
            return response()->json(array(
                'success' => 'success',
                'message' => __('Dashboard.settings.system.language_Timezone.message.language_Timezone_Successfully_Registered'),
            ), 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(array(
                'error' => __('Dashboard.settings.system.language_Timezone.message.language_Timezone_Error_Registered')), 200);
        }
    }
}



