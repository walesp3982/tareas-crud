<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProyectRequest;
use App\Http\Resources\ProyectResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Response;

class ProyectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {

    }
    public function index(): JsonResponse
    {
        //
        $user = auth()->user();

        $proyects = $user->proyects;

        return response()->json($proyects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProyectRequest $request): JsonResponse
    {
        //
        $validated = $request->validated();

        $user = Auth::user();

        $proyect = $user->proyects()->create([
            "name" => $validated["name"],
            "start_date" => $validated["start_date"],
            "end_date" => $validated["end_date"]
        ]);

        return response()->json(
            new ProyectResource($proyect),
            201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
