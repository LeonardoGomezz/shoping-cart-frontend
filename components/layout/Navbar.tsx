/* eslint-disable @next/next/no-img-element */
import { NAV_ITEMS } from "@/utils/data/data";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useCartStore } from "@/store/cartStore";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const cartItems = cart.length;

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
                  alt="logo"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  onClick={onToggleSidebar}
                  className="relative md:hidden inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  <TbShoppingCart size={20} />
                  {cart && cart.length > 0 && (
                    <span className="absolute w-3 h-3 flex justify-center items-center top-[-10] left-[-10px] bg-blue-950 text-white p-3 rounded-full text-xs">
                      {cartItems}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setShowSubMenu(!showSubMenu)}
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                  type="button"
                  aria-expanded={showSubMenu}
                  aria-label="Toggle menu"
                >
                  {showSubMenu === true ? <IoMdClose /> : <HiOutlineMenu />}
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:space-x-10 list-none">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href="#"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target=""
                >
                  {label}
                </a>
              </li>
            ))}
          </div>

          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              <button
                onClick={onToggleSidebar}
                className="relative inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
              >
                <TbShoppingCart />
                {cart && cart.length > 0 && (
                  <span className="absolute w-3 h-3 flex justify-center items-center top-[-10] left-[-10px] bg-blue-950 text-white p-3 rounded-full text-xs">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            showSubMenu ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 p-4 bg-white border-t border-gray-200 mt-2">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href="#"
                  className="block text-gray-700 font-medium hover:text-gray-900"
                  onClick={() => setShowSubMenu(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
