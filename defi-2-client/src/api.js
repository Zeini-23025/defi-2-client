import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

const api = axios.create({
  baseURL: "https://docker-server-prod.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for handling token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const response = await api.post("/token/refresh/", {
          refresh: refreshToken,
        });
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        return api(originalRequest);
      } catch (err) {
        apiServices.logout();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

const apiServices = {
  // Auth services
  login: async (email, password) => {
    const response = await api.post("/token/", { email, password });
    localStorage.setItem(ACCESS_TOKEN, response.data.access);
    localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
    return response.data;
  },

  register: async (userData) => {
    return await api.post("/register/", userData);
  },

  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('is_superuser');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
  },

  // User profile services
  getUserProfile: async () => {
    return await api.get("/users/profile/");
  },

  updateUserProfile: async (profileData) => {
    return await api.put("/users/profile/", profileData);
  },

  // Password services
  resetPassword: async (email) => {
    return await api.post("/password-reset/", { email });
  },

  confirmResetPassword: async (token, password) => {
    return await api.post("/password-reset/confirm/", { token, password });
  },

  changePassword: async (oldPassword, newPassword) => {
    return await api.post("/password-change/", {
      old_password: oldPassword,
      new_password: newPassword,
    });
  },

  MotsGenerer: async (word) => {
    return await api.get(`/generate-word-variants/${encodeURIComponent(word)}`);
  },
};

export { api as default, apiServices };
