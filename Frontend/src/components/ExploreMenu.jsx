import React from 'react'
import { menu_list } from '../assets/assets'
import '../index.css'
import { useNavigate } from 'react-router-dom'

const ExploreMenu = ({ category, setCategory }) => {

  const navigate = useNavigate();

  return (
    <div id='Menu'>
      <div className="exploreMenu mt-13 flex flex-col gap-2.5">
        <h2 className='font-bold text-3xl'>Explore our menu</h2>
        <p className='md:font-normal font-medium md:max-w-[60%]  text-[#747474]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisty your craving and elevate your Dining experience, one delicious meal at a time.</p>
        <a href='#foodDisplay'>
          <div className="menulist flex gap-10 mt-5 max-w-[95%] mx-auto overflow-auto scrollbar-hide ">
            {menu_list.map((item) => {
              return (
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)} className='flex flex-col gap-0.5 items-center  cursor-pointer md:max-w-[7vw] min-w-[80px] '>
                  <img className={category === item.menu_name ? "categoryBorder" : ""} src={item.menu_image} alt="" />
                  <p className='text-[#747474] mt-2.5'>{item.menu_name}</p>
                </div>
              )
            })}
          </div>
        </a>
      </div>
      <hr className='w-[80%] mx-auto h-1 bg-[#e2e2e2] border-0 rounded-md mt-10' />
    </div>
  )
}

export default ExploreMenu
