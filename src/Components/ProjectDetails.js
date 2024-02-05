// // ProjectDetails.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function ProjectDetails() {
//   const { state } = useLocation();

//   if (!state || !state.project) {
//     return <div>No project details found</div>;
//   }

//   const { title, description, status } = state.project;

//   return (
//     <div>
//       <h1>Project Details</h1>
//       <div>
//         <div>
//           <strong>Title:</strong> {title}
//         </div>
//         <div>
//           <strong>Description:</strong> {description}
//         </div>
//         <div>
//           <strong>Status:</strong> {status}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;

// // ProjectDetails.js
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useNavigate } from 'react-router-dom';

// function ProjectDetails() {
//   const { state } = useLocation();
//   const navigate=useNavigate()

//   const initialState = {
//     task: '',
//     tasks: [],
//   };

//   const [project, setProject] = useState(initialState);

//   useEffect(() => {
//     if (state && state.project) {
//       setProject({
//         ...state.project,
//         task: '',
//         tasks: [],
//       });
//     }
//   }, [state]);

//   const handleAddTask = () => {
//     if (project.task.trim()) {
//       setProject((prevProject) => ({
//         ...prevProject,
//         tasks: [...prevProject.tasks, project.task.trim()],
//         task: '',
//       }));
//     }
//   };

//   if (!project || !project.title) {
//     return <div>No project details found</div>;
//   }

//   const GotodashBoard = () => {
//     navigate("/dashboard");
//   };

//   const { title, description, status } = project;
//   // navigate("/dashboard")

//   return (
//     <div>
//       <h1>Project Details</h1>
//       <Card>
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text>Status: {status}</Card.Text>
//         </Card.Body>
//       </Card>

//       <div>
//         <h2>Tasks</h2>
//         <Form.Group>
//           <Form.Control
//             type="text"
//             placeholder="Add a task"
//             value={project.task}
//             onChange={(e) => setProject((prevProject) => ({ ...prevProject, task: e.target.value }))}
//           />
//         </Form.Group>
//         <Button variant="primary" onClick={handleAddTask}>
//           Add Task
//         </Button>
//         <Button  variant="primary" onClick={GotodashBoard}>
//            dashboard
//         </Button>
//         <ListGroup>
//           {project.tasks.map((task, index) => (
//             <ListGroup.Item key={index}>{task}</ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;

// // ProjectDetails.js
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useNavigate } from 'react-router-dom';
// import { useProject } from '../Context/ProjectContext'; // Adjust the path accordingly

// function ProjectDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { project, setProject } = useProject();

//   useEffect(() => {
//     if (state && state.project) {
//       setProject({
//         ...state.project,
//         task: '',
//         tasks: [],
//       });
//     }
//   }, [state, setProject]);

//   const handleAddTask = () => {
//     if (project.task.trim()) {
//       setProject((prevProject) => ({
//         ...prevProject,
//         tasks: [...prevProject.tasks, project.task.trim()],
//         task: '',
//       }));
//     }
//   };

//   if (!project || !project.title) {
//     return <div>No project details found</div>;
//   }

//   const GotodashBoard = () => {
//     navigate("/dashboard");
//   };

//   const { title, description, status } = project;
//   // navigate("/dashboard")

//   return (
//     <div>
//       <h1>Project Details</h1>
//       <Card>
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text>Status: {status}</Card.Text>
//         </Card.Body>
//       </Card>

//       <div>
//         <h2>Tasks</h2>
//         <Form.Group>
//           <Form.Control
//             type="text"
//             placeholder="Add a task"
//             value={project.task}
//             onChange={(e) => setProject((prevProject) => ({ ...prevProject, task: e.target.value }))}
//           />
//         </Form.Group>
//         <Button variant="primary" onClick={handleAddTask}>
//           Add Task
//         </Button>
//         <Button  variant="primary" onClick={GotodashBoard}>
//            dashboard
//         </Button>
//         <ListGroup>
//           {project.tasks.map((task, index) => (
//             <ListGroup.Item key={index}>{task}</ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useProject } from '../Context/ProjectContext';

// function ProjectDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { project, setProject } = useProject();
//   const [editingIndex, setEditingIndex] = useState(null);

//   useEffect(() => {
//     // Load project data from localStorage
//     const savedProject = getSavedProject();
//     setProject({
//       title: '',
//       description: '',
//       status: '',
//       task: '',
//       tasks: [],
//       ...savedProject,
//     });
//   }, [setProject]);

//   useEffect(() => {
//     if (state && state.project) {
//       setProject({
//         ...state.project,
//         task: '',
//         tasks: [],
//       });
//     }
//   }, [state]);

//   useEffect(() => {
//     // Save project data to localStorage whenever the project is updated
//     saveProjectToLocalStorage(project);
//   }, [project]);

//   const getSavedProject = () => {
//     try {
//       const savedProjectJSON = localStorage.getItem('project');
//       return savedProjectJSON ? JSON.parse(savedProjectJSON) : {};
//     } catch (error) {
//       console.error('Error parsing saved project JSON:', error);
//       return {};
//     }
//   };

//   const saveProjectToLocalStorage = (projectData) => {
//     try {
//       localStorage.setItem('project', JSON.stringify(projectData));
//     } catch (error) {
//       console.error('Error saving project to localStorage:', error);
//     }
//   };

//   const handleAddTask = () => {
//     if (project && project.task && project.task.trim()) {
//       setProject((prevProject) => ({
//         ...prevProject,
//         tasks: [...prevProject.tasks, { text: project.task.trim(), done: false }],
//         task: '',
//       }));
//     }
//   };

//   const handleEditTask = (index) => {
//     const newText = prompt('Edit Task:', project.tasks[index].text);
//     if (newText !== null) {
//       setProject((prevProject) => {
//         const updatedTasks = [...prevProject.tasks];
//         updatedTasks[index] = { ...updatedTasks[index], text: newText };
//         return { ...prevProject, tasks: updatedTasks };
//       });
//     }
//   };

//   const handleDeleteTask = (index) => {
//     setProject((prevProject) => ({
//       ...prevProject,
//       tasks: prevProject.tasks.filter((_, i) => i !== index),
//     }));
//   };

//   const handleToggleDone = (index) => {
//     setProject((prevProject) => {
//       const updatedTasks = [...prevProject.tasks];
//       updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
//       return { ...prevProject, tasks: updatedTasks };
//     });
//   };

//   const GotodashBoard = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h1>Project Details</h1>
//       {project && (
//         <Card>
//           <Card.Body>
//             <Card.Title>{project.title}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">Status: {project.status}</Card.Subtitle>
//             <Card.Text>Description: {project.description}</Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>
//               <h2>Tasks</h2>
//               <Form.Group>
//                 <Form.Control
//                   type="text"
//                   placeholder="Add a task"
//                   value={project && project.task}
//                   onChange={(e) => setProject((prevProject) => ({ ...prevProject, task: e.target.value }))}
//                 />
//               </Form.Group>
//               <Button variant="primary" onClick={handleAddTask}>
//                 Add Task
//               </Button>
//               <Button variant="primary" onClick={GotodashBoard}>
//                 Dashboard
//               </Button>
//             </ListGroup.Item>
//             {project && (
//               <ListGroup>
//                 {project.tasks.map((task, index) => (
//                   <ListGroup.Item key={index}>
//                     <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
//                       {task.text}
//                     </span>
//                     <Button variant="link" onClick={() => handleToggleDone(index)}>
//                       {task.done ? 'Mark Undone' : 'Mark Done'}
//                     </Button>
//                     <Button variant="link" onClick={() => handleEditTask(index)}>
//                       Edit
//                     </Button>
//                     <Button variant="link" onClick={() => handleDeleteTask(index)}>
//                       Delete
//                     </Button>
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             )}
//           </ListGroup>
//         </Card>
//       )}
//     </div>
//   );
// }

// export default ProjectDetails;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useProject } from '../Context/ProjectContext';

// function ProjectDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { project, setProject } = useProject();
//   const [editingIndex, setEditingIndex] = useState(null);

//   useEffect(() => {
//     // Load project data from localStorage
//     const savedProject = getSavedProject();
//     setProject({
//       title: '',
//       description: '',
//       status: '',
//       task: '',
//       tasks: [],
//       ...savedProject,
//     });
//   }, [setProject]);

//   useEffect(() => {
//     if (state && state.project) {
//       setProject({
//         ...state.project,
//         task: '',
//         tasks: [],
//       });
//     }
//   }, [state]);

//   useEffect(() => {
//     // Save project data to localStorage whenever the project is updated
//     saveProjectToLocalStorage(project);
//   }, [project]);

//   const getSavedProject = () => {
//     try {
//       const savedProjectJSON = localStorage.getItem('project');
//       return savedProjectJSON ? JSON.parse(savedProjectJSON) : {};
//     } catch (error) {
//       console.error('Error parsing saved project JSON:', error);
//       return {};
//     }
//   };

//   const saveProjectToLocalStorage = (projectData) => {
//     try {
//       localStorage.setItem('project', JSON.stringify(projectData));
//     } catch (error) {
//       console.error('Error saving project to localStorage:', error);
//     }
//   };

//   const handleEditTask = (index) => {
//     const newText = prompt('Edit Task:', project.tasks[index].text);
//     if (newText !== null) {
//       setProject((prevProject) => {
//         const updatedTasks = [...prevProject.tasks];
//         updatedTasks[index] = { ...updatedTasks[index], text: newText };
//         return { ...prevProject, tasks: updatedTasks };
//       });
//     }
//   };

//   const handleAddTask = () => {
//     if (project && project.task && project.task.trim()) {
//       const newTask = { text: project.task.trim(), done: false };
//       setProject((prevProject) => ({
//         ...prevProject,
//         tasks: [...prevProject.tasks, newTask],
//         task: '',
//       }));

//       // Save tasks to local storage
//       saveTasksToLocalStorage([...project.tasks, newTask]);
//     }
//   };
//   const saveTasksToLocalStorage = (tasks) => {
//     try {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     } catch (error) {
//       console.error('Error saving tasks to localStorage:', error);
//     }
//   };

//   const handleDeleteTask = (index) => {
//     setProject((prevProject) => {
//       const updatedTasks = prevProject.tasks.filter((_, i) => i !== index);
//       return { ...prevProject, tasks: updatedTasks };
//     });
//   };

//   const handleToggleDone = (index) => {
//     setProject((prevProject) => {
//       const updatedTasks = [...prevProject.tasks];
//       updatedTasks[index] = { ...updatedTasks[index], done: !updatedTasks[index].done };
//       return { ...prevProject, tasks: updatedTasks };
//     });
//   };

//   const GotodashBoard = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h1>Project Details</h1>
//       {project && (
//         <Card>
//           <Card.Body>
//             <Card.Title>{project.title}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">{project.status}</Card.Subtitle>
//             <Card.Text>{project.description}</Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>
//               <h2>Tasks</h2>
//               <Form.Group>
//                 <Form.Control
//                   type="text"
//                   placeholder="Add a task"
//                   value={project && project.task}
//                   onChange={(e) => setProject((prevProject) => ({ ...prevProject, task: e.target.value }))}
//                 />
//               </Form.Group>
//               <Button variant="primary" onClick={handleAddTask}>
//                 Add Task
//               </Button>
//               <Button variant="primary" onClick={GotodashBoard}>
//                 Dashboard
//               </Button>
//             </ListGroup.Item>
//             {project && (
//               <ListGroup>
//                 {project.tasks.map((task, index) => (
//                   <ListGroup.Item key={index}>
//                     <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
//                       {task.text}
//                     </span>
//                     <Button variant="link" onClick={() => handleToggleDone(index)}>
//                       {task.done ? 'Mark Undone' : 'Mark Done'}
//                     </Button>
//                     <Button variant="link" onClick={() => handleEditTask(index)}>
//                       Edit
//                     </Button>
//                     <Button variant="link" onClick={() => handleDeleteTask(index)}>
//                       Delete
//                     </Button>
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             )}
//           </ListGroup>
//         </Card>
//       )}
//     </div>
//   );
// }

// export default ProjectDetails;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useProject } from '../Context/ProjectContext';

// function ProjectDetails() {
//   const { state } = useLocation();
//   const { project, setProject } = useProject();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedProject = getSavedProject();
//     setProject({
//       title: '',
//       description: '',
//       status: '',
//       task: '',
//       tasks: [],
//       ...savedProject,
//     });
//   }, [setProject]);

//   useEffect(() => {
//     if (state && state.project) {
//       setProject({
//         ...state.project,
//         task: '',
//         tasks: [],
//       });
//     }
//   }, [state, setProject]);

//   useEffect(() => {
//     saveProjectToLocalStorage(project);
//   }, [project]);

//   useEffect(() => {
//     // Load tasks from localStorage when the component mounts
//     const savedTasks = getSavedTasks();
//     setProject((prevProject) => ({ ...prevProject, tasks: savedTasks }));
//   }, [setProject]);

//   const getSavedProject = () => {
//     try {
//       const savedProjectJSON = localStorage.getItem('project');
//       return savedProjectJSON ? JSON.parse(savedProjectJSON) : {};
//     } catch (error) {
//       console.error('Error parsing saved project JSON:', error);
//       return {};
//     }
//   };

//   const saveProjectToLocalStorage = (projectData) => {
//     try {
//       localStorage.setItem('project', JSON.stringify(projectData));
//     } catch (error) {
//       console.error('Error saving project to localStorage:', error);
//     }
//   };

//   const getSavedTasks = () => {
//     try {
//       const savedTasksJSON = localStorage.getItem('tasks');
//       return savedTasksJSON ? JSON.parse(savedTasksJSON) : [];
//     } catch (error) {
//       console.error('Error parsing saved tasks JSON:', error);
//       return [];
//     }
//   };

//   const saveTasksToLocalStorage = (tasks) => {
//     try {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     } catch (error) {
//       console.error('Error saving tasks to localStorage:', error);
//     }
//   };

//   const handleAddTask = () => {
//     if (project && project.task && project.task.trim()) {
//       const newTask = { text: project.task.trim(), done: false };
//       setProject((prevProject) => ({ ...prevProject, tasks: [...prevProject.tasks, newTask], task: '' }));

//       // Save tasks to local storage
//       saveTasksToLocalStorage([...project.tasks, newTask]);
//     }
//   };

//   const handleDeleteTask = (index) => {
//     setProject((prevProject) => {
//       const updatedTasks = prevProject.tasks.filter((_, i) => i !== index);
//       // Save updated tasks to local storage
//       saveTasksToLocalStorage(updatedTasks);
//       return { ...prevProject, tasks: updatedTasks };
//     });
//   };

//   const GotodashBoard = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h1>Project Details</h1>
//       {project && (
//         <div>
//           <h2>{project.title}</h2>
//           <p>Status: {project.status}</p>
//           <p>{project.description}</p>
//         </div>
//       )}
//       <div>
//         <h2>Tasks</h2>
//         <div>
//           <input
//             type="text"
//             placeholder="Add a task"
//             value={project && project.task}
//             onChange={(e) => setProject((prevProject) => ({ ...prevProject, task: e.target.value }))}
//           />
//           <button onClick={handleAddTask}>Add Task</button>
//         </div>
//         <button onClick={GotodashBoard}>Dashboard</button>
//       </div>
//       {project && (
//         <div>
//           <h2>Task List</h2>
//           {project.tasks.map((task, index) => (
//             <div key={index}>
//               <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
//                 {task.text}
//               </span>
//               <button onClick={() => handleDeleteTask(index)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectDetails;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useProject } from '../Context/ProjectContext';

// function ProjectDetails() {
//   const { state } = useLocation();
//   const { project, setProject } = useProject();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedProject = getSavedProject();
//     setProject({
//       title: '',
//       description: '',
//       status: '',
//       task: '',
//       tasks: [],
//       ...savedProject,
//     });
//   }, [setProject]);

//   useEffect(() => {
//     if (state && state.project) {
//       setProject({
//         ...state.project,
//         task: '',
//         tasks: [],
//       });
//     }
//   }, [state, setProject]);

//   useEffect(() => {
//     saveProjectToLocalStorage(project);
//   }, [project]);

//   useEffect(() => {
//     // Load tasks from localStorage when the component mounts
//     const savedTasks = getSavedTasks();
//     setProject((prevProject) => ({ ...prevProject, tasks: savedTasks }));
//   }, [setProject]);

//   const getSavedProject = () => {
//     try {
//       const savedProjectJSON = localStorage.getItem('project');
//       return savedProjectJSON ? JSON.parse(savedProjectJSON) : {};
//     } catch (error) {
//       console.error('Error parsing saved project JSON:', error);
//       return {};
//     }
//   };

//   const saveProjectToLocalStorage = (projectData) => {
//     try {
//       localStorage.setItem('project', JSON.stringify(projectData));
//     } catch (error) {
//       console.error('Error saving project to localStorage:', error);
//     }
//   };

//   const getSavedTasks = () => {
//     try {
//       const savedTasksJSON = localStorage.getItem('tasks');
//       return savedTasksJSON ? JSON.parse(savedTasksJSON) : [];
//     } catch (error) {
//       console.error('Error parsing saved tasks JSON:', error);
//       return [];
//     }
//   };

//   const saveTasksToLocalStorage = (tasks) => {
//     try {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//     } catch (error) {
//       console.error('Error saving tasks to localStorage:', error);
//     }
//   };

//   const handleAddTask = () => {
//     if (project && project.task && project.task.trim()) {
//       const newTask = { text: project.task.trim(), done: false };
//       setProject((prevProject) => ({ ...prevProject, tasks: [...prevProject.tasks, newTask], task: '' }));

//       // Save tasks to local storage
//       saveTasksToLocalStorage([...project.tasks, newTask]);
//     }
//   };

//   const handleDeleteTask = (index) => {
//     setProject((prevProject) => {
//       const updatedTasks = prevProject.tasks.filter((_, i) => i !== index);
//       // Save updated tasks to local storage
//       saveTasksToLocalStorage(updatedTasks);
//       return { ...prevProject, tasks: updatedTasks };
//     });
//   };

//   const GotodashBoard = () => {
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h1>Project Details</h1>
//       {project && (
//         <div>
//           <h2>{project.title}</h2>
//           <p>Status: {project.status}</p>
//           <p>{project.description}</p>
//         </div>
//       )}
//       <div>
//         <h2>Tasks</h2>
//         <div>
//           <input
//             type="text"
//             placeholder="Add a task"
//             value={project && project.task}
//             onChange={(e) => setProject((prevProject) => ({ ...prevProject, task: e.target.value }))}
//           />
//           <button onClick={handleAddTask}>Add Task</button>
//         </div>
//         <button onClick={GotodashBoard}>Dashboard</button>
//       </div>
//       {project && (
//         <div>
//           <h2>Task List</h2>
//           {project.tasks.map((task, index) => (
//             <div key={index}>
//               <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
//                 {task.text}
//               </span>
//               <button onClick={() => handleDeleteTask(index)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProjectDetails;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProject } from "../Context/ProjectContext";

function ProjectDetails() {
  const { state } = useLocation();
  const { project, setProject } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    const savedProject = getSavedProject();
    setProject({
      title: "",
      description: "",
      status: "",
      task: "",
      tasks: getSavedTasks(savedProject.id) || [],
      ...savedProject,
    });
  }, [setProject]);

  useEffect(() => {
    if (state && state.project) {
      setProject({
        ...state.project,
        task: "",
        tasks: getSavedTasks(state.project.id) || [],
      });
    }
  }, [state, setProject]);

  useEffect(() => {
    saveProjectToLocalStorage(project);
  }, [project]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const savedTasks = getSavedTasks(project.id) || [];
    setProject((prevProject) => ({ ...prevProject, tasks: savedTasks }));
  }, [project, setProject]);

  const getSavedProject = () => {
    try {
      const savedProjectJSON = localStorage.getItem("project");
      return savedProjectJSON ? JSON.parse(savedProjectJSON) : {};
    } catch (error) {
      console.error("Error parsing saved project JSON:", error);
      return {};
    }
  };

  const saveProjectToLocalStorage = (projectData) => {
    try {
      localStorage.setItem("project", JSON.stringify(projectData));
    } catch (error) {
      console.error("Error saving project to localStorage:", error);
    }
  };

  const getSavedTasks = (projectId) => {
    try {
      const savedTasksJSON = localStorage.getItem(`tasks_${projectId}`);
      return savedTasksJSON ? JSON.parse(savedTasksJSON) : [];
    } catch (error) {
      console.error("Error parsing saved tasks JSON:", error);
      return [];
    }
  };

  const saveTasksToLocalStorage = (tasks, projectId) => {
    try {
      localStorage.setItem(`tasks_${projectId}`, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  };

  const handleAddTask = () => {
    if (project && project.task && project.task.trim()) {
      const newTask = { text: project.task.trim(), done: false };
      setProject((prevProject) => ({
        ...prevProject,
        tasks: [...prevProject.tasks, newTask],
        task: "",
      }));
      // Save tasks to local storage
      saveTasksToLocalStorage([...project.tasks, newTask], project.id);
    }
  };

  const handleDeleteTask = (index) => {
    setProject((prevProject) => {
      const updatedTasks = prevProject.tasks.filter((_, i) => i !== index);
      // Save updated tasks to local storage
      saveTasksToLocalStorage(updatedTasks, project.id);
      return { ...prevProject, tasks: updatedTasks };
    });
  };

  const handleEditTask = (index, newText) => {
    setProject((prevProject) => {
      const updatedTasks = prevProject.tasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      );
      // Save updated tasks to local storage
      saveTasksToLocalStorage(updatedTasks, project.id);
      return { ...prevProject, tasks: updatedTasks };
    });
  };

  const handleToggleDone = (index) => {
    setProject((prevProject) => {
      const updatedTasks = prevProject.tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      );
      // Save updated tasks to local storage
      saveTasksToLocalStorage(updatedTasks, project.id);
      return { ...prevProject, tasks: updatedTasks };
    });
  };

  const GotodashBoard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="project-detailspage">
      <div className="pd-23">
        <div className="pd-2">
          <div>
            <input
              type="text"
              placeholder=" Add a task"
              className="aad-task-box"
              value={project && project.task}
              onChange={(e) =>
                setProject((prevProject) => ({
                  ...prevProject,
                  task: e.target.value,
                }))
              }
            />
            <button className="add-task-btn" onClick={handleAddTask}>
              Add
            </button>
            <button className="Dashboard-btn" onClick={GotodashBoard}>
              <i class="fa-solid fa-caret-left"></i>Dashboard
            </button>
          </div>
        </div>

        <div>
          {project && (
            <div className="pd-3">
              {project.tasks.map((task, index) => (
                <div className="task-content" key={index}>
                  <span
                    style={{
                      textDecoration: task.done ? "line-through" : "none",
                    }}
                    onClick={() => handleToggleDone(index)}
                  >
                    <h5>Task&nbsp;#{index + 1}</h5>
                    <hr></hr>
                    <h5>Task</h5>
                    <p className="task-assign">{task.text}</p>
                  </span>
                  <br></br>
                  <hr></hr>

                  <button
                    className="task-done"
                    onClick={() => handleToggleDone(index)}
                  >
                    {task.done ? "Undone" : "Done"}
                  </button>
                  <button
                    className="task-edit"
                    onClick={() =>
                      handleEditTask(index, prompt("Edit task:", task.text))
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="task-delete"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pd-1">
        <div className="project-content">
          <h1>Project📊</h1>
          {project && (
            <div className="project-content2">
              <h4>{project.title}</h4>
              <h5>{project.status}</h5>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
