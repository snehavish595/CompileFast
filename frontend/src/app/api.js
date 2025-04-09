// api.js
import axios from "axios";

const API_URL = "http://localhost:8000/api";  // Ensure this points to the correct backend URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
