<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->foreignId('specialty_id')->after('mct_number')->constrained('specialties')->onDelete('cascade'); // Links to the specialties table
        });
    }

    public function down(): void
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->dropForeign(['specialty_id']); // Drops the foreign key constraint
            $table->dropColumn('specialty_id'); // Drops the specialty_id column
        });
    }
};