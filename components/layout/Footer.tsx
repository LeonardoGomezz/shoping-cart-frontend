import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center pb-4">
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
      >
        <img
          src="https://www.svgrepo.com/show/499962/music.svg"
          className="h-12 mr-3 sm:h-9"
          alt="Landwind Logo"
        />
        Shoping cart test
      </a>

      <span className="block text-sm text-center text-gray-500">
        © {year} shopoing cart test™. All Rights Reserved. Built with
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <a
            href="https://www.linkedin.com/in/leonardogomezgomez/"
            title="Linkedin"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LeonardoGomezz"
            title="GitHub"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://portafolio-leonardogomez.netlify.app/es/"
            title="Portfolio web"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <TfiWorld />
          </a>
        </li>
      </ul>
    </div>
  );
};
