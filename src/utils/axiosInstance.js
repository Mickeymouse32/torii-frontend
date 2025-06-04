import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torri-backendd.onrender.com/api",
});
