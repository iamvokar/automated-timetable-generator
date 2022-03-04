import React from 'react'
import "./table.css"
import {Button,Modal} from 'react-bootstrap'
import SideBar from './SideBar';
import Day from '../assets/array/Day'
import Pdf from "react-to-pdf";
import moment from 'moment';
function Timetable() {
    const [modalShow, setModalShow] = React.useState(false);
    const ref = React.createRef();
    return (
        <>
        <SideBar/>
            <div className="container-fluid" >
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="page_title ">
                            <h2>Timetable </h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center white_shd1 " >
                <div className="col-md-12  add">
                <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
               </div>
                    <div class="col-md-8 adds pt-5 " ref={ref}>
                        <div class="white_shd2 " >
                                
                        <h1 className='text-center mr-5 pr-5'>GLS UNIVERSITY</h1>
                   <h5 className='text-center mr-5 pr-5'>Faculty of Computer Application and Information Technology </h5>
                   <h6 className='text-center mr-5 pr-5'>BCA Programme {new Date().getFullYear()} </h6>
                   <p className='text-center mr-5 pr-5'>TIME TABLE SEM 6</p>
                            <table class="table pl-4 pt-3" >
                                        <thead class="thead-dark ">
                                            <tr>
                                            <th>Day/time</th>
                                            {Day.map((item)=>
                                            <>
                                                <th>{item}</th>
                                                </>
                                                )}
                                            </tr>
                                            
                                        </thead>
                                        <tbody>
                                         
                                            <tr>
                                                <td>{moment().add(45, 'm').format()}</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''>xxxx</td>
                                            </tr>
                                      
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
        </>
    )
}

export default Timetable
