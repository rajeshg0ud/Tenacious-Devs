import React from 'react';
import NavikOnlineImg from '../Assets/project/Navikonline.png';
import SwiggyImg from '../Assets/project/swiggy.png'; 

function Projects() {
  return (
    <div id='Projects' className="py-16 bg-white md:px-52">
      <h3 className="text-2xl md:text-4xl font-bold mb-12 mx-auto ml-12 md:ml-0 ">Latest Projects</h3>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex overflow-x-scroll md:overflow-x-hidden space-x-4 pb-4">
          <div className="flex-shrink-0 w-full max-w-[549px] bg-white cursor-pointer rounded-lg">
            <div className="p-4">
              <div className="text-xl text-center md:text-start font-semibold mb-2">Navik Online</div>
              <div className="relative group">
                <img className="w-[95%] h-auto rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105  group-hover:brightness-50" 
                     src={NavikOnlineImg} alt="Navik Online" />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <a className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-sky-700" href="https://www.navikonline.in/" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full max-w-[537px] bg-white  cursor-pointer rounded-lg">
            <div className="p-4">
              <div className="text-xl  text-center md:text-start font-semibold mb-2">Swiggy Clone</div>
              <div className="relative group">
                <img className="w-[95%] h-auto rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105  group-hover:brightness-50" 
                     src={SwiggyImg} alt="Swiggy Clone" />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <a className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-sky-700" href="https://swiggy-india.vercel.app/" target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
