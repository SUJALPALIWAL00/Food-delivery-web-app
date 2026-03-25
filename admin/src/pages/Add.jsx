import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';


const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("category", data.category)
    formData.append("price", data.price)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "",
        price: ""
      }
      )
      setImage(false);
      toast.success("Food Item added successfully")
    }
    else{
      toast.error("Error in adding food Item")
    }
    
    
  }

  return (
    <div>
      {/* Taking data for adding new item as a form */}
      <form action="" onSubmit={onSubmitHandler} className='flex flex-col gap-3 ml-10 mt-5 max-w-[60vw] md:max-w-[25vw] ' >
        <div className="uploadImg flex flex-col gap-1 ">
          <p className='text-[18px] px-1 py-2'>Upload Image</p>
          <label htmlFor="uploadImg">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-70 h-50 border border-dashed' alt="" />
          </label>
          <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id='uploadImg' name='image' className='hidden ' required />
        </div>

        <div className="productName flex flex-col gap-1  ">
          <p className='text-[18px] '>Product Name</p>
          <input className='border px-1 py-1' onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Name' required />
        </div>

        <div className="productDescription flex flex-col gap-1  ">
          <p className='text-[18px] px-1 py-2'>Product Description</p>
          <textarea className='border px-1 py-1' onChange={onChangeHandler} value={data.description} name="description" id="" rows="5" placeholder='Description' required ></textarea>
        </div>

        <div className="CategoryAndPrice flex gap-2 w-full ">
          <div className="category flex flex-col gap-1 w-[50%] ">
            <p className='text-[18px] px-1 py-2'>Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" id="" className='border px-1 md:py-1 py-1.5 bg-[#fff0ed]' required>
              <option value="" disabled selected >Select</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="price flex flex-col gap-1 w-[50%] ">
            <p className='text-[18px] px-1 py-2'>Price</p>
            <input type="number" onChange={onChangeHandler} value={data.price} className='border px-1 py-1 no-spinner' name="price" placeholder='Price' required />
          </div>
        </div>

        <div className="button  ">
          <button type="submit" className='text-white bg-black px-8 py-1 cursor-pointer '>Add</button>
        </div>

      </form>
    </div>
  )
}

export default Add
