import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='ContactUs' className='bg-[#323232] w-[100%] absolute left-0 text-white'>
            <div className='footerTop  flex flex-col md:flex-row justify-between md:gap-20 gap-10 py-15 md:pl-30 pl-5 '>
                <div className="footerLeft flex flex-col gap-2.5 md:w-[50%]">
                    <Link to="/"><img src={assets.logo} alt="" className='w-[130px]' /></Link>
                    <p >Freshly prepared with quality ingredients — delivered hot to your door. Enjoy food the way it should be.</p>
                    <div className="socialMediaIcons flex gap-2.5">
                        <a href=""  ><img src={assets.facebook_icon} alt="" /></a>
                        <a href=""  ><img src={assets.twitter_icon} alt="" /></a>
                        <a href=""  ><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="footerCenter md:w-[25%] ">
                    <h2 className='font-bold text-[18px]' >COMPANY</h2>
                    <ul className='mt-3' >
                        <li className='cursor-pointer hover:underline' >Home</li>
                        <li className='cursor-pointer hover:underline' >AboutUs</li>
                        <li className='cursor-pointer hover:underline' >Delivery</li>
                        <li className='cursor-pointer hover:underline' >Privacy Policy</li>
                    </ul>
                </div>
                <div className="footerRight md:w-[25%]">
                    <h2 className='font-bold text-[18px]' >GET IN TOUCH</h2>
                    <ul className='mt-3' >
                        <li className='cursor-pointer hover:underline' ><a target='_blank' href="tel:9876543210">+91-9876543210</a></li>
                        <li className='cursor-pointer hover:underline' ><a target='_blank' href="mailto:contact@tomato.com">contact@tomato.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerBottom bg-[#323232] w-full  flex flex-col justify-center items-center '>
                <hr className='w-[80%] h-px bg-[#e2e2e2] border-0 rounded-full' />
                <p className='py-5'>Copyright 2026 ©️ Tomato.com - All Rigth Reserved.</p>
            </div>
        </div>

    )
}

export default Footer
