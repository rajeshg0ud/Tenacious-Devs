import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function WhyUs() {
  return (
    <div
      id="Services"
      className="flex flex-col mx-auto items-center p-8 py-20 md:px-24 bg-gray-100"
    >
      <div className="max-w-6xl mb-7 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Choose Us? Elevate Your Digital Presence.
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          We fuse creativity, expertise, and cutting-edge technology to craft
          websites, applications, and digital experiences that drive your
          business forward. Our mission? To create digital solutions that not
          only stand out but deliver lasting results.
        </p>
        <ul className="  space-y-4">
          {[
            "Custom Website Development: Tailored websites that captivate your audience and reflect your unique brand.",
            "Website Revamping: Modernizing your site for a fresh look and improved functionality.",
            "UI/UX Design: Seamless, intuitive experiences that keep visitors engaged.",
            "Graphics Design: Striking visuals that elevate your brand identity.",
            "Custom Software Solutions: Tailored tools that solve your business challenges and optimize workflow.",
          ].map((service, index) => (
            <li key={index} className="flex items-center text-base">
              <FaCheckCircle className="text-sky-600 mr-3" />
              <span className="text-gray-600">
                <strong className="text-black">{service.split(": ")[0]}</strong>
                : {service.split(": ")[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhyUs;
