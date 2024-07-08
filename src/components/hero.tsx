import hero from "../assets/hero1.png"

const Hero = () => {
    return (
        <div className='flex px-8'>
            <div className='flex-1'>
                <h1 className='text-[#FFF078] text-2xl'>Our Exclusive Menu is Waiting For You</h1>
                <h4 className='text-[#FFF078] text-sm'>You Deserve a Break Today. Feed your child with our amazing meals.</h4>
                <button className='text-[#DA291C] bg-white px-4 py-1 mt-4'>Let's Find Out</button>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <img src={hero} className=' h-auto' alt="Hero" />
            </div>
        </div>
    )
}

export default Hero