<?php

namespace Database\Seeders\Auth;

use App\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class PermissionsSeeder extends Seeder
{

    /**
     * Run the database seed.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            ['name' => 'داشبورد', 'update_name' => 'داشبورد'],
            ['name' => 'داشبورد 1', 'update_name' => 'داشبورد 1'],
            ['name' => 'کاربران', 'update_name' => 'کاربران'],
            ['name' => 'ویرایش کاربران', 'update_name' => 'ویرایش کاربران'],

            ['name' => 'محصول', 'update_name' => 'محصول'],

            ['name' => 'منو -> اضافه/ ویرایش کردن -> محصول', 'update_name' => 'منو -> اضافه/ ویرایش کردن -> محصول'],
            ['name' => 'اضافه کردن محصول', 'update_name' => 'اضافه کردن محصول'],
            ['name' => 'ویرایش محصول', 'update_name' => 'ویرایش محصول'],
            ['name' => 'حذف محصول', 'update_name' => 'حذف محصول'],

            ['name' => 'تنظیمات', 'update_name' => 'تنظیمات'],
            ['name' => 'ویرایش تنظیمات سیستم', 'update_name' => 'ویرایش تنظیمات سیستم'],
            ['name' => 'ویرایش تنظیمات پروفایل', 'update_name' => 'ویرایش تنظیمات پروفایل'],
        ];

        foreach ($permissions as $item => $key) {
            $permission = Permission::whereName($key['name'])->first();
            if ($permission) {
                $permission->update(['name' => $key['update_name']]);
                continue;
            }

            Permission::create(['name' => $key['update_name']]);
        }
        //DB::connection(config('database.schemaConnection.master'))->table('roles')->insert($roles);


    }
}
