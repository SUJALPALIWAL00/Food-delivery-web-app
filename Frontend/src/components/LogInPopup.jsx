import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useEffect } from 'react'
import { useContext } from 'react'
import axios from "axios"
import { StoreContext } from '../context/StoreContext'

const LogInPopup = ({ setShowLogIn }) => {

  // Checking state for showing the login pop-up
  const [currentState, setcurrentState] = useState("Log In")
  const {setToken, backendurl} = useContext(StoreContext)
  const [data, setData] = useState({
    name: "",
    password: "",
    email: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    let newUrl = backendurl
    if (currentState == "Log In") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      setToken(response.data.token)
      // Save token to the local storage
      localStorage.setItem("token", response.data.token)
      setShowLogIn(false)

    } else {
      alert(response.data.message)
    }
  }



  return (
    <div className='bg-[#000000c9] w-full  h-[100vh] fixed top-0 left-0 z-1 flex justify-center items-center  ' onClick={() => setShowLogIn(false)}>
      <div className="logInForm bg-white md:w-[23vw] w-[85vw] py-5 px-7  rounded-xl " onClick={(e) => e.stopPropagation()}>
        <div className="title flex justify-between">
          <p className='font-bold text-2xl'>{currentState}</p>
          <img className='w-4 h-4' onClick={() => setShowLogIn(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs mt-5">
          {/* Taking user credentails for login or register */}
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
            {currentState == "Log In" ? <></> : <input name="name" onChange={onChangeHandler} value={data.name} className='shadow rounded-sm pl-2 py-2 ' type="text" placeholder='Your Name' required />}
            <input name="email" onChange={onChangeHandler} value={data.email} className='shadow rounded-sm pl-2 py-2 ' type="email" placeholder='Your E-mail' required />
            <input name="password" onChange={onChangeHandler} value={data.password} className='shadow rounded-sm pl-2 py-2 ' type="password" placeholder='Password' required />
            <button type='submit' className='w-full py-2 rounded-sm mt-5 mb-2 bg-[#FF6347] text-white cursor-pointer'>{currentState == "Sign In" ? "Create account" : "Log In"}</button>

            <div className="Condition flex gap-2">
              <input type="checkbox" className='mb-5' required />
              <p className='text-[14px] font-light'>By continuing, I agree to the terms of use & privacy Policy.</p>
            </div>
            <div className="alredyExist mt-5">
              {currentState == "Log In" ? <p className='text-[14px] font-light' >Create a new account? <span onClick={() => setcurrentState("Sign In")} className='text-[#FF6347] font-medium cursor-pointer' >Click here</span></p> : <p className='text-[14px] font-light'>Already have an account? <span onClick={() => setcurrentState("Log In")} className='text-[#FF6347] font-medium cursor-pointer' >Login Here</span></p>}
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default LogInPopup
