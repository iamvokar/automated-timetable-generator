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

}
