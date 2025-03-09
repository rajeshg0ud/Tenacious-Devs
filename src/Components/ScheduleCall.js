import React from "react";
import serviceImage from "../Assets/whyUs.png";

function ScheduleCall() {
  const phoneNumber = "+919441049014";
  const message = encodeURIComponent(
    "Hello, I would like to schedule a free call to discuss my project."
  );

  return (
    <div className="  bg-gray-100  mx-auto items-center p-8 py-20 md:px-24">
      <div className="   mb-7 md:mb-0 ">
        <div className="flex flex-col justify-center   mb-7 md:mb-0">
          <h2 className="text-xl md:text-3xl font-bold mb-12ml-12 md:ml-0 text-left pb-5">
            Let’s Bring Your Project to Life — Schedule a Free Call!
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-700 text-left">
            Ready to make your ideas a reality? Book a free consultation with us
            today to discuss your project and discover how we can help you grow
            your brand online. We’ll offer expert guidance, actionable insights,
            and a plan that’s tailored to your needs.
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white py-3 px-5 rounded-full text-sm md:text-base hover:bg-sky-700 transition-transform duration-200 transform hover:scale-105 max-w-fit"
          >
            Let’s Talk Now!
          </a>
        </div>

        {/* <div className="  ml-4 md:ml-7">
        <img 
          src={serviceImage} 
          alt="Why Us Illustration" 
          className="w-full max-w-[440px] h-auto" 
          loading="lazy"
        />
      </div> */}
      </div>
    </div>
  );
}

export default ScheduleCall;

// import React from 'react'

// function ScheduleCall() {
//   return (
//     <div className="schedule-call-section text-center p-8 bg-gray-50">
//   <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Discuss Your Project</h3>
//   <p className="text-lg md:text-xl mb-6">Schedule a free call with us to explore your needs and learn how we can help grow your brand online.</p>
//   <a href="#Contact" onClick={(e) => {
//   e.preventDefault();
//   const target = document.getElementById('Contact');
//   const yOffset = -72;
//   const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

//   window.scrollTo({ top: y, behavior: 'smooth' });

// }} className="bg-sky-600 text-white py-3 px-5 rounded-full text-base  md:text-lg hover:bg-sky-700">
//   Schedule a Free Call
// </a>
// </div>
//   )
// }

// export default ScheduleCall
