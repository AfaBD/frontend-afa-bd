import axios from "axios"
import Cookies from 'js-cookie'

const api = axios.create({
    baseURL:'https://pdrmottas-afabd-ts02.hf.space',
    withCredentials: true
})

api.interceptors.request.use(
    async (config) => {
      var token = Cookies.get('token');  // Read the token from cookies
      if (!token) {
          token = localStorage.getItem("token")
      }
      console.log('my token: ',token)
      config.headers['Authorization'] = `Bearer ${token}`;  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api
