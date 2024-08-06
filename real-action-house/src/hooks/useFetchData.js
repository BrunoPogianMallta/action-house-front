import { useCallback } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const useFetchData = () => {
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/items`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar itens:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchItemTypes = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/item-types`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar tipos de itens:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchServers = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/get-servers`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar servidores:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/user`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar detalhes do usuário:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  return { fetchItems, fetchItemTypes, fetchServers, fetchUserDetails };
};

export default useFetchData;
