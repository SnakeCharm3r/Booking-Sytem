<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Links to the users table
            $table->string('mct_number')->unique()->nullable(); // Unique medical license number
            //$table->foreignId('specialty_id')->constrained('specialties')->onDelete('cascade'); // Links to the specialties table
            $table->json('available_slots')->nullable(); // Stores available time slots as JSON
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};