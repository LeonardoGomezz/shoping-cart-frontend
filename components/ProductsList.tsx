"use client";
import React from "react";
import { ProductCard } from "./utilsComponents/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { toast } from "sonner";

export const ProductsList = () => {
  const { products, budget, setBudget, bestCombo, calculateBestCombo } =
    useProducts();

  const handleCalculate = () => {
    if (budget <= 0) {
      toast.warning("Ingrese un valor mayor a 0");
      return;
    }
    calculateBestCombo();
  };

  return (
    <div className="pt-10 pb-32">
      <h1 className="text-2xl font-bold text-center">Listado de productos</h1>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map(({ id, name, price }) => (
          <ProductCard key={id} id={id} name={name} price={price} />
        ))}
      </div>

      <div className="max-w-md mx-auto mt-10 text-center">
        <label htmlFor="budget" className="block mb-2 font-semibold">
          Presupuesto máximo:
        </label>
        <input
          id="budget"
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        />
        <button
          onClick={handleCalculate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Buscar mejor combinación
        </button>
      </div>

      {bestCombo.length > 0 && (
        <div className="max-w-md mx-auto mt-10">
          <h2 className="text-xl font-bold mb-4 text-center">
            Mejor combinación (total: $
            {bestCombo.reduce((acc, p) => acc + p.price, 0)})
          </h2>
          <ul className="list-disc list-inside text-left">
            {bestCombo.map(({ id, name, price }) => (
              <li key={id}>
                {name} - ${price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
