import React from "react";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../Context/Url";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function EditProjects() {
  const navigate = useNavigate()
  const [id, setId] = useState("");
  const [title, setTitle] = useState('');
  const [URL, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = async () => {
    try {
      await axios.put(`${API_URL}/${id}`, {
        title,
        URL,
        description
      });
      navigate("/dashboard");
      window.alert('Changes successfully updated!'); // Show alert
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setTitle(localStorage.getItem('title'))
    setUrl(localStorage.getItem('URL'))
    setDescription(localStorage.getItem('description'))

  }, []);


  return <>

    <div className="edit-form">
      <Form className="form-element1">
      <Form.Group className="mb-3">
        <Form.Label className="headings">Title</Form.Label>
        <Form.Control type="text" placeholder="Project Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="headings">Link</Form.Label>
        <Form.Control type="text" placeholder="Type Project URL" value={URL} onChange={(e) => setUrl(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="headings">Description</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Describe The Project..." value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" style={{ color: 'rgb(94, 151, 905)', fontSize: '15px', fontFamily: 'sherif', fontWeight: '900' }}>
        Max 30 words
      </Form.Group>
      <Button variant="primary" onClick={handleEdit}>Submit</Button>
    </Form>
    </div>

  </>
}

export default EditProjects
