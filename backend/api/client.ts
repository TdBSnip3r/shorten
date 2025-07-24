// lib/api/client.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor per token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se è un errore 401, emettiamo un evento personalizzato
    if (error.response?.status === 401) {
      //Clean localstorage
      localStorage.removeItem('user-storage');
      //Redirect to landing page
      window.location.href = '/landing'
    }
    return Promise.reject(error);
  }
);

export default apiClient;