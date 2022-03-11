import React from 'react'
import './Main.css';
import Mca from './assets/mca.png'
function Main() {
    return (
        <>
            {/* main component start */}
            <section id="data" class="data section-bg">
                <div className="container " id="main">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-3  ">
                            <div className="box d-flex align-items-center " >
                                <div className="pic"><i class="fa fa-4x fa-graduation-cap text-danger" aria-hidden="true"></i></div>
                                <div className="box-info">
                                    <h4 className="text-center">2</h4>
                                    <h3>Course</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  ">
                            <div className="box d-flex align-items-end" >
                                <div className="pic"><i class="fa fa-4x fa-book text-primary" aria-hidden="true"></i></div>
                                <div className="box-info">
                                    <h4 className="text-center">142</h4>
                                    <h3>Subject</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3   ">
                            <div className="box d-flex align-items-end" >
                                <div className="pic"><i class="fa fa-4x fa-users text-success" aria-hidden="true"></i></div>
                                <div className="box-info">
                                    <h4 className="text-center">12</h4>
                                    <h3>faculty</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex pt-4  justify-content-center ">
                            <div className="col-lg-3  ml-auto">
                                <div className="box d-flex align-items-start" >
                                    <div className="pic"><i class="fa fa-4x fa-university text-info" aria-hidden="true"></i></div>
                                    <div className="box-info">
                                        <h4 className="text-center">40</h4>
                                        <h3>ClassRoom</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mr-auto ">
                                <div className="box d-flex align-items-start">
                                    <div className="pic"><i class="fa fa-4x fa-clipboard text-warning" aria-hidden="true"></i></div>
                                    <div className="box-info">
                                        <h4 className="text-center">6</h4>
                                        <h3>Semester</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div className="col-5">

                <div class ="card">
                <a class ="img-card" href="#">
                <img src={Mca} />
                </a>
                <div class ="card-content">
                <h4 class ="card-title">
                <a href="#">MCA
                </a>
                </h4>
                </div>
                <div class ="card-read-more">
                <a href="#" class ="btn btn-link btn-block">
                View
                </a>
                <a href="#" class ="btn btn-link btn-block" download>
                Download
                </a>
                </div>

                </div>
                </div>
                <div className="col-5">
                  <div class ="card">
                <a class ="img-card" href="#">
                <img src={Mca} />
                </a>
                <div class ="card-content">
                <h4 class ="card-title">
                <a href="#">BCA
                </a>
                </h4>
                </div>
                <div class ="card-read-more">
                <a href="#" class ="btn btn-link btn-block">
                View
                </a>
                <a href="#" class ="btn btn-link btn-block" download>
                Download
                </a>
                </div>

                </div>
                </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default Main

