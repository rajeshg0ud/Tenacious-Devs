import React from "react";
import NavikOnlineImg from "../Assets/project/Navikonline.png";
import manmeetPortfolio from "../Assets/project/manmeetPortfolio.png";

function Projects() {
  return (
    <div
      id="Projects"
      className="  bg-gray-100  mx-auto items-center p-8 py-20 md:px-24"
    >
      <div className="  max-w-6xl mb-7 md:mb-0 ">
        <h2 className="text-xl md:text-3xl font-bold mb-12ml-12 md:ml-0 text-left pb-5">
          Latest Projects
        </h2>
        <div className="container  px-4 flex justify-center">
          <div className="flex overflow-x-scroll md:overflow-x-hidden space-x-4 pb-4">
            <div className="flex-shrink-0 w-full max-w-[549px] bg-gray-100 cursor-pointer rounded-lg">
              <div className="p-4">
                <div className="text-xl text-center md:text-start font-semibold mb-2">
                  Navik Online
                </div>
                <div className="relative group">
                  <img
                    className="w-[95%] h-auto rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105  group-hover:brightness-50"
                    src={NavikOnlineImg}
                    alt="Navik Online"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <a
                      className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-sky-700"
                      href="https://www.navikonline.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full max-w-[549px] bg-gray-100 cursor-pointer rounded-lg">
              <div className="p-4">
                <div className="text-xl text-center md:text-start font-semibold mb-2">
                  Manmeet Portfolio
                </div>
                <div className="relative group">
                  <img
                    className="w-[95%] h-auto rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105  group-hover:brightness-50"
                    src={manmeetPortfolio}
                    alt="Manmeet Portfolio"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <a
                      className="bg-sky-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-sky-700"
                      href="https://missmanmeetgill.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                  </div>
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
