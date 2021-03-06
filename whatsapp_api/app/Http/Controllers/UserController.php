<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use App\Helper\UserService;


class UserController extends Controller
{
     function register(Request $req)
     {
        
         $user = new User;
         $user->name=$req->name;
         $user->email=$req->email;
         $user->password=Hash::make($req->password);
         $user->save();
         return $user;
     }
}
