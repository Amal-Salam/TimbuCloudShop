function Footer () {
 return (
   <div className='w-[1080px] h-[490px] flex-col justify-start items-start gap-6 inline-flex'>
     <div className='self-stretch py-[100px] border-b border-stone-300 justify-between items-end inline-flex'>
       <div className='w-[441px] flex-col justify-start items-start gap-3 inline-flex'>
         <div className="self-stretch text-black text-2xl font-bold font-['Lato'] leading-loose">
           TimbuCloudShop
         </div>
         <div className='self-stretch h-[132px] flex-col justify-start items-start gap-6 flex'>
           <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
             Discover a handpicked collection of furniture designed to elevate
             your digital life. Shop with confidence and enjoy a smooth,
             stress-free experience.
           </div>
           <div className='justify-start items-center gap-2 inline-flex'>
             <div className='w-6 h-6 relative' />
             <div className='w-6 h-6 relative' />
             <div className='w-6 h-6 relative' />
             <div className='w-6 h-6 relative' />
           </div>
         </div>
       </div>
       <div className='w-[532px] h-[238px] justify-between items-start flex'>
         <div className='flex-col justify-start items-start gap-2 inline-flex'>
           <div className="self-stretch text-zinc-900 text-lg font-medium font-['Lato']">
             Customer
           </div>
           <div className='flex-col justify-start items-start gap-2 flex'>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Our Account
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Track Your Order
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Customer Service
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Term Of Use
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Affiliate
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Help & Support
             </div>
           </div>
         </div>
         <div className='flex-col justify-start items-start gap-2 inline-flex'>
           <div className="self-stretch text-zinc-900 text-lg font-medium font-['Lato']">
             Information
           </div>
           <div className='self-stretch h-[136px] flex-col justify-start items-start gap-2 flex'>
             <div className="text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Delivery Information
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Privacy Policy
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Trams & Conditions
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Return
             </div>
           </div>
         </div>
         <div className='flex-col justify-start items-start gap-2 inline-flex'>
           <div className="self-stretch text-zinc-900 text-lg font-medium font-['Lato']">
             About
           </div>
           <div className='flex-col justify-start items-start gap-2 flex'>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Our Company
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Our Story
             </div>
             <div className="self-stretch text-neutral-600 text-base font-medium font-['Lato'] leading-7">
               Blog
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className='justify-start items-center gap-2 inline-flex'>
       <div className='w-6 h-6 relative'>
         <div className='w-[21px] h-[21px] left-[1.50px] top-[1.50px] absolute'></div>
       </div>
       <div className="text-neutral-600 text-base font-medium font-['Lato'] leading-7">
         Copyright 2024
       </div>
     </div>
   </div>
 );
}
export default Footer;