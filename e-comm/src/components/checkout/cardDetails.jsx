

function CardDetails(){
    return (
      <div className='mx-[100px] my-[60px]'>
        <div className='w-[715px] h-[381px] bg-white flex-col justify-start items-center gap-3 inline-flex'>
          <div className='w-[715px] h-[70px]  bg-background_hero rounded-tl-2xl rounded-tr-2xl justify-between items-center inline-flex'>
            <div className="text-stone-300 text-color mx-8 text-lg font-medium font-['Lato']">
              Payment
            </div>
          </div>
          
          <div className='self-stretch grow shrink basis-0 flex-col  mt-8 justify-start items-start gap-6 flex'>
            <div className='self-stretch grow shrink basis-0 flex-col justify-between items-start flex'>
              <div className='self-stretch flex-col justify-start items-start gap-2 inline-flex'>
                <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
                  Card Number
                </div>
                <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
              </div>

              <div className='self-stretch mt[-100px] flex-col justify-start items-start gap-2 inline-flex'>
                <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
                  Cardholder Name
                </div>
                <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
              </div>
              <div className='w-[715px] h-[82.34px] my-5 justify-start items-center gap-6 inline-flex'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
                    MM/YY
                  </div>
                  <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
                </div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
                    CVV
                  </div>
                  <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex' />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default CardDetails
