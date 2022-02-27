import React from 'react'
import "./table.css"
import {Button,Modal} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import swal from 'sweetalert';


  function ReportFacultyModal(props) {
    const [id, setID] = useState("");
    const [faculty_id,setfaculty_id] = useState("");
    const [faculty_name,setfaculty_name] = useState("");
    const [faculty_email,setfaculty_email] = useState("");
    const [gender,setgender] = useState("");
    const [experience,setexperience] = useState("");
    const [status,setStatus] = useState("");
    const [data,setData] = useState([]);

    // console.warn("props",props.id)
    
    


      const ReportFaculty =  async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("id", id)
      formData.append("faculty_id",faculty_id)
      formData.append("faculty_name",faculty_name)
      formData.append("faculty_email",faculty_email)
      formData.append("gender",gender)
      formData.append("experience",experience)
      formData.append("status",status)
      let result=await fetch('http://127.0.0.1:8000/api/FacultyReportupdate/',{
        method:'POST',
        body:formData
      
      });
      if (result.status == 200) {
        swal({
          title: "success!",
          text: " faculty updated!",
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
      let result = await fetch('http://127.0.0.1:8000/api/prefillFaculty/'+props.id);
      result = await result.json();
      setData(result)
      setID(data.id)
      setfaculty_id(data.faculty_id)
      setfaculty_name(data.faculty_name)
      setfaculty_email(data.faculty_email)
      setgender(data.gender)
      setexperience(data.experience)
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
          <h1>Report Faculty</h1>
       </div>
      </Modal.Header>
      <Modal.Body>
      <div className="full_container ">
      <div className="container justify-content-center ">
        <div className="center verticle_center full_height ">
            <div className="login_form">
              <form className='' onSubmit={(e) => ReportFaculty(e, data.id)}>
                <fieldset className=''>
                  <div className="field ">
                    <input
                      type="text"
                      name="course"
                      placeholder="Faculty ID"
                      defaultValue={data.faculty_id}
                      onChange={(e)=>setfaculty_id(e.target.value)}
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="course_name"
                      placeholder="Faculty Name"
                      defaultValue={data.faculty_name}
                      onChange={(e)=>setfaculty_name(e.target.value)}
                    />
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      name="course_name"
                      placeholder="Faculty Email"
                      defaultValue={data.faculty_email}
                      onChange={(e)=>setfaculty_email(e.target.value)}
                    />
                  </div>
                  <div className='login_radio mb-3'>
                    <lable className="title">Gender :</lable>
                    <input
                      type="radio"
                      name="gender"
                      id="gender"
                      value="Male"
                      checked={data.gender === "Male"}
                      onChange={(e)=>setgender(e.target.value)}
                    />
                    <lable for="active" className="title">Male</lable>
                    <input
                      type="radio"
                      name="gender"
                      id="inactive"
                      value="Female"
                      checked={data.gender === "Female"}
                      onChange={(e)=>setgender(e.target.value)}
                    />
                    <lable for="inactive" className="title">Female</lable>
                    </div>
                  <div class="field">
                    <input
                      type="text"
                      name="Experience"
                      placeholder="Experience"
                      defaultValue={data.experience}
                      onChange={(e)=>setexperience(e.target.value)}
                    />
                  </div>
                  <div className='login_radio'>
                    <lable className="title">Status :</lable>
                    <input
                      type="radio"
                      name="status"
                      id="active"
                      value="Active"
                      defaultChecked={data.status === "Active"}
                      onChange={(e)=>setStatus(e.target.value)}
                    />
                    <lable for="active" className="title">Active</lable>
                    <input
                      type="radio"
                      name="status"
                      id="inactive"
                      value="Inactive"
                      defaultChecked={data.status === "Inactive"}
                      onChange={(e)=>setStatus(e.target.value)}
                    />
                    <lable for="inactive" className="title">Inactive</lable>
                  </div>
                  <div className="field pt-4">
                    <input type="submit" value="Report" className="btn" />
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
function FacultySection() {
 
  const [modalShow1, setModalShow1] = useState(false);
  const [update,setupdate] = useState();
  const [data,setData] = useState([]);

  useEffect( ()=>{
    getData()
  },[])
  


async function getData() {
    let result = await fetch('http://127.0.0.1:8000/api/fetchFaculty');
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
    let result = await fetch('http://127.0.0.1:8000/api/searchReportFaculty/'+key);
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
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 ">
                        <div className="page_title ">
                            <h2>Faculty</h2>
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
                                                <th className="text-center">Faculty ID</th>
                                                <th className="text-center">Faculty Name</th>
                                                <th className="text-center">Faculty Email</th>
                                                <th className="text-center">Gender</th>
                                                <th className="text-center">Experience</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((item)=>
                                            <tr>
                                                <td className="text-center">{item.id}</td>
                                                <td className="text-center">{item.faculty_id}</td>
                                                <td className="text-center">{item.faculty_name}</td>
                                                <td className="text-center">{item.faculty_email}</td>
                                                <td className="text-center">{item.gender}</td>
                                                <td className="text-center">{item.experience}</td>
                                                <td className="text-center">{item.status}</td>
                                                <td className=''><button class='btn bg-success ml-3' onClick={() =>  { setModalShow1(true); changeCourseInfo(item.id);} }>Report</button></td>
                                            </tr>)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
                      <ReportFacultyModal
                        show={modalShow1}
                        onHide={() => setModalShow1(false)}
                        id={update}
                        get={()=>getData()}
                        

                    />
        </>
    )
}

export default FacultySection
