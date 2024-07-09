import foodData from "../data.json"
import cart from "../assets/cart2.svg"

interface Food {
    id: number;
    name: string;
    image: string;
    price: number;
    // quantity : number;
    description?: string;
}
interface MainProps {
    handleAddToCart: (food: Food) => void;
}

const Main: React.FC<MainProps> = ({ handleAddToCart }) => {
    const imageFunc = (imageName: string) => {
        const image = require(`../assets/${imageName}`);
        return image;
    };
    return (
        <div className='px-[2rem] w-full'>
            <div className="flex items-center flex-col justify-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {foodData.foods.map((food: Food) => (
                    <div>
                        <div key={food.id} className="my-[2rem] flex flex-col px-10">
                            <img src={imageFunc(food.image)} alt={food.name} className="w-2/3 m-auto md:m-0" />
                            <h2 className="text-[1.3rem] md:text-[1.5rem] py-3 leading-8 text-[#FFF078]">{food.name}</h2>
                            <p className="text-[#FFF078] text-[.9rem] md:text-[.9rem] md:h-[150px]">{food.description}</p>
                            <p className="text-[#FFF078] font-semibold my-3 text-[1.2rem]">₦{food.price.toFixed(2)}</p>
                            <button onClick={() => handleAddToCart(food)} className="bg-[#fff078] flex items-center m-auto rounded-lg py-1 px-2 md:my-4">
                                <h3 className='text-[#FF0000]'>Buy Now</h3>
                                <img src={cart} className='fill-[red]' alt="" />
                            </button>
                        </div>
                        <hr className='my-4' />
                    </div>
                ))}
            </div>
            </div>
            

            <div className="bg-black rounded-lg md:h-[230px] md:relative md:mt-[7rem] ">
                <h1 className="text-[#fff078] pt-2 text-[1.2rem] text-center md:flex items-end justify-center h-full md:text-[1rem]">
                    Sides to go well with your meal!
                </h1>

                <div className=" flex flex-col md:flex-row items-center md:justify-around md:absolute w-full top-[-6rem]">
                    {
                        foodData.sides.map((food: Food) => (
                            <div className="relative ml-7">
                                <div key={food.id} className="my-[2rem]">
                                    <div>
                                        <img src={imageFunc(food.image)} alt={food.name} className="w-full" />
                                        <div className="absolute top-[7rem] left-[7rem] md:top-[7rem] md:left-[6rem]">
                                            <button onClick={() => handleAddToCart(food)} className="bg-[#FFF078] flex items-center  rounded-lg py-1 px-2 w-[110px] ">
                                                <h3 className='text-[#FF0000]'>Buy Now</h3>
                                                <img src={cart} className='fill-[red]' alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <h2 className="text-[1.3rem] text-[#FFF078]">{food.name}</h2>
                                    <p className="text-[#FFF078] font-semibold md:text-[1rem] my-2 text-[1.2rem]">₦{food.price.toFixed(2)}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Main