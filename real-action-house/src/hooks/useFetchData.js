import { useCallback } from 'react';
import axios from 'axios';

const useFetchData = () => {
  // Função para buscar itens
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get('https://action-house.onrender.com/api/v1/items', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar itens:', error.response ? error.response.data : error.message);
      throw error; // Repassa o erro para ser tratado no componente
    }
  }, []);

  // Função para buscar itens por nome
  const fetchItemsByName = useCallback(async (itemName) => {
    try {
      const response = await axios.get('https://action-house.onrender.com/api/v1/search', {
        params: { itemName },
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar itens por nome:', error.response ? error.response.data : error.message);
      throw error; // Repassa o erro para ser tratado no componente
    }
  }, []);

  // Função para buscar tipos de itens
  const fetchItemTypes = useCallback(async () => {
    try {
      const response = await axios.get('https://action-house.onrender.com/api/v1/item-types', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar tipos de itens:', error.response ? error.response.data : error.message);
      throw error; // Repassa o erro para ser tratado no componente
    }
  }, []);

  // Função para buscar servidores
  const fetchServers = useCallback(async () => {
    try {
      const response = await axios.get('https://action-house.onrender.com/api/v1/get-servers', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar servidores:', error.response ? error.response.data : error.message);
      throw error; // Repassa o erro para ser tratado no componente
    }
  }, []);

  // Função para buscar detalhes do usuário
  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get('https://action-house.onrender.com/api/v1/user', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      return response;
    } catch (error) {
      console.error('Erro ao buscar detalhes do usuário:', error.response ? error.response.data : error.message);
      throw error; // Repassa o erro para ser tratado no componente
    }
  }, []);

  return { fetchItems, fetchItemsByName, fetchItemTypes, fetchServers, fetchUserDetails };
};

export default useFetchData;
