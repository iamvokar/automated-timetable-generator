<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subjectinterest;

class SubjectinterestController extends Controller
{
    function SubjectInterestupdate(Request $req){

        $subject = new Subjectinterest;
        $subject->User_Id = $req->input("User_Id");
        $subject->subject_id = $req->input("subject_id");
        $subject->subject_name = $req->input("subject_name");
        $subject->priority = $req->input("priority");
        $subject->semester = $req->input("semester");
        $subject->status = $req->input("status");
        $subject->save();
    }
}
