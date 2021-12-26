import React from 'react'
import {BrowserRouter as Router,Link } from 'react-router-dom';
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sdata from '../assets/array/Sdata'
function sidelink(val)
{
  return(
<li className={val.lis}>
       <i className={val.icon} aria-hidden="true"></i>
       <Link to="/" className={val.slink}>{val.name}</Link>
   </li>
  );
}  
function SideBar() {
    return (
     <>
     <nav id="sidenav" className="sidenav">
     <p className="logo">Automated Timetable <span className="p-5"> Generator</span></p>
     <Router >
    <ul>
       {Sdata.map(sidelink)}
  </ul>
  </Router>
</nav>
     <div className="header pt-2"><h2 className="">Dashboard</h2></div>    
   </>
    )
}

export default SideBar

