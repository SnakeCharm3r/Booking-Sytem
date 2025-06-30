<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $table = 'users';

    public function doctor()
{
    return $this->hasOne(Doctor::class);
}

    public function patient()
{
    return $this->hasOne(Patient::class);
}

    public function pharmacist()
{
    return $this->hasOne(Pharmacist::class);
}

}

