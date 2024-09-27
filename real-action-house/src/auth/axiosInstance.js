import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
  
    console.log('Resposta da API:', response.data);
    return response;
  },
  (error) => {
   
    if (error.response) {
      console.error('Erro na resposta do servidor:', error.response.data);
    
      if (error.response.status === 401) {
        console.error('Não autorizado. Redirecionando para login...');
        
      }
    } else {
     
      console.error('Erro de rede ou configuração:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
