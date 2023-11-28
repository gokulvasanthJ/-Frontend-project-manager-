import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    let navigate=useNavigate()
  return <>
  
  <section>
          <div className="form-box">
            <div className="form-value">
              <form id="form">
                <h2>SignUp</h2>
                <div className="input-box">
                  <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                  <input type="email" id="email" />
                  <label htmlFor="email">Email</label>
                  <div className="error"></div>
                </div>
                <div className="input-box">
                  <span className="icon"><i className="fa-solid fa-lock"></i></span>
                  <input type="password" id="password" />
                  <label htmlFor="password">Password</label>
                  <div className="error"></div>
                </div>
                <div className="input-box">
                  <span className="icon"><i className="fa-solid fa-lock"></i></span>
                  <input type="password" id="cpassword" />
                  <label htmlFor="cpassword">Confirm password</label>
                  <div className="error"></div>
                </div>

                <button type="submit" className="button-for-signup" onClick={()=>navigate("/loign")}>SignUp</button>
                <div className="login-register">
                  <p>Don't have an account <a href="/LogIn">login</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>

  </>
}

export default SignUp