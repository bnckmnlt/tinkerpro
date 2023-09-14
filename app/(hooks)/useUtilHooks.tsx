import axios from "axios";

const API_KEY = process.env.API_SECRET_KEY;

export function UseNewRequest() {
  return axios.create({
    baseURL: `${
      process.env.NODE_ENV === "production"
        ? "https://tinkerpro.vercel.app"
        : "http://localhost:3000"
    }/api`,
    headers: { "Content-Type": "application/json", API_KEY: API_KEY },
    withCredentials: true,
  });
}
