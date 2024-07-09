// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import Header from '../components/home/header';

import Footer from '../components/home/footer';
import Recommend from '../components/cart/recommendations';
import ShoppingCart from '../components/cart/shoppingCart';

const Cart = () => {
  return (
    <div className='home-pg '>
      <Header />
      <ShoppingCart/>
      <div className=' mt-2 w-[1180px] h-[38px] justify-start  pb-2 px-[90px] items-center gap-[93px] inline-flex'>
        <div className="text-zinc-800 text-[20px] font-medium font-['Lato']">
          You may also like
        </div>
      </div>
      <Recommend />
      <Footer />
    </div>
  );
};

export default Cart;
