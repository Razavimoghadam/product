<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Modules\Supermarket\Http\Controllers\StoreCashier\Traits\Currency\CurrencyToolsTraits;

class CurrencyCode implements Rule
{use CurrencyToolsTraits;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  string  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $currenciesCode=$this->getCurrenciesCode();
        return $currenciesCode->contains($value);

        /*$check=false;
        $countriesLanguage = file_get_contents(public_path('assets/app/js/json/countries-language/countries.emoji.min.json'));
        $data = collect(json_decode($countriesLanguage, true));
        $result=$data->filter(function ($value_Data, $key) use ($value){
            $countryCurrencies = collect(explode(',', $value_Data['currency']));
            return $countryCurrencies->contains(strtoupper($value));
        });
        if ($result->count()>0)
            $check=true;
        return $check;*/
    }



    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('validation.currency_code');
    }
}
