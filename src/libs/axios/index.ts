import { API_KEY } from "@env";
import axios, { AxiosError } from "axios";

const apiConfig = {
  baseURL: "https://api.openai.com/",
  headers: { "Content-Type": "application/json" },
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${API_KEY}`;

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default api;
