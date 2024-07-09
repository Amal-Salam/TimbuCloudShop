// eslint-disable-next-line no-unused-vars
import React from 'react';
//  import { products } from '../../products';
import { GiShoppingCart } from 'react-icons/gi';
import ClickableIcon from '../clickableIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../stores/cart';
import PropTypes from 'prop-types';

const ProductDisplay=(props)=> {
 ProductDisplay.propTypes = {
   data: PropTypes.shape({
     id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
       .isRequired,
     img: PropTypes.string.isRequired,
   }).isRequired,
   className:PropTypes.string.isRequired,
 };
   const carts = useSelector((store) => store.cart.items);
     
     const { id, name, price, img } = props.data;
     
   console.log('carts:',carts);
   const dispatch = useDispatch();
   const handleAddToCart = () => {
     dispatch(
       addToCart({
      
         productId: id,
         quantity: 1,
       })
     );
   };
  const handleIconClick = (isActive) => {
    console.log('Icon is now', isActive ? 'active' : 'inactive');
  };
 
  return (
    <div
      className='self-stretch justify-start items-center gap-4 inline-flex ml-2'
     
    >
      
      <div className='w-[258px] flex-col justify-start items-start gap-4 inline-flex'>
        <div className='w-[258px] h-[258px] relative bg-zinc-100 rounded-tl-2xl rounded-tr-2xl'>
          <img
            className='w-[145px] h-[226px] left-[60px] top-[21px] absolute'
            src={img}
            alt={name}
          />

          <div className='w-[212px] left-[23px] top-[15px] absolute justify-between items-center inline-flex'>
            <div className='w-[30px] h-[30px] p-[3px] bg-white rounded-full justify-center items-center flex'>
              <ClickableIcon type='heart' onClick={handleIconClick} />
            </div>
            <div className='w-[30px] h-[30px] p-1.5 bg-white rounded-[200px] justify-center items-center flex'>
              <ClickableIcon type='star' onClick={handleIconClick} />
            </div>
          </div>
        </div>
        <div className='self-stretch justify-between items-center inline-flex'>
          <div className='w-[171px] flex-col justify-start items-start gap-1 mb-2 inline-flex'>
            <div className="self-stretch text-zinc-800 text-2xl font-medium font-['Lato']">
              {name}
            </div>
            <div className="self-stretch text-zinc-800 text-2xl font-medium font-['Lato']">
              {price}
            </div>
          </div>
          <div className='w-[50px] h-[50px] p-[13px] bg-yellow-600 rounded-full justify-center items-center flex'>
            <div className='w-[50px] h-[30px] relative flex-col justify-start items-start flex '>
              <GiShoppingCart
                className='w-8 h-6 fill-white'
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
 }

export default ProductDisplay;
