import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 shadow-md">
      <div className="relative pt-6 pb-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Company Name</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src="https://www.svgrepo.com/show/448244/pack.svg"
                  loading="lazy"
                  width="202"
                  height="40"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  onClick={onToggleSidebar}
                  className="md:hidden inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  <TbShoppingCart />
                </button>
                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <HiOutlineMenu />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10 list-none">
            <li>
              <a
                href="#"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target=""
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target=""
              >
                Gallary
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              <button
                onClick={onToggleSidebar}
                className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
              >
                <TbShoppingCart />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
