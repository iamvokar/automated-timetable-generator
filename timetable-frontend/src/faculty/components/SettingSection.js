import React from 'react'
import "./table.css"
import img from '../assets/image/admin.jpg'
import {useState,useEffect} from 'react'

function SettingSection() {
    const [data, setData] = useState([]);
    let user=localStorage.getItem('user_login')
    console.warn("check",user)

    async function userinfo(user) {
        let result = await fetch('http://127.0.0.1:8000/api/userinfo/' + user);
        result = await result.json();
        setData(result)
      }
      useEffect(() => {
        userinfo(user)
      }, [])
      
      
  return (
  <>
          <div className="container-fluid">
              <div className="col-md-12 ">
                  <div className="page_title ">
                      <h2>Faculty(user) Section</h2>
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
                                     <p ><span className="admin_title h5">User Name:</span> {data.UserName}</p>
                                     <p ><span className="admin_title h5">Email:</span> {data.Email}</p>
                                     <p ><span className="admin_title h5">FirstName:</span> {data.FirstName}</p>
                                     <p ><span className="admin_title h5">Last Name:</span> {data.LastName}</p>
                                     <p ><span className="admin_title h5">Role:</span> {1?"Faculty":"Admin"}</p>
                                   
                                  </div>
                              </div>
                              <div className='col-12 ml-auto'>
                                  <div className="">
                                  
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default SettingSection;
