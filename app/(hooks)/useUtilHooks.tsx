import axios from "axios";

export function UseNewRequest() {
  return axios.create({
    baseURL: `http://localhost:3000/api`,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
}
