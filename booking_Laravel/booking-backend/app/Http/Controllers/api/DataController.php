<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;

class DataController extends Controller
{
    public function index()
    {
        $data = User::all();
        return response()->json($data);
    }
}
