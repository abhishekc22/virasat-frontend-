import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const baseURL = 'http://127.0.0.1:8000/';

const axiosistance = axios.create({
  baseURL
});

axiosistance.interceptors.request.use(
  async (config) => { // Make the function asynchronous to use 'await'
    const userToken = localStorage.getItem('userAccessToken');
    console.log(userToken,'////////////////////////////////////////////////////')

    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        const refreshToken = localStorage.getItem('userRefreshToken'); // Corrected variable name
        try {
          const response = await axios.post(`${baseURL}/myapi/refreshToken/`, {'refresh_token': refreshToken});
          if (response.status === 200) {
            const { access, refresh } = response.data;
            localStorage.setItem('userAccessToken', access);
            localStorage.setItem('userRefreshToken', refresh);
            config.headers['Authorization'] = `Bearer ${access}`;
          }
        } catch (error) {
          // Handle error (e.g., logging, showing a message)
        }
      } else {
        // Token is still valid, use it in the request
        config.headers['Authorization'] = `Bearer ${userToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosistance;
