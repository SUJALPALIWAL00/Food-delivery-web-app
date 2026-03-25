import React, { useState, useContext } from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogIn }) => {

  const [menu, setMenu] = useState("home");
  const navigate = useNavigate()
  const { getTotalCartAmount, token, setToken,showDropDown, setShowDropDown } = useContext(StoreContext);

  const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
    navigate(0)
  }

  return (

    <div className="navbar bg-white flex  justify-between items-center mt-5 md:mt-8 color-[#49557e] ">
      <div className="navbar-left">
        <Link to="/"><img className='logo w-[130px] md:w-full' src={assets.logo} alt="" /></Link>
      </div>

      <div className="navbar-mid">
        <ul className='navbar-menu md:flex gap-5 hidden '>
          <Link to='/' onClick={() => { setMenu("home") }} className={`${menu === 'home' ? "active" : ""} cursor-pointer`}>Home</Link>
          <a href='#Menu' onClick={() => { setMenu("menu") }} className={`${menu === 'menu' ? "active" : ""} cursor-pointer`}>Menu</a>
          <a href='#MobileApp' onClick={() => { setMenu("mobileApp") }} className={`${menu === 'mobileApp' ? "active" : ""} cursor-pointer`}>Mobile App</a>
          <a href='#ContactUs' onClick={() => { setMenu("contactUs") }} className={`${menu === 'contactUs' ? "active" : ""} cursor-pointer`}>Contact Us</a>
        </ul>
      </div>

      <div className="navbar-right flex gap-5 scale-90 md:scale-100 relative z-10 ">
        <img src={assets.search_icon} alt="" className='cursor-pointer' />
        <Link to="/cart" className='relative'><img src={assets.basket_icon} alt="" className='cursor-pointer' /><div className={`dot absolute  border-5 border-[#FF6347] rounded-full -right-1 -top-3 ${getTotalCartAmount() === 0 ? "hidden" : "block"} `}></div></Link>
        {!token ? <button onClick={() => setShowLogIn(true)} className='border border-[#ff6347] rounded-3xl px-4 py-1 transition duration-300 hover:bg-[#fff4f2] cursor-pointer'>Sign in</button>
          :<> <div className='profile-logo cursor-pointer relative ' onClick={()=>{setShowDropDown(prev=>!prev)}}>
              <img src={assets.profile_icon} alt="" />
              </div>
              <div className={`profile-dropdown absolute right-0 top-10 ${showDropDown?"flex":"hidden"} flex-col gap-2 p-3 bg-[#fff2ef]  border border-[#ff6347] rounded`} onClick={(e)=>{if (showDropDown==true) {setShowDropDown(true);e.stopPropagation()}}}>
                <li className='list-none flex  gap-2 justify-center cursor-pointer items-center hover:text-[#ff6347]'><img className='w-5' src={assets.bag_icon} alt="" />Orders</li>
                <hr className='bg-[#ff6347]' />
                <li onClick={logout} className='list-none flex gap-2 cursor-pointer justify-center items-center hover:text-[#ff6347]'><img className='w-5' src={assets.logout_icon} alt="" />Logout</li>
              </div>
          
          </>
        }


      </div>
    </div>
  )
}

export default Navbar
