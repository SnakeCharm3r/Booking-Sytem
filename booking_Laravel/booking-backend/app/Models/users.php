<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Users extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'email_verified_at',
        'password',
        'phone_number',
        'user_role',
        'payment_mode',
    ];

    /**
     * The attributes that should be hidden for arrays and JSON responses.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be type-cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_number' => 'string',
    ];

    /**
     * Automatically hash the password when setting it.
     *
     * @param string $value
     */
    public function setPasswordAttribute($value)
    {
        if ($value) {
            $this->attributes['password'] = bcrypt($value);
        }
    }

    /**
     * Accessor for user role to ensure consistent formatting.
     *
     * @param string $value
     * @return string
     */
    public function getUserRoleAttribute($value)
    {
        return ucfirst($value);
    }

    /**
     * Accessor for payment mode to ensure consistent formatting.
     *
     * @param string $value
     * @return string
     */
    public function getPaymentModeAttribute($value)
    {
        return ucfirst($value);
    }
}