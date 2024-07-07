import React from 'react'
import { Link } from 'react-router-dom'
import cart from "../assets/cart.svg"
import logo from "../assets/logo.svg"
import vector from "../assets/notify.svg"

const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div className='flex gap-[3rem]'>
                <Link to="/" className='text-[#FFF078]'>Home</Link>
                <Link to="/" className='text-[#FFF078]'>Download App</Link>
                <Link to="/" className='text-[#FFF078]'>Exclusive Offer</Link>
            </div>
            <div>
                Search Bar
            </div>
            <div className='flex gap-8'>
                <div className='relative'>
                    <img src={cart} alt='cartImage' />
                    <h1 className='h-4 w-4 bg-[#FFF078] absolute top-[-7px] right-[-7px] px-1 leading-[.9rem] rounded-full font-semibold'>
                        2
                    </h1>
                </div>
                <div>
                    <img src={vector} alt='NotificationImage' />
                </div>
                <div>
                    <img src={cart} alt='profile' className='rounded-[50%]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar