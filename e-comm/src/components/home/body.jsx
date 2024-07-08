import Aside from '../home/aside';
import ProductDisplay from '../home/productDisplay';

 function Body (){
    return (
        
      <div 
      className='w-[1080px] h-[1478px] flex-row justify-start items-start gap-6 inline-flex'
      >
        
        <Aside />
        <ProductDisplay />
      </div>
    );
 }
 export default Body;