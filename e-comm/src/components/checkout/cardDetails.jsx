import card from '../../assets/images/creditCard.png';
import { Link } from 'react-router-dom';
function CardDetails(){
    return (
      <div className='mx-[100px] my-[60px]'>
        <div className='w-[715px] h-[581px] bg-white flex-col justify-start items-center gap-3 inline-flex'>
          <div className='w-[715px] h-[70px]  bg-background_hero rounded-tl-2xl rounded-tr-2xl justify-between items-center inline-flex'>
            <div className="text-stone-300 text-color mx-8 text-lg font-medium font-['Lato']">
              Card Details
            </div>
          </div>
{/*           <img className='w-[274px] h-[180px]' src={card} /> */}
          <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex'>
            <div className='self-stretch grow shrink basis-0 flex-col justify-between items-start flex'>
              <div className='self-stretch p-3 rounded-lg border border-stone-300 justify-start items-center gap-2.5 inline-flex'>
                  <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Card Number
            </div>
                <input className="text-neutral-600 text-xs font-normal font-['lato']" />
                
              </div>
              <div className='self-stretch p-3 rounded-lg border border-stone-300 justify-start items-center gap-2.5 inline-flex'>
                  <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              Cardholder Name
            </div>
                <input className="text-neutral-600 text-xs font-normal font-['lato']"/>
                 
              </div>
              <div className='self-stretch justify-start items-center gap-3 inline-flex'>
                <div className='grow shrink basis-0 h-[39px] p-3 rounded-lg border border-stone-300 justify-start items-center gap-2.5 flex'>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
              MM/YY
            </div>
                  <input className="text-neutral-600 text-xs font-normal font-['lato']" />
                    
                </div>
                <div className='grow shrink basis-0 h-[39px] p-3 rounded-lg border border-stone-300 justify-start items-center gap-2.5 flex'>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
             CVV
            </div>
                  <input className="text-neutral-600 text-xs font-normal font-['lato']" />
                    
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
}
export default CardDetails
