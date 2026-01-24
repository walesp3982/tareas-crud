<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateProyectRequest;
use App\Models\Proyect;
use Exception;

class TaskController extends Controller
{
    protected function getProyect(int $proyect_id)
    {
        $proyect = Proyect::findOrFail($proyect_id);

        return $proyect;

    }

    /**
     * Display a listing of the resource.
     */
    public function index(int $proyect_id)
    {
        $proyect = $this->getProyect($proyect_id);

        return response()->json($proyect->tasks, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request, int $proyect_id)
    {
        $proyect = $this->getProyect($proyect_id);

        $proyect->tasks()->create(
            $request->validated()
        );

        return response()->json([], 204);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $proyect_id, string $id)
    {
        $proyect = $this->getProyect($proyect_id);

        $task = $proyect->tasks()->find($id)->get();

        return response()->json($task, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProyectRequest $request, int $proyect_id, string $id)
    {
        //
        $proyect = $this->getProyect($proyect_id);

        $task = $proyect->tasks();

        $task->find($id)->update(
            $request->validated()
        );

        return response(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $proyect_id, string $id)
    {
        //
        try {
            $proyect = $this->getProyect($proyect_id);
        } catch (Exception $e) {
            return response()->json(
                ["message" => "Proyecto no encontrado"],
                404
            );
        }

        $task = $proyect->tasks()->find($id);
        if ($task === null) {
            return response()->json(
                ["message" => "Tarea no encontrada"],
                404
            );
        }

        $task->delete();

        return response()->json(
            null,
            204
        );
    }
}
