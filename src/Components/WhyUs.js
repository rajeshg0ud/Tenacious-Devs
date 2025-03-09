import React from "react";
import GRAPHICDESIGN from "../Assets/GRAPHICDESIGN.png";
import WEBDEV from "../Assets/WEBDEV.png";
import WEBREVAMP from "../Assets/WEBREVAMP.png";
import CUSTOMSOFT from "../Assets/CUSTOMSOFT.png";
import UIUX from "../Assets/UIUX.png";

function WhyUs() {
  const services = [
    {
      name: "Custom Website Development",
      image: WEBDEV,
      description:
        "Tailor-made websites designed to meet your business needs with cutting-edge technologies.",
    },
    {
      name: "Website Revamping",
      image: WEBREVAMP,
      description:
        "Revitalize your website with modern design, speed optimization, and enhanced user experience.",
    },
    {
      name: "UI/UX Design",
      image: UIUX,
      description:
        "Engaging and user-friendly interfaces designed for seamless digital experiences.",
    },
    {
      name: "Graphics Design",
      image: GRAPHICDESIGN,
      description:
        "Visually stunning graphics that enhance your brand identity and online presence.",
    },
    {
      name: "Custom Software Solutions",
      image: CUSTOMSOFT,
      description:
        "Scalable software tailored to streamline operations and improve efficiency.",
    },
  ];

  return (
    <div
      id="Services"
      className="  bg-gray-100  mx-auto items-center p-8 py-20 md:px-24"
    >
      <div className=" mb-7 md:mb-0 ">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-left">
          Why Choose Us? Elevate Your Digital Presence.
        </h2>
        <p className="mb-6 text-base md:text-lg text-gray-700 text-left">
          We fuse creativity, expertise, and cutting-edge technology to craft
          websites, applications, and digital experiences that drive your
          business forward. Our mission? To create digital solutions that not
          only stand out but deliver lasting results.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl  ">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-8  cursor-pointer  rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[202px] object-cover rounded-md mb-5"
                />
                <h3 className=" text-base md:text-lg font-bold text-gray-800 text-center mb-3">
                  {service.name}
                </h3>
                <p className=" text-base md:text-lg text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
