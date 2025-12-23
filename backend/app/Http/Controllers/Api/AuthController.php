<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Hash;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    //
    final public function login(LoginRequest $request): JsonResponse
    {
        $dataRequest = $request->validated();

        $user = User::where('email', $dataRequest['email'])->first();

        if (!$user || !Hash::check($dataRequest['password'], $user->password)) {
            return response()->json([
                "message" => "La credenciales son incorrectas",
                "errors" => [
                    "email" => ["Las credenciales son incorrectas"]
                ]
            ], 401);
        }

        return response()->json([
            'token' => $user->createToken($dataRequest['device_name'])->plainTextToken
        ]);
    }

    final public function logout(): JsonResponse
    {
        auth()->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}
