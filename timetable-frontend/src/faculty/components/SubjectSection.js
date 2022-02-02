import React from 'react'
import "./table.css"

function SubjectSection() {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="page_title ">
                            <h2>Subject</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center white_shd1 ">

                    <div class="col-md-8 adds pt-5">
                        <div class="white_shd2 ">
                            <div className='row'>
                              <div className='col-4'>
                            <div class="">
                                   <p>show <input
                                         type="number"
                                            name="course"
                                     /> entries</p>
                                </div>
                            </div>
                            <div className='col-4 ml-auto'>
                            <div class="">
                                   <p>Search <input
                                         type="text"
                                            name="course"
                                     /></p>
                                </div>
                            </div>
                            </div>
                                
                       
                            <table class="table pl-4">
                                        <thead class="thead-dark ">
                                            <tr>
                                                <th>#</th>
                                                <th>Subject</th>
                                                <th>Semester</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>MCA</td>
                                                <td>1</td>
                                                <td>Active</td>
                                                <td className=''><button class='btn bg-warning ml-3'> Report</button><button class='btn bg-success ml-3'> Like</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>MCA</td>
                                                <td>1</td>
                                                <td>Active</td>
                                                <td className=''><button class='btn bg-warning ml-3'> Report</button><button class='btn bg-success ml-3'> Like</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>MCA</td>
                                                <td>1</td>
                                                <td>Active</td>
                                                <td className=''><button class='btn bg-warning ml-3'> Report</button><button class='btn bg-success ml-3'> Like</button></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>MCA</td>
                                                <td>1</td>
                                                <td>Active</td>
                                                <td className=''><button class='btn bg-warning ml-3'> Report</button><button class='btn bg-success ml-3'> Like</button></td>
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

export default SubjectSection
