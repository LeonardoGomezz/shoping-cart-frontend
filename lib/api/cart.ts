import { ProducTypes } from "@/types/product";
import { api } from "@/utils/fetcher";

export const addToCart = async (id: number): Promise<ProducTypes> => {
  try {
    const { data } = await api.post<ProducTypes>(`/cart/${id}`);

    return data;
  } catch (error) {
    console.error("Error adding product to cart: ", error);
    throw error;
  }
};

export const getCart = async (): Promise<ProducTypes[]> => {
  try {
    const { data } = await api.get<ProducTypes[]>("/cart");

    return data;
  } catch (error) {
    console.error("Error retrieving cart: ", error);
    throw error;
  }
};

export const removeToCart = async (id: number): Promise<ProducTypes> => {
  try {
    const { data } = await api.delete<ProducTypes>(`/cart/${id}`);
    return data;
  } catch (error) {
    console.error("cannot remove product to cart: ", error);
    throw error;
  }
};
