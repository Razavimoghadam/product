<?php
namespace Database\Seeders\Auth;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;
class RolesSeeder extends Seeder
{

    /**
     * Run the database seed.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $roles = [
            ['name' => 'no_role'/*, 'slug' => 'administrator'*/],
            ['name' => 'administrator'/*, 'slug' => 'administrator'*/],
            ['name' => 'user test'/*, 'slug' => 'administrator'*/],
            ['name' => 'owner'/*, 'slug' => 'administrator'*/],
        ];

        foreach ($roles as $item => $key) {
            $role = Role::whereName($key['name'])->first();

            if ($role){
                $role->update($key);
                continue;
            }

            Role::create(['name' => $key['name']]);
        }
        //DB::connection(config('database.schemaConnection.master'))->table('roles')->insert($roles);


    }
}
