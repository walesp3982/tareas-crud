<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subtask extends Model
{
    //
    public $timestamps = true;

    protected $fillable = [
        "name",
        "task_id"
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    /**
     * Cast in the attributos to the model 
     * 
     * @return array<string, string>
     */
    public function casts(): array
    {
        return [
            "finished" => "boolean"
        ];
    }
}
