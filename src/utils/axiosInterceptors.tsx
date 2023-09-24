import API from '@/config';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const axiosInstance = axios.create({
  baseURL: API.baseUrl,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
});

export const useAxiosInterceptors = () => {
  const { data: session } = useSession();

  axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + session?.user.access_token;

  axiosInstance.interceptors.response.use(
    response => response,
    error => console.log(error.message)
  );

  return axiosInstance;
};

export default axiosInstance;
