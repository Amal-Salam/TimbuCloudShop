// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
 import '../../index.css'
const Header = () => {
  return (
    <div className='w-[1280px] h-[76px] px-[100px] py-6 justify-between items-center inline-flex'>
      <div className='h-7 justify-between items-center flex '>
        <NavLink
          to=''
          className="text-zinc-900 text-lg font-bold font-['Lato']">
          TimbuCloudShop
        </NavLink>
       
      </div>
      <div className='justify-start items-center gap-[18px] flex'>
        

        <NavLink to='' className='w-6 h-6 relative'>
          <FaShoppingCart className='text-xl cursor-pointer' />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
