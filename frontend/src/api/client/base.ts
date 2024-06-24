import axios from "axios";

export const storeBaseUrl = "http://localhost:9000/store";

export const api = axios.create({
  baseURL: storeBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
