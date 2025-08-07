import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.midominio.com", // cambia esto
  headers: {
    "Content-Type": "application/json",
  },
});
