import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Chart from './Chart';
import axios from 'axios';
import { API_URL } from '../Context/Url';
import { useEffect } from 'react';


function Dashboard() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const navigation = useNavigate();


const handleEdit = ({ title, URL, description, id }) => {
    localStorage.setItem("id", id)
    localStorage.setItem("title", title)
    localStorage.setItem("URL", URL)
    localStorage.setItem("description", description)
    navigate("/editProjects")
  };


  const handleDelete = async (id) => {
  try
  { await axios.delete(`${API_URL}/${id}`);
    callApi();}
    catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  

  const handleAdd = () => {
    navigation("/addproject")
  }
// const handleEdit=({id,title,URL,description})=>{
//   localStorage.setItem("id",id)
//   localStorage.setItem("title",title)
//   localStorage.setItem("URL",URL)
//   localStorage.setItem("description",description)
//   navigate("/editProjects")

// }

  const callApi = async () => {
    const res = await axios.get(API_URL)
    setApiData(res.data);
  }


  useEffect(() => {
    callApi();
  }, []);

  return <>
      <div className='class-table'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "3%" }}>S:No</th>
              <th style={{ width: "7%" }}>Title</th>
              <th style={{ width: "10%" }}>Project URL</th>
              <th style={{ width: "17%" }}>Description</th>
              <th style={{ width: "10%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.title}</td>
                  <td>{e.URL}</td>
                  <td>{e.description}</td>
                  <td>
                    <Button variant='primary' onClick={() => handleEdit(e)}>Edit</Button>
                    &nbsp; &nbsp;
                    <Button variant='danger' onClick={() => handleDelete(e.id)}>Delete</Button>
                    &nbsp; &nbsp;
                    <Button variant="primary" onClick={handleAdd}>Add</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="Chart-style">
        <Chart />
      </div>
    </>
  
}

export default Dashboard;

//-------------------------------------

