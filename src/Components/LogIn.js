import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  let navigate=useNavigate()
 
  return <>
    <div className="screen">
      <div className="container1">
      <div className="container2">
        <h1>Login</h1>

        <label htmlFor="input-box">Username</label>
        <input className="input-box" type="text" placeholder="Type Your Username" /><br />

        <label htmlFor="pass-box">Password</label>
        <input className="input-box" type="password" placeholder="Type Your Password" /><br />

        <label className="forgot-pass" htmlFor="forgot-pass">Forgot Password?</label><br />

        <button className="login-button" onClick={()=>navigate("/home")}>LOGIN</button><br /><br/>

        <h5 className="center-same">Or Sign up Using</h5>
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google-plus"></i>
        </div>
        <br /><br/>

        <h5 className="center-same">Or Sign Up Using</h5>
        <h6 className="center-same" >SIGN UP</h6>
      </div>
      </div>
    </div>
  </>
}



  


export default LogIn