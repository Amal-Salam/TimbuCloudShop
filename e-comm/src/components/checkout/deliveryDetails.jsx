 function DeliveryDetails(){
return (
  <div className="mx-[100px] my-[40px]"> 
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
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'/>
        
      </div>
      <div className='w-[345.52px] flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
          Last Name
        </div>
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'/>
          
        
      </div>
    </div>
    <div className='w-[715px] h-[82.22px] justify-start items-center gap-6 inline-flex'>
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
          Country
        </div>
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'/>
         
      
      </div>
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
          City
        </div>
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'/>
         
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
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex '/>
          
      </div>
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
          Address
        </div>
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'/>
          
      </div>
      <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex'>
        <div className="self-stretch text-zinc-900 text-sm font-medium font-['Lato'] leading-normal">
          Email Address
        </div>
        <input className='self-stretch h-[50px] px-3 py-[18px] bg-zinc-100 rounded-lg justify-start items-center gap-2.5 inline-flex'/>
          
      </div>
    </div>
  </div>
);
 }
 export default DeliveryDetails