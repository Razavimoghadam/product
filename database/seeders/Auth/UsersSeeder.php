<?php

namespace Database\Seeders\Auth;

use Faker\Generator as Faker;
use Carbon\Carbon as Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Auth\User\User as User_System;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersSeeder extends Seeder
{

    /**
     * Run the database seed.
     *
     * @return void
     */

    public function run(Faker $faker)
    {
        $gender = ['Mr', 'Ms'];
        $users = [
            [
                'username' => 'administrator',
                'first_name' => 'ادمین',
                'last_name' => '',
                'gender' => 'Ms',//$gender[array_rand($gender)],
                'email' => 'administrator@1ta100.com',
                //'password' => bcrypt('admin'),
                //'password' => Hash::make('admin'),
                'password' => bcrypt('password'),
                'api_token' => Str::random(80),
                'ssn' => Str::random(10),
                'active' => true,
                'date_of_birth' => $faker->date,
                'confirmation_code' => \Ramsey\Uuid\Uuid::uuid4(),
                'confirmed' => true,
                'img_sign' => null,
                'img_profile' => 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/user-ms.png'))),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'username' => 'test',
                'first_name' => 'کاربر',
                'last_name' => 'تست',
                'gender' => 'Mr',
                'email' => 'test@1ta100.com',
                //'password' => bcrypt('demo2'),
                //'password' => Hash::make('admin'),
                'password' => bcrypt('password'),
                'api_token' => Str::random(80),
                'ssn' => Str::random(10),
                'active' => true,
                'date_of_birth' => $faker->date,
                'confirmation_code' => \Ramsey\Uuid\Uuid::uuid4(),
                'confirmed' => true,
                'img_profile' => 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/user-mr.png'))),
                'img_sign' => 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/sign/test.jpg'))),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'username' => 'owner',
                'first_name' => 'مالک',
                'last_name' => 'محصول',
                'gender' => 'Mr',
                'email' => 'mohsen.razavimoghadam@gmail.com',
                //'password' => bcrypt('demo2'),
                //'password' => Hash::make('admin'),
                'password' => bcrypt('password'),
                'api_token' => Str::random(80),
                'ssn' => Str::random(10),
                'active' => true,
                'date_of_birth' => $faker->date,
                'confirmation_code' => \Ramsey\Uuid\Uuid::uuid4(),
                'confirmed' => true,
                'img_profile' => 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/user-mr.png'))),
                'img_sign' => 'data:image/png;base64,' . base64_encode(file_get_contents(resource_path('assets/image/sign/test.jpg'))),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        //\Artisan::call('passport:install');

        foreach ($users as $item => $key) {

            $user_System = User_System::whereEmail($key['email'])->first();
            $input = $key;

            if ($user_System) {
                $user_System->update($input);
                continue;
            }


            //$input['password'] = bcrypt($key['password']);
            $user = User_System::create($input);

            //$oClient = OClient::where('password_client', 1)->first();
            //$this->getTokenAndRefreshToken($oClient, $user->email, $key['password']);
        }

        //DB::table('users')->insert($users);

    }
}
