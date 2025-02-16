import React from "react";
import {
  FaLaptopCode,
  FaTachometerAlt,
  FaPaintBrush,
  FaImage,
  FaCogs,
} from "react-icons/fa";

function WhyUs() {
  const services = [
    {
      name: "Custom Website Development",
      icon: <FaLaptopCode className="text-4xl text-sky-600" />,
    },
    {
      name: "Website Revamping",
      icon: <FaTachometerAlt className="text-4xl text-sky-600" />,
    },
    {
      name: "UI/UX Design",
      icon: <FaPaintBrush className="text-4xl text-sky-600" />,
    },
    {
      name: "Graphics Design",
      icon: <FaImage className="text-4xl text-sky-600" />,
    },
    {
      name: "Custom Software Solutions",
      icon: <FaCogs className="text-4xl text-sky-600" />,
    },
  ];

  return (
    <div
      id="Services"
      className="flex flex-col mx-auto items-center p-8 py-20 md:px-24 bg-gray-100"
    >
      <div className="max-w-6xl mb-7 md:mb-0">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-left">
          Why Choose Us? Elevate Your Digital Presence.
        </h2>
        <p className="mb-6 text-base md:text-lg text-gray-700 text-left">
          We fuse creativity, expertise, and cutting-edge technology to craft
          websites, applications, and digital experiences that drive your
          business forward. Our mission? To create digital solutions that not
          only stand out but deliver lasting results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
