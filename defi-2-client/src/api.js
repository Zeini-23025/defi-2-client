import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

const api = axios.create({
  baseURL: "http://localhost:8000", //
  headers: { "Content-Type": "application/json" },
});


const apiServices = {

    logout: () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('is_superuser');
      localStorage.removeItem('first_name');
      localStorage.removeItem('last_name');
    }
};

export { api as default, apiServices };
