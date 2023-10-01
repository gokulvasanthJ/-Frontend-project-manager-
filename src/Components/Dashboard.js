import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Chart from './Chart';

function Dashboard({data,setData}) {
  // let handleDelete=(i)=>{
  //    let newArray=[...data]
  //    newArray.splice(i,1)
  //    setData(newArray)
  // }
  let navigate=useNavigate()
  const navigation=useNavigate()
  

  return <>
  <div className='class-table'>

  <Table striped bordered hover>
      <thead>
        <tr>
          <th>S:No</th>
          <th>Title</th>
          <th>Project URL</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e,i)=>{
          return <tr key={i}>
          <td>{i+1}</td>
          <td>{e.title}</td>
          <td>{e.URL}</td>
          <td>{e.description}</td>
          <td><Button variant='primary' onClick={()=>navigate("/editprojects")}>Edit</Button>
          &nbsp; &nbsp;
          <Button variant="danger" onClick={()=>{
     let newArray=[...data]
     newArray.splice(i,1)
     setData(newArray)
  }}>Delete</Button></td>
  <td><Button variant="primary" onClick={()=>navigation("/addProject")}>Add</Button></td>
          </tr>
        })}
                
      </tbody>
    </Table>
   

  </div>
  <div className="Chart-style">
  <Chart />
  </div>
  
  </>
}

export default Dashboard