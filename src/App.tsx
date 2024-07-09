import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import CheckOut from './pages/CheckOut';
import Main from './pages/Main';

interface Food {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
}

export interface CartItem extends Food {
  quantity: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (food: Food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === food.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...food, quantity: 1 }];
      }
    });
  };

  console.log(cartItems)

  return (
    <div className="App bg-[#DA291C]">
        <Navbar count = {cartItems.length}/>
        <Hero />
        <Routes>
          <Route path='/' element={<Main handleAddToCart={handleAddToCart} />} />
          <Route path='/checkout' element={<CheckOut cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
    </div>
  );
};

export default App;
