<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;

class SubjectController extends Controller
{
    function addSubject(Request $req){
        $subject = new Subject;
        $subject->subject_id = $req->input("subject_id");
        $subject->subject_name = $req->input("subject_name");
        $subject->semester = $req->input("semester");
        $subject->status = $req->input("status");
        $subject->save();
    }

    function fetchSubject() {
        return Subject::all();
    }

    function updateSubject($id,Request $req){

        $subject = Subject::find($id);
        $subject->subject_id = $req->input("subject_id");
        $subject->subject_name = $req->input("subject_name");
        $subject->semester = $req->input("semester");
        $subject->status = $req->input("status");
        $subject->save();
    }

    function prefillSubject($id) {
        return Subject::find($id);
    }

    function deleteSubject($id){
        Subject::find($id)->delete();
    }

    function searchSubject($key)
    {
       $value= Subject::where('subject_name','LIKE',"%$key")->get();
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
