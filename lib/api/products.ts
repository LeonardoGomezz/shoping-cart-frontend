import { ProducTypes } from "@/types/product";
import { api } from "@/utils/fetcher";

export const getAllProducts = async (): Promise<ProducTypes[]> => {
  try {
    const { data } = await api.get<ProducTypes[]>("/products");
    return data;
  } catch (error) {
    console.error("Error to get products", error);
    throw error;
  }
};
