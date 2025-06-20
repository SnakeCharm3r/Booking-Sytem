<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

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

//routes for authentication
Route::post('/login', [AuthController::class, 'login'])->name('login')->middleware('role:admin,patient');
