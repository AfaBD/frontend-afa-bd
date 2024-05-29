import axios from "axios"
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL:'http://localhost:7860',
    withCredentials: true
})

api.interceptors.request.use(
    async (config) => {
      const token = Cookies.get('token');  // Read the token from cookies
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api