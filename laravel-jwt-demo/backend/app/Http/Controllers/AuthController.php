<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{


    public function register(Request $request)  {

        $user = User::create([
'name' => $request->input('name') ,
'email' => $request->input('email') ,
'password' => Hash::make($request->input('password'))
        ]);

        return $user;
    }

    public function login(Request $request)  {
       if(!Auth::attempt($request->only('email' , 'password'))){
return response([
    'message' => 'Invalid Credentials'
] , Response::HTTP_UNAUTHORIZED);
       }

       $USER = Auth::user();

       $token = $USER->createToken('token')->plainTextToken;
       $cookie = cookie('jwt' , $token , 60*24 );

       return response([
        'message' => 'Success' ,
        'token' => $token
       ] )->withCookie($cookie);
    }

    public function user(){
        return Auth::user();
    }


    public function logout(Request $request){
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success' ,

        ])->withCookie($cookie);
    }


}
