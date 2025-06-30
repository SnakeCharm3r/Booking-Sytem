<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DataController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DoctorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//routes for roles
Route::get('/admin', 'AdminController@index')->middleware('role:admin');
Route::get('/patient', 'PatientController@index')->middleware('role:patient');

//testing data retrival
Route::get('/data', [DataController::class, 'index']);
//routes for authentication
Route::post('/login', [AuthController::class, 'login']);

// Route to get all doctors
Route::get('/doctors', [DoctorController::class, 'index']);

