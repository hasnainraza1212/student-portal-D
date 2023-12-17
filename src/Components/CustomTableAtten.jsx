import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import {Avatar} from '@mui/material';
import { useLocation } from "react-router-dom"
import axios from 'axios';
const CustomTableAtten = () => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const id = queryParams.get("studentId")
  const [data, setData] = useState([])
useEffect(()=>{
(async()=>{
  const res = await axios.get(`https://fair-lime-goose-wear.cyclic.app/api/students/studenthistory?studentId=${id}`)
  if(res?.data?.attendanceHistory?.length>0){
    setData(res?.data?.attendanceHistory)
  }
})()
},[])
  return (
    <Table bordered responsive className='table table-hover'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr  key={item._id}>
          <td>{++index}</td>
          <td>{item.date}</td>
          <td>{item.status}</td>
          <td>
          <Avatar alt={item.name} src={item.imgUrl} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>

  )
}

export default CustomTableAtten
