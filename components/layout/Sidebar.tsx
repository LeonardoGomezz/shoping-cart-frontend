/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { CartElementLinst } from "../utilsComponents/CartElementLinst";
import { useCartStore } from "@/store/cartStore";

interface SideBarProps {
  onClose: () => void;
  isOpen: boolean;
}

export const Sidebar = ({ onClose, isOpen }: SideBarProps) => {
  const cart = useCartStore((state) => state.cart);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const subtotal = useCartStore((state) => state.subtotal);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-96 bg-white shadow-lg z-[9998] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            <img
              className="w-auto h-8 sm:h-10"
              src="https://www.svgrepo.com/show/448244/pack.svg"
              loading="lazy"
              alt="logo"
            />
          </span>
          <button className="p-2 hover:bg-gray-100 rounded-sm cursor-pointer">
            <IoMdClose onClick={onClose} />
          </button>
        </div>

        <div className="mt-6 space-y-1">
          <h3 className="font-semibold text-xl">Tu carrito de compras</h3>
          <div className="flex flex-col gap-4 pt-2">
            {cart.map(({ id, name, price }) => (
              <CartElementLinst key={id} id={id} name={name} price={price} />
            ))}
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
