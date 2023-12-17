import React,{useState, useEffect} from 'react'
import { Avatar, Box, Typography , Button} from '@mui/material';
import CustomTableAtten from '../Components/CustomTableAtten';
import axios from 'axios';
import CustomModal from '../Components/CustomModal';
const Student = () => {
    const [data, setData] = useState([])
    const [open, setOpen] =useState(false);
 
  useEffect(()=>{
  (async()=>{
      
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
               </Box>
        </Box>
        <CustomTableAtten data = {data} />
        <CustomModal open = {open} setOpen = {setOpen}/>
      </Box>
    )
}

export default Student
