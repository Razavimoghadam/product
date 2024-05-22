<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //connection(config('database.schemaConnection.master'))->
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username')->unique();
            $table->string('first_name', 30)->nullable();
            $table->string('last_name', 30)->nullable();
            $table->string('gender')->default('Mr');
            $table->string('ssn')->nullable()->unique();//Social Security Number
            $table->date('date_of_birth')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('password', 60);
            //$table->string('locale')->default(config('app.locale'));
            $table->bigInteger('active_role')->unsigned()->nullable();
            $table->foreign('active_role')->references('id')->on('roles');
            $table->string('locale')->default('fa');
            $table->string('timezone', 200)->nullable()->default('Asia/Tehran');
            $table->string('country_code_locale', 2)->default('ir')->nullable();
            $table->string('country_code_timezone', 2)->default('ir')->nullable();
            $table->string('api_token', 80)->unique()->nullable()->default(null);
            $table->tinyInteger('active')->default(1)->unsigned();
            $table->uuid('confirmation_code')->nullable();
            $table->boolean('confirmed')->default(config('access.users.confirm_email') ? false : true);
            $table->rememberToken();
            $table->longText('img_profile')->nullable();
            $table->longText('img_sign')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->longText('settings')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //connection(config('database.schemaConnection.master'))->
        Schema::dropIfExists('users');
    }
};
