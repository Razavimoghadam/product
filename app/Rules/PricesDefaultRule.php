<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class PricesDefaultRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public $value = '';
    public $productEnable = '';

    public function __construct($value, $productEnable)
    {
        $this->value = $value;
        $this->productEnable = filter_var($productEnable, FILTER_VALIDATE_BOOLEAN);;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $check = true;

        if (!$this->passesRetailPrice($value) || !$this->passesWholesalePrice($value))
            $check = false;

        return $check; // or return $this->passesRetailPrice($value) && $this->passesWholesalePrice($value)
    }

    /**
     * @param $value
     * @return bool
     */
    public function passesWholesalePrice($value)
    {
        $check = true;
        $valueCollect = collect($value);

        // Use 1 or 2
        // 1:
        /*$defaultCount = $valueCollect
            ->filter(function ($value, $key) {
                return ($value['price_type'] == 'wholesale_price' && $value['default'] === true ||
                    $value['price_type'] == 'wholesale_price' && $value['default'] === 1 ||
                    $value['price_type'] == 'wholesale_price' && $value['default'] === 'true');
            })
            ->count();*/
        // 2:
        $defaultCount = $valueCollect
            ->where('price_type', 'wholesale_price')
            ->filter(function ($value, $key) {
                return (  $value['default'] === 1 || $value['default'] === '1' || $value['default'] === true || $value['default'] === 'true');
            })
            ->count();

        if ($defaultCount > 1)
            $check = false;

        return $check;
    }

    /**
     * @param $value
     * @return bool
     */
    public function passesRetailPrice($value)
    {
        $check = true;
        $valueCollect = collect($value);

        // Use 1 or 2
        // 1:
        /*$defaultCount = $valueCollect
            ->filter(function ($value, $key) {
                return ($value['price_type'] == 'retail_price' && $value['default'] === true ||
                    $value['price_type'] == 'retail_price' && $value['default'] === 1 ||
                    $value['price_type'] == 'retail_price' && $value['default'] === 'true');
            })
            ->count();*/
        // 2:
        $defaultCount = $valueCollect
            ->where('price_type', 'retail_price')
            ->filter(function ($value, $key) {
                return ( $value['default'] === 1 || $value['default'] === '1' ||$value['default'] === true  || $value['default'] === 'true');
            })->count();
        if ($this->productEnable && $defaultCount != 1)
            $check = false;

        if (!$this->productEnable && $defaultCount > 1)
            $check = false;

        return $check;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        if (!$this->passesWholesalePrice($this->value) && !$this->passesRetailPrice($this->value))
            return __('validation.retail_price_and_wholesale_price_default');

        if (!$this->passesWholesalePrice($this->value))
            return __('validation.wholesale_price_default');

        if (!$this->passesRetailPrice($this->value))
            return __('validation.retail_price_default');
    }
}
