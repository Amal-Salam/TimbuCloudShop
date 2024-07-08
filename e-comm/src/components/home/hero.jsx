import HeroImg from '../../assets/images/Task Chair -6 1.png'
import { NavLink } from 'react-router-dom';
import ProductDisplay from './productDisplay';
// import '../../index.css';
function Hero() {

  return (
    <div className='w-[1280px] h-[575px] px-[100px] py-[50px] bg-background_hero justify-between items-center inline-flex'>
      <div className='flex-col justify-end items-center gap-2.5 inline-flex'>
        <div className='w-[1080px] justify-between items-center inline-flex'>
          <div className='w-[612px] flex-col justify-start items-start gap-8 inline-flex'>
            <div className='self-stretch h-[226px] flex-col justify-start items-start gap-[18px] flex'>
              <div className="self-stretch text-white text-[45px] font-medium font-['Lato'] leading-[62px]">
                The Executive Chair - Ultimate Comfort for All-Day Work
              </div>
              <div className="self-stretch text-white text-base font-medium font-['Lato'] leading-7">
                Say goodbye to back pain and hello to peak productivity with the
                Executive Chair. Designed for all-day comfort, this chair
                provides the perfect blend of support and adjustability. Focus
                on what matters most without sacrificing your well-being.
              </div>
            </div>
            <div className='px-6 py-3.5 bg-yellow-600 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
              <NavLink to={ProductDisplay}>
              <div className="text-white text-lg font-bold font-['Lato']">
                Shop Now
              </div>
              </NavLink>
              
            </div>
          </div>
          <img
            className='w-[376px] h-[475px]'
            src={HeroImg}
          />
        </div>
      </div>
    </div>
    // <section className="hero-bg">
    //   <img src={HeroImg} alt="banner " />

    //   <div>
    //     <h1 className='text-4xl font-bold'>Welcome to Our Store</h1>
    //     <p className='mt-4'>Find the best products here.</p>
    //   </div>
    // </section>
  );
}

export default Hero;




