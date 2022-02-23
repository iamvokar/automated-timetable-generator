<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faculty;

class FacultyController extends Controller
{
    function addFaculty(Request $req){
        $faculty = new Faculty;
        $faculty->faculty_id = $req->input("faculty_id");
        $faculty->faculty_name = $req->input("faculty_name");
        $faculty->faculty_email = $req->input("faculty_email");
        $faculty->gender = $req->input("gender");
        $faculty->experience = $req->input("experience");
        $faculty->status = $req->input("status");
        $faculty->save();
    }

    function fetchFaculty() {
        return Faculty::all();
    }

    function updateFaculty($id,Request $req){

        $faculty = Faculty::find($id);
        $faculty->faculty_id = $req->input("faculty_id");
        $faculty->faculty_name = $req->input("faculty_name");
        $faculty->faculty_email = $req->input("faculty_email");
        $faculty->gender = $req->input("gender");
        $faculty->experience = $req->input("experience");
        $faculty->status = $req->input("status");
        $faculty->save();
    }

    function prefillFaculty($id) {
        return Faculty::find($id);
    }

    function deleteFaculty($id){
        Faculty::find($id)->delete();
    }
}
