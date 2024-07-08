import React from 'react'
import logo from "../assets/logo.svg"
import vector from "../assets/vector.svg"
import play from "../assets/play.svg"
import apple from "../assets/apple.svg"

const Footer = () => {
    return (
        <div className='w-full p-[1rem]'>
            <div className='flex justify-center items-center m-[1.5rem]'>
                <img src={vector} alt="" />
            </div>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-[white] text-[1rem] mb-3'>Quick Links</h4>
                    <a href='/' className='text-[.9rem] block mb-2'>Know More about us</a>
                    <a href='/' className='text-[.9rem] block mb-2'>Visit Our store</a>
                    <a href='/' className='text-[.9rem] block mb-2'>Locate Store</a>
                </div>
                <div>
                    <h4 className='text-[white] mb-3'>Site Links</h4>
                    <a href='/' className='text-[.9rem] block mb-2'>Privacy Policy</a>
                    <a href='/' className='text-[.9rem] block mb-2'>Shopping Details</a>
                    <a href='/' className='text-[.9rem] block mb-2'>Offers Coupons</a>
                </div>
                <div>
                    <h4 className='text-[white] mb-4 '>Download Mobile App</h4>
                    <div className='flex bg-white mb-[1rem] rounded-md p-1 w-[120px] gap-1'>
                        <img src={play} alt="downloadLogo" />
                        <p className='leading-[15px] text-[.9rem]'>Get it on Playstore</p>
                    </div>
                    <div className='flex bg-white rounded-md p-1 w-[105px] gap-1'>
                        <img src={apple} alt="downloadLogo" />
                        <p className='leading-[15px] text-[.9rem]'>Available on Appstore</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-[2rem]'>
                <img src={logo} alt="logo" />
                <div>
                    <p className='text-[.9rem]'>If you need any help, contact self-help  on +2349139965381</p>
                    <h4 className='text-center'>Ikeja, Lagos</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer