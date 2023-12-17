import React,{useState, useEffect} from 'react'
import { Avatar, Box, Typography , Button} from '@mui/material';
import CustomTableMui from '../Components/CustomTableMui';
import axios from 'axios';
import CustomModal from '../Components/CustomModal';
import {useNavigate} from "react-router-dom"

const Admin = () => {
  const [data, setData] = useState([])
  const [open, setOpen] =useState(false);
  const navigate = useNavigate()
  const signOut = () =>{
    localStorage.clear()
    navigate("/")
  }
useEffect(()=>{
(async()=>{
    const res = await axios.get("https://fair-lime-goose-wear.cyclic.app/api/students/students/");
    if(res?.data?.students?.length>0){
      setData(res?.data?.students)
    }
})()
},[])
  return (
    <Box>
      <Box className={"flex justify-between items-center m-10"}>
        <Box className={"w-[200px] items-center flex "}>
                <Avatar alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ 
                    width: 56,
                    height: 56
                     }}
                 />
                <Typography sx={{
                    fontSize:"30px",
                    ml:"20px"
                    }}>
                    Students
                </Typography>
            </Box>
        <Box className={"w-[200px]flex ml-4 "}>
             <Button onClick={()=>{
              setOpen(true)
             }} variant="contained">Add Student</Button>
             <Button  variant="out-line" onClick={signOut}>SignOut</Button>
             </Box>
             
      </Box>
      <CustomTableMui data = {data} />
      <CustomModal open = {open} setOpen = {setOpen}/>
    </Box>
  )
}

export default Admin
