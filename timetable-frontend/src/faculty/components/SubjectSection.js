import React from 'react'
import "./table.css"
import {Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import swal from 'sweetalert';
import SideBar from './SideBar'

  function ReportSubjectModal(props) {
    const [id, setID] = useState("");
    const [subject_id,setSubject_id] = useState("");
    const [subject_name,setSubject_name] = useState("");
    const [semester,setSemester] = useState("");
    const [status,setStatus] = useState("");
    const [data,setData] = useState([]);

    // console.warn("props",props.id)
    
    


      const ReportSubject =  async (event) => {
      event.preventDefault();
    
      const formData = new FormData();
      formData.append("id", id)
      formData.append("subject_id",subject_id)
      formData.append("subject_name",subject_name)
      formData.append("semester",semester)
      formData.append("status",status)
      let result=await fetch('http://127.0.0.1:8000/api/SubjectReportupdate/',{
        method:'POST',
        body:formData
      
      });
      if (result.status == 200) {
        swal({
          title: "success!",
          text: "your Subject added!",
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
     props.get()
      
    }
    async function prefillData() {
      let result = await fetch('http://127.0.0.1:8000/api/prefillSubject/'+props.id);
      result = await result.json();
      setData(result)
      setID(data.id)
      setSubject_id(data.subject_id)
      setSubject_name(data.subject_name)
      setSemester(data.semester)
      setStatus(data.status)
    }

    useEffect( ()=>{
         prefillData()
      },[props])
    // UpdateCourse(props)
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='head' closeButton>
        
         <div className="text-light text-center">
            <h1>Report Course</h1>
         </div>
        </Modal.Header>
        <Modal.Body>
        <div className="full_container ">
        <div className="container justify-content-center ">
          <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={(e) => ReportSubject(e, data.id)}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        defaultValue={data.subject_id}
                        onChange={(e)=>setSubject_id(e.target.value)}
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        defaultValue={data.subject_name}
                        onChange={(e)=>setSubject_name(e.target.value)}
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        defaultValue={data.semester}
                        onChange={(e)=>setSemester(e.target.value)}
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        value="Active"
                        // defaultValue={data.status}
                        defaultChecked={data.status === "Active"}
                        onClick={(e)=>setStatus(e.target.value)}/>
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        value="Inactive"
                        // defaultValue={data.status}
                        defaultChecked={data.status === "Inactive"}
                        onClick={(e)=>setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                    <input type="submit" value="Report" className="btn"
                      
                     />
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
function SubjectSection() {
    
    const [modalShow1, setModalShow1] = useState(false);
    const [update,setupdate] = useState();
    const [data,setData] = useState([]);
    useEffect( ()=>{
        getData()
      },[])


    async function getData() {
        let result = await fetch('http://127.0.0.1:8000/api/fetchSubject');
        result = await result.json();
        setData(result)
    }

    function changeCourseInfo(id){

      // console.log(e);

      setupdate(id)
      
  
    }
   
    async function search(key) {
      if(key.length>1)
      {
        let result = await fetch('http://127.0.0.1:8000/api/searchReportSubject/'+key);
        result = await result.json();
        console.warn(result.response)
        if(result.response==="not found")
        {
          
        }
        else
        {
          setData(result)
        }
      
      }
      else
      {
        getData()
      }
    }

    return (
        <>
        <SideBar/>
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
                                            onChange={(e) => search(e.target.value)}
                                     /></p>
                                </div>
                            </div>
                            </div>
                                
                       
                            <table class="table pl-4">
                                        <thead class="thead-dark ">
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th className="text-center">Subject ID</th>
                                                <th className="text-center">Subject Name</th>
                                                <th className="text-center">Semester</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((item)=>
                                            <tr>
                                                <td className="text-center">{item.id}</td>
                                                <td className="text-center">{item.subject_id}</td>
                                                <td className="text-center">{item.subject_name}</td>
                                                <td className="text-center">{item.semester}</td>
                                                <td className="text-center">{item.status}</td>
                                                <td className=''><button class='btn bg-success ml-3' onClick={() =>  { setModalShow1(true); changeCourseInfo(item.id);} }>Report</button><button class='btn bg-success ml-3' >Interest</button></td>
                                            </tr>)} 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
              
                      <ReportSubjectModal
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                        id={update}
                        get={()=>getData()}
                        

                    />
        </>
    )
}

export default SubjectSection
