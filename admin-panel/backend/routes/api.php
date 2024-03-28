<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\ApiController;

Route::post('/login', [ApiController::class, 'login']);

Route::post('/create-user', [ApiController::class, 'create_or_update_user']);
Route::post('/update-user', [ApiController::class, 'create_or_update_user']);

Route::post('/get-user-info', [ApiController::class, 'get_user_info']);


Route::post('/{url}', [ApiController::class, 'not_found'])->where('url', '.*');
