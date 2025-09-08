import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../config";

const axiosAuth = axios.create({
  baseURL: `${API_BASE_URL}`, // your backend
});

// Attach token before every request
axiosAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 → refresh flow
axiosAuth.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) throw new Error("No refresh token found");

        const { data } = await axios.post(
          `${API_BASE_URL}/auth/refresh?refresh_token=${refreshToken}`
        );

        // Save new access token
        localStorage.setItem("access_token", data.access_token);

        // Update headers
        axiosAuth.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access_token}`;
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${data.access_token}`;

        return axiosAuth(originalRequest); // retry
      } catch (err) {
        console.error("Token refresh failed:", err);
        toast.error("Session expired. Please login again.");
        localStorage.clear();
        window.location.href = "/signin"; // redirect
      }
    }

    return Promise.reject(error);
  }
);

export default axiosAuth;
