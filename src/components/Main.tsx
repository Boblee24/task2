import React from 'react'
import  foodData  from "../data.json"
import cart from "../assets/cart2.svg"

interface Food {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

const Main: React.FC = () => {
    const handleBuyNow = (foodName: string) => {
        console.log(`You have selected to buy ${foodName}`);
    };
    const imageFunc = (imageName : string) => {
        const image = require(`../assets/${imageName}`);
        return image;
      };
    return (
        <div>
            {foodData.foods.map((food: Food) => (
                <div key={food.id} className="food-item">
                    <img src={imageFunc(food.image)} alt={food.name} className="food-image" />
                    <h2 className="text-[2rem] text-[#FFF078]">{food.name}</h2>
                    <p className="text-[#FFF078]">{food.description}</p>
                    <p className="text-[#FFF078]">${food.price.toFixed(2)}</p>
                    <button onClick={() => handleBuyNow(food.name)} className="bg-[#FFF078] flex items-center rounded-lg py-1 px-2">
                        <h3 className='text-[#FF0000]'>Buy Now</h3>
                        <img src={cart} className='fill-[red]' alt="" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Main