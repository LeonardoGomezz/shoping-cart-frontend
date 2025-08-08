/* eslint-disable @next/next/no-img-element */
import { useCartStore } from "@/store/cartStore";
import { ProducTypes } from "@/types/product";
import React from "react";
import { IoBagAddOutline } from "react-icons/io5";

export const ProductCard = ({ id, name, price }: ProducTypes) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {name}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            ${price}
          </p>
          <button onClick={() => addProductToCart(id)} className="ml-auto">
            <IoBagAddOutline />
          </button>
        </div>
      </div>
    </div>
  );
};
