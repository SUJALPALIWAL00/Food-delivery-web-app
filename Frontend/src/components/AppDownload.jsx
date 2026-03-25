import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='MobileApp' className='flex flex-col justify-center items-center md:m-10 mb-7 gap-10'>
      <p className='text-center md:text-3xl text-[20px]' >For better Experience Download <br /><b>Tomato app</b></p>
      <div className="downloadApp flex gap-5 scale-85 md:scale-100 ">
        <a href=""><img className='w-[200px]  h-[65px] hover:scale-105 duration-200 ' src={assets.play_store} alt="" /></a>
        <a href=""><img className='w-[200px]  h-[65px] hover:scale-105 duration-200 ' src={assets.app_store} alt="" /></a>
      </div>
    </div>
  )
} 

export default AppDownload
