<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', action: [AuthController::class, 'login']);

Route::get('/test', function () {
    return response()->json(["msg" => "Hola"]);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, "logout"]);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
