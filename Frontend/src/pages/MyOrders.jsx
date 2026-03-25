import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import FoodItem from '../components/FoodItem'

const MyOrders = () => {
    const { backendurl, token } = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrders = async () => {
        const response = await axios.post(backendurl + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data)


    }

    useEffect(() => {
        fetchOrders()
    }, [token])

    return (
        <div>
            <div className="heading">
                <h2>My Orders</h2>
            </div>
            <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className="ordercard">
                            <p>
                                {order.items.map((item, index) => {
                                    if (index == order.items.length - 1) {
                                        return (item.name + " x " + item.quantity)
                                    }
                                    else {
                                        return (item.name + " x " + item.quantity + ", ")
                                    }
                                })}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
