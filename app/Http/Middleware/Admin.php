<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (\Auth::check()) {
            if ($request->user()->active_role()->first()->name != 'administrator')
                return response()->json(__('This action unauthorized.'), 403);
        }else
            return response()->json("unauthorized", 401);

        return $next($request);
    }
}
