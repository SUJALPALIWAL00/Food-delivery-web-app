import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const List = ({url}) => {
  const [list, setList] = useState([])

// Function for fetching list items from the server
  const fetchData = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error is getting List items")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchData()
    if(response.data.success){
      toast.success("Food Item Removed")
    }
    else{
      toast.error("Cannot Removed Food Item ")
    }
    
  }


  return (
    <div>
      <div className="titles grid grid-cols-6 w-[70vw] mt-10 text-center mx-20 py-2 text-[#ff5722] bg-[#fff0ed] border-2 border-[#ff5722] rounded-xl">
        <b>Item</b>
        <b>Name</b>
        <b>Image</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      <div className="listItems ">
          {list.map((item, index)=>{
            return(
              <div className='item grid grid-cols-6 w-[70vw] text-center mx-20 py-2'>
                <p className='flex justify-center items-center font-medium'>{index + 1}</p>
                <p className='flex justify-center items-center text-[#747474]'>{item.name}</p>
                <p className='flex justify-center items-center '><img src={`${url}/images/` + item.image} alt="FoodImg" className='w-15 '/></p>
                <p className='flex justify-center items-center text-[#747474]'>{item.category}</p>
                <p className='flex justify-center items-center text-[#747474]'>{item.price}</p>
                <p className='flex justify-center items-center cursor-pointer ' onClick={()=>removeFood(item._id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default List
