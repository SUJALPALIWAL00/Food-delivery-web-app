import React from 'react'
import '../index.css'

const Header = () => {
  
  return (
    <div>
      <div className="header bg-[url('header_img.png')] bg-cover bg-center bg-no-repeat  md:mt-13 mt-8 md:h-[60vh] h-[23vh] rounded-lg relative "> 
        <div className="headercontent flex flex-col md:gap-5 gap-2 absolute md:left-2.5 md:bottom-10 left-3  bottom-3 items-start md:pl-10 pl-2 max-w-[60%] fade-in">
          <h2 className=' md:text-6xl md:font-medium font-serif text-white max-w-[80%]'>Order your favourite food here</h2>
          <p className='hidden md:block text-white font-normal'>Freshly prepared with quality ingredients — delivered hot to your door. Enjoy food the way it should be.</p>
          <a href="#Menu"><button className='bg-white text-[#747474] text-sm md:text-[16px] rounded-full px-4 py-2 cursor-pointer hover:opacity-80 duration-300' >View Menu</button></a>
        </div>
      </div>
    </div>
  )
}

export default Header
