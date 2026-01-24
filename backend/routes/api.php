<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProyectController;
use App\Http\Controllers\TaskController;
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
    Route::apiResource('/proyects', ProyectController::class);
    Route::apiResource('/proyects/{proyect_id}/tasks', TaskController::class);
});

