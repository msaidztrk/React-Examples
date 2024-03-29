<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class ApiController extends Controller
{

    public function delete_user(Request $request){

        $request->replace(array_change_key_case($request->all(), CASE_LOWER));
        $check_arr = ['token', 'auth' , 'delete_id'];
        list($msg, $status) = $this->check_these_field_for_exist_and_not_empty($check_arr, $request);
        if ($msg != 'ok')
            return response()->json($msg, $status);

        if($request['auth'] ==  $request['delete_id'])
            return response()->json("", 404);

        $auth_info = User::select()->where('id', $request['auth'])->first();
        $check_user = User::where('id', $request['delete_id'])->first();

        if ($check_user == null || $auth_info == null)
            return response()->json("", 404);
        else {
            if ($auth_info->status >= $check_user->status) // 1 : admin , 2 : müşteri ise ">" konulacak
                return response()->json("", 404);
        }

        User::where('id', $request['delete_id'])->delete();

        return 'success';
    }


    public function get_all_users(Request $request){

        $request->replace(array_change_key_case($request->all(), CASE_LOWER));
        $check_arr = ['token', 'auth'];
        list($msg, $status) = $this->check_these_field_for_exist_and_not_empty($check_arr, $request);
        if ($msg != 'ok')
            return response()->json($msg, $status);

        $all_kind_of_users = User::select()->whereNot('id',$request['auth'] )->get();
        return $all_kind_of_users;

    }

    public function get_user_info(Request $request)
    {

        $request->replace(array_change_key_case($request->all(), CASE_LOWER));
        $check_arr = ['id', 'auth'];
        list($msg, $status) = $this->check_these_field_for_exist_and_not_empty($check_arr, $request);
        if ($msg != 'ok')
            return response()->json($msg, $status);

        $auth_info = User::select()->where('id', $request['auth'])->first();
        $check_user = User::where('id', $request['id'])->first();

        if ($check_user == null || $auth_info == null)
            return response()->json("", 404);
        else {

            if ($auth_info->status >= $check_user->status) // 1 : admin , 2 : müşteri ise ">" konulacak
                return response()->json("", 404);

            return response()->json($check_user, 200);
        }


    }

    public function login(Request $request)
    {

        $request->replace(array_change_key_case($request->all(), CASE_LOWER));

        $check_arr = ['email', 'password'];
        list($msg, $status) = $this->check_these_field_for_exist_and_not_empty($check_arr, $request);
        if ($msg != 'ok')
            return response()->json($msg, $status);

        $check_user = User::where('email', $request['email'])->where('password_text', $request['password'])->first();
        if ($check_user == null)
            return response()->json("[003] Kullanıcı Bulunamadı ", 403);
        else
            return response()->json($check_user, 200);
    }


    public function not_found()
    {
        return response()->json('Error', 201);
    }

    public function check_these_field_for_exist_and_not_empty($arr, $requests)
    {

        if ($requests->token != "Test-deneme")
            return ["[002] Boş değerler girilemez ", 403];

        for ($a = 0; $a < count($arr); $a++) {
            if (!$requests->has($arr[$a]) == "false")
                return ["[110] Body Anahtarlarını Kontrol Edin ", 403];
        }

        for ($a = 0; $a < count($arr); $a++) {
            if ($requests[$arr[$a]] == "")
                return ["[002] Boş değerler girilemez ", 403];
        }

        return ["ok", 200];
    }


    public function create_or_update_user(Request $request)
    {

        if ($request['update_id'] == '0') {
            $action = 'create';
            $check_if_user_exist = User::where('email', $request['email'])->first();
            if ($check_if_user_exist != null)
                return response()->json('User Already Exist [1]' , 409);
        } else {
            $action = 'update';
            $check_if_user_exist = User::where('email', $request['email'])->whereNot('id' ,  $request['update_id'])->first();
            if ($check_if_user_exist != null)
                return response()->json('User Already Exist [2]' , 409);

        }


        $con = new CreateOrUpdateController();
        list($msg, $status) = $con->user_record($action, $request, $request['update_id']);
        return response()->json($msg, $status);

    }


}
