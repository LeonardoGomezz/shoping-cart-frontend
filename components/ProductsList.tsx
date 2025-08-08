"use client";
import React from "react";
import { ProductCard } from "./utilsComponents/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export const ProductsList = () => {
  const { products } = useProducts();
  return (
    <div className="pt-10 pb-32">
      <h1 className="text-2xl font-bold text-center">Listado de productos</h1>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map(({ id, name, price }) => (
          <ProductCard key={id} id={id} name={name} price={price} />
        ))}
      </div>
    </div>
  );
};
