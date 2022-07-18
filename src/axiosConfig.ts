import axios, { AxiosInstance } from 'axios';
// import {getCookie} from "./customCookie";

const API_URL = process.env.REACT_APP_API_BASE_URL;
const axiosConfig: AxiosInstance = axios.create({
  baseURL: `${API_URL}`,
  timeout: 5000,
  headers: {
    // access_token: getCookie('access_token'),
  },
});

// 요청 보내기전 request interceptor
axiosConfig.interceptors.request.use(function (config) {
  // console.log('📜 Axios Request 📜');
  // console.log(config);
  // console.log();
  return config;
});

// 요청 보내기전 response interceptor
axiosConfig.interceptors.response.use(function (response) {
  // console.log('📜 Axios Response 📜');
  // console.log(response);
  // console.log();
  return response;
});

export default axiosConfig;
