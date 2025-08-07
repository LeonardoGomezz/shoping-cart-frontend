import { ProducTypes } from "@/types/product";
import { api } from "@/utils/fetcher";

export const getAllProducts = async (): Promise<ProducTypes[]> => {
  const { data } = await api.get<ProducTypes[]>("/products");
  return data;
};
