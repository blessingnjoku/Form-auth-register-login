import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const navigate = useNavigate()


  // let data = {email, password}

  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //  fetch('http://localhost:8008/User/' + email)
  //   .then((res)=>{
  //     res.json()
  //   }).then((response)=>{
  //     console.log(response)
  //     if(Object.keys(response).length === 0){
  //       alert('user not found')

  //     }else{
  //       if(response.password === password){
  //         navigate('/')
  //       }else{
  //         alert('please enter valid credentials')
  //       }
  //     }
     
  //   }).catch((err)=>{
  //     console.error("Login failed du to :", +  err.message);
  //   })
    

  // }





  return (
    <div>
      <h1 style={{fontSize:'50px'}}> Login </h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <label >Email:</label>
        <input className='border-4 ml-3 mt-8 p-1' type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <label>Password:</label>
        <input className='border-4 ml-3 p-1' type="password" placeholder='Enter password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Link>
        </Link>

        <button  className='p-3 max-w-sm mx-auto bg-black text-white rounded-xl shadow-lg flex items-center space-x-4'>Login</button>
        <label className='text-red'>Don't have an account?</label><Link>Register</Link>

      </form>

    </div>
  )
}

export default Login