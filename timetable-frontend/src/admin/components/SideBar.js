import React from 'react'
import {Link,useHistory} from 'react-router-dom';
import {useEffect,useState} from 'react'
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sdata from '../assets/array/Sdata'
function sidelink(val)
{
  
  return(
<li className={val.lis}>
       <i className={val.icon} aria-hidden="true"></i>
       <Link to={val.link} className={val.slink}>{val.name}</Link>
   </li>
  );
} 



function SideBar() {

  const history = useHistory();
  

 function logout()
 {
  localStorage.clear();
  history.push("/"); 
  console.warn("logout")
 }
      
  


  
  
    return (
     <>
     <nav id="sidenav" className="sidenav">
     <p className="logo">Automated Timetable <span className="p-5"> Generator</span></p>
     
    <ul>
       {Sdata.map(sidelink)}
       <li className="my-3 py-2">
       <i className="fa fa-cog text-white mx-3" aria-hidden="true"></i>
       <Link to="" onClick={logout} className="text-white text-decoration-none">LOGOUT</Link>
   </li>
  </ul>
</nav>
     <div className="header pt-2">
     <h2 className="">Dashboard</h2>
     </div>    
   </>
    )
}

export default SideBar

