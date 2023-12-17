import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaCamera } from "react-icons/fa";
import fallback from "./../assets/images/fallback.png"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
const CustomModal = ({ setOpen, open }) => {
  const [firstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [course, setCourse] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const handleCreateUser =async () =>{
  if (firstName && LastName && email && password && phone && course) {
   const res = await axios.post('https://fair-lime-goose-wear.cyclic.app/api/students/register', {name: firstName + " " + LastName, email, password, phone, course , imgUrl:"dfnklfndsanfmkdfn"})
    console.log(res)
    
  } else {
    alert("all fields required")
  }
}
  return (

    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className=''
          component="form"
          sx={{
            width: "550px",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            bgcolor: 'background.paper',
            borderRadius: "10px",
            padding: "40px 0",
            position: 'absolute',
            boxShadow: 24,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          noValidate
          autoComplete="off"
        >
          <label htmlFor='img'>
            <Box
              sx={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "40px", position: "relative" }}
            >
              <img src={fallback} className='w-[100%] h-[100%] rounded-[50%]'>
              </img>
              <FaCamera size={30} style={{ position: "absolute", bottom: "10px", right: "1px", background: "white", padding: "5px", borderRadius: "50%" }} />
            </Box>
          </label>
          <input id='img' accept="image/*" placeholder='hdasc' type='file' style={{ width: "100%", height: "100%", alignItems: "center", display: "none" }} />
          <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <TextField onChange={(e) => { setFirstName(e.target.value) }} id="outlined-basic" label="First Name" variant="outlined" />
            <TextField onChange={(e) => { setLastName(e.target.value) }} id="outlined-basic" label="Last Name" variant="outlined" />
          </Box>
          <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>

            <TextField onChange={(e) => { setCourse(e.target.value) }} id="outlined-basic" label="Course" variant="outlined" />
            <TextField onChange={(e) => { setPassword(e.target.value) }} id="outlined-basic" label="Password" variant="outlined" />
          </Box>
          <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>

            <TextField onChange={(e) => { setEmail(e.target.value) }} id="outlined-basic" label="Email" variant="outlined" />
            <TextField onChange={(e) => { setPhone(e.target.value) }} id="outlined-basic" label="Phone Number" variant="outlined" />

          </Box>
          <Button sx={{ width: "90%", }} onClick={handleCreateUser} variant="contained">Add User</Button>

        </Box>

      </Modal>

    </div>


  );
}
export default CustomModal