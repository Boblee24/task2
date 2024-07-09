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
            {foodData.foods.map((food: Food) => (
                <div key={food.id} className="my-[2rem] ">
                    <img src={imageFunc(food.image)} alt={food.name} className="food-image" />
                    <h2 className="text-[2rem] text-[#FFF078]">{food.name}</h2>
                    <p className="text-[#FFF078]">{food.description}</p>
                    <p className="text-[#FFF078] font-semibold my-3 text-[1.2rem]">₦{food.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(food)} className="bg-[#FFF078] flex items-center m-auto rounded-lg py-1 px-2">
                        <h3 className='text-[#FF0000]'>Buy Now</h3>
                        <img src={cart} className='fill-[red]' alt="" />
                    </button>
                    <hr className='my-4' />
                </div>
            ))}
            <div className="bg-black rounded-lg flex flex-col md:flex-row items-center md:justify-between ">
                {
                    foodData.sides.map((food: Food) => (
                        <div className="relative">
                            <div key={food.id} className="my-[2rem]">
                                <img src={imageFunc(food.image)} alt={food.name} className="w-5/6" />
                                <h2 className="text-[2rem] text-[#FFF078]">{food.name}</h2>
                                <p className="text-[#FFF078] font-semibold my-3 text-[1.2rem]">₦{food.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => handleAddToCart(food)} className="bg-[#FFF078] absolute top-[8rem] left-[10.5rem] flex items-center md:left-[9rem] rounded-lg py-1 px-2 w-[110px]">
                                <h3 className='text-[#FF0000]'>Buy Now</h3>
                                <img src={cart} className='fill-[red]' alt="" />
                            </button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Main