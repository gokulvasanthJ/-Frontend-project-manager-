import NavBar from "./Components/NavBar";
// import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import AddProject from "./Components/AddProject";
import LogIn from "./Components/LogIn";
import EditProjects from "./Components/EditProjects";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";


function App() {
  let [data,setData]=useState([
    {
      title:"Money Manager",
      URL:"https://lovely-lokum-e7158a.netlify.app/;",
      description:"Track Your Expenses and Calculate The Expenses in the Month End. This Helps for Your future saving 🤞🏻..."
  }
])
  return <>

    {/* <NavBar/> */}
    <BrowserRouter>
    <div className="sidebar-wrapper">
    <NavBar />
    </div>
      <div>
        <Routes>
           
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard data={data} setData={setData}/>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/addproject" element={<AddProject data={data} setData={setData}/>} />
            <Route path="/editprojects" element={<EditProjects/>}/>
            <Route path="*" element= {<Navigate to="login"/>} />

            {/* <Route path="/deleteprojects" element={<DeleteProjects/>}/> */}


          
        </Routes>
      </div>
    </BrowserRouter>



  </>
}

export default App;
