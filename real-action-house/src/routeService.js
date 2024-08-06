import axios from 'axios';

const API_URL = 'https://suaapi.com/routes'; // Substitua pela URL da sua API

export const getRoutes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar rotas:', error);
    return [];
  }
};
