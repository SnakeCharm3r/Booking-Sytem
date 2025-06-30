<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Doctor;
use App\Models\Specialty;

class DoctorSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create the user
        $user = User::create([
            'name' => 'Admin doctor',
            'email' => 'doctor@demo.com',
            'phone_number' => '12345670',
            'password' => Hash::make('0123456789'), // Use a secure password in production
            'role' => 'Doctor',
        ]);

        // 2. Get the specialty id for Ophthalmology
        $specialty = DB::table('specialties')->where('name', 'Ophthalmology')->first();

        // 3. Create the doctor profile
        DB::table('doctors')->insert([
            'user_id' => $user->id,
            'mct_number' => '123456',
            'specialty_id' => $specialty->id ?? 2, // fallback to 1 if not found
            'category' => 'Specialist',
            'available_slots' => json_encode(['09:00', '13:00', '15:00']),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}