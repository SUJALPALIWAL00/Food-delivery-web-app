import React, { useState , useEffect, useContext} from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Verify from './pages/Verify'
import Footer from './components/Footer'
import LogInPopup from './components/LogInPopup'
import { useNavigate } from 'react-router-dom'
import {StoreContext} from './context/StoreContext'
import MyOrders from './pages/MyOrders'

const App = () => {
  const [showLogIn, setShowLogIn] = useState(false)
  const {showDropDown , setShowDropDown } = useContext(StoreContext);
  

  // To Navigate to Home on reloadApp 
  const navigate = useNavigate();

   

  return (
    <>
    {/* Show login popup while sign in or log in */}
    {showLogIn? <LogInPopup setShowLogIn={setShowLogIn} /> : <></>}
      <div className="root" onClick={()=>{if (showDropDown==true) {setShowDropDown(false)}}}>
        <div className='app md:w-[80%] w-[90%] mx-auto ' >
        <Navbar setShowLogIn={setShowLogIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
        <Footer />
      </div>
      </div>
    </>
  )
}

export default App