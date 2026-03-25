import React from 'react'
import { assets } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between items-center p-4 px-10 shadow-md">
        <Link to="/"><img src={assets.logo} alt="" className='w-30 ' /></Link>
        <img src={assets.profile_image} alt="" className='w-10' />
      </div>
    </div>
  )
}

export default Navbar
