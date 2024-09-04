import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 md:px-52">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tenacious Devs. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://linkedin.com/company/tenaciousdevs/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/tenacious_developer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/@TenaciousDeveloper" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
