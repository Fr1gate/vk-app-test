// init axios
import axios from "axios";

const request = axios.create({
  // from SERVER_URL from .env file
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export default request;

