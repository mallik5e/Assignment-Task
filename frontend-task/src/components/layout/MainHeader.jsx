import React from 'react';
import { RxArrowRight } from "react-icons/rx";
import { FiPlayCircle } from "react-icons/fi";
import { assets } from '../../assets/assets';

const MainHeader = () => {
  return (
    <header className='flex flex-col items-center pt-28'>
      
      {/* Banner Section */}
      <div className='border border-red-200 bg-red-50 text-red-500 text-sm rounded-3xl py-1 pr-3 mb-5'>
        <h4 className='flex items-center font-semibold'>
          <span className='border border-red-200 bg-white rounded-3xl px-2 ml-1 mr-2'>
            New feature
          </span>
          Check out the team dashboard
          <RxArrowRight className='text-red-500 ml-1' />
        </h4>
      </div>

      {/* Main Header Content */}
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold py-5">
      Beautiful analytics to grow smarter
    </h1>
    <h4 className="text-base sm:text-lg md:text-xl text-gray-600">
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 Startups.
    </h4>
  </div>
</div>


      {/* Buttons */}
      <div className="p-10 font-semibold">
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
    <button className="flex items-center border border-slate-300 px-8 py-3 sm:px-6 sm:py-2 rounded-3xl">
      <FiPlayCircle className="mr-2" />
      Demo
    </button>
    <button className="border bg-red-500 text-white px-8 py-3 sm:px-6 sm:py-2 rounded-3xl">
      Sign up
    </button>
  </div>
</div>



      <div className='flex flex-col items-center justify-center w-full p-10'>
     {/* Main Image */}
     <div
        className="relative w-4/5 max-w-5xl rounded-3xl overflow-hidden border-8 border-black"
        style={{
            height: '70%', // Controls the visible height
            clipPath: 'inset(0 0 20% 0)', // Crops both the border and the image
        }}
     >
         <img className="w-full h-full object-cover" src={assets.task_img} alt="Task Image"/>
     </div>


  {/* Heading */}
  <p className='text-center text-lg font-medium mt-1'>
    Join 4000+ companies already growing
  </p>
  
  {/* Logo Section */}
  <div className='flex justify-center items-center flex-wrap gap-6 mt-8'>
    <img className='h-10' src={assets.logo_1} alt="Logo 1" />
    <img className='h-10' src={assets.logo_2} alt="Logo 2" />
    <img className='h-10' src={assets.logo_3} alt="Logo 3" />
    <img className='h-10' src={assets.logo_4} alt="Logo 4" />
    <img className='h-10' src={assets.logo_5} alt="Logo 5" />
    <img className='h-10' src={assets.logo_6} alt="Logo 6" />
  </div>
</div>


    </header>
  );
};

export default MainHeader;
