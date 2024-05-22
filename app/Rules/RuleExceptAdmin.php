<?php

namespace App\Rules;

use App\Models\Role;
use Illuminate\Contracts\Validation\Rule;

class RuleExceptAdmin implements Rule
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
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $check = false;
        $roles_Tenant_Exist = Role::whereNotIn('name', [
            'authenticated',
            'distributor',
            'administrator',
            'supermarket',
            'applicant_workshop_supervisor',
            'project_manager',
            'technical_office_supervisor',
            'deputy_CEO',
            'responsible_for_supplies_and_support',
            'financial_manager',
            'CEO',
            'officer',
            'executive_supervisor',
            'technical_office_expert1',
            'technical_office_expert2',
            'PMO',
            'accountant',
            'designer',
            'no_role'])->get()->pluck('name');


        foreach ($value as $item => $valueItem) {
            if (!$roles_Tenant_Exist->contains($valueItem)) {
                $check = false;
                break;
            } else
                $check = true;
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
        return __('validation.validator.role_except_admin');
    }
}
