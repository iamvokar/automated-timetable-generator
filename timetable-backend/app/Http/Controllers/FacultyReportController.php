<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facultyreport;

class FacultyReportController extends Controller
{
    function FacultyReportfetch() {
        return Facultyreport::all();
    }

    function FacultyReportupdate(Request $req){

        $faculty = new Facultyreport;
        $faculty->id = $req->input("id");
        $faculty->faculty_id = $req->input("faculty_id");
        $faculty->faculty_name = $req->input("faculty_name");
        $faculty->faculty_email = $req->input("faculty_email");
        $faculty->gender = $req->input("gender");
        $faculty->experience = $req->input("experience");
        $faculty->status = $req->input("status");
        $faculty->save();
    }

    function FacultyReportprefill($id) {
        return Facultyreport::find($id);
    }

    function FacultyReportdelete($id){
        Facultyreport::find($id)->delete();
    }
    function searchReportFaculty($key)
    {
       $value= Facultyreport::where('faculty_name','LIKE',"%$key")->get();
       if($value)
       {
           return $value;
       }
       else
       {
        return response()->json([
            'response' => "notfound"
            ], 200);
       }
    }
}
