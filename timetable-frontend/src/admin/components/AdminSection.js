import React from 'react'
import "./table.css"
import img from '../assets/image/admin.jpg'
import { useState, useEffect } from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core'
import swal from 'sweetalert';
import { Button, Modal } from 'react-bootstrap'

function ConfirmCourseModal(props) {
  const [course_id, setCourse_id] = useState("");
  const [course_name, setCourse_name] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  // console.warn("props",props.id)




  const ConfirmCourse = async (event, id) => {
    event.preventDefault();
    console.log("hello", id)
    const formData = new FormData();
    formData.append("course_id", course_id)
    formData.append("course_name", course_name)
    formData.append("status", status)
    let result = await fetch('http://127.0.0.1:8000/api/update/' + id, {
      method: 'POST',
      body: formData

    });
    if (result.status == 200) {
      swal({
        title: "success!",
        text: "your course updated!",
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
    let result = await fetch('http://127.0.0.1:8000/api/CourseReportprefill/' + props.id);
    result = await result.json();
    setData(result)
    setCourse_id(data.course_id)
    setCourse_name(data.course_name)
    setStatus(data.status)
  }

  useEffect(() => {
    prefillData()
  }, [props])
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
          <h1>Confirmation</h1>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="full_container ">
          <div className="container justify-content-center ">
            <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={(e) => ConfirmCourse(e, data.id)}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        defaultValue={data.course_id}
                        onChange={(e) => setCourse_id(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        defaultValue={data.course_name}
                        onChange={(e) => setCourse_name(e.target.value)}
                        disabled
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        value="Active"
                        name="status"
                        // defaultValue={data.status}
                        onClick={(e) => setStatus(e.target.value)} />
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        value="Inactive"
                        name="status"
                        // defaultValue={data.status}
                        onClick={(e) => setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                      <input type="submit" value="Approve" className="btn"

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

function ConfirmSubjectModal(props) {
  const [subject_id, setSubject_id] = useState("");
  const [subject_name, setSubject_name] = useState("");
  const [semester, setSemester] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  // console.warn("props",props.id)




  const updateSubject = async (event, id) => {
    event.preventDefault();
    console.log("hello", id)
    const formData = new FormData();
    formData.append("subject_id", subject_id)
    formData.append("subject_name", subject_name)
    formData.append("semester", semester)
    formData.append("status", status)
    let result = await fetch('http://127.0.0.1:8000/api/updateSubject/' + id, {
      method: 'POST',
      body: formData

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
    let result = await fetch('http://127.0.0.1:8000/api/prefillSubject/' + props.id);
    result = await result.json();
    setData(result)
    setSubject_id(data.subject_id)
    setSubject_name(data.subject_name)
    setSemester(data.semester)
    setStatus(data.status)
  }

  useEffect(() => {
    prefillData()
  }, [props])
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
          <h1>Update Course</h1>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="full_container ">
          <div className="container justify-content-center ">
            <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={(e) => updateSubject(e, data.id)}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        defaultValue={data.subject_id}
                        onChange={(e) => setSubject_id(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        defaultValue={data.subject_name}
                        onChange={(e) => setSubject_name(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        defaultValue={data.semester}
                        onChange={(e) => setSemester(e.target.value)}
                        disabled
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        value="Active"
                        // defaultValue={data.status}
                        onClick={(e) => setStatus(e.target.value)} />
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        value="Inactive"
                        // defaultValue={data.status}
                        onClick={(e) => setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                      <input type="submit" value="Update" className="btn"

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

function ConfirmFacultyModal(props) {
  const [faculty_id, setfaculty_id] = useState("");
  const [faculty_name, setfaculty_name] = useState("");
  const [faculty_email, setfaculty_email] = useState("");
  const [gender, setgender] = useState("");
  const [experience, setexperience] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  // console.warn("props",props.id)




  const updateFaculty = async (event, id) => {
    event.preventDefault();
    console.log("hello", id)
    const formData = new FormData();
    formData.append("faculty_id", faculty_id)
    formData.append("faculty_name", faculty_name)
    formData.append("faculty_email", faculty_email)
    formData.append("gender", gender)
    formData.append("experience", experience)
    formData.append("status", status)
    let result = await fetch('http://127.0.0.1:8000/api/updateFaculty/' + id, {
      method: 'POST',
      body: formData

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
    let result = await fetch('http://127.0.0.1:8000/api/prefillFaculty/' + props.id);
    result = await result.json();
    setData(result)
    setfaculty_id(data.faculty_id)
    setfaculty_name(data.faculty_name)
    setfaculty_email(data.faculty_email)
    setgender(data.gender)
    setexperience(data.experience)
    setStatus(data.status)
  }

  useEffect(() => {
    prefillData()
  }, [props])
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
          <h1>Update Faculty</h1>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="full_container ">
          <div className="container justify-content-center ">
            <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={(e) => updateFaculty(e, data.id)}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        name="course"
                        placeholder="Faculty ID"
                        defaultValue={data.faculty_id}
                        onChange={(e) => setfaculty_id(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="Faculty Name"
                        defaultValue={data.faculty_name}
                        onChange={(e) => setfaculty_name(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="Faculty Email"
                        defaultValue={data.faculty_email}
                        onChange={(e) => setfaculty_email(e.target.value)}
                        disabled
                      />
                    </div>
                    <div className='login_radio mb-3'>
                      <lable className="title">Gender :</lable>
                      <input
                        type="radio"
                        name="gender"
                        id="gender"
                        value="Male"

                        onChange={(e) => setgender(e.target.value)}
                      />
                      <lable for="active" className="title">Male</lable>
                      <input
                        type="radio"
                        name="gender"
                        id="inactive"
                        value="Female"
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <lable for="inactive" className="title">Female</lable>
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="Experience"
                        placeholder="Experience"
                        defaultValue={data.experience}
                        onChange={(e) => setexperience(e.target.value)}
                        disabled
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        name="status"
                        id="active"
                        value="Active"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        name="status"
                        id="inactive"
                        value="Inactive"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                      <input type="submit" value="Update Faculty" className="btn" />
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

function ConfirmClassroomModal(props) {
  const [classroom_no, setclassroom_no] = useState("");
  const [classroom_type, setclassroom_type] = useState("");
  const [classroom_floor, setclassroom_floor] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  // console.warn("props",props.id)




  const updateClassroom = async (event, id) => {
    event.preventDefault();
    console.log("hello", id)
    const formData = new FormData();
    formData.append("classroom_no", classroom_no)
    formData.append("classroom_type", classroom_type)
    formData.append("classroom_floor", classroom_floor)
    formData.append("status", status)
    let result = await fetch('http://127.0.0.1:8000/api/updateClassroom/' + id, {
      method: 'POST',
      body: formData

    });
    if (result.status == 200) {
      swal({
        title: "success!",
        text: "your course updated!",
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
    let result = await fetch('http://127.0.0.1:8000/api/prefillClassroom/' + props.id);
    result = await result.json();
    setData(result)
    setclassroom_no(data.classroom_no)
    setclassroom_type(data.classroom_type)
    setclassroom_floor(data.classroom_floor)
    setStatus(data.status)
  }

  useEffect(() => {
    prefillData()
  }, [props])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='head' closeButton>
        <div className="text-light text-center">
          <h1>Class Room</h1>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="full_container ">
          <div className="container justify-content-center ">
            <div className="center verticle_center full_height ">
              <div className="login_form">
                <form className='' onSubmit={(e) => updateClassroom(e, data.id)}>
                  <fieldset className=''>
                    <div className="field ">
                      <input
                        type="text"
                        name="course"
                        placeholder="Class ID"
                        defaultValue={data.classroom_no}
                        onChange={(e) => setclassroom_no(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="Class Type"
                        defaultValue={data.classroom_type}
                        onChange={(e) => setclassroom_type(e.target.value)}
                        disabled
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="course_name"
                        placeholder="Class Floor"
                        defaultValue={data.classroom_floor}
                        onChange={(e) => setclassroom_floor(e.target.value)}
                        disabled
                      />
                    </div>
                    <div className='login_radio'>
                      <lable className="title">Status :</lable>
                      <input
                        type="radio"
                        name="status"
                        id="active"
                        value="Active"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <lable for="active" className="title">Active</lable>
                      <input
                        type="radio"
                        name="status"
                        id="inactive"
                        value="Inactive"
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      <lable for="inactive" className="title">Inactive</lable>
                    </div>
                    <div className="field pt-4">
                      <input type="submit" value="Add Class Room" className="btn" />
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

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <>
      {
        value === index && (
          <div className='py-3'>{children}</div>
        )
      }
    </>

  )
}


function AdminSection() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [value, setValue] = useState(0);


  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [update1, setupdate1] = useState();
  const [update2, setupdate2] = useState();
  const [update3, setupdate3] = useState();
  const [update4, setupdate4] = useState();




  function changeCourseInfo(id) {

    // console.log(e);

    setupdate1(id)
    setupdate2(id)
    setupdate3(id)
    setupdate4(id)


  }
  //course
  function confirmation1(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteCourse(id)
          swal("Data has been deleted!", {
            icon: "success",
          });
        }
        else {
          swal("Your data is safe!");
        }
      });
  }
  async function deleteCourse(id) {
    let result = await fetch('http://127.0.0.1:8000/api/CourseReportdelete/' + id, {
      method: 'DELETE'
    });
    getCourse()
  }

  // subject
  function confirmation2(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteSubject(id)
          swal("Data has been deleted!", {
            icon: "success",
          });
        }
        else {
          swal("Your data is safe!");
        }
      });
  }
  async function deleteSubject(id) {
    let result = await fetch('http://127.0.0.1:8000/api/SubjectReportdelete/' + id, {
      method: 'DELETE'
    });
    getSubject()
  }

  //faculty
  function confirmation3(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteFaculty(id)
          swal("Data has been deleted!", {
            icon: "success",
          });
        }
        else {
          swal("Your data is safe!");
        }
      });
  }
  async function deleteFaculty(id) {
    let result = await fetch('http://127.0.0.1:8000/api/FacultyReportdelete/' + id, {
      method: 'DELETE'
    });
    getFaculty()
  }

  //Classroom
  function confirmation4(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteClassroom(id)
          swal("Data has been deleted!", {
            icon: "success",
          });
        }
        else {
          swal("Your data is safe!");
        }
      });
  }
  async function deleteClassroom(id) {
    let result = await fetch('http://127.0.0.1:8000/api/ClassroomReportdelete/' + id, {
      method: 'DELETE'
    });
    getClassroom()
  }
  useEffect(() => {
    getCourse()
    getSubject()
    getFaculty()
    getClassroom()
  }, [])

  async function getCourse() {
    let result = await fetch('http://127.0.0.1:8000/api/CourseReportfetch');
    result = await result.json();
    setData1(result)
  }

  async function getSubject() {
    let result = await fetch('http://127.0.0.1:8000/api/SubjectReportfetch');
    result = await result.json();
    setData2(result)
  }

  async function getFaculty() {
    let result = await fetch('http://127.0.0.1:8000/api/FacultyReportfetch');
    result = await result.json();
    setData3(result)
  }

  async function getClassroom() {
    let result = await fetch('http://127.0.0.1:8000/api/ClassroomReportfetch');
    result = await result.json();
    setData4(result)
  }

  const handleTabs = (e, val) => {
    setValue(val)
  }


    const [userdata, setUserData] = useState([]);
    let user=localStorage.getItem('admin_login')
    console.warn("check",user)

    async function userinfo(user) {
        let result = await fetch('http://127.0.0.1:8000/api/userinfo/' + user);
        result = await result.json();
        setUserData(result)
      }
      userinfo(user)

  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 ">
          <div className="page_title ">
            <h2>Admin Section</h2>
          </div>
        </div>
        <div className="row justify-content-center white_shd1 ">

          <div class="col-md-8 adds pt-5">
            <div class="white_shd2 ">
              <div className='row'>
                <div className='col-12 d-flex'>
                  <div class="profile_img">
                    <img src={img}></img>
                  </div>
                  <div >
                    <p ><span className="admin_title h5">User Name:</span> {userdata.UserName}</p>
                    <p ><span className="admin_title h5">Email:</span> {userdata.Email}</p>
                    <p ><span className="admin_title h5">FirstName:</span> {userdata.FirstName}</p>
                    <p ><span className="admin_title h5">Last Name:</span> {userdata.LastName}</p>
                    <p ><span className="admin_title h5">Role:</span> {0 ? "Faculty" : "Admin"}</p>

                  </div>
                </div>
                <div className='col-12 py-5'>
                  <div className="justify-content-center py-3">
                    <h1 className='text-center mr-5 pb-3'>Reports</h1>
                    <div>
                      <Tabs className='bg-dark ml-5  w-75 justify-content-center' value={value} onChange={handleTabs}>
                        <Tab label="Course" className='text-light text-center'></Tab>
                        <Tab label="Subject" className='text-light'></Tab>
                        <Tab label="Faculty" className='text-light'></Tab>
                        <Tab label="Classroom" className='text-light'></Tab>
                        <Tab label="TimeTable" className='text-light'></Tab>
                      </Tabs>
                    </div>
                    <TabPanel value={value} index={0}>
                      <table class="table pl-4">
                        <thead class="thead-dark ">
                          <tr>
                            <th>#</th>
                            <th>Course Id</th>
                            <th>Course</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data1.map((item) =>
                            <tr>
                              <td>{item.id}</td>
                              <td>{item.course_id}</td>
                              <td>{item.course_name}</td>
                              <td>{item.status}</td>
                              <td className=''><button class='btn bg-success ml-3' onClick={() => { setModalShow1(true); changeCourseInfo(item.id); }}>Approve</button><button class='btn bg-danger ml-3' onClick={() => { confirmation1(item.id) }}>Reject</button></td>
                            </tr>)}
                        </tbody>
                      </table>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
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
                          {data2.map((item) =>
                            <tr>
                              <td className="text-center">{item.id}</td>
                              <td className="text-center">{item.subject_id}</td>
                              <td className="text-center">{item.subject_name}</td>
                              <td className="text-center">{item.semester}</td>
                              <td className="text-center">{item.status}</td>
                              <td className=''><button class='btn bg-success ml-3' onClick={() => { setModalShow2(true); changeCourseInfo(item.id); }}>Approve</button><button class='btn bg-danger ml-3' onClick={() => { confirmation2(item.id) }}>Reject</button></td>
                            </tr>)}
                        </tbody>
                      </table>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
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
                          {data3.map((item) =>
                            <tr>
                              <td className="text-center">{item.id}</td>
                              <td className="text-center">{item.faculty_id}</td>
                              <td className="text-center">{item.faculty_name}</td>
                              <td className="text-center">{item.faculty_email}</td>
                              <td className="text-center">{item.gender}</td>
                              <td className="text-center">{item.experience}</td>
                              <td className="text-center">{item.status}</td>
                              <td className=''><button class='btn bg-success ml-3' onClick={() => { setModalShow3(true); changeCourseInfo(item.id); }}>Approve</button><button class='btn bg-danger ml-3' onClick={() => { confirmation3(item.id) }}>Reject</button></td>
                            </tr>)}
                        </tbody>
                      </table>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <table class="table pl-4">
                        <thead class="thead-dark ">
                          <tr>
                            <th>#</th>
                            <th>Class No.</th>
                            <th>Class Type</th>
                            <th>Class Floor</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data4.map((item) =>
                            <tr>
                              <td className="text-center">{item.id}</td>
                              <td className="text-center">{item.classroom_no}</td>
                              <td className="text-center">{item.classroom_type}</td>
                              <td className="text-center">{item.classroom_floor}</td>
                              <td className="text-center">{item.status}</td>
                              <td className=''><button class='btn bg-success ml-3' onClick={() => { setModalShow4(true); changeCourseInfo(item.id); }}>Approve</button><button class='btn bg-danger ml-3' onClick={() => { confirmation4(item.id) }}>Reject</button></td>
                            </tr>)}
                        </tbody>
                      </table>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmCourseModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        id={update1}
        get={() => getCourse()}
      // remove={() => deleteCourse(update) } 

      />

      <ConfirmSubjectModal
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        id={update2}
        get={() => getSubject()}
      // remove={() => deleteCourse(update) } 

      />

      <ConfirmFacultyModal
        show={modalShow3}
        onHide={() => setModalShow3(false)}
        id={update3}
        get={() => getFaculty()}
      // remove={() => deleteCourse(update) } 

      />

      <ConfirmClassroomModal
        show={modalShow4}
        onHide={() => setModalShow4(false)}
        id={update4}
        get={() => getClassroom()}
      // remove={() => deleteCourse(update) } 

      />
    </>
  );
}

export default AdminSection;
