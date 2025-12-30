<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProyectRequest;
use App\Http\Requests\UpdateProyectRequest;
use App\Http\Resources\ProyectResource;
use App\Models\Proyect;
use Illuminate\Http\JsonResponse;

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

        $user = auth()->user();

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
    public function show(string $id): JsonResponse
    {
        // Get actual user
        $proyect = Proyect::find($id);

        if ($proyect === null) {
            return response()->json(
                ["message" => "Proyecto no encontrado"],
                404
            );
        }

        if ($proyect->user_id !== auth()->id()) {
            return response()->json(
                ["message" => "Proyecto no autorizado para el usuario"],
                401
            );
        }

        return response()->json(
            new ProyectResource($proyect),
            200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProyectRequest $request, string $id)
    {
        $proyect = Proyect::find($id);

        if ($proyect === null) {
            return response()->json(
                ["message" => "No encontrado"],
                404
            );
        }

        if ($proyect->user_id != auth()->id()) {
            return response()->json(
                ["message" => "No tiene propiedad del proyecto"],
                401
            );
        }

        $proyect = $proyect->update(
            $request->validated()
        );

        return response()->json(
            ["message" => "Proyecto actualizado"],
            204
        );
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $proyect = Proyect::find($id);

        if ($proyect === null) {
            return response()->json(
                ["message" => "No encontrado"],
                404
            );
        }

        if ($proyect->user_id != auth()->id()) {
            return response()->json(
                ["message" => "No tiene propiedad del proyecto"],
                401
            );
        }

        return response()->json(
            ["message" => "Proyecto eliminado"],
            204
        );
    }
}
