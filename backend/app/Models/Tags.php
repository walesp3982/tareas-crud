<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    //
    public $timestamps = true;

    public $fillable = [
        "name",
        "tag",
        "proyect_id"
    ];

    public function proyect()
    {
        return $this->belongsTo(Proyect::class);
    }
}
