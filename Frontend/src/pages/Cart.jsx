import { useContext } from 'react';
import React from 'react'
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const { cartItem, food_list, removeFromCart, addToCart, getTotalCartAmount, backendurl } = useContext(StoreContext);
  const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className={`cartTitle  grid-cols-6 gap-5 mt-20 text-center border-b-2 border-gray-200 pb-2 mb-5 font-medium text-gray-400 ${getTotalCartAmount()===0 ? "hidden": "grid"} `}>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Modify</p>
      </div>


      {food_list.map((item) => {
        if (cartItem[item._id] > 0) {
          return (
            <div className=' grid grid-cols-6 gap-5 text-center mb-2 '>
              <img src={backendurl+"/images/"+item.image} alt="" className='h-10 w-10 rounded-full mx-auto ' />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>₹{cartItem[item._id] * item.price}</p>
              <div className='flex items-center justify-center gap-1 bg-white rounded-full'>
                <img onClick={() => removeFromCart(item._id)} className='w-7 cursor-pointer ' src={assets.remove_icon_red} alt="" />
                <img onClick={() => addToCart(item._id)} className='w-7 cursor-pointer ' src={assets.add_icon_green} alt="" />
              </div>
            </div>
          )
        }
      })}


      {/* Empty cart text */}
      <div className={`emptyCart ${getTotalCartAmount()===0 ? "block": "hidden"}  my-30 md:my-39 text-center font-medium text-3xl text-gray-400 `}>
        <p >Your cart is Empty <br /><span className='text-[24px] md:text-3xl'>Add Some items to place order</span></p>
      </div>

      {/* When have a item in cart */}
      <div className={`cartBottom mb-20 flex flex-col-reverse md:flex-row justify-between md:mt-10 ${getTotalCartAmount()===0 ? "hidden": "block"} `}>
        <div className="left md:w-[40%] w-[80%] flex flex-col gap-3 ">
          <h2 className='font-bold text-2xl mb-5'>Cart Total</h2>

          <p className='font-medium text-gray-400'>Get free delivery on order over ₹999</p>
          <div className="SubTotal flex justify-between border-b border-gray-200 font-medium text-gray-400  ">
            <p>Sub Total</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className="delCharges flex justify-between border-b border-gray-200 font-medium text-gray-400  ">
            <p>Delivery Charges </p>
            <p>{`${getTotalCartAmount()>999 ? "Free" : "₹40"}`}</p>
          </div>
          <div className="total flex justify-between border-b border-gray-200 font-bold text-gray-600   ">
            <p>Total</p>
            <p>₹{getTotalCartAmount() + (getTotalCartAmount()>999 ? 0 : 40)}</p>
          </div>
          <button className='bg-[#FF6347] w-fit py-2 px-7 rounded mt-3 text-white cursor-pointer' onClick={()=>navigate('/placeorder')} >Proceed to Checkout</button>

        </div>

        <div className="right my-10 ">
          <p className='font-medium' >If you have a promo code, Enter it here</p>
          <div className='promoCode flex'>
            <input type="text" placeholder='promo code' className='bg-gray-200 rounded-tl rounded-bl py-2 px-2 md:pr-35 text-[14px] ' />
            <button type='submit' className='text-white text-[14px] cursor-pointer bg-black py-2 md:px-15 px-12 rounded '>Submit</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart
