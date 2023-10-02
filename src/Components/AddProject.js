import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Context/Url';


function Manage({data,setData}) {
  let navigate=useNavigate()

  let [title,setTitle]=useState("")
  let [URL,setUrl]=useState("")
  let [description,setDescription]=useState("")
  
  let handleSubmit = async () => {
    let newData = { title, URL, description };
  
    try {
      const response = await axios.post(API_URL, newData);
  
      let newArray = [...data];
      newArray.push(response.data);
      setData(newArray);
      navigate("/dashboard");
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
//   let handleSubmit=()=>{
//     let newData={title,URL,description}
//     let newArray=[...data]
//         newArray.push(newData)
//         setData(newArray)
//         navigate("/dashboard")
// }


  

   
  return <>
  <div className="add-project-page">
  <div className="picture-add-page">
<img src="https://img.freepik.com/free-vector/teamwork-concept-with-business-presentation_23-2147857539.jpg?w=740&t=st=1696184507~exp=1696185107~hmac=55d97d9a659f435e871c5ff31c7f2e9dce8b1eec14d3ca01c2217c42699813f6" alt="pic"></img>
  </div>
  {/* ------------------------------ */}
  <div className='add-project'>
  <div className="form-element">
   <Form className='form-element1' >
      <Form.Group className="mb-3" >
        <Form.Label className='headings'>Title</Form.Label>
        <Form.Control type="text" placeholder="Project Title" required  onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label className='headings'>Link</Form.Label>
        <Form.Control type="text" placeholder="Type Project URL" onChange={(e)=>setUrl(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label  className='headings'>Description</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder='Describe The Project...'  onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" style={{color:"rgb(94, 151, 905)", fontSize:"15px",fontFamily:"sherif",fontWeight:"900"}}>Max 30 words</Form.Group>
      <Button variant="primary"  onClick={()=>handleSubmit()}>Submit</Button>
    </Form>
  </div>
  </div>
  </div>
  
  </>
}

export default Manage