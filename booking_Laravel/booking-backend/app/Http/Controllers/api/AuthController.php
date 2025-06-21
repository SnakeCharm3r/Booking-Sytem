<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //request to Login
    public function Login( Request $request){

        //request validation
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        //attemt to Login
        if (!Auth::attempt($request->only('email', 'password'))) 
        {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Invalid credentials'
                ], 401);
        };

        //get the authenticated user
        $user = Auth::user();

        //check for he user role
        if ($user->user_role !== 'admin' && $user->user_role !== 'patient') {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Unauthorized role'
                ], 403);
        }

        //generate a new token for the user
        $token = $user->createToken('authtoken')->plainTextToken;

        //return the response with the token and user details
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Login successful',
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->role,
                ]
            ], 200);

    }
}
