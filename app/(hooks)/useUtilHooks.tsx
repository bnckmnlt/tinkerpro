import axios from "axios";

export function UseNewRequest() {
  return axios.create({
    baseURL: `https://tinkerpro.vercel.app/api`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
}
