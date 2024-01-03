import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.209.129:8003/",
  headers: { Authorization: "Bearer 100-token" },
});

export { api };
