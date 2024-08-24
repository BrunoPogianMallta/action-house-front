import { useCallback } from 'react';
import { API_URL } from '../config';
import axios from 'axios';

const useFetchData = () => {
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/items`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });

      return response;
    } catch (error) {
      console.error('Erro ao buscar itens:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchItemsByName = useCallback(async (itemName) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { itemName },
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar itens por nome:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchItemTypes = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/item-types`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar tipos de itens:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchServers = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/get-servers`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar servidores:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/user`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar detalhes do usuário:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const handleItemPurchase = useCallback(async (itemId) => {
    try {
      const response = await axios.post(`${API_URL}/buy-item`, { itemId }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao comprar item:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  const handleItemCreation = useCallback(async (formData) => {
    try {
     
      console.log('Enviando dados para criação do item:', formData);
      const response = await axios.post(`${API_URL}/items`, formData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao adicionar item:', error.response ? error.response.data : error.message);
      throw error;
    }
  }, []);

  return { fetchItems, fetchItemsByName, fetchItemTypes, fetchServers, fetchUserDetails, handleItemPurchase, handleItemCreation };
};

export default useFetchData;
