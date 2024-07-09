// import {products} from '../../products';

import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import { Link } from 'react-router-dom';
import { subtotalSelector } from '../../stores/cartSelector';

function ShoppingCart () {
     const carts = useSelector((store) => store.cart.items);
     const subtotal = useSelector(subtotalSelector);
     
    return (
      <div className='w-[1080px] h-[513px] justify-between mt-7 items-start inline-flex'>
        <div className='flex-col justify-start items-start inline-flex'>
          <div className='self-stretch px-3 py-2 bg-background_hero rounded-tl-2xl rounded-tr-2xl justify-start items-center gap-[79px] inline-flex'>
            <div className='h-[49px] pl-[90px] justify-between items-center flex'>
              <div className='h-[49px] justify-between items-center flex'>
                <div className='w-[253px] p-2.5 justify-center items-center gap-2.5 flex'>
                  <div className="text-stone-300 text-lg font-medium font-['Lato']">
                    Product Details
                  </div>
                </div>
                <div className='w-[120px] h-[49px] p-2 justify-start items-center gap-2.5 flex'>
                  <div className="text-stone-300 text-lg font-medium font-['Lato']">
                    Quantity
                  </div>
                </div>
                <div className='w-28 h-[49px] p-2 justify-start items-center gap-2.5 flex'>
                  <div className="text-stone-300 text-lg font-medium font-['Lato']">
                    Items Price
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' h-[448px] w-[660px] bg-white-700 origin-top-right border border-slate-700 flex-col justify-start items-start gap-0.5 flex'>
            {carts.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </div>
        </div>
        <div className='w-[300px] flex-col justify-start items-end inline-flex'>
          <div className='self-stretch p-3 bg-background_hero rounded-tl-2xl rounded-tr-2xl justify-center items-center gap-2.5 inline-flex'>
            <div className="text-white text-lg font-bold font-['Lato']">
              Cart Summary
            </div>
          </div>
          <div className='self-stretch h-[154px] p-3 bg-white border-l border-r border-b border-slate-700 flex-col justify-start items-center gap-2 flex'>
            <div className='self-stretch h-[72px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                  Subtotal
                </div>
                <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                   ${subtotal.toFixed(2)}
                </div>
              </div>
              <div className="self-stretch text-zinc-500 text-xs font-medium font-['Lato']">
                Delivery fees not included yet.
              </div>
            </div>
            <div className='self-stretch px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
              <div className="text-white text-lg font-bold font-['Lato']">
               <Link to="/checkout">Continue to checkout</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ShoppingCart;