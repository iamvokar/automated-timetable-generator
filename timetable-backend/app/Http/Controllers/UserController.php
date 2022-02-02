<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    function register(Request $req){
        $user = new User;
        $user->UserName=$req->input("UserName");
        $user->FirstName=$req->input("FirstName");
        $user->LastName=$req->input("LastName");
        $user->Email=$req->input("Email");
        $user->Password=Hash::make($req->input("Password"));
        $user->save();
    }

    function login(Request $req){
        $user = User::where("UserName",$req->UserName)->first();
        if(!$user||!Hash::check($req->Password,$user->Password))
        {
            return response()->json([
            'response' => "Error"
            ], 200);
        }
        else {
            return response()->json([
            'response' => "LoggedIn"
            ], 200);
        }
    }
}
