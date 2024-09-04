import React from 'react'

function ScheduleCall() {
  return (
    <div className="schedule-call-section text-center p-8 bg-gray-100">
  <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Discuss Your Project</h3>
  <p className="text-lg md:text-xl mb-6">Schedule a free call with us to explore your needs and learn how we can help grow your brand online.</p>
  <a href="#Contact" onClick={(e) => {
  e.preventDefault();
  const target = document.getElementById('Contact');
  const yOffset = -72;  
  const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });

}} className="bg-sky-600 text-white py-3 px-5 rounded-full text-base  md:text-lg hover:bg-sky-700">
  Schedule a Free Call
</a>
</div>
  )
}

export default ScheduleCall