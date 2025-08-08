import { getAllProducts } from "@/lib/api/products";
import { ProducTypes } from "@/types/product";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<ProducTypes[]>([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return {
    products,
  };
};
