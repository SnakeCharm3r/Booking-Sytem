<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersData extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //patient credentials
        User::create([
            'name' => 'Patient User',
            'email' => 'patient@example.com',
            'password' => bcrypt('admin123'),
            'phone_number' => '1234567890',
            'role' => 'Patient',
            'payment_mode' => 'Mobile Money',
        ]);

    }
}
