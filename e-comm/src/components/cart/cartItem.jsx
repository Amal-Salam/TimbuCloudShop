import  { useState, useEffect } from 'react';
import { products } from '../../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../stores/cart';
import PropTypes from 'prop-types';

const CartItem = (props) => {
    CartItem.propTypes = {
      data: PropTypes.shape({
        productId: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
       }).isRequired
     
    };
  const { productId, quantity } = props.data;
   // eslint-disable-next-line no-unused-vars
   const [detail, setDetail] = useState([]);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className='w-[650px] p-6 bg-white justify-between items-center inline-flex'>
      <div className='justify-start items-center gap-3.5 flex'>
        <img className='w-[55px] h-[86px]' src={detail.img} />
        <div className='w-[126px] flex-col justify-center items-start gap-1 inline-flex'>
          <div className="self-stretch text-zinc-800 text-2xl font-medium font-['Lato']">
            {detail.name}
          </div>
        </div>
      </div>
      <div className='justify-start items-start flex'>
        <div className='w-10 h-10   bg-orange-200 rounded-tr-sm rounded-br-sm justify-center items-center flex'>
          <div
            className=' w-3 h-6 text-lg flex-col justify-start items-start flex'
            onClick={handleMinusQuantity}
          >
            −
          </div>
        </div>
        <div className='w-10 h-10 pl-[15px] pr-3.5 py-[9px] bg-stone-300 justify-center items-center flex'>
          <div className="text-zinc-900  font-medium font-['Lato']">
            {quantity}
          </div>
        </div>
        <div className='w-10 h-10 px-3.5 py-2 bg-yellow-600 rounded-tr-sm rounded-br-sm justify-center items-center flex'>
          <div
            className='w-3 h-6 relative flex-col justify-start items-start flex'
            onClick={handlePlusQuantity}
          >
            +
          </div>
        </div>
      </div>
      <div className="w-28 text-zinc-800 text-2xl font-medium font-['Lato']">
        ${detail.price * quantity}
      </div>
      {/* <div className='w-6 h-6 divide-y bg-background_hero' /> */}
    </div>
  );
};

export default CartItem;
