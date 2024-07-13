import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import CheckOut from './pages/CheckOut';
import Main from './pages/Main';
import { useQuery } from '@tanstack/react-query';
import ProductDisplay from './pages/ProductDisplay';
import Footer from './components/Footer';
import Deal from './components/Deal';

export interface Food {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
  photos: any;
  current_price: any
}

export interface CartItem extends Food {
  quantity: number;
}


const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(3);

  const fetchProducts = async (page: number) => {
    const response = await fetch(`products?organization_id=2e9285e1bbce4b55afe9b33258add851&reverse_sort=false&page=${page}&size=10&Appid=DG9K9DJ3ZWC3JMH&Apikey=b6579fba3b414aee8bfb7bfb9bd2c35b20240712150626781279`);
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['food', currentPage],
    queryFn: () => fetchProducts(currentPage),
  });

  const [productItems, setProductItems] = useState<Food[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  

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


  useEffect(() => {
    setProductItems(data?.items)
  }, [data])

  console.log(data?.items)

  if (error) return <div>Something went wrong</div>

  return (
    <div className="App bg-[#DA291C] w-[1440px] m-auto">
      <Navbar count={cartItems.length} />
      <Hero />
      <Routes>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <Route
              path="/"
              element={
                <Main
                  productItems={productItems}
                  handleAddToCart={handleAddToCart}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              }
            />
            <Route path="/:name" element={<ProductDisplay productItems={productItems} handleAddToCart={handleAddToCart} />} />
          </>
        )}
        <Route path='/checkout' element={<CheckOut cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`bg-[#fff078] flex items-center rounded-lg py-1 px-4 md:my-4 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ffd700]'} transition duration-300`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === 3}
          className={`bg-[#fff078] flex items-center rounded-lg py-1 px-4 md:my-4 ${currentPage === 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ffd700]'} transition duration-300`}
        >
          Next
        </button>
      </div>
      <Deal />
      <Footer />
    </div>
  );
};

export default App;
