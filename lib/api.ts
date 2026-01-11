import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://tinytales.trendline.marketing/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

const postData = async <T>(path: string, data: unknown): Promise<T> => {
  const response = await api.post(path, data);
  console.log(response.data);
  return response.data;
};

const fetchData = async <T>(path: string): Promise<T> => {
  const response = await api.get(path);
  return response.data;
};
export { fetchData, postData };
