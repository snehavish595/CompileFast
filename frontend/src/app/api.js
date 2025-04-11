import axios from "axios";

const API_URL = "http://localhost:8000/api";  // Correct base URL

const api = axios.create({
  baseURL: API_URL,  // Ensure this points to the correct backend URL
});

export default api;
