<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Constrainrule;
class ConstrainruleController extends Controller
{
  function addConstrainrule(Request $req){
        $constrainRule = new Constrainrule;
        $constrainRule->constrain_id = $req->input("constrain_id");
        $constrainRule->constrains_type = $req->input("constrains_type");
        $constrainRule->starting = $req->input("starting");
        $constrainRule->ending = $req->input("ending");
        $constrainRule->duration = $req->input("duration");
        $constrainRule->period = $req->input("period");
        $constrainRule->save();
    }
    

    function fetchConstrainrule() {
        return Constrainrule::all();
    }

    function updateConstrainrule($id,Request $req){

        $constrainRule = Constrainrule::find($id);
        $constrainRule->constrain_id = $req->input("constrain_id");
        $constrainRule->constrains_type = $req->input("constrains_type");
        $constrainRule->starting = $req->input("starting");
        $constrainRule->ending = $req->input("ending");
        $constrainRule->duration = $req->input("duration");
        $constrainRule->period = $req->input("period");
        $constrainRule->save();
    }

    function prefillConstrainrule($id) {
        return Constrainrule::find($id);
    }

    function deleteConstrain($id){
        Constrainrule::find($id)->delete();
    }

    function searchConstrainrule($key)
    {
       $value= Constrainrule::where('constrains_type','LIKE',"%$key")->get();
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
