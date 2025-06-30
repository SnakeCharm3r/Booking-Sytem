<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialtySeeder extends Seeder
{
    public function run(): void
    {
        $specialties = [
        
        'Obstetrics and Gynecology',
        'Pediatrics',
        'Orthopedic Surgery',
        'Ophthalmology',
        'Ear, Nose and Throat (ENT)',
        'Dermatology',
        'Neurology',
        'Psychiatry',
        'Oncology',
        'Urology',
        'Radiology',
        'Pathology',
        'Anesthesiology',
        'Plastic and Reconstructive Surgery',
        'Infectious Diseases',
        'Cardiology',
        'Nephrology',
        'Endocrinology',
        'Rheumatology',
        'Dental Surgery',
        'Physiotherapy',
        'Occupational Therapy',
        'Speech and Language Therapy',
        'Prosthetics and Orthotics',
        'Community Health',
        'Public Health',

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