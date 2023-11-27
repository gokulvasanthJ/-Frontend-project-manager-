// import NavBar from "./Components/NavBar";
// // import SideBar from "./Components/SideBar";
// import Home from "./Components/Home";
// import Dashboard from "./Components/Dashboard";
// import AddProject from "./Components/AddProject";
// // import LogIn from "./Components/LogIn";
// import EditProjects from "./Components/EditProjects";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import {useState, useEffect} from "react";
// import ClipLoader from "react-spinners/ClipLoader";


// function App() {
  
// const [loading,setLoading]=useState(false)
// useEffect(()=>{
//   setLoading(true)

// setTimeout(()=>{
// setLoading(false)
// },5000)

// },[])

//   return( 
//   <>

// {
//  loading?(
//   <ClipLoader
//         color={color}
//         loading={loading}
//         cssOverride={override}
//         size={150}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
// ):
  
//    ( {/* <NavBar/> */}
//     <BrowserRouter>
//     <div className="sidebar-wrapper">
//     <NavBar />
//     </div>
//       <div>
//         <Routes>
           
//             <Route path="/*" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard/>} />
//             {/* <Route path="/login" element={<LogIn />} /> */}
//             <Route path="/addproject" element={<AddProject/>} />
//             {/* <Route path="/editproject" element={<EditProjects data={data} setData={setData} />}/> */}
//             <Route path="/editprojects" element={<EditProjects/>} />
//             {/* <Route path="*" element= {<Navigate to="login"/>} /> */}

//             {/* <Route path="/deleteprojects" element={<DeleteProjects/>}/> */}


          
//         </Routes>
//       </div>
//     </BrowserRouter>
//     </>
// )}


//   </>
//   );
// }

// export default App;

// import NavBar from "./Components/NavBar";
// // import SideBar from "./Components/SideBar";
// import Home from "./Components/Home";
// import Dashboard from "./Components/Dashboard";
// import AddProject from "./Components/AddProject";
// // import LogIn from "./Components/LogIn";
// import EditProjects from "./Components/EditProjects";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

// function App() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//     }, 5000);
//   }, []);

//   return (
//     <>
//      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      
//       {loading ? (
//         <ClipLoader
//           color={"#36D7B7"} // Set your desired color
//           loading={loading}
//           size={150}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       ) : (
//         <>
//           {/* <NavBar/> */}
//           <BrowserRouter>
//             <div className="sidebar-wrapper">
//               <NavBar />
//             </div>
//             <div>
//               <Routes>
//                 <Route path="/*" element={<Home />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 {/* <Route path="/login" element={<LogIn />} /> */}
//                 <Route path="/addproject" element={<AddProject />} />
//                 {/* <Route path="/editproject" element={<EditProjects data={data} setData={setData} />}/> */}
//                 <Route path="/editprojects" element={<EditProjects />} />
//                 {/* <Route path="*" element= {<Navigate to="login"/>} /> */}
//                 {/* <Route path="/deleteprojects" element={<DeleteProjects/>}/> */}
//               </Routes>
//             </div>
//           </BrowserRouter>
//         </>
//       )}
//     </>
    
//   );
// }

// export default App;

import NavBar from "./Components/NavBar";
// import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import AddProject from "./Components/AddProject";
// import LogIn from "./Components/LogIn";
import EditProjects from "./Components/EditProjects";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiseLoader} from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">
        <RiseLoader
          color={"rgb(90, 183, 169)"} // Set your desired color
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>) : (
        <>
          {/* <NavBar/> */}
          <BrowserRouter>
            <div className="sidebar-wrapper">
              <NavBar />
            </div>
            <div>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/login" element={<LogIn />} /> */}
                <Route path="/addproject" element={<AddProject />} />
                {/* <Route path="/editproject" element={<EditProjects data={data} setData={setData} />}/> */}
                <Route path="/editprojects" element={<EditProjects />} />
                {/* <Route path="*" element= {<Navigate to="login"/>} /> */}
                {/* <Route path="/deleteprojects" element={<DeleteProjects/>}/> */}
              </Routes>
            </div>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
