import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Manage({data,setData}) {
  let navigate=useNavigate()

  let [title,setTitle]=useState("")
  let [URL,setUrl]=useState("")
  let [description,setDescription]=useState("")
let handleSubmit=()=>{
      let newData={title,URL,description}
      let newArray=[...data]
          newArray.push(newData)
          setData(newArray)
          navigate("/dashboard")
}
   
  return <div className='add-project'>
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
        <Form.Control as="textarea" rows={3} placeholder='Describe The Project...'  onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Button variant="primary"  onClick={()=>handleSubmit()}>Submit</Button>
    </Form>
  </div>
  </div>
}

export default Manage