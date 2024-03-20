import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <h1>Welcome to your personal</h1>
        <Link to="/login">Logout</Link>
    </div>
  )
}

export default Home