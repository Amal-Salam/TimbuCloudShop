import '../../index.css';

function Aside (){
    return (
      <div className='w-[258px] h-[1150px]  bg-white rounded-2xl border border-stone-300 flex-col justify-center items-center gap-6 inline-flex'>
        <div className='w-[210px] h-[1126px] flex-col justify-start items-start gap-6 flex'>
          <div className='self-stretch h-[1126px] flex-col justify-start items-start gap-2 flex'>
            <div className='w-[210px] h-[285px] py-2 border-b border-slate-700 flex-col justify-start items-start gap-3 flex'>
              <div className='w-[210px] h-[29px] justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-2xl font-medium font-['Lato']">
                  Category
                </div>
                <div className='w-3 h-6 relative origin-top-left rotate-90' />
              </div>
              <div className='self-stretch h-[220px] flex-col justify-center items-start gap-2 flex'>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Living Room</label>
                  </div>
                </div>
                <div className='p-1 justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Bedroom </label>
                  </div>
                </div>
                <div className='self-stretch p-1 justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> Dining Room</label>
                  </div>
                </div>
                <div className='p-1 justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Office </label>
                  </div>
                </div>
                <div className='p-1 justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> Kitchen</label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> Outdoor</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch h-[209px] py-2 border-b border-slate-700 flex-col justify-start items-start gap-3 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-2xl font-medium font-['Lato']">
                  Martial
                </div>
                <div className='w-3 h-6 relative origin-top-left rotate-90' />
              </div>
              <div className='self-stretch h-36 flex-col justify-center items-start gap-2 flex'>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> Loveseats</label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Three-Seater </label>
                  </div>
                </div>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Sectionals </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> Sleeper Sofas</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch h-[361px] py-2 border-b border-slate-700 flex-col justify-start items-start gap-3 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-2xl font-medium font-['Lato']">
                  Type
                </div>
                <div className='w-3 h-6 relative origin-top-left rotate-90' />
              </div>
              <div className='self-stretch h-[296px] flex-col justify-center items-start gap-2 flex'>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Sofas </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Armchairs </label>
                  </div>
                </div>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Coffee Table </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> End Table</label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> TV Stands</label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Bookshelves </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Cabinets </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Ottomans </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch h-[247px] py-2 flex-col justify-start items-start gap-3 flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className="text-zinc-900 text-2xl font-medium font-['Lato']">
                  Colour
                </div>
                <div className='w-3 h-6 relative origin-top-left rotate-90' />
              </div>
              <div className='self-stretch h-[182px] flex-col justify-center items-start gap-2 flex'>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'> Red</label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Blue </label>
                  </div>
                </div>
                <div className='self-stretch  justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Green </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Yellow </label>
                  </div>
                </div>
                <div className=' justify-start items-center gap-2 inline-flex'>
                  {/* <div className='w-[18px] h-[18px] relative' /> */}
                  <div className="text-zinc-800 text-lg font-medium font-['Lato']">
                    <input type='radio' className='w-[18px] h-[18px]' />
                    <label className='ml-3'>Black </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Aside;