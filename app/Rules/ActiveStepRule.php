<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Modules\Supermarket\Models\View;

class ActiveStepRule implements Rule
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

        $result=View::all()->pluck('view');
        if ($result->contains($value))
            $check=true;
        return $check;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('validation.active_step');
    }
}
