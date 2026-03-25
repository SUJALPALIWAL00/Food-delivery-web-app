import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='my-13' id='foodDisplay'>
      <div className="foodList ">
        <h2 className='font-bold text-3xl'>Top dishes near you</h2>
      </div>
      <div className="fooditems grid md:grid-cols-4 grid-cols-1 gap-7 ">
        {food_list.map((item,index)=>{
          if(category==="all" || category===item.category){
            return <FoodItem id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
