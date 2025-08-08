/* eslint-disable @next/next/no-img-element */
import { useCartStore } from "@/store/cartStore";
import { ProducTypes } from "@/types/product";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export const CartElementLinst = ({ id, name, price }: ProducTypes) => {
  const removeProductFromCart = useCartStore(
    (state) => state.removeProductFromCart
  );
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex gap-2">
        <img
          src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="product"
          className="w-20"
        />
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="pt-2">$ {price}</p>
        </div>
      </div>
      <button
        className="group hover:bg-red-300 hoover:text-white h-fit p-2 rounded-lg cursor-pointer"
        onClick={() => removeProductFromCart(id)}
      >
        <RiDeleteBin6Line className="group-hover:text-white" />
      </button>
    </div>
  );
};
