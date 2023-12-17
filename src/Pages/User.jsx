import React from 'react'
import { Avatar, Box, Typography} from '@mui/material';
export default function UserHome() {
  return (
  
   <div style={{width:"100%",height:"100vh", display:"flex",justifyContent:"center", alignItems:"center"}}>
     <div className="card p-4" >
<Box>
     <Avatar alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ 
                    width: 56,
                    height: 56
                     }}
                 />
                 <Typography>helo</Typography>
</Box>

    <button>Resume</button>
  </div>
   </div>
  )
}