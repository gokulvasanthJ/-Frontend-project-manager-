import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate=useNavigate()


  return <>
    <div className='container'>
      <div className='banner-wrapper'>
        <div className='banner-left'>
<h2>Project Management</h2>
<br/>
<p> &nbsp;🤍<b>Track your project</b> Your success is our mission, let's embark on this journey together.We're here to make your vision a reality, what's your dream project?Your goals are our goals, let's achieve them hand in hand</p>
        
        <button className='explore-button'onClick={()=>navigate("/dashboard")}>Explore</button>
        </div><br/>
      
        <div className='banner-right'>
<img src='https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=900&t=st=1695886248~exp=1695886848~hmac=cd5ac05e2d8a06e75f501eda187b8e3ad76856119a5c51b356a846b725a94049' alt="img"/>
        </div>
      </div>
      <div style={{color:"rgb(177, 73, 201)", fontWeight:"500"}}>🤞🏻Looking forward to working together and making great things happen!!!</div><br/>
      <div className="contact1"><i class="fa-solid fa-phone" style={{color:"#6b92d6;"}}></i>&nbsp;<p className="contact-info">+91-7639495042</p></div>
      <div className="contact2"><i class="fa-solid fa-envelope" style={{color:"#326bcd;"}}></i>&nbsp;<p className="contact-info">gokul27mech@gmail.com</p></div>

    </div>
    </>
}

export default Home