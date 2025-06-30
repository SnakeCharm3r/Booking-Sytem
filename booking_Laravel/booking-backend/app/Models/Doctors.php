<?php

namespace App\Models;

use Database\Seeders\SpecialtySeeder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'mct_number',
        'specialty_id',
        'available_slots',
    ];

    protected $casts = [
        'available_slots' => 'array', // Automatically casts JSON to array
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialities::class);
    }
}