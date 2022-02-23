<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coursereport;

class CourseReportController extends Controller
{
    function CourseReportfetch() {
        return Coursereport::all();
    }

    function CourseReportupdate(Request $req){

        $course = new Coursereport;
        $course->id = $req->input("id");
        $course->course_id = $req->input("course_id");
        $course->course_name = $req->input("course_name");
        $course->status = $req->input("status");
        $course->save();
    }

    function CourseReportprefill($id) {
        return Coursereport::find($id);
    }

      function CourseReportdelete($id){
        Coursereport::find($id)->delete();
    }

}
