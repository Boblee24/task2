import hero from "../assets/hero1.png"

const Hero = () => {
    return (
        <div className='flex px-8 my-[2rem] md:pt-[4rem] py-[3rem]'>
            <div className='flex-1'>
                <h1 className='text-[#FFF078] font-bold text-[1.1rem] md:text-[2.5rem] md:py-9'>Our Exclusive Menu is Waiting For You</h1>
                <h4 className='text-[#FFF078] text-[.7rem] md:text-[1.2rem]'>You Deserve a Break Today. Feed your child with our amazing meals.</h4>
                <button className='text-[#DA291C] bg-white px-4 py-1 mt-4 rounded shadow-sm shadow-black md:my-5'>Let's Find Out</button>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <img src={hero} className=' h-auto w-2/3' alt="Hero" />
            </div>
        </div>
    )
}

export default Hero