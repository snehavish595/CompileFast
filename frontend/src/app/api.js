import axios from "axios";

const API_URL = "http://localhost:8000/api"; // Update with your API URL

const api = axios.create({
    baseURL: API_URL,
});

export default api;
