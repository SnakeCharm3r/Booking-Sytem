<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->json('booked_slots')->nullable(); // Stores booked time slots as JSON
            // This column is not strictly necessary for the relationship, but you can add a helper column if needed.
            // $table->unsignedBigInteger('booking_id')->nullable();
            // $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};