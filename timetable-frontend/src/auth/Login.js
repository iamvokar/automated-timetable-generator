import React from 'react'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
import "./Login.css"
import {useHistory} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import swal from 'sweetalert';

function Login() {
   const history = useHistory();
   useEffect(()=> {
      if (localStorage.getItem('admin_login'))
      {
         history.push("/admin")
      }
   }, [])
   const [username,setusername] = useState("")
   const [password,setpassword] = useState("")
   const [isValid, setIsValid] = useState(false);
   // show password
   const [state,setstate] = useState(false);
   const toggle = () => {
      setstate(prevState => !prevState);
   }


   const log = async (event)=> {
      event.preventDefault();
      const formData = new FormData();
      formData.append("UserName",username)
      formData.append("Password",password)
      let result = await fetch('http://127.0.0.1:8000/api/login',{
         method:'POST',
      body:formData
      });
      result = await result.json();
      console.warn(result)
      if(result.response==="LoggedIn")
      {
         if(result.role==1)
         {
         localStorage.setItem('admin_login',JSON.stringify(result.id));
         history.push("/admin")
         }
         else{
            swal({
               title: "Ops!",
               text: "Access Denied!",
               icon: "warning",
               button: "ok!",
             });
         }
      }
      else
      {
         setIsValid(true);
      }
   }

    return (
      <>
         
          <div className="full_container">
             {isValid 
              ? < div class="alert alert-danger" role="alert">
              Login failed wrong user credentials
               </div>:""}
         <div className="container">
   
            <div className="center verticle_center full_height">
            <div className="heading text-center">
               <h3>Automatic TimeTable Generator</h3>
            </div>
               <div className="login_section">
                  <div className="logo_login">
                     <div className="text-light text-center">
                        <h1>Login</h1>
                     </div>
                  </div>
                  <div className="login_form ">
                     <form onSubmit={log}>
                        <fieldset>
                           <div className="field ">
                              <input type="text" name="username" placeholder="Username"
                              onChange={(e)=>setusername(e.target.value)} required/>
                           </div>
                           <div class="field">
                           
                              <input type={state?"text":"password"} name="password" placeholder="Password"
                              onChange={(e)=>setpassword(e.target.value)} required/>
                              <span className="showpass" onClick={toggle}>
                                 {state?<FaEye />:<FaEyeSlash />}
                              </span>
                              
                           </div>
                           <div class="field">
                              <a className="forgot" href="">Forgotten Password?</a>
                           </div>
                           <div className="field margin_0">
                              <input type="submit" value="login" className="btn"/>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
               <p className="h5 text-center ">Are you Faculty? <Link to="/">Signin</Link></p>
            </div>
         </div>
      </div>
      </>
    )
}

export default Login
