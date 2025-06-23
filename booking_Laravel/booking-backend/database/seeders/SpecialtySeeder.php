<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialtySeeder extends Seeder
{
    public function run(): void
    {
        $specialties = [
            'General Medicine',
            'Cardiologist',
            'Dermatologist',
            'Pediatrician',
            'Orthopedic Surgeon',
            'Neurologist',
            'Psychiatrist',
            'Oncologist',
            'Gynecologist',
            'Urologist',
            'Radiologist',
            'Pathologist',
            'Anesthesiologist',
            'Ophthalmologist',
            'ENT Specialist',
            'Nephrologist',
            'Endocrinologist',
            'Rheumatologist',
            'Plastic Surgeon',
            'Infectious Disease Specialist',
        ];

        foreach ($specialties as $specialty) {
            DB::table('specialties')->insert([
                'name' => $specialty,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}