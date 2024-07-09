import { useSelector } from 'react-redux';
import { subtotalSelector } from '../../stores/cartSelector';
import { Link } from 'react-router-dom';
function DeliveryDetails() {
  const subtotal = useSelector(subtotalSelector);
  
  const total = '$'+`${subtotal > 0 ? subtotal.toFixed(1) + 50 : 0}`;

  return (
    <div className='w-[730px] h-[513px] justify-between mt-7 items-start inline-flex'>
      <div className='ml-[100px] my-[40px]'>
        <div className='w-[715px] h-[70px]  bg-background_hero rounded-tl-2xl rounded-tr-2xl justify-between items-center inline-flex'>
          <div className="text-stone-300 mx-8  text-color text-lg font-medium font-['Lato']">
            Delivery Options
          </div>
        </div>
        <div className='w-[715px] h-[82.34px] my-5 justify-start items-center gap-6 inline-flex'>
          <div className='w-[345.52px]  flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              First Name
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
          <div className='w-[345.52px] flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Last Name
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
        </div>
        <div className='w-[715px] h-[82.22px] justify-start items-center gap-6 inline-flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Country
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              City
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Zip code
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
        </div>
        <div className='w-[715px] h-[82.22px] justify-start items-center gap-6 inline-flex'>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Steet
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex ' />
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Address
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
          <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
            <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Email Address
            </div>
            <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
          </div>
        </div>
      </div>

      <div className='w-[347px] h-[372px] bg-white-300 ml-6 mt-9'>
        <div className=' w-[337px] px-3 py-[18px] bg-background_hero rounded-tl-2xl rounded-tr-2xl justify-center items-center gap-2.5 inline-flex'>
          <div className="text-white text-lg font-bold font-['Lato']">
            Order Summary
          </div>
        </div>
        <div className='w h-[304px] p-3 bg-white border-l border-r border-b border-slate-700 flex-col justify-start items-center gap-2 flex'>
          <div className='self-stretch h-[46px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                Subtotal
              </div>
              <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                ${subtotal.toFixed(2)}
              </div>
            </div>
          </div>
          <div className='self-stretch h-[46px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                Delivery
              </div>
              <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                $ 50
              </div>
            </div>
          </div>
          <div className='self-stretch h-[46px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                Total
              </div>
              <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                {/* ${subtotal + 50} */}
                {total}
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
            <Link to ="/"><div className="text-white text-lg font-bold font-['Lato']">
              Payment
            </div>
            </Link>
          </div>
          <div className='self-stretch px-6 py-3.5 mb-2 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
           <Link to ='/'><div className="text-white text-lg font-bold font-['Lato']">
              Cancel
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeliveryDetails;
