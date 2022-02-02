<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/addCourse',[CourseController::class,'addCourse']);
Route::get('/fetch',[CourseController::class,'fetch']);
Route::post('/update/{id}',[CourseController::class,'update']);
Route::get('/prefill/{id}',[CourseController::class,'prefill']);
Route::delete('/delete/{id}',[CourseController::class,'delete']);

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);



