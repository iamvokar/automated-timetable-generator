<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    function addCourse(Request $req){
        $course = new Course;
        $course->course_id = $req->input("course_id");
        $course->course_name = $req->input("course_name");
        $course->status = $req->input("status");
        $course->save();
    }

    function fetch() {
        return Course::all();
    }

    function update($id,Request $req){

        $course = Course::find($id);
        $course->course_id = $req->input("course_id");
        $course->course_name = $req->input("course_name");
        $course->status = $req->input("status");
        $course->save();
    }

    function prefill($id) {
        return Course::find($id);
    }

    function delete($id){
        Course::find($id)->delete();
    }

}
