import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,image,price,description,category}) => {
  const {cartItem, addToCart, removeFromCart, backendurl} = useContext(StoreContext)
  return (
    <div>
      <div className="container mt-5 rounded-2xl shadow-lg">
        <div className="foodimg relative">
            <img src={backendurl+"/images/"+image} className='rounded-t-2xl' alt="" />
            {!cartItem[id]
                ?<img onClick={()=>addToCart(id)} className='absolute bottom-[15px] right-[15px] w-8' src={assets.add_icon_white} />
                :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-1 bg-white rounded-full p-0.5'>
                  <img onClick={()=>removeFromCart(id)} className='w-8' src={assets.remove_icon_red} alt="" />
                  <p>{cartItem[id]}</p>
                  <img onClick={()=>addToCart(id)} className='w-8' src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="foodinfo p-5 flex flex-col gap-2">
            <div className='flex justify-between items-center '> 
              <p className='font-semibold text-[18px]'>{name}</p>
              <img className='w-[70px] h-[15px]' src={assets.rating_starts} alt="" />
            </div>
            <p className='text-sm text-[#676767]'>{description}</p>
            <p className='text-[#FF6347] font-medium text-xl'>₹{price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
