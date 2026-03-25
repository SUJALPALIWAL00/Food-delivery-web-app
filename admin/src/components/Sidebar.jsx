import React from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar  border-r-2 border-[#a9a9a9] w-[18vw] min-h-[90vh] flex flex-col pt-10 gap-5">
        <NavLink to="/add" className="sidebar_item flex items-center cursor-pointer border border-r-0 border-[#a9a9a9] md:ml-10 ml-5 py-2 px-2 gap-2 ">
            <img src={assets.add_icon} alt="" className=' w-7 h-7 ' />
            <p className='hidden md:block' >Add Item</p>
        </NavLink>
        <NavLink to="/list" className="sidebar_item flex items-center cursor-pointer border border-r-0 border-[#a9a9a9] md:ml-10 ml-5 py-2 px-2 gap-2 ">
            <img src={assets.parcel_icon} alt="" className=' w-7 h-7 ' />
            <p className='hidden md:block' >List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar_item flex items-center cursor-pointer border border-r-0 border-[#a9a9a9] md:ml-10 ml-5 py-2 px-2 gap-2 ">
            <img src={assets.order_icon} alt="" className=' w-7 h-7 ' />
            <p className='hidden md:block' >Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar


