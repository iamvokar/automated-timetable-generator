<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subjectreport;

class SubjectReportController extends Controller
{
    function SubjectReportfetch() {
        return Subjectreport::all();
    }

    function SubjectReportupdate(Request $req){

        $subject = new Subjectreport;
        $subject->id = $req->input("id");
        $subject->subject_id = $req->input("subject_id");
        $subject->subject_name = $req->input("subject_name");
        $subject->priority = $req->input("priority");
        $subject->semester = $req->input("semester");
        $subject->status = $req->input("status");
        $subject->save();
    }

    function SubjectReportprefill($id) {
        return Subjectreport::find($id);
    }

    function SubjectReportdelete($id){
        Subjectreport::find($id)->delete();
    }
    function searchReportSubject($key)
    {
       $value= Subjectreport::where('subject_name','LIKE',"%$key")->get();
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
