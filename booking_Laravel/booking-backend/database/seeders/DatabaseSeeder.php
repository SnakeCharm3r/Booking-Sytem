<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            UsersData::class,
            SpecialtySeeder::class, // Corrected the typo
            DoctorCategory::class, // Ensure this is the correct class name
        ]);
    }
}
