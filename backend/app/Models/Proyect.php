<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Proyect extends Model
{
    /** @use HasFactory<\Database\Factories\ProyectFactory> */
    use HasFactory, SoftDeletes;

    public $timestamps = true;

    protected $fillable = [
        "user_id",
        "name"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
