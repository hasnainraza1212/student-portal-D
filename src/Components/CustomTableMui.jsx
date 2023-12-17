import React from 'react'
import Table from 'react-bootstrap/Table'
import {Avatar} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomTableMui = ({data}) => {
  const navigate = useNavigate()
  const handleUserHistory = (id) =>{
    // const res  = axios.get(`https://fair-lime-goose-wear.cyclic.app/api/students/getattendance?Id=${id}`)
    navigate(`/student/?studentId=${id}`)
  }
  return (
    <Table bordered responsive className='table table-hover'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Course</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr onClick={()=>{handleUserHistory(item._id)}} key={item._id}>
          <td>{++index}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.course}</td>
          <td>
          <Avatar alt={item.name} src={item.imgUrl} />
          </td>
          <td>
           <button className="m-0 p-0">Edit</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>

  )
}

export default CustomTableMui
