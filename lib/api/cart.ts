import { api } from "@/utils/fetcher";

export const addToCart = async (id: number) => {
  const { data } = await api.post(`/cart/${id}`);
  return data;
};

export const getCart = async () => {
  const { data } = await api.get("/cart");
  return data;
};
