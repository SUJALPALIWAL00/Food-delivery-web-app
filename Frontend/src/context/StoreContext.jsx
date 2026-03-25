import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [token, setToken] = useState("")
    const [showDropDown, setShowDropDown] = useState(false)
    const [cartItem, setCartItem] = useState({})
    const backendurl = "http://localhost:4000"
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(backendurl + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(backendurl + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }


    // Fx for getting food data for food cards from the backend
    const fetchFoodItem = async () => {
        const respone = await axios.get(backendurl + "/api/food/list")
        setFoodList(respone.data.data)
    }


    // fx for loading user's card items when reloaded/relogin if added to cart before
    const loadCartData = async (token) => {
        const response = await axios.post(backendurl + "/api/cart/get", {}, { headers: { token } })
        setCartItem(response.data.cartData)
    }

    // To remain loggedin when page getting reloaded
    useEffect(() => {
        async function loadData() {
            await fetchFoodItem()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                loadCartData(localStorage.getItem("token"))   //for loading user's cart data when user is logged in
            }
        }
        loadData()
    }, [])

    // Fx to calculate total amount in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const key in cartItem) {
            if (cartItem[key] > 0) {
                const itemInfo = food_list.find((product) => product._id === key);

                if (itemInfo) {
                    totalAmount += cartItem[key] * itemInfo.price;
                }
            }
        }

        return totalAmount;
    };


    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        backendurl,
        showDropDown,
        setShowDropDown
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider