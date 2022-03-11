<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Timetable;
use App\Models\timeinfo;
use App\Models\Constrain;
use App\Models\Classroom;
use App\Models\Subject;
use App\Models\Faculty;
use App\Models\Course;
use App\Models\Constrainrule;
use App\Models\Dummy;
use Illuminate\Support\Arr;
class TimetableController extends Controller
{
    function TimeTable($id){

     
        $Constrainrule = new Constrainrule;
        $Dummy = new Dummy;
        $all=Constrainrule::find($id);
        $startTime = $all->starting;
        $duration = $all->duration;
        $breaks = $all->break;
        $period = $all->period;
        $items = array();
        $items[0]=$startTime;
        $avg=ceil($period/2);
        for($i=1;$i<=$period;$i++)
        {
            if($period>5)
            {
                if($i==$avg+1 ) 
                {
                 $items[$i] = date('H:i',strtotime('+'.$breaks.' minute',strtotime($startTime)));
                 $startTime=$items[$i];
                }
                else{
                 $items[$i] = date('H:i',strtotime('+'.$duration.'minute',strtotime($startTime)));
                 $startTime=$items[$i];
                }  
            }
            else{
                if($i==$period)
                {
                    break;
                }
                else{
                    $items[$i] = date('H:i',strtotime('+'.$duration.'minute',strtotime($startTime)));
                    $startTime=$items[$i];
                }
               
            }
          
         
           
               
        } 
       // return $items; 
        $semester=Constrain::select('semester')->where('constrain_id',$id)->get();
        $semester=$semester[0]->semester;

        $subject=Subject::select('subject_name')->where('semester',$semester)->orderBy('priority', 'DESC')->get();
    
        $subject = collect($subject);
        $subject = $subject->pluck('subject_name')->all();
        //return $subject;
        
        // $experience=Faculty::select('experience')->where('semester',$semester)->get();
        // $experience = collect($experience);
        // $experience = $experience->pluck('experience')->all();
        
        $faculty=Faculty::select('faculty_name')->where('semester',$semester)->orderBy('experience', 'DESC')->get();
        
        $faculty = collect($faculty);
        $faculty = $faculty->pluck('faculty_name')->all();


        
        // $faculty=max($faculty);
        // $subject=max($subject);
        $result =array();
        for ($index = 0; $index < count($faculty); ++$index) {
           $result[$faculty[$index]] = $subject[$index];
            }
        //$subject = Arr::shuffle($subject); 
        // $output =array();
        // for ($index = 0; $index < count($items); ++$index) {
        //     if($index==$avg+1)
        //     {
        //         $output[$items[$index]] = 'break';
        //     }
        //     else{
        //         $output[$items[$index]] = $subject[$index];
        //     }
           
        // }
        return response()->json([
            'time' =>  $items,
            'subject'=>$subject,
            'link' =>  $result,
            ], 200);
    }
    function info($id)
    {
        $info=Constrain::select('course_id')->where('constrain_id',$id)->get();
        $cid=$info[0]->course_id;
        $course=Course::select('course_name')->where('id',$cid)->get();
        $cname=$course[0]->course_name;

        $semester=Constrain::select('semester')->where('constrain_id',$id)->get();
        $semester=$semester[0]->semester;

        $class=Classroom::select('classroom_no')->where('semester',$semester)->get();
        $class=$class[0]->classroom_no;
        return response()->json([
            'course' =>  $cname,
            'semester' =>  $semester,
            'class' =>  $class,
            ], 200);
    }
    function addTimetable(Request $req)
    {
        $timetable = new timeinfo;
        $timetable->timetable_name = $req->input("timetable_name");
        $timetable->constrain_id = $req->input("constrain_id");
        $timetable->status = $req->input("status");
        $timetable->save();
    }

    function fetchTimetable() {
        return timeinfo::all();
    }

    function updateTimetable($id,Request $req){

        $timetable = timeinfo::find($id);
        $timetable->timetable_name = $req->input("timetable_name");
        $timetable->constrain_id = $req->input("constrain_id");
        $timetable->status = $req->input("status");
        $timetable->save();
    }

    function prefillTimetable($id) {
        return timeinfo::find($id);
    }

    function deleteTimetable($id){
        timeinfo::find($id)->delete();
    }

    function searchTimetable($key)
    {
       $value= timeinfo::where('timetable_name','LIKE',"%$key")->get();
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
