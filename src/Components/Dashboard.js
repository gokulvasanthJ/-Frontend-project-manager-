// import React from 'react';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import Chart from './Chart';
// import axios from 'axios';
// import { API_URL } from '../Context/Url';
// import { useEffect } from 'react';

// function Dashboard() {
//   const [apiData, setApiData] = useState([]);
//   const navigate = useNavigate();
//   const navigation = useNavigate();

// const handleEdit = ({ title, URL, description, id }) => {
//     localStorage.setItem("id", id)
//     localStorage.setItem("title", title)
//     localStorage.setItem("URL", URL)
//     localStorage.setItem("description", description)
//     navigate("/editProjects")
//   };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this project?');

//     if (confirmed) {
//       try {
//         await axios.delete(`${API_URL}/${id}`);
//         callApi();
//       } catch (error) {
//         console.error('Error deleting data:', error);
//       }
//     }
//   };

//   const handleAdd = () => {
//     navigation("/addproject")
//   }
// // const handleEdit=({id,title,URL,description})=>{
// //   localStorage.setItem("id",id)
// //   localStorage.setItem("title",title)
// //   localStorage.setItem("URL",URL)
// //   localStorage.setItem("description",description)
// //   navigate("/editProjects")

// // }

//   const callApi = async () => {
//     const res = await axios.get(API_URL)
//     setApiData(res.data);
//   }

//   useEffect(() => {
//     callApi();
//   }, []);

//   return <>
//       <div className='class-table'>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th style={{ width: "3%" }}>S:No</th>
//               <th style={{ width: "7%" }}>Title</th>
//               <th style={{ width: "10%" }}>Project URL</th>
//               <th style={{ width: "17%" }}>Description</th>
//               <th style={{ width: "10%" }}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apiData.map((e, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{e.title}</td>
//                   <td>{e.URL}</td>
//                   <td>{e.description}</td>
//                   <td>
//                     <Button variant='primary' onClick={() => handleEdit(e)}>Edit</Button>
//                     &nbsp; &nbsp;
//                     <Button variant='danger' onClick={() => handleDelete(e.id)}>Delete</Button>
//                     &nbsp; &nbsp;
//                     <Button variant="primary" onClick={handleAdd}>Add</Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>
//       <div className="Chart-style">
//         <Chart />
//       </div>
//     </>

// }

// export default Dashboard;

// //-------------------------------------

// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { useNavigate } from 'react-router-dom';
// import { API_URL } from '../Context/Url';
// import axios from 'axios';

// function Dashboard() {
//   const [apiData, setApiData] = useState([]);
//   const navigate = useNavigate();

//   const handleEdit = ({ title, URL, description, id }) => {
//     localStorage.setItem('id', id);
//     localStorage.setItem('title', title);
//     localStorage.setItem('URL', URL);
//     localStorage.setItem('description', description);
//     navigate('/editProjects');
//   };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this project?');

//     if (confirmed) {
//       try {
//         await axios.delete(`${API_URL}/${id}`);
//         callApi();
//       } catch (error) {
//         console.error('Error deleting data:', error);
//       }
//     }
//   };

//   const handleProjectClick = (projectNumber) => {
//     navigate(`/projects/${projectNumber}`);
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`${API_URL}/${id}`, { status: newStatus });
//       callApi();
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const getStatusColor = (status) => {
//   if (status && typeof status === 'string') {
//     switch (status.toLowerCase()) {
//       case 'done':
//         return 'green';
//       case 'backlog':
//         return 'red';
//       case 'in progress':
//         return 'skyblue';
//       default:
//         return 'white'; // Default color
//     }
//   }
//   return 'white'; // Default color if status is undefined or not a string
// };

//   const callApi = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setApiData(res.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     callApi();
//   }, []);

//   return (
//     <>
//       <div className="class-card-container">
//         {apiData.map((project) => (
//           <div key={project.id}>
//             <Button
//               variant="info"
//               onClick={() => handleProjectClick(project.number)}
//               style={{ margin: '10px' }}
//             >
//               Project {project.number}
//             </Button>
//             <Card
//               style={{
//                 width: '18rem',
//                 margin: '10px',
//                 backgroundColor: getStatusColor(project.status),
//               }}
//             >
//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">{project.URL}</Card.Subtitle>
//                 <Card.Text>{project.description}</Card.Text>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="info" id="dropdown-basic">
//                     Status: {project.status}
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu>
//                     <Dropdown.Item onClick={() => handleStatusChange(project.id, 'Todo')}>
//                       Todo
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleStatusChange(project.id, 'In Progress')}>
//                       In Progress
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleStatusChange(project.id, 'Done')}>
//                       Done
//                     </Dropdown.Item>
//                     {/* Add more status options as needed */}
//                   </Dropdown.Menu>
//                 </Dropdown>
//                 <Button variant="primary" onClick={() => handleEdit(project)}>
//                   Edit
//                 </Button>
//                 <Button variant="danger" onClick={() => handleDelete(project.id)}>
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { API_URL } from '../Context/Url';
// import Dropdown from 'react-bootstrap/Dropdown';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// function Dashboard() {
//   const [apiData, setApiData] = useState([]);
//   const navigate = useNavigate();

//   const handleEdit = ({ title, URL, description, id }) => {
//     localStorage.setItem('id', id);
//     localStorage.setItem('title', title);
//     localStorage.setItem('URL', URL);
//     localStorage.setItem('description', description);
//     navigate('/editProjects');
//   };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this project?');

//     if (confirmed) {
//       try {
//         await axios.delete(`${API_URL}/${id}`);
//         callApi();
//       } catch (error) {
//         console.error('Error deleting data:', error);
//       }
//     }
//   };

//   const handleProjectClick = (projectNumber) => {
//     navigate(`/projects/${projectNumber}`);
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`${API_URL}/${id}`, { status: newStatus });
//       callApi();
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const getStatusColor = (status) => {
//     if (status && typeof status === 'string') {
//       switch (status.toLowerCase()) {
//         case 'done':
//           return 'lightgreen';
//         case 'backlog':
//           return 'pink';
//         case 'in progress':
//           return 'skyblue';
//         default:
//           return 'white'; // Default color
//       }
//     }
//     return 'yellow'; // Default color if status is undefined or not a string
//   };

//   const getProgressBarVariant = (status) => {
//     if (status && typeof status === 'string') {
//       switch (status.toLowerCase()) {
//         case 'done':
//           return 'success';
//         case 'backlog':
//           return 'danger';
//         case 'in progress':
//           return 'info';
//         default:
//           return 'info';
//       }
//     }
//     return 'info'; // Default variant if status is undefined or not a string
//   };

//   const callApi = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setApiData(res.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     callApi();
//   }, []);

//   return (
//     <>
//       <div className="class-card-container">
//         {apiData.map((project) => (
//           <div key={project.id}>
//             {/* Removed the "Project" button */}
//             <div
//               style={{
//                 width: '18rem',
//                 margin: '10px',
//                 backgroundColor: getStatusColor(project.status),
//               }}
//             >
//               <div>
//                 <div>{project.title}</div>
//                 <div className="mb-2 text-muted">{project.URL}</div>
//                 <div>{project.description}</div>
//                 <div>
//                   <Dropdown>
//                     <Dropdown.Toggle variant="info" id="dropdown-basic">
//                       Status: {project.status}
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                       <Dropdown.Item onClick={() => handleStatusChange(project.id, 'backlog')}>
//                         backlog
//                       </Dropdown.Item>
//                       <Dropdown.Item onClick={() => handleStatusChange(project.id, 'In Progress')}>
//                         In Progress
//                       </Dropdown.Item>
//                       <Dropdown.Item onClick={() => handleStatusChange(project.id, 'Done')}>
//                         Done
//                       </Dropdown.Item>
//                       {/* Add more status options as needed */}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>
//                 <button onClick={() => handleEdit(project)}>Edit</button>
//                 <button onClick={() => handleDelete(project.id)}>Delete</button>
//                 <ProgressBar
//                   now={project.status === 'Done' ? 100 : (project.status === 'In Progress' ? 50 : 101)}
//                   variant={getProgressBarVariant(project.status)}
//                   label={project.status}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { API_URL } from '../Context/Url';
// import Dropdown from 'react-bootstrap/Dropdown';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// function Dashboard() {
//   const [apiData, setApiData] = useState([]);
//   const navigate = useNavigate();

//   const handleEdit = ({ title, URL, description, id }) => {
//     localStorage.setItem('id', id);
//     localStorage.setItem('title', title);
//     localStorage.setItem('URL', URL);
//     localStorage.setItem('description', description);
//     navigate('/editProjects');
//   };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this project?');

//     if (confirmed) {
//       try {
//         await axios.delete(`${API_URL}/${id}`);
//         callApi(); // Fetch data again after deleting a project
//       } catch (error) {
//         console.error('Error deleting data:', error);
//       }
//     }
//   };

//   const handleCreateProject = () => {
//     navigate('/addProject');
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`${API_URL}/${id}`, { status: newStatus });
//       callApi(); // Fetch data again after updating status
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const getStatusColor = (status) => {
//     if (status && typeof status === 'string') {
//       switch (status.toLowerCase()) {
//         case 'done':
//           return 'lightgreen';
//         case 'backlog':
//           return 'pink';
//         case 'in progress':
//           return 'skyblue';
//         default:
//           return 'white'; // Default color
//       }
//     }
//     return 'yellow'; // Default color if status is undefined or not a string
//   };

//   const getProgressBarVariant = (status) => {
//     if (status && typeof status === 'string') {
//       switch (status.toLowerCase()) {
//         case 'done':
//           return 'success';
//         case 'backlog':
//           return 'danger';
//         case 'in progress':
//           return 'info';
//         default:
//           return 'info';
//       }
//     }
//     return 'info'; // Default variant if status is undefined or not a string
//   };

//   const callApi = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setApiData(res.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     callApi();
//   }, []); // Fetch data when the component mounts

//   return (
//     <>
//       <div className="class-card-container">
//         <button
//           className="btn btn-success"
//           onClick={handleCreateProject}
//           style={{ margin: '10px' }}
//         >
//           Create Project
//         </button>
//         {apiData.map((project) => (
//           <div key={project.id}>
//             <div
//               style={{
//                 width: '18rem',
//                 margin: '10px',
//                 backgroundColor: getStatusColor(project.status),
//               }}
//             >
//               <div>
//                 <div>{project.title}</div>
//                 <div className="mb-2 text-muted">{project.URL}</div>
//                 <div>{project.description}</div>
//                 <div>
//                   <Dropdown>
//                     <Dropdown.Toggle variant="info" id="dropdown-basic">
//                       Status: {project.status}
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                       <Dropdown.Item onClick={() => handleStatusChange(project.id, 'backlog')}>
//                         backlog
//                       </Dropdown.Item>
//                       <Dropdown.Item onClick={() => handleStatusChange(project.id, 'In Progress')}>
//                         In Progress
//                       </Dropdown.Item>
//                       <Dropdown.Item onClick={() => handleStatusChange(project.id, 'Done')}>
//                         Done
//                       </Dropdown.Item>
//                       {/* Add more status options as needed */}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>
//                 <button onClick={() => handleEdit(project)}>Edit</button>
//                 <button onClick={() => handleDelete(project.id)}>Delete</button>
//                 <ProgressBar
//                   now={project.status === 'Done' ? 100 : (project.status === 'In Progress' ? 50 : 101)}
//                   variant={getProgressBarVariant(project.status)}
//                   label={project.status}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../Context/Url";
// import Dropdown from "react-bootstrap/Dropdown";
// import ProgressBar from "react-bootstrap/ProgressBar";

// function Dashboard() {
// const [apiData, setApiData] = useState([]);
// const navigate = useNavigate();

// const handleEdit = ({ title, URL, description, id }) => {
//   localStorage.setItem("id", id);
//   localStorage.setItem("title", title);
//   localStorage.setItem("URL", URL);
//   localStorage.setItem("description", description);
//   navigate("/editProjects");
// };

// const handleDelete = async (id) => {
//   const confirmed = window.confirm(
//     "Are you sure you want to delete this project?"
//   );

//   if (confirmed) {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       callApi(); // Fetch data again after deleting a project
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   }
// };

// const handleCreateProject = () => {
//   navigate("/addProject");
// };

// const handleStatusChange = async (id, newStatus) => {
//   try {
//     await axios.put(`${API_URL}/${id}`, { status: newStatus });
//     callApi(); // Fetch data again after updating status
//   } catch (error) {
//     console.error("Error updating status:", error);
//   }
// };

// const getStatusColor = (status) => {
//   if (status && typeof status === "string") {
//     switch (status.toLowerCase()) {
//       case "done":
//         return "rgb(75, 184, 134)";
//       case "backlog":
//         return "rgb(249, 117, 117)";
//       case "in progress":
//         return "rgb(116, 221, 250)";
//         case "Todo":
//         return "black";
//       default:
//         return "black"; // Default color
//     }
//   }
//   return "black"; // Default color if status is undefined or not a string
// };

// const getProgressBarVariant = (status) => {
//   if (status && typeof status === "string") {
//     switch (status.toLowerCase()) {
//       case "done":
//         return "success";
//       case "backlog":
//         return "danger";
//       case "in progress":
//         return "info";
//       default:
//         return "info";
//     }
//   }
//   return "info"; // Default variant if status is undefined or not a string
// };

// const callApi = async () => {
//   try {
//     const res = await axios.get(API_URL);
//     setApiData(res.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// useEffect(() => {
//   callApi();
// }, []); // Fetch data when the component mounts

//   return (
//     <>
//     <div className="dahsboard-container">
//       dahsboard-container<button
//         className="btn btn-success"
//         onClick={handleCreateProject}
//         style={{ margin: "10px" }}
//       >
//         Create Project
//       </button>

//       <div className="all-of-code">
//         all-of-code<div className="class-card-container">
//         {apiData.map((project) => (
//           <div key={project.id}>
//             <div
//               style={{
//                 width:"300px",
//                 height: "450px",
//                 borderTopRightRadius: "75px",
//  borderBottomLeftRadius: "75px",
//  border:"1px solid #fb0707",

//                 backgroundColor: getStatusColor(project.status),
//                 color: getStatusColor(project.status),
//               }}
//             >
//               <div className="card-components">
//                 <div className="inside-content">
//                   <div className="heading">Title</div>
//                   <div className="project-contents">{project.title}</div>
//                   <div className="heading">ProjectURL</div>
//                   <div className="project-contents">{project.URL}</div>
//                   <div className="heading">Description</div>
//                   <div className="project-contents">{project.description}</div>
//                 </div>

//                 <div className="status">
//                   <Dropdown>
//                     <Dropdown.Toggle variant="info" id="dropdown-basic">
//                       Status: {project.status}
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
// <Dropdown.Item
//   onClick={() =>
//     handleStatusChange(project.id, "backlog")
//   }
// >
//   backlog
// </Dropdown.Item>
// <Dropdown.Item
//   onClick={() =>
//     handleStatusChange(project.id, "In Progress")
//   }
// >
//   In Progress
// </Dropdown.Item>
// <Dropdown.Item
//   onClick={() => handleStatusChange(project.id, "Done")}
// >
//   Done
// </Dropdown.Item>
// <Dropdown.Item
//   onClick={() => handleStatusChange(project.id, "Todo")}
// >
// Todo
// </Dropdown.Item>
// {/* Add more status options as needed */}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>
//                 <div className="progress-bar">

//                   <ProgressBar
//                     now={
//                       project.status === "Done"
//                         ? 100
//                         : project.status === "In Progress"
//                         ? 50
//                         : 101
//                     }
//                     variant={getProgressBarVariant(project.status)}
//                     label={project.status}
//                     style={{ width: '100%', height: '40px' ,borderColor:'.1px solid white'}}
//                   />

//                 </div>

//                 <div className="card-buttons">
// <button className="for-action" onClick={() => handleEdit(project)}>Edit</button>
// <button className="for-action" onClick={() => handleDelete(project.id)}>
//   Delete
// </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Dashboard;

// // Dashboard.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../Context/Url";
// import Dropdown from "react-bootstrap/Dropdown";
// import ProgressBar from "react-bootstrap/ProgressBar";

// function Dashboard() {
//   const [apiData, setApiData] = useState([]);
//   const navigate = useNavigate();

//   const handleEdit = ({ title, URL, description, id }) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("title", title);
//     localStorage.setItem("URL", URL);
//     localStorage.setItem("description", description);
//     navigate("/editProjects");
//   };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this project?"
//     );

//     if (confirmed) {
//       try {
//         await axios.delete(`${API_URL}/${id}`);
//         callApi(); // Fetch data again after deleting a project
//       } catch (error) {
//         console.error("Error deleting data:", error);
//       }
//     }
//   };

//   const handleCreateProject = () => {
//     navigate("/addProject");
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`${API_URL}/${id}`, { status: newStatus });
//       callApi(); // Fetch data again after updating status
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   const handleOpen = (id) => {
//     navigate(`/projectDetails/${id}`);
//   };

//   const getStatusColor = (status) => {
//     if (status && typeof status === "string") {
//       switch (status.toLowerCase()) {
//         case "done":
//           return "rgb(75, 184, 134)";
//         case "backlog":
//           return "rgb(249, 117, 117)";
//         case "in progress":
//           return "rgb(116, 221, 250)";
//         case "todo":
//           return "black";
//         default:
//           return "black"; // Default color
//       }
//     }
//     return "black"; // Default color if status is undefined or not a string
//   };

//   const getProgressBarVariant = (status) => {
//     if (status && typeof status === "string") {
//       switch (status.toLowerCase()) {
//         case "done":
//           return "success";
//         case "backlog":
//           return "danger";
//         case "in progress":
//           return "info";
//         default:
//           return "info";
//       }
//     }
//     return "info"; // Default variant if status is undefined or not a string
//   };

//   const callApi = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setApiData(res.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     callApi();
//   }, []); // Fetch data when the component mounts

//   return (
//     <>
//       <div className="dashboard-container">
//         <button
//           className="btn btn-success"
//           onClick={handleCreateProject}
//           style={{ margin: "10px" }}
//         >
//           Create Project
//         </button>

//         <div className="all-of-code">
//           {apiData.map((project) => (
//             <div key={project.id}>
//               <div
//                 style={{
//                   width: "300px",
//                   height: "450px",
//                   borderTopRightRadius: "75px",
//                   borderBottomLeftRadius: "75px",
//                   border: "1px solid #fb0707",
//                   backgroundColor: getStatusColor(project.status),
//                   color: getStatusColor(project.status),
//                 }}
//               >
//                 <div className="card-components">
//                   <div className="inside-content">
//                     <div className="heading">Title</div>
//                     <div className="project-contents">{project.title}</div>
//                     <div className="heading">Project URL</div>
//                     <div className="project-contents">{project.URL}</div>
//                     <div className="heading">Description</div>
//                     <div className="project-contents">{project.description}</div>
//                   </div>

//                   <div className="status">
//                     <Dropdown>
//                       <Dropdown.Toggle variant="info" id="dropdown-basic">
//                         Status: {project.status}
//                       </Dropdown.Toggle>

//                       <Dropdown.Menu>
//                         <Dropdown.Item
//                           onClick={() =>
//                             handleStatusChange(project.id, "backlog")
//                           }
//                         >
//                           backlog
//                         </Dropdown.Item>
//                         <Dropdown.Item
//                           onClick={() =>
//                             handleStatusChange(project.id, "in progress")
//                           }
//                         >
//                           In Progress
//                         </Dropdown.Item>
//                         <Dropdown.Item
//                           onClick={() => handleStatusChange(project.id, "done")}
//                         >
//                           Done
//                         </Dropdown.Item>
//                         <Dropdown.Item
//                           onClick={() => handleStatusChange(project.id, "todo")}
//                         >
//                           Todo
//                         </Dropdown.Item>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                   </div>
//                   <div className="progress-bar">
//                     <ProgressBar
//                       now={
//                         project.status === "done"
//                           ? 100
//                           : project.status === "in progress"
//                           ? 50
//                           : 101
//                       }
//                       variant={getProgressBarVariant(project.status)}
//                       label={`Progress: ${project.status}`}
//                       style={{ width: '100%', height: '40px', borderColor: '1px solid white' }}
//                     />
//                   </div>
//                 </div>

//                 <div className="card-buttons">
//                   <button
//                     className="for-action"
//                     onClick={() => handleEdit(project)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="for-action"
//                     onClick={() => handleDelete(project.id)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="for-action"
//                     onClick={() => handleOpen(project.id)}
//                   >
//                     Open
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Context/Url";
import Dropdown from "react-bootstrap/Dropdown";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import DonutChart from "./ProjectChart";


function Dashboard() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = ({ title, URL, description, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("URL", URL);
    localStorage.setItem("description", description);
    navigate("/editProjects");
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (confirmed) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        callApi(); // Fetch data again after deleting a project
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const handleCreateProject = () => {
    navigate("/addProject");
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`${API_URL}/${id}`, { status: newStatus });
      callApi(); // Fetch data again after updating status
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleOpen = (project) => {
    navigate("/projectdetails", { state: { project } });
  };

  const getStatusColor = (status) => {
    if (status && typeof status === "string") {
      switch (status.toLowerCase()) {
        case "done":
          return "rgb(159, 236, 182)";
        case "backlog":
          return "rgb(236, 159, 174)";
        case "in progress":
          return "rgb(116, 221, 250)";
        case "todo":
          return "white";
        default:
          return "white"; // Default color
      }
    }
    return "white"; // Default color if status is undefined or not a string
  };

  const getProgressBarVariant = (status) => {
    if (status && typeof status === "string") {
      switch (status.toLowerCase()) {
        case "done":
          return "success";
        case "backlog":
          return "danger";
        case "in progress":
          return "info";
        default:
          return "secondary";
      }
    }
    return "secondary"; // Default variant if status is undefined or not a string
  };

  const callApi = async () => {
    try {
      const res = await axios.get(API_URL);
      setApiData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //chart

  const getStatusCounts = () => {
    const statusCounts = {
      done: 0,
      backlog: 0,
      inProgress: 0,
      todo: 0,
    };

    apiData.forEach((project) => {
      // Make sure project.status is defined before using toLowerCase
      if (project.status && typeof project.status === 'string') {
        switch (project.status.toLowerCase()) {
          case 'done':
            statusCounts.done++;
            break;
          case 'backlog':
            statusCounts.backlog++;
            break;
          case 'in progress':
            statusCounts.inProgress++;
            break;
          case 'todo':
            statusCounts.todo++;
            break;
          default:
            break;
        }
      }
    });

    return statusCounts;
  };

  const getChartData = () => {
    const statusCounts = getStatusCounts();

    return {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          data: Object.values(statusCounts),
          backgroundColor: [
            'rgba(159, 236, 182)', // done
            'rgba(236, 159, 174)', // backlog
            'rgba(116, 221, 250)', // in progress
            'rgba(255, 255, 255, 0.5)', // todo
          ],
          borderColor: [
            'rgba(159, 236, 182, 1)',
            'rgba(236, 159, 174, 1)',
            'rgba(116, 221, 250, 1)',
            'rgba(255, 255, 295, 1)',
          ],
          borderWidth: 2,
        },
      ],
    };
  };

  useEffect(() => {
    callApi();
  }, []); // Fetch data when the component mounts

  return (
    <>
      <div className="dashboard-page">
      
        

        <div className="dashboard-container">
          <div className="for-chart">
          <div className="create-button">
          <button
            className="btn btn-info"
            onClick={handleCreateProject}
            style={{ margin: "10px" }}
          >
            <i class="fa-solid fa-plus"></i>&nbsp; Create
          </button>
        </div>
        <DonutChart data={getChartData()} />
        </div>
          <div className="all-of-code">
            {apiData.map((project) => (
              <div key={project.id}>
                <div
                  style={{
                    width: "300px",
                    height: "500px",
                    // borderTopRightRadius: "75px",
                    borderRadius: "10px",
                    backgroundColor: getStatusColor(project.status),
                    color: getStatusColor(project.status),
                  }}
                >
                  <div className="card-components">
                    <div className="inside-content">
                      <div className="heading">Title</div>
                      <div className="project-contents">{project.title}</div>
                      <div className="heading">Project URL</div>
                      <div className="project-contents">{project.URL}</div>
                      <div className="heading">Description</div>
                      <div className="project-contents">
                        {project.description}
                      </div>
                    </div>

                    <div className="status">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                        >
                          Status: {project.status}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() =>
                              handleStatusChange(project.id, "backlog")
                            }
                          >
                            backlog
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              handleStatusChange(project.id, "in progress")
                            }
                          >
                            In Progress
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              handleStatusChange(project.id, "done")
                            }
                          >
                            Done
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() =>
                              handleStatusChange(project.id, "todo")
                            }
                          >
                            Todo
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="progress-bar">
                      <ProgressBar
                        now={
                          project.status === "done"
                            ? 100
                            : project.status === "in progress"
                            ? 50
                            : 101
                        }
                        variant={getProgressBarVariant(project.status)}
                        label={`Progress: ${project.status}`}
                        style={{
                          width: "100%",
                          height: "40px",
                          borderColor: "1px solid white",
                        }}
                      />
                    </div>
                  </div>

                  <div className="card-buttons">
                    <button
                      className="for-action"
                      id="for-Edit"
                      onClick={() => handleEdit(project)}
                    >
                      Edit
                    </button>
                    <button
                      className="for-action"
                      id="for-Delete"
                      onClick={() => handleDelete(project.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="for-action"
                      id="for-Open"
                      onClick={() => handleOpen(project)}
                    >
                      Open
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ----------------------------- */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
