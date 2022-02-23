<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Classroom;

class ClassroomController extends Controller
{
    function addClassroom(Request $req){
        $classroom = new Classroom;
        $classroom->classroom_no = $req->input("classroom_no");
        $classroom->classroom_type = $req->input("classroom_type");
        $classroom->classroom_floor = $req->input("classroom_floor");
        $classroom->status = $req->input("status");
        $classroom->save();
    }

    function fetchClassroom() {
        return Classroom::all();
    }

    function updateClassroom($id,Request $req){

        $classroom = Classroom::find($id);
        $classroom->classroom_no = $req->input("classroom_no");
        $classroom->classroom_type = $req->input("classroom_type");
        $classroom->classroom_floor = $req->input("classroom_floor");
        $classroom->status = $req->input("status");
        $classroom->save();
    }

    function prefillClassroom($id) {
        return Classroom::find($id);
    }

    function deleteClassroom($id){
        Classroom::find($id)->delete();
    }
}
