import axios from "axios";

export const bookAPI = axios.create({
  baseURL: "https://new-books-api.onrender.com/",
  timeout: 5 * 1000,
});
