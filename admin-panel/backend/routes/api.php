<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\ApiController;

Route::post('/login', [ApiController::class, 'login']);

Route::post('/create-user', [ApiController::class, 'create_or_update_user']);
Route::post('/update-user', [ApiController::class, 'create_or_update_user']);
Route::post('/delete-user', [ApiController::class, 'delete_user']);

Route::post('/get-user-info', [ApiController::class, 'get_user_info']);
Route::post('/get-all-users', [ApiController::class, 'get_all_users']);

Route::post('/{url}', [ApiController::class, 'not_found'])->where('url', '.*');
