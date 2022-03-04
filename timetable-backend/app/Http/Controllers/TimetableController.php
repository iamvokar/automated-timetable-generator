<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Timetable;
use App\Models\Constrain;
class TimetableController extends Controller
{
    function addConstrain(Request $req){

        $timetable = new Timetable;
        $timetable->time = $req->input("time");
        $timetable->semester = $req->input("semester");
        $timetable->faculty_id = $req->input("faculty_id");
        $timetable->classroom_no = $req->input("classroom_no");
        $timetable->constrain_id = $req->input("constrain_id");
        $timetable->status = $req->input("status");
        $timetable->save();
    }

    function fetchConstrain() {
        return Timetable::all();
    }

    function updateConstrain($id,Request $req){

        $constrain = Timetable::find($id);
        $constrain->course_id = $req->input("course_id");
        $constrain->semester = $req->input("semester");
        $constrain->faculty_id = $req->input("faculty_id");
        $constrain->classroom_no = $req->input("classroom_no");
        $constrain->constrain_id = $req->input("constrain_id");
        $constrain->status = $req->input("status");
        $constrain->save();
    }

    function prefillConstrain($id) {
        return Timetable::find($id);
    }

    function deleteConstrain($id){
        Timetable::find($id)->delete();
    }

    function searchConstrain($key)
    {
       $value= Timetable::where('constrains_type','LIKE',"%$key")->get();
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
