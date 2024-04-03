<?php

namespace App\Http\Controllers;

use App\Models\AuthToken;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class CreateOrUpdateController extends Controller
{


    public function user_record($action, $array, $id)
    {

        DB::beginTransaction();

        try {

            if ($action == 'create') {
                $user = new User;
            } else {
                $user = User::find($id);
            }

            $user->name = $array['name'];
            $user->status = $array['status'];
            $user->email = $array['email'];
            $user->password = Hash::make($array['password']);
            $user->password_text = $array['password'];
            $user->save();

            DB::commit();
            return ['ok', 200];
        } catch (\Exception $e) {
            DB::rollback();
            return [$e, 500];

        }
    }



    public function create_new_token_fo_user_login($new_token , $user_id){

        AuthToken::select()->where('user_id' , $user_id)->delete();

        $new_token_record = new AuthToken;
        $new_token_record->user_id = $user_id;
        $new_token_record->login_token = $new_token ;
        $new_token_record->save();

    }


}
