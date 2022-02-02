<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $req)
    { 
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user= User::where(['email'=>$req->email])->first();
        if(!$user || !Hash::check($req->password,$user->password))
        {
            return ["error"=>"Username or password is not matched"];
        }
        return $user;
    }
    
}

