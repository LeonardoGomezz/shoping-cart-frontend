import { getAllProducts } from "@/lib/api/products";
import { ProducTypes } from "@/types/product";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<ProducTypes[]>([]);
  const [budget, setBudget] = useState<number>(150);
  const [bestCombo, setBestCombo] = useState<ProducTypes[]>([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const findBestCombination = (products: ProducTypes[], budget: number) => {
    let best: ProducTypes[] = [];
    let bestTotal = 0;

    const n = products.length;

    for (let i = 0; i < 1 << n; i++) {
      const combo: ProducTypes[] = [];
      let total = 0;

      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
          total += products[j].price;
          combo.push(products[j]);
        }
      }

      if (total <= budget && total > bestTotal) {
        bestTotal = total;
        best = combo;
      }
    }

    return best;
  };

  const calculateBestCombo = () => {
    const result = findBestCombination(products, budget);
    setBestCombo(result);
  };

  return {
    products,
    budget,
    setBudget,
    bestCombo,
    calculateBestCombo,
  };
};
