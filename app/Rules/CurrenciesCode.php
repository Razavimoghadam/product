<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Modules\Supermarket\Http\Controllers\StoreCashier\Traits\Currency\CurrencyToolsTraits;

class CurrenciesCode implements Rule
{
    use CurrencyToolsTraits;
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
     * @param  array  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $check=true;
        $currenciesCode=$this->getCurrenciesCode();
        collect($value)->each(function ($value, $key) use ($currenciesCode,&$check) {
            if (!$currenciesCode->contains($value)){
                $check=false;
                return false;
            }
        });

        return $check;
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
