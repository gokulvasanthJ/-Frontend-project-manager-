import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  let navigate=useNavigate()
 
  return <>
  
<body>
    <section>
        <div className="form-box">
            <div className="form-value">
                
                    <h2>Login</h2>
                    <div className="input-box">
                        <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                        <input type="email" required />
                        <label for="email">Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className="fa-solid fa-lock"></i></span>
                        <input type="password" required />
                        <label for="password">Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label for=""><input type="checkbox" />Remember Me</label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button className="login-button" onClick={()=>navigate("/home")}>LOGIN</button>
                    <div className="login-register">
                        <p>Don't have a account <a href="registerindex1.html">Register</a></p>

                    </div>
            </div>
        </div>
    </section>

</body>


  </>
}



  


export default LogIn