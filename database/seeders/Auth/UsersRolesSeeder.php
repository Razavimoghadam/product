<?php

namespace Database\Seeders\Auth;

use App\Models\Auth\User\User as User_System;
use App\Models\Role as Role_System;
use Carbon\Carbon as Carbon;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersRolesSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run(Faker $faker)
    {

        $data = [
            'administrator' => [
                'email' => 'administrator@1ta100.com',
                'role' => 'administrator',
                'subdomain' => 'administrator',
                'domain' => config('app.domain'),
                'database' => 'manager_',
                'migrate_name' => 'manager',
                //'class_name_Seed' => \App\database\seeds\tenants\supermarket\SupermarketDatabaseSeeder::class,
                'name' => 'manager',
                'type' => 'manager',
            ],
            'test' => [
                'email' => 'test@1ta100.com',
                'role' => ['user test'],
                'subdomain' => 'applicant_workshop_supervisor',
                'domain' => config('app.domain'),
                'database' => 'customer_',
                'migrate_name' => 'customer',
                //'class_name_Seed' => \App\database\seeds\tenants\Customer\CustomerDatabaseSeeder::class,
                'name' => 'customer',
                'type' => 'customer',
            ],
            'owner' => [
                'email' => 'mohsen.razavimoghadam@gmail.com',
                'role' => ['owner'],
                'subdomain' => 'applicant_workshop_supervisor',
                'domain' => config('app.domain'),
                'database' => 'customer_',
                'migrate_name' => 'customer',
                //'class_name_Seed' => \App\database\seeds\tenants\Customer\CustomerDatabaseSeeder::class,
                'name' => 'customer',
                'type' => 'customer',
            ],
        ];

        /**
         * System Seeding
         */
        foreach ($data as $item => $key) {

            $user_System = User_System::whereEmail($key['email'])->first();

            if (!$user_System) continue;

            $role_System = !is_array($key['role']) ? [$key['role']] : $key['role'];

            $roles_System = Role_System::whereIn('name', $role_System)->get();

            $user_System->roles()->detach();
            $user_System->assignRole($roles_System);
            $user_System->update(['active_role' => $roles_System->first()->id]);


        }
    }
}
