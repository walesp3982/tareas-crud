<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\Scope;
/**
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|string  $start_date
 * @property \Illuminate\Support\Carbon|string  $end_date
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 * @property int $user_id
 */
class Proyect extends Model
{
    /** @use HasFactory<\Database\Factories\ProyectFactory> */
    use HasFactory, SoftDeletes;

    public $timestamps = true;

    protected $fillable = [
        "user_id",
        "name",
        "start_date",
        "end_date"
    ];

    protected $casts = [
        'start_date' => 'date:Y-m-d',
        'end_date' => 'date:Y-m-d',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function collaborators()
    {
        return $this->hasMany(Collaborator::class);
    }

    public function tags()
    {
        return $this->hasMany(Tags::class);
    }
}
