import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import serviceImage from '../Assets/whyUs.png';  

function WhyUs() {
  return (
    <div id='Services' className="flex flex-col md:flex-row justify-between md:px-52 items-center p-8 bg-zinc-50 ">
      <div className="max-w-md mb-7 md:mb-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Why Us?</h2>
        <ul className='text-lg'>
          <li className="flex items-center mb-4">
            <FaCheckCircle className="text-sky-600 mr-3" />
            <span>Website Development</span>
          </li>
          <li className="flex items-center mb-4">
            <FaCheckCircle className="text-sky-600 mr-3" />
            <span>Website Revamping</span>
          </li>
          <li className="flex items-center mb-4">
            <FaCheckCircle className="text-sky-600 mr-3" />
            <span>UI/UX Designing</span>
          </li>
          <li className="flex items-center mb-4">
            <FaCheckCircle className="text-sky-600 mr-3" />
            <span>Graphics Designing</span>
          </li>
          <li className="flex items-center mb-4">
            <FaCheckCircle className="text-sky-600 mr-3" />
            <span>Software Tool Development</span>
          </li>
        </ul>
      </div>

      <div className="why-us-image ml-4 md:ml-7">
        <img src={serviceImage} alt="Why Us Illustration" className="w-full max-w-[360px] h-auto" />
      </div>
    </div>
  );
}

export default WhyUs;
