<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller
{
    

    public function login(Request $request){

        $request->replace(array_change_key_case($request->all(), CASE_LOWER));

        if ($request->token != "Test-deneme")
            return response()->json("[002] Boş değerler girilemez ", 403);

           if (!$request->has('email') == "false" || !$request->has('password') == "false")
            return response()->json("[110] Body Anahtarlarını Kontrol Edin ", 403);

        if ($request->email == "" || $request->password == "" )
            return response()->json("[002] Boş değerler girilemez ", 403);


        $check_user = User::select()->where('email' ,$request->email )->where('password_text' , $request->password)->first();
        if($check_user == null)
            return response()->json("[003] Kullanıcı Bulunamadı ", 403);
        else
            return response()->json($check_user, 200);
    }



    public function not_found(){
        return response()->json( 'Error' , 201);
    }



}
