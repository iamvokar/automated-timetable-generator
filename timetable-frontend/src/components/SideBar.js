import React from 'react'
import {BrowserRouter as Router,Link } from 'react-router-dom';
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
function SideBar() {
    return (
     <>
     <nav id="sidenav" className="sidenav">
     <p className="logo">Automated Timetable <span className="p-5"> Generator</span></p>
     <Router >
    <ul>
       <li className="mt-5  py-2 ">
       <i className="fa fa-home text-white mx-3" aria-hidden="true"></i>
       <Link to="/" className="text-white text-decoration-none">DASHBOARD</Link>
       </li>
       <li className="my-3 py-2">
       <i className="fa fa-home text-white mx-3" aria-hidden="true"></i>
       <Link to="/" className="text-white text-decoration-none">COURSE</Link>
     </li>
     <li className="my-3 py-2 ">
       <i className="fa  fa-book  text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">SUBJECT</Link>
     </li>
     <li className="my-3 py-2 ">
       <i className="fa  fa-users text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">FACULTY</Link>
     </li>
     <li className="my-3 py-2">
       <i className="fa fa-university text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">CLASS ROOM</Link>
     </li>
     <li className="my-3 py-2 ">
       <i className="fa fa-pencil text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">CONSTRAINS</Link>
     </li>
     
     <li className=" py-2 mb-5 ">
       <i className="fa fa-table text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">TIME TABLE</Link>
     </li>
     
     <li className="mt-5 py-2 ">
       <i className="fa fa-cog text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">SETTING</Link>
     </li>
     <li className="my-3 py-2 ">
       <i className="fa fa-briefcase text-white mx-3" aria-hidden="true"></i>
     <Link to="/" className="text-white text-decoration-none">ADMIN</Link>
     </li>
  
  </ul>
  </Router>
</nav>
     <div className="header pt-2"><h2 className="">Dashboard</h2></div>
    
        
   </>
    )
}

export default SideBar

