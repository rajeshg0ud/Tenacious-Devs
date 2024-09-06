import React from 'react';
import bgHome from '../Assets/19366.jpg';
 
function Splice() {
  return (
<div id='Home' className='relative flex justify-between items-center mt-[85px] h-[320px] md:h-[429px]  mx-auto bg-cover bg-center py-10 px-4 md:p-10  text-center'>
   <div className='absolute inset-0'>
    <div className='absolute inset-0 bg-cover bg-center z-[-1] opacity-25'
         style={{ backgroundImage: `url(${bgHome})` }}></div>
  </div>

  <div className='relative z-10 -mt-24 mx-auto backdrop-blur-lg'>
  <h1 className='text-[27px] md:text-[66px] font-bold bg-gradient-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent brightness-110 carter-one-regular'>
    We Grow Brands Online
</h1>
<p className=' text-base md:text-xl font-extrabold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent brightness-105 vollkorn'>
Custom Websites & Tailored Branding Solutions.</p>
</div>

   
</div>

  );
}

export default Splice;