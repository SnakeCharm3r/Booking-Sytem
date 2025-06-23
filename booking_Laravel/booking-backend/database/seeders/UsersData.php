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
        //Create an array of user data
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('admin123'),
            'phone_number' => '1234567890',
            'user_role' => 'admin',
            'payment_mode' => 'credit_card',
        ]);
        
        //patient credentials
        User::create([
            'name' => 'Patient User',
            'email' => 'patient@example.com',
            'password' => bcrypt('admin123'),
            'phone_number' => '1234567890',
            'user_role' => 'Patient',
            'payment_mode' => 'Mobile Money',
        ]);

    }
}
