<?php
/*
 * This file is part of M.R.M
 *
 * (c) Mohsen Razavimoghadam <mohsen.razavimoghadam@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Traits\Date;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Morilog\Jalali\Jalalian;
use Exception;

trait DateTools
{

    protected function get_IP_Info()
    {
        try {
            return Http::get('http://ip-api.com/json/')->json();
        } catch (Exception $e) {
            return false;
        }
    }

    protected $only_AcceptCountriesThatHaveAJalaliCalendar = ["fa"];

    protected function check_CountriesThatHaveAJalaliCalendar($local)
    {
        if (in_array($local, $this->only_AcceptCountriesThatHaveAJalaliCalendar))
            return true;
        return false;
    }

    public function getDateByTimezone($date)
    {

        /*$ip_Info = $this->get_IP_Info();
        $timezone=$ip_Info['timezone'];
        $country=$ip_Info['country'];*/
        $timezone = \request()->user()->timezone;
        $locale = \request()->user()->locale;

        /*if ($ip_Info==false){
            $timezone='Asia/Tehran';
            $country='Iran';
        }*/

        $date = Carbon::parse($date)->toDateTimeString();
//        $date = Carbon::createFromFormat('Y-m-d H:i:s', $date);
        $date = Carbon::createFromFormat('Y-m-d H:i:s', $date);
        $date = $date->setTimezone($timezone);

        if ($this->check_CountriesThatHaveAJalaliCalendar($locale)) {
            $date = Jalalian::fromCarbon($date)->toString();
            return $date;
        }
        return $date->toDateTimeString();

    }
}
