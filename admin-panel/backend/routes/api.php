<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\ApiController;

Route::post('/login', [ApiController::class, 'login']);


Route::post('/{url}', [ApiController::class, 'not_found'])->where('url', '.*');