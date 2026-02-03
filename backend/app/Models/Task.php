<?php

namespace App\Models;

use App\Enums\PriorityTaskEnum;
use App\Enums\StatusTaskEnum;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    public $timestamps = true;

    protected $fillable = [
        "name",
        "status",
        "start_date",
        "end_date",
        "priority",
        "proyect_id",
        "created_at",
        "deleted_at"
    ];

    /**
     * Get the attributes that should be cast
     * 
     * @return array<string,string>
     */
    public function casts(): array
    {
        return [
            "status" => StatusTaskEnum::class,
            "priority" => PriorityTaskEnum::class,
        ];
    }

    public function proyect()
    {
        return $this->belongsTo(Proyect::class);
    }
}
