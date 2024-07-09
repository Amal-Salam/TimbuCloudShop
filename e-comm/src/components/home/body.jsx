import Aside from '../home/aside';
import ProductCard from '../home/productCard';

 function Body (){
    return (
      <div
        id='body'
        className='w-[1080px] h-[1478px] flex-row justify-start items-start gap-6 inline-flex'
      >
        <Aside />
        <ProductCard/>
      </div>
    );
 }
 export default Body;