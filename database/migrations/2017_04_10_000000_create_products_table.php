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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',500);
            $table->string('barcode',500)->unique();
            $table->bigInteger('price')->unsigned()->default(0);
            $table->string('description',1000)->nullable();
            $table->boolean('enabled')->default(true);
            $table->bigInteger('qty')->unsigned()->default(0);
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
        Schema::dropIfExists('products');
    }
};
