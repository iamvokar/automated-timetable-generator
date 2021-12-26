import React from 'react'
import "./Register.css"
function Register() {
    return (
      <>
         
          <div className="full_container">
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
                     <form>
                        <fieldset>
                           <div className="field ">
                              <input type="text" name="username" placeholder="User" />
                           </div>
                           <div class="field">
                              <input type="text" name="firstname" placeholder="First Name" />
                           </div>
                           <div className="field ">
                              <input type="text" name="lastname" placeholder="Last Name" />
                           </div>
                           <div class="field">
                              <input type="email" name="email" placeholder="Email" />
                           </div>
                           <div class="field">
                              <input type="password" name="password" placeholder="Password" />
                           </div>
                           <div className="field margin_0">
                              <input type="submit" value="Register" className="btn"/>
                           </div>
                        </fieldset>
                     </form>
                  </div>
               </div>
                <p className="h5 text-center ">Already User? <a href="">Login</a></p>
            </div>
         </div>
      </div>
      </>
    )
}

export default Register
