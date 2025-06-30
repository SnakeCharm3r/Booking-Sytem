<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Doctor;

class DoctorController extends Controller
{
    /**
     * Display a listing of the doctors.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
{
    $doctors = Doctor::with(['id', 'user_id'])->get();

    return response()->json([
        'status' => 'success',
        'data' => $doctors
    ]);
}

}
