import axios from 'axios';

import logger from '@/lib/logger';

import myEvents from './myEvent';

const isDeniedRequest = (error: { message: string }) => {
  try {
    const message: string = error.message;
    if (message?.includes('401')) return true;
  } catch (error) {
    logger(error);
  }
  return false;
};

const axiosInstance = axios.create({
  baseURL: '/',
  timeout: 50000,
});

axiosInstance.defaults.headers.common['x-csrf-token'] = 'AUTH_TOKEN';

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      return Promise.reject(response.statusText);
    }
    return response.data;
  },
  (error) => {
    if (isDeniedRequest(error)) {
      myEvents.DeniedRequest.emit();
    }
    return Promise.reject(error);
  }
);

const service = axiosInstance;

export default service;
