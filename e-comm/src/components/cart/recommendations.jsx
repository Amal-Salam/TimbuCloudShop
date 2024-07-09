// import chair1 from '../../assets/images/chair1.png';
import chair2 from '../../assets/images/chair2.png';
// import chair3 from '../../assets/images/chair3.png';
// import chair4 from '../../assets/images/chair4.png';
import chair5 from '../../assets/images/chair5.png';
import chair6 from '../../assets/images/chair6.png';
// import chair7 from '../../assets/images/chair7.png';
import chair8 from '../../assets/images/chair8.png';
import chair9 from '../../assets/images/chair9.png';
import chair10 from '../../assets/images/chair10.png';
import chair11 from '../../assets/images/chair11.png';
import chair12 from '../../assets/images/chair12.png';
import ClickableIcon from '../clickableIcon.jsx';
import { GiShoppingCart } from 'react-icons/gi';
// import { CiShoppingCart,CiShoppingBasket } from 'react-icons/ci';
function Recommend() {
  const handleIconClick = (isActive) => {
    console.log('Icon is now', isActive ? 'active' : 'inactive');
  };
  const products = [
    { img: chair6, name: 'Guest Chair', price: '$210.90' },
    { img: chair8, name: 'Reclining Chair', price: '$230.90' },
    { img: chair9, name: 'Gaming Chair', price: '$320.09' },
    { img: chair2, name: 'Task Chair', price: '$130.59' },
    { img: chair5, name: 'Ball Chair', price: '$185.92' },
    { img: chair10, name: 'Standing Chair', price: '$350.89' },
    { img: chair11, name: 'Kneeling Chair', price: '$370.59' },
    { img: chair12, name: 'Lounge Chair', price: '$400.00' },

    
  ];
  return (
    
    
    <div className='grid'>
      
      <div className=' mt-5 h-[750px] gap-4 grid-cols-4 grid-rows-2 ml-[90px] justify-start items-start '>
        {products.map((product, index) => (
          <div
            key={index}
            className='self-stretch justify-start items-center gap-4 inline-flex ml-2'
          >
            <div className='w-[258px] flex-col justify-start items-start gap-4 inline-flex'>
              <div className='w-[258px] h-[258px] relative bg-zinc-100 rounded-tl-2xl rounded-tr-2xl'>
                <img
                  className='w-[145px] h-[226px] left-[60px] top-[21px] absolute'
                  src={product.img}
                  alt={product.name}
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
                    {product.name}
                  </div>
                  <div className="self-stretch text-zinc-800 text-2xl font-medium font-['Lato']">
                    {product.price}
                  </div>
                </div>
                <div className='w-[50px] h-[50px] p-[13px] bg-yellow-600 rounded-full justify-center items-center flex'>
                  <div className='w-[50px] h-[30px] relative flex-col justify-start items-start flex '>
                    <GiShoppingCart className='w-8 h-6 fill-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
