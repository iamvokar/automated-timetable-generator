import React from 'react'
import "./table.css"
import {Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import swal from 'sweetalert';
import SideBar from './SideBar';
import Hours from '../assets/array/Hours'
import Min from '../assets/array/Min'
import Semester from '../assets/array/Semester'

function CreateConstrainModal(props) {
  const [constrain_id,setconstrain_id] = useState("");
  const [constrains_type,setconstrains_type] = useState("");
  const [starting,setstarting] = useState();
  const [ending,setending] = useState();
  const [duration,setduration] = useState("");
  const [period,setperiod] = useState("");


  const [hour,sethour] = useState(" " );
  const [minute,setminute] = useState(" " );
  const [ehour,setehour] = useState(" " );
  const [eminute,seteminute] = useState(" " );

  
  useEffect(() => {
    setstarting(hour+":"+minute)
    setending(ehour+":"+eminute)
  }, [hour,minute,ehour,eminute])
 
  const createConstrain = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("constrain_id", constrain_id)
    formData.append("constrains_type", constrains_type)
    formData.append("starting", starting)
    formData.append("ending", ending)
    formData.append("duration", duration)
    formData.append("period", period)
    let result = await fetch("http://127.0.0.1:8000/api/addConstrainrule", {
      method: 'POST',
      body: formData


    });
    if (result.status == 200) {
      swal({
        title: "success!",
        text: "your course added!",
        icon: "success",
        button: "ok!",
      });
    }
    else {
      swal({
        title: "Ops!",
        text: "something went wrong!",
        icon: "warning",
        button: "ok!",
      });
    }
    props.onHide()
    //props.get()
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='head' closeButton>
       <div className="text-light text-center">
          <h1>Create Constrain</h1>
       </div>
      </Modal.Header>
      <Modal.Body>
      <div className="full_container ">
      <div className="container justify-content-center ">
        <div className="center verticle_center full_height ">
            <div className="login_form">
              <form className='' onSubmit={createConstrain}>
                <fieldset className=''>
                <div className="field ">
                    <input
                      type="text"
                      name="course"
                      placeholder="Constrain ID"
                      onChange={(e)=>setconstrain_id(e.target.value)}
                    />

                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="course_name"
                      placeholder="Constrain Type"
                      onChange={(e)=>setconstrains_type(e.target.value)}
                    />
                  </div>
                  <div class="d-flex w-75 ml-5 pl-5 pb-3" > 
                  <label className='h6 pt-3 pr-1'>Starting:</label> 
                  <select onChange={(e)=>sethour(e.target.value)} name="hour" width="10%">
                  {Hours.map((item)=>
                  <option defaultValue={item}>{item}</option>
                  )}
                  </select>
                  <span className="pt-3 px-3" >
                  HOUR 
                  </span>
                  <select onChange={(e)=>setminute(e.target.value)} name="minute">
                  {Min.map((item)=>
                  <option defaultValue={item}>{item}</option>
                  )}
                  </select>
                  <span className="pt-3 px-3" >
                  MINUTE
                  </span>
                  </div>
                  <div class="d-flex w-75 ml-5 pl-5 pb-3" > 
                  <label className='h6 pt-3 pr-1'>Ending:</label> 
                  <select onChange={(e)=>setehour(e.target.value)} name="ehour" width="10%">
                  {Hours.map((item)=>
                  <option defaultValue={item}>{item}</option>
                  )}
                  </select>
                  <span className="pt-3 px-3" >
                  HOUR 
                  </span>
                  <select onChange={(e)=>seteminute(e.target.value)} name="ehour">
                  {Min.map((item)=>
                  <option defaultValue={item}>{item}</option>
                  )}
                  </select>
                  <span className="pt-3 px-3" >
                  MINUTE
                  </span>
                  </div>
                  <div class="d-flex w-75 ml-5 pl-5 pb-3" > 
                  <label className='h6 pt-3 pr-1'>Duration:</label> 
                  <select onChange={(e)=>setduration(e.target.value)}>
                  {Min.map((item)=>
                  <option defaultValue={item}>{item}</option>
                  )}
                  </select>
                  <span className="pt-3 px-3" >
                  MINUTE
                  </span>
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="course_name"
                      placeholder="No of Period"
                      onChange={(e)=>setperiod(e.target.value)}
                    />
                  </div>
                  <div className="field pt-4">
                    <input type="submit" value="Create Constrain" className="btn" />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
    </div>
      </Modal.Body>
      <Modal.Footer className='head'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function AddConstrainModal(props) {
  
  const [course_id,setcourse_id] = useState("");
  const [semester,setSemester] = useState("");
  const [faculty_id,setfaculty_id] = useState("");
  const [classroom_no,setclassroom_no] = useState("");
  const [constrain_id,setconstrain_id] = useState("");
  const [status,setStatus] = useState("");
  const [data1, setData1] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  console.warn("check",constrain_id);

  const addConstrain = async (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append("course_id",course_id)
    formData.append("semester",semester)
    formData.append("faculty_id",faculty_id)
    formData.append("classroom_no",classroom_no)
    formData.append("constrain_id",constrain_id)
    formData.append("status",status)
    let result =  await fetch("http://127.0.0.1:8000/api/addConstrain",{
      method:'POST',
      body:formData
    });
    console.warn(formData);
    if (result.status == 200) {
      swal({
        title: "success!",
        text: "your class room added!",
        icon: "success",
        button: "ok!",
      });
    }
    else {
      swal({
        title: "Ops!",
        text: "something went wrong!",
        icon: "warning",
        button: "ok!",
      });
    }
    props.onHide()
    //props.get()
  }

  useEffect(() => {
    getCourse()

    getFaculty()
    getClassroom()
    getConstrain()
  }, [])

  async function getCourse() {
    let result = await fetch('http://127.0.0.1:8000/api/fetch');
    result = await result.json();
    setData1(result)
  }


  async function getFaculty() {
    let result = await fetch('http://127.0.0.1:8000/api/fetchFaculty');
    result = await result.json();
    setData3(result)
  }

  async function getClassroom() {
    let result = await fetch('http://127.0.0.1:8000/api/fetchClassroom');
    result = await result.json();
    setData4(result)
  }
  async function getConstrain() {
    let result = await fetch('http://127.0.0.1:8000/api/fetchConstrainrule');
    result = await result.json();
    setData5(result)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='head' closeButton>
       <div className="text-light text-center">
          <h1>Add Constrain</h1>
       </div>
      </Modal.Header>
      <Modal.Body>
      <div className="full_container ">
      <div className="container justify-content-center ">
        <div className="center verticle_center full_height ">
            <div className="login_form">
              <form className='' onSubmit={addConstrain}>
                <fieldset className=''>
                
                  <div class="field">
                  <label className='h4 pt-2'>Course : </label> 
                  <select onChange={(e)=>setcourse_id(e.target.value)}>
                  {data1.map((item)=>
                  <option value={item.id}>{item.id}:{item.course_name}</option>
                  )}
                  </select>
                  </div>
                
                  <div class="field" > 
                  <label className='h4 pt-2'>Semester:</label> 
                  <select onChange={(e)=>setSemester(e.target.value)}>
                   {Semester.map((item)=>
                   <option value={item}>{item}</option>
                   )}
                  </select>
                  </div>
                  <div class="field">
                  <label className='h4 pt-2'>Constrain: </label> 
                  <select onChange={(e)=>setconstrain_id(e.target.value)}>
                  {data5.map((item)=>
                  <option value={item.id}>{item.id}:{item.constrains_type}</option>
                  )}
                  </select>
                  </div>
                  <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        value="Active"
                        onClick={(e) => setStatus(e.target.value)} />
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        value="Inactive"
                        onClick={(e) => setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                  <div className="field pt-4">
                    <input type="submit" value="Add Constrain" className="btn" />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
    </div>
      </Modal.Body>
      <Modal.Footer className='head'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
  }
  
function ConstrainSection() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    return (
        <>
        <SideBar/>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="page_title ">
                            <h2>Constrain</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center white_shd1 ">

                    <div className="col-md-12  add">
                   
                        <Button variant="success" onClick={() => setModalShow(true)}>
                        Create Constrain
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant="success" onClick={() => setModalShow1(true)}>
                            ADD Constrain
                        </Button>
                    </div>

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
                                                <th>Course ID</th>
                                                <th>Semester</th>
                                                <th>Subject</th>
                                                <th>Faculty</th>
                                                <th>Constrain</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>234</td>
                                                <td>203</td>
                                                <td>LAB</td>
                                                <td>third</td>
                                                <td>active</td>
                                                <td className=''><button class='btn bg-success ml-3'> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button class='btn bg-danger ml-3'><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <CreateConstrainModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                        
                      <AddConstrainModal
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                    />
        </>
    )
}

export default ConstrainSection
