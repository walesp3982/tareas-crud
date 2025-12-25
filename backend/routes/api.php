<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProyectController;
use App\Models\Proyect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', action: [AuthController::class, 'login']);

Route::post("/register", [AuthController::class, "register"]);

Route::get('/test', function () {
    return response()->json(["msg" => "Hola"]);
});
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, "logout"]);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('proyect', ProyectController::class);
});

