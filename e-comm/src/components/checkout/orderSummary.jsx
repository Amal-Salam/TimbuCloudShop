
function OrderSummary (){
    return (
      <div className='w-[347px] h-[352px] flex-col justify-start items-end inline-flex'>
        <div className='self-stretch px-3 py-[18px] bg-slate-700 rounded-tl-2xl rounded-tr-2xl justify-center items-center gap-2.5 inline-flex'>
          <div className="text-white text-lg font-bold font-['Lato']">
            Order Summary
          </div>
        </div>
        <div className='self-stretch h-[294px] p-3 bg-white border-l border-r border-b border-slate-700 flex-col justify-start items-center gap-2 flex'>
          <div className='self-stretch h-[46px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                Subtotal
              </div>
              <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                $ 100.09
              </div>
            </div>
          </div>
          <div className='self-stretch h-[46px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                Delivery
              </div>
              <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                $ 300.08
              </div>
            </div>
          </div>
          <div className='self-stretch h-[46px] py-3 border-b border-stone-300 flex-col justify-start items-start gap-3 flex'>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-zinc-900 text-lg font-bold font-['Lato']">
                Total
              </div>
              <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                $ 400.17
              </div>
            </div>
          </div>
          <div className='self-stretch px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
            <div className="text-white text-lg font-bold font-['Lato']">
              Payment
            </div>
          </div>
          <div className='self-stretch px-6 py-3.5 bg-zinc-400 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
            <div className="text-white text-lg font-bold font-['Lato']">
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
}
export default OrderSummary