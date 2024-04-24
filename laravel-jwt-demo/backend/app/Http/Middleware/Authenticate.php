<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, ...$guards)
    {

        if($jwt == $request->cookie('jwt')){
$request->headers->set('Authorization' , 'Bearer '. $jwt);
        }
        $this->authenticate($request, $guards);

        return $next($request);
    }



}
