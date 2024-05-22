<?php
use Illuminate\Support\Facades\Route;
Route::group(['middleware' => 'language'], function () {

    /**
     * Home routes
     */
    Route::get('/', function () {
        return view('welcome');
    });
    /**
     * Auth routes
     */
    Route::group(['namespace' => 'App\Http\Controllers\API'], function () {

        // Authentication Routes...
        //Route::get('csrf', 'AuthController@csrf')->name('api.csrf');
        Route::get('login', 'AuthController@showLoginForm')->name('login');
        Route::post('login', 'AuthController@authenticate');
        Route::get('logout', 'AuthController@logout')->name('logout');


        // Registration Routes...
        /*if (config('auth.users.registration')) {
            Route::get('register', 'AuthController@showRegistrationForm')->name('register');
            Route::post('register', 'AuthController@register');
        }*/

        // Password Reset Routes...
        Route::get('password/reset', 'AuthController@showLinkRequestForm')->name('password.request');
        Route::post('password/email', 'AuthController@sendResetLinkEmail')->name('password.email');
        Route::get('password/reset/{token}', 'AuthController@showResetForm')->name('password.reset');
        Route::post('password/reset', 'AuthController@reset');

        // Confirmation Routes...
        /*if (config('auth.users.confirm_email')) {
            Route::get('confirm/{user_by_code}', 'AuthController@confirm')->name('confirm');
            Route::get('confirm/resend/{user_by_email}', 'AuthController@sendEmail')->name('confirm.send');
        }*/

        // Social Authentication Routes...
        Route::get('social/redirect/{provider}', 'AuthController@redirect')->name('social.redirect');
        Route::get('social/login/{provider}', 'AuthController@socialLogin')->name('social.login');

    });
    /**
     * Dashboard routes
     */
    Route::group(['namespace' => 'App\Http\Controllers\Dashboard'], function () {
        Route::get('dashboard', 'DashboardController@showDashboardForm1')->name('dashboard')->middleware('auth');
    });
    /**
     * Product routes
     */
    Route::group(['namespace' => 'App\Http\Controllers\Product','middleware'=>['auth']], function () {
        Route::post('/Product', 'ProductController@set_Or_Edit_Product');
        Route::patch('/Product', 'ProductController@set_Or_Edit_Product');
        Route::delete('/Product', 'ProductController@delete_Product');
        Route::post('Product/ProductsTable', 'ProductController@getProductsTable');
        Route::post('Product/Products', 'ProductController@getProducts');
    });

    /**
     * CardItem routes
     */
    Route::group(['namespace' => 'App\Http\Controllers\CardItem','middleware'=>['auth']], function () {
        Route::post('/CardItem', 'CardItemController@add_CardItem');
        Route::patch('/CardItem', 'CardItemController@minus_CardItem');
        Route::delete('/CardItem', 'CardItemController@delete_CardItem');
        Route::post('CardItem/CardItemsTable', 'CardItemController@getCardItemsTable');
        Route::post('CardItem/UserNumberOfCardItems', 'CardItemController@user_Number_Of_CardItems');
    });

    /**
     * Posts controller routes
     */
    Route::group(['namespace' => 'App\Http\Controllers\Posts','middleware'=>['auth']], function () {
        Route::post('/PostsController', 'PostsController@findAction');
    });
});




