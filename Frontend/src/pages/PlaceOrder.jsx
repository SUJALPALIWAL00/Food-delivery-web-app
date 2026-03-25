import { Form } from 'react-router-dom'
import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, backendurl } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const placeOrder = async (e) => {
    e.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item.id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItem[item.id];
        orderItems.push(itemInfo);
        
      }
    })
    

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 40
    }
    let response = await axios.post(`${backendurl}/api/order/place`, orderData, { headers: { token } })
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);

    } else {
      alert('Error placing order. Please try again.');
    }
  }

  return (
    <div className='placeOrder mt-20 mb-30 flex flex-col md:flex-row justify-between'>
      <form action="" className='w-full flex justify-between' onSubmit={placeOrder}>
        <div className="left md:w-[34%]">
          <p className='text-3xl font-bold mb-7'>Delivery Information</p>

          <div className="inputs flex flex-col gap-3">
            <div className="multiField flex gap-2">
              <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstname} placeholder='First name' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
              <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastname} placeholder='Last name' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
            </div>
            <input required type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' className='border border-gray-300 py-1 pl-1 w-[348px] md:w-[387px]' />
            <input required type="text" name='address' onChange={onChangeHandler} value={data.address} placeholder='Address' className='border border-gray-300 py-1 pl-1 w-[348px] md:w-[387px]' />

            <div className="multiField flex gap-2">
              <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
              <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
            </div>

            <div className="multiField flex gap-2">
              <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
              <input required type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='border border-gray-300 py-1 pl-1 w-[170px] md:w-[200px]' />
            </div>
            <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone no.' className='border border-gray-300 py-1 pl-1 w-[348px] md:w-[387px]' />
          </div>


        </div>

        <div className="right md:w-[30%] w-[95%] mt-15 md:mt-0">
          <div className="flex flex-col gap-3">
            <h2 className='font-bold text-2xl mb-5 '>Cart Total</h2>
            <div className="SubTotal flex justify-between border-b border-gray-200 font-medium text-gray-400  ">
              <p>Sub Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="delCharges flex justify-between border-b border-gray-200 font-medium text-gray-400  ">
              <p>Delivery Charges </p>
              <p>₹40</p>
            </div>
            <div className="total flex justify-between border-b border-gray-200 font-bold text-gray-600   ">
              <p>Total</p>
              <p>₹{getTotalCartAmount() + 40}</p>
            </div>
            <button type='submit' className='bg-[#FF6347] w-fit py-2 px-7 rounded mt-3 text-white cursor-pointer' >Proceed to Payment</button>

          </div>
        </div>
      </form>
    </div>

  )
}

export default PlaceOrder
