import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom"
export default function Login() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [user, setUser]= useState({})
    const navigate = useNavigate()


    const handleLogin =async (e)=>{
        e.preventDefault()
        try{
            const res =await  axios.post("https://fair-lime-goose-wear.cyclic.app/api/students/login",{email, password})
            console.log(res?.data)
             setUser(res?.data);
             console.log(res?.data)
             localStorage.setItem("studentId",res?.data?.student?._id);
             Cookies.set("AuthToken",res?.data?.token)
             if(res?.data?.token){
                navigate("/admin")
             }
        }catch(error){
            console.log(error)
        }

    }
  return (
 <div style={{backgroundColor:"gray",height:"100vh", display:"flex", alignItems:"center","justifyContent":"center"}} className='w-100 '>
       <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
  <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
    Welcome back to <span className="text-[#7747ff]">SMIT</span>
  </div>
  <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
    Log in to your account
  </div>
  <form className="flex flex-col gap-3" >
    <div className="block relative">
      <label
        htmlFor="email"
        className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
      >
        Email
      </label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
      />
    </div>
    <div className="block relative">
      <label
        htmlFor="password"
        className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
      />
    </div>
    <div>
      <a className="text-sm text-[#7747ff]" href="#">
        Forgot your password?
      </a>
    </div>
    <button
      type="submit"
      onClick={handleLogin}
      className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
    >
      Submit
    </button>
  </form>

  </div>

 </div>

  )
}