import React from 'react'
import "./table.css"
import TimePicker from 'react-time-picker';
import DurationPicker from "react-duration-picker";
import {Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import swal from 'sweetalert';

function CreateConstrainModal(props) {
  const [constrain_id,setconstrain] = useState("");
  const [constrain_type,setconstrain_type] = useState("");
  const [value, onChange] = useState('10:00');

  const [time1, setTime1] = useState({
    hours: 0,
    minutes: 30,
    seconds: 5
  });

  const handleChange1 = time1 => {
    setTime1(time1);
  };
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
              <form className=''>
                <fieldset className=''>
                <div className="field ">
                    <input
                      type="text"
                      name="course"
                      placeholder="Constrain ID"
                      onChange={(e)=>setconstrain(e.target.value)}
                    />

                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="course_name"
                      placeholder="Constrain Type"
                      onChange={(e)=>setconstrain_type(e.target.value)}
                    />
                  </div>
                  <div class="field "> 
 
                  <TimePicker onChange={onChange} value={value} disableClock="true"/>
                  </div>
                  <div class="field ">  
   
                  <TimePicker onChange={onChange} value={value}  disableClock="true"/>
                  </div>
                  <div className="field ml-5 pl-5">
                  <DurationPicker initialDuration={time1} onChange={handleChange1} />

                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="course_name"
                      placeholder="No of Period"
                      onChange={(e)=>setconstrain_type(e.target.value)}
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
  const [subject_id,setsubject_id] = useState("");
  const [faculty_id,setfaculty_id] = useState("");
  const [classroom_id,setclassroom_id] = useState("");
  const [status,setStatus] = useState("");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  console.warn("check",faculty_id);

  const addConstrain = async (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append("course_id",course_id)
    formData.append("subject_id",subject_id)
    formData.append("faculty_id",faculty_id)
    formData.append("classroom_no",classroom_id)
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
    getSubject()
    getFaculty()
    getClassroom()
  }, [])

  async function getCourse() {
    let result = await fetch('http://127.0.0.1:8000/api/fetch');
    result = await result.json();
    setData1(result)
  }

  async function getSubject() {
    let result = await fetch('http://127.0.0.1:8000/api/fetchSubject');
    result = await result.json();
    setData2(result)
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
                  <option defaultValue={item.id}>{item.id}:{item.course_name}</option>
                  )}
                  </select>
                  </div>
                
                  <div class="field">
                  <label className='h4 pt-2'>Subject : </label> 
                  <select onChange={(e)=>setsubject_id(e.target.value)}>
                  {data2.map((item)=>
                  <option defaultValue={item.id}>{item.id}:{item.subject_name}</option>
                  )}
                  </select>
                  </div>
                  <div class="field">
                  <label className='h4 pt-2'>Faculty : </label> 
                  <select onChange={(e)=>setfaculty_id(e.target.value)}>
                  {data3.map((item)=>
                  <option defaultValue={item.id}>{item.id}:{item.faculty_name}</option>
                  )}
                  </select>
                  </div>
                  <div class="field">
                  <label className='h4 pt-2'>CLassroom: </label> 
                  <select onChange={(e)=>setclassroom_id(e.target.value)}>
                  {data4.map((item)=>
                  <option defaultValue={item.id}>{item.id}:{item.classroom_type}</option>
                  )}
                  </select>
                  </div>
                  <div class="field">
                  <label className='h4 pt-2'>Constrain: </label> 
                  <select onChange={(e)=>setclassroom_id(e.target.value)}>
                  {data4.map((item)=>
                  <option defaultValue={item.id}>{item.id}:{item.classroom_type}</option>
                  )}
                  </select>
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
                                                <th>Class ID</th>
                                                <th>Class No.</th>
                                                <th>Class Type</th>
                                                <th>Class Floor</th>
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
