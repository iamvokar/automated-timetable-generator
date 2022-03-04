<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Classroomreport;

class ClassroomReportController extends Controller
{
    function ClassroomReportfetch() {
        return Classroomreport::all();
    }

    function ClassroomReportupdate(Request $req){

        $classroom = new Classroomreport;
        $classroom->id = $req->input("id");
        $classroom->classroom_no = $req->input("classroom_no");
        $classroom->classroom_type = $req->input("classroom_type");
        $classroom->semester = $req->input("semester");
        $classroom->status = $req->input("status");
        $classroom->save();
    }

    function ClassroomReportprefill($id) {
        return Classroomreport::find($id);
    }

    function ClassroomReportdelete($id){
        Classroomreport::find($id)->delete();
    }
    function searchReportClassroom($key)
    {
       $value= Classroomreport::where('classroom_type','LIKE',"%$key")->get();
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
