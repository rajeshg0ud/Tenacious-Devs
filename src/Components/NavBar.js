import React from "react";
import tenacious from "../Assets/Tenacious.png";
import tenaciousfav from "../Assets/Tenacious-favv.png";

function NavBar() {
  const scrollDownTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    const yOffset = -72;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <nav className="fixed top-0 left-0 right-0 flex md:justify-between items-center px-2 md:px-20 py-4 md:py-4 bg-gray-50 shadow-sm border-b z-50">
      <div>
        {/* <h1 className=" hidden md:block text-base md:text-2xl carter-one-regular text-sky-600 brightness-110">
          Tenacious <span className="text-black">Devs</span>
        </h1> */}
        <img
          src={tenaciousfav}
          alt="logo"
          className="max-w-20  hidden md:block "
        />
        {/* <img
          src={tenaciousfav}
          alt="logo"
          className="max-w-10 block  md:hidden"
        /> */}
      </div>
      <div className=" mx-auto md:mx-0 flex space-x-5 md:space-x-14 font-semibold vollkorn">
        <h1
          className="hover:text-sky-600 text-[10px] md:text-[14.5px]  cursor-pointer"
          onClick={() => scrollDownTo("Home")}
        >
          HOME
        </h1>
        <h1
          className="hover:text-sky-600 text-[10px] md:text-[14.5px] cursor-pointer"
          onClick={() => scrollDownTo("Services")}
        >
          SERVICES
        </h1>
        <h1
          className="hover:text-sky-600 text-[10px] md:text-[14.5px] cursor-pointer"
          onClick={() => scrollDownTo("Projects")}
        >
          PROJECTS
        </h1>
        <h1
          className="hover:text-sky-600 text-[10px] md:text-[14.5px] cursor-pointer"
          onClick={() => scrollDownTo("Contact")}
        >
          CONTACT US
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
