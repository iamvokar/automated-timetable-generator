import React from 'react'
import './Main.css';
import img from '../assets/image/mca.png'
import Cdata,{Cvalue} from '../assets/array/Cdata'
import Cdata2 from '../assets/array/Cdata2'
import Cdata3 from '../assets/array/Cdata3'
import {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function card1(val) {
  
    return (
        <div className={val.cols}>
            <div className={val.boxs}>
                <div className="pic"><i class={val.icon} aria-hidden="true"></i></div>
                <div className="box-info">
                    <h4 className="text-center">{val.value}</h4>
                    <h3>{val.name}</h3>
                </div>
            </div>
        </div>
    );
}
function card2(val) {
    return (
        <div className={val.cols}>
            <div className={val.boxs}>
                <div className="pic"><i class={val.icon} aria-hidden="true"></i></div>
                <div className="box-info">
                    <h4 className="text-center">{val.value}</h4>
                    <h3>{val.name}</h3>
                </div>
            </div>
        </div>
    );
}
function card3(val) {
    return (
        <div className="col-5">

            <div class="card">
                <a class="img-card" href="#">
                    <img src={img} />
                </a>
                <div class="card-content">
                    <h4 class="card-title">
                        <a href="#">{val.title} 
                        </a>
                    </h4>
                </div>
                <div class="card-read-more py-4">
                    <a href="#" class="">
                    {val.view} 
                    </a>
                    <a href="#" class="" download>
                    {val.download} 
                    </a>
                </div>

            </div>
        </div>
    );
}
function Main() {
    useEffect(()=>{
        toast.success("welcome to faculty dashboard");
    },[])
    return (
        <>
            {/* main component start */}
            <section id="data" class="data section-bg">
                <div className="container " id="main">
                    <div className="row d-flex justify-content-center">
                        {Cdata.map(card2)}
                    </div>
                    <div className="row d-flex pt-4  justify-content-center ">
                        {Cdata2.map(card2)}
                    </div>
                </div>
            </section>
            {/* main component end */}

            <div class="section-title">
                <h2>Recent work</h2>

            </div>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                    {Cdata3.map(card3)}
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Main

