// eslint-disable-next-line no-unused-vars
import React from 'react';
import { products } from '../../products';
import ProductDisplay from '../home/productDisplay';

const ProductCard = () => {
  return (
    <div>
      <div className='grid'>
        <div className='w-[806px] h-[1416px]  gap-4 grid-cols-3 grid-rows-3 justify-start items-start '>
          
          {products.map((product, index) => (
            <ProductDisplay
              key={index}
              data={product}
            />
          ))}
         
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard




 