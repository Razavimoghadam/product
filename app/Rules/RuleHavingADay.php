<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class RuleHavingADay implements Rule
{
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
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $check=false;
        $days_Exist = collect(['friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday']);

            if ($days_Exist->contains($value)){
                $check=true;
            }
        return $check;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('validation.role_having_a_day');
    }
}
