// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
import { useSelector, 
  // useDispatch
 } from 'react-redux'; 
 import '../../index.css'
const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  // const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  // const handleOpenTabCart = () => {
  //   dispatch(toggleStatusTab());
  // };
  return (
    <div className='w-[1280px] h-[76px] px-[100px] py-6 justify-between items-center inline-flex'>
      <div className='h-7 justify-between items-center flex '>
        <NavLink
          to='/'
          className="text-zinc-900 text-lg font-bold font-['Lato']"
        >
          TimbuCloudShop
        </NavLink>
      </div>
      <div className='justify-start items-center gap-[18px] flex'>
        <NavLink to='/cart' className='w-6 h-6 relative'>
          <FaShoppingCart className='text-xl cursor-pointer' />
          <span
            className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center'
          >
            {totalQuantity}
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
