import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [place, setPlace] = useState('')
  const [gender, setGender] = useState()
  const [password, setPassword] = useState()
  const [address, setAddress] = useState()


let navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    let Userdata ={username, name, email, place, gender,password,address }
    axios.post('http://localhost:8008/User', Userdata )
    .then((res)=>{
     alert("Data is successfully added")
     navigate('/login')

    }).catch((err) => {
      console.log(err.message);
    })
   
  }

  
  return (
    <div>
  <h1 style={{fontSize:'50px'}}>Register</h1>
  <hr/>
  <form onSubmit={handleSubmit} className='py-8 px-8 max-w-sm mx-auto mt-9 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6"'>
  <label>Username:</label>
    <input className='border-4 ml-3 p-1' type="text"  placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)} required/><br/><br/>
    <label>Name:</label>
    <input className='border-4 ml-3 p-1' type="text"  placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} required/><br/><br/>
    <label>Email:</label>
    <input className='border-4 ml-3 p-1' type="email"  placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>
    <div>
        <label>Address</label>
        <textarea className='border-4 shadow-lg w-auto h-40 text-slate-500 font-medium' placeholder='Your address' value={address} onChange={(e)=>setAddress(e.target.value)} required></textarea>
    </div><br/><br/>
    <div>
        <span>State:</span>
    <select className='border-4 ml-3 p-1' value={place} onChange={(e) => setPlace(e.target.value)} >
        <option value="Lagos">Lagos</option>
        <option value="Abuja">Abuja</option>
        <option value="Imo">Imo</option>
     </select><br/><br/>
    </div>
    <div >
    <span className=' mr-3 p-1'>Gender:</span>
    <input type="radio" name='male' value='male' checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}/><span>Male</span>
    <input type="radio" name='female' value='female' checked={gender === 'female'}onChange={(e) => setGender(e.target.value)}/><span>female</span>
    </div>
   
  
    <label>password:</label>
    <input className='border-4 ml-3 p-1' type="password"  placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/><br/>

    <button className='p-3 max-w-sm mr-8 bg-black text-white rounded-xl shadow-lg  items-center space-x-4'>Submit</button>
    <Link to='/login'>
    <button  className='p-3 max-w-sm  bg-black text-white rounded-xl shadow-lg items-center space-x-4'>Login</button>
    </Link>
   
  </form>

     

    </div>
  )
}

export default Register