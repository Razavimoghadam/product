<?php

namespace Database\Seeders\Auth;

use App\Models\Auth\User\User as User_System;
use App\Models\Permission;
use App\Models\Role as Role_System;
use Carbon\Carbon as Carbon;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersPermissionsSeeder extends Seeder
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
                'permission' => ['داشبورد', 'داشبورد 1', 'کاربران', 'ویرایش کاربران', 'تنظیمات', 'ویرایش تنظیمات سیستم', 'ویرایش تنظیمات پروفایل'],
                'subdomain' => 'administrator',
                'domain' => config('app.domain'),
                'database' => 'manager_',
                'migrate_name' => 'manager',
                //'class_name_Seed' => \App\database\seeds\tenants\supermarket\SupermarketDatabaseSeeder::class,
                'name' => 'manager',
                'type' => 'manager',
            ],
        ];

        /**
         * System Seeding
         */
        foreach ($data as $item => $key) {


            $user_System = User_System::whereEmail($key['email'])->first();

            if (!$user_System) continue;

            $permission = !is_array($key['permission']) ? [$key['permission']] : $key['permission'];

            $permission = Permission::whereIn('name', $permission)->get();
            $user_System->permissions()->detach();
            $user_System->givePermissionTo($permission);


        }
    }
}
