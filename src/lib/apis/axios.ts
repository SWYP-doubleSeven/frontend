import axios from "axios";

export const instance = axios.create({
  baseURL: "http://3.39.123.15:8090",
  withCredentials: true,
});
