import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-3 px-20 font-medium'>
       <div className='flex items-center gap-5'>
      {/* Logo */}
      <div>
        <img src={assets.logo} className='w-36' alt='Logo' />
      </div>

      {/* Desktop Menu */}
      <ul className='sm:flex gap-10  text-gray-700 hidden'>
        <li className='flex flex-col items-center gap-1 ml-20'>Home</li>
       <div className='flex gap-3'> 
           <li className='flex flex-col items-center gap-1'>Products</li>
           <img className='w-2.5' src={assets.dropdown_icon} alt="" />
       </div>
        <div className='flex gap-3'>
            <li className='flex items-center gap-1'>Resources</li>
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
        </div>
        <li className='flex flex-col items-center gap-1'>Pricing</li>
      </ul>
      </div>

       {/* Profile image */}
       <div className='flex items-center gap-6 ml-6'>
          <img className='h-11 w-12 rounded-full hidden sm:block' src={assets.profile_img} alt="" />
       </div>


      {/* Mobile Menu Button */}
      <button onClick={() => setVisible(true)} className='sm:hidden p-2 text-5xl '>
      <IoMenu className="text-3xl sm:text-4xl md:text-5xl" />
      </button>

      {/* Mobile Sidebar Menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                  <div className='flex flex-col text-gray-600'>

                    {/* Open and close sidebar menu */}
                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                      <img className='h-6 w-6 rotate-180' src={assets.cross_icon} alt="" />      
                     </div>
                     
                     <li className='py-2 pl-6 border cursor-pointer list-none'>Home</li>
                     <li className='py-2 pl-6 border cursor-pointer list-none'>Products</li>
                     <li className='py-2 pl-6 border cursor-pointer list-none'>Resources</li>
                     <li className='py-2 pl-6 border cursor-pointer list-none'>Pricing</li>
                  </div>
            </div>
    </div>
  );
};

export default Navbar;
