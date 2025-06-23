<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DoctorCategory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'General Practitioner',
            'Specialist',
            'Super Specialist',
        ];

        foreach ($categories as $category) {
            // Insert the category into the specialties table if it doesn't exist
            $specialtyId = DB::table('specialties')->insertGetId([
                'name' => $category,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert a doctor with the associated specialty_id
            DB::table('doctors')->insert([
                'user_id' => 1, // Provide a default user_id
                'specialty_id' => $specialtyId, // Assign the specialty_id
                'category' => $category, // Optional if you still want to keep the category column
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}