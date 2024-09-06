import React from 'react'; 

function NavBar() {

  const scrollDownTo=(sectionId)=>{
    const section = document.getElementById(sectionId);
    const yOffset = -72;  
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  return (
    <nav className='fixed top-0 left-0 right-0 flex md:justify-between items-center px-2 md:px-20 py-4 md:py-4 bg-zinc-50 shadow-sm border-b z-50'>
      <div>
        <h1 className=' hidden md:block text-base md:text-2xl carter-one-regular text-sky-600 brightness-110'>Tenacious <span className='text-black'>Devs</span></h1>
      </div>
      <div className=' mx-auto md:mx-0 flex space-x-5 md:space-x-14 font-semibold'>
        <h1 className='hover:text-sky-600 text-[16px] md:text-[16.5px]  cursor-pointer' onClick={()=> scrollDownTo('Home')}>Home</h1>
        <h1 className='hover:text-sky-600 text-[16px] md:text-[16.5px] cursor-pointer' onClick={()=> scrollDownTo('Services')}>Services</h1>
        <h1 className='hover:text-sky-600 text-[16px] md:text-[16.5px] cursor-pointer' onClick={()=> scrollDownTo('Projects')}>Projects</h1>
        <h1 className='hover:text-sky-600 text-[16px] md:text-[16.5px] cursor-pointer' onClick={()=> scrollDownTo('Contact')}>Contact</h1>
      </div>
    </nav>
  );
}

export default NavBar;
