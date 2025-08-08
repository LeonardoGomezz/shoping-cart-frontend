import { create } from "zustand";
import { toast } from "sonner";
import { ProducTypes } from "@/types/product";
import { getCart, addToCart } from "@/lib/api/cart";
import { getAllProducts } from "@/lib/api/products";

interface CartState {
  products: ProducTypes[];
  cart: ProducTypes[];
  subtotal: number;
  fetchProducts: () => Promise<void>;
  fetchCart: () => Promise<void>;
  isInCart: (id: number) => boolean;
  addProductToCart: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  products: [],
  cart: [],
  subtotal: 0,

  fetchProducts: async () => {
    try {
      const res = await getAllProducts();
      set({ products: res });
    } catch (error) {
      console.error("Error al obtener productos:", error);
      toast.error("No se pudieron cargar los productos");
    }
  },

  fetchCart: async () => {
    try {
      const res = await getCart();
      const subtotal = res.reduce((acc, product) => acc + product.price, 0);
      set({ cart: res, subtotal });
    } catch (error) {
      console.error("Error al obtener carrito:", error);
      toast.error("No se pudo cargar el carrito");
    }
  },

  isInCart: (id) => get().cart.some((item) => item.id === id),

  addProductToCart: async (id) => {
    if (get().isInCart(id)) {
      toast.error("El producto ya está en el carrito");
      return;
    }

    try {
      await addToCart(id);
      await get().fetchCart();
      toast.success("Producto añadido al carrito");
    } catch (error) {
      console.error("Error al añadir producto:", error);
      toast.error("No se pudo añadir el producto");
    }
  },
}));
