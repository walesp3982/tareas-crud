<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collaborator extends Model
{
    //
    public $timestamps = true;

    protected $fillable = [
        "proyect_id",
        "user_id"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function proyect()
    {
        return $this->belongsTo(Proyect::class);
    }

}
