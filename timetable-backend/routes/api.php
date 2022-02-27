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


use App\Http\Controllers\ConstrainController;
use App\Http\Controllers\ConstrainruleController;
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
Route::get('/search/{key}',[CourseController::class,'search']);

//subject
Route::post('/addSubject',[SubjectController::class,'addSubject']);
Route::get('/fetchSubject',[SubjectController::class,'fetchSubject']);
Route::post('/updateSubject/{id}',[SubjectController::class,'updateSubject']);
Route::get('/prefillSubject/{id}',[SubjectController::class,'prefillSubject']);
Route::delete('/deleteSubject/{id}',[SubjectController::class,'deleteSubject']);
Route::get('/searchSubject/{key}',[SubjectController::class,'searchSubject']);

//classroom
Route::post('/addClassroom',[ClassroomController::class,'addClassroom']);
Route::get('/fetchClassroom',[ClassroomController::class,'fetchClassroom']);
Route::post('/updateClassroom/{id}',[ClassroomController::class,'updateClassroom']);
Route::get('/prefillClassroom/{id}',[ClassroomController::class,'prefillClassroom']);
Route::delete('/deleteClassroom/{id}',[ClassroomController::class,'deleteClassroom']);
Route::get('/searchClassroom/{key}',[ClassroomController::class,'searchClassroom']);

//faculty
Route::post('/addFaculty',[FacultyController::class,'addFaculty']);
Route::get('/fetchFaculty',[FacultyController::class,'fetchFaculty']);
Route::post('/updateFaculty/{id}',[FacultyController::class,'updateFaculty']);
Route::get('/prefillFaculty/{id}',[FacultyController::class,'prefillFaculty']);
Route::delete('/deleteFaculty/{id}',[FacultyController::class,'deleteFaculty']);
Route::get('/searchFaculty/{key}',[FacultyController::class,'searchFaculty']);

//faculty Side API

//report course
Route::get('/CourseReportfetch',[CourseReportController::class,'CourseReportfetch']);
Route::post('/CourseReportupdate',[CourseReportController::class,'CourseReportupdate']);
Route::get('/CourseReportprefill/{id}',[CourseReportController::class,'CourseReportprefill']);
Route::delete('/CourseReportdelete/{id}',[CourseReportController::class,'CourseReportdelete']);
Route::get('/searchReport/{key}',[CourseReportController::class,'searchReport']);

//report faculty
Route::get('/FacultyReportfetch',[FacultyReportController::class,'FacultyReportfetch']);
Route::post('/FacultyReportupdate',[FacultyReportController::class,'FacultyReportupdate']);
Route::get('/FacultyReportprefill/{id}',[FacultyReportController::class,'FacultyReportprefill']);
Route::delete('/FacultyReportdelete/{id}',[FacultyReportController::class,'FacultyReportdelete']);
Route::get('/searchReportFaculty/{key}',[FacultyReportController::class,'searchReportFaculty']);

//report subject
Route::get('/SubjectReportfetch',[SubjectReportController::class,'SubjectReportfetch']);
Route::post('/SubjectReportupdate',[SubjectReportController::class,'SubjectReportupdate']);
Route::get('/SubjectReportprefill/{id}',[SubjectReportController::class,'SubjectReportprefill']);
Route::delete('/SubjectReportdelete/{id}',[SubjectReportController::class,'SubjectReportdelete']);
Route::get('/searchReportSubject/{key}',[SubjectReportController::class,'searchReportSubject']);

//report class
Route::get('/ClassroomReportfetch',[ClassroomReportController::class,'ClassroomReportfetch']);
Route::post('/ClassroomReportupdate',[ClassroomReportController::class,'ClassroomReportupdate']);
Route::get('/ClassroomReportprefill/{id}',[ClassroomReportController::class,'ClassroomReportprefill']);
Route::delete('/ClassroomReportdelete/{id}',[ClassroomReportController::class,'ClassroomReportdelete']);
Route::get('/searchReportClassroom/{key}',[ClassroomReportController::class,'searchReportClassroom']);


//Main routing

//Constrain

Route::post('/addConstrain',[ConstrainController::class,'addConstrain']);
Route::get('/fetchConstrain',[ConstrainController::class,'fetchConstrain']);
Route::post('/updateConstrain/{id}',[ConstrainController::class,'updateConstrain']);
Route::get('/prefillConstrain/{id}',[ConstrainController::class,'prefillConstrain']);
Route::delete('/deleteConstrain/{id}',[ConstrainController::class,'deleteConstrain']);
Route::get('/searchConstrain/{key}',[ConstrainController::class,'searchConstrain']);

//Constrain rule
Route::post('/addConstrainrule',[ConstrainruleController::class,'addConstrainrule']);
Route::get('/fetchConstrainrule',[ConstrainruleController::class,'fetchConstrainrule']);
Route::post('/updateConstrainrule/{id}',[ConstrainruleController::class,'updateConstrainrule']);
Route::get('/prefillConstrainrule/{id}',[ConstrainruleController::class,'prefillConstrainrule']);
Route::delete('/deleteConstrainrule/{id}',[ConstrainruleController::class,'deleteConstrainrule']);
Route::get('/searchConstrainrule/{key}',[ConstrainruleController::class,'searchConstrainrule']);





