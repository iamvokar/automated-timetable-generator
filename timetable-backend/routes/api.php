<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\FacultyController;

use App\Http\Controllers\CourseReportController;
use App\Http\Controllers\SubjectReportController;
use App\Http\Controllers\FacultyReportController;
use App\Http\Controllers\ClassroomReportController;
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

//auth
Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::get('/userinfo/{id}',[UserController::class,'userinfo']);

//Admin Side API

//course
Route::post('/addCourse',[CourseController::class,'addCourse']);
Route::get('/fetch',[CourseController::class,'fetch']);
Route::post('/update/{id}',[CourseController::class,'update']);
Route::get('/prefill/{id}',[CourseController::class,'prefill']);
Route::delete('/delete/{id}',[CourseController::class,'delete']);

//subject
Route::post('/addSubject',[SubjectController::class,'addSubject']);
Route::get('/fetchSubject',[SubjectController::class,'fetchSubject']);
Route::post('/updateSubject/{id}',[SubjectController::class,'updateSubject']);
Route::get('/prefillSubject/{id}',[SubjectController::class,'prefillSubject']);
Route::delete('/deleteSubject/{id}',[SubjectController::class,'deleteSubject']);

//classroom
Route::post('/addClassroom',[ClassroomController::class,'addClassroom']);
Route::get('/fetchClassroom',[ClassroomController::class,'fetchClassroom']);
Route::post('/updateClassroom/{id}',[ClassroomController::class,'updateClassroom']);
Route::get('/prefillClassroom/{id}',[ClassroomController::class,'prefillClassroom']);
Route::delete('/deleteClassroom/{id}',[ClassroomController::class,'deleteClassroom']);

//faculty
Route::post('/addFaculty',[FacultyController::class,'addFaculty']);
Route::get('/fetchFaculty',[FacultyController::class,'fetchFaculty']);
Route::post('/updateFaculty/{id}',[FacultyController::class,'updateFaculty']);
Route::get('/prefillFaculty/{id}',[FacultyController::class,'prefillFaculty']);
Route::delete('/deleteFaculty/{id}',[FacultyController::class,'deleteFaculty']);


//faculty Side API

//report course
Route::get('/CourseReportfetch',[CourseReportController::class,'CourseReportfetch']);
Route::post('/CourseReportupdate',[CourseReportController::class,'CourseReportupdate']);
Route::get('/CourseReportprefill/{id}',[CourseReportController::class,'CourseReportprefill']);
Route::delete('/CourseReportdelete/{id}',[CourseReportController::class,'CourseReportdelete']);

//report faculty
Route::get('/FacultyReportfetch',[FacultyReportController::class,'FacultyReportfetch']);
Route::post('/FacultyReportupdate',[FacultyReportController::class,'FacultyReportupdate']);
Route::get('/FacultyReportprefill/{id}',[FacultyReportController::class,'FacultyReportprefill']);
Route::delete('/FacultyReportdelete/{id}',[FacultyReportController::class,'FacultyReportdelete']);

//report subject
Route::get('/SubjectReportfetch',[SubjectReportController::class,'SubjectReportfetch']);
Route::post('/SubjectReportupdate',[SubjectReportController::class,'SubjectReportupdate']);
Route::get('/SubjectReportprefill/{id}',[SubjectReportController::class,'SubjectReportprefill']);
Route::delete('/SubjectReportdelete/{id}',[SubjectReportController::class,'SubjectReportdelete']);

//report class
Route::get('/ClassroomReportfetch',[ClassroomReportController::class,'ClassroomReportfetch']);
Route::post('/ClassroomReportupdate',[ClassroomReportController::class,'ClassroomReportupdate']);
Route::get('/ClassroomReportprefill/{id}',[ClassroomReportController::class,'ClassroomReportprefill']);
Route::delete('/ClassroomReportdelete/{id}',[ClassroomReportController::class,'ClassroomReportdelete']);





