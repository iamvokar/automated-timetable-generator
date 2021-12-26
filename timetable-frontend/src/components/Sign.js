import React from 'react'
import "./Sign.css"
function Sign() {
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
                              <input type="email" name="email" placeholder="E-mail" />
                           </div>
                           <div class="field">
                              <input type="password" name="password" placeholder="Password" />
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
                <p className="h5 text-center ">New User? <a href="">Register</a> | <a href=""> Admin</a></p>
            </div>
         </div>
      </div>
      </>
    )
}

export default Sign
