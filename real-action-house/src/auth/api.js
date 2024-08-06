import axios from 'axios';

const API_URL = 'https://action-house.onrender.com/api/v1/';

export const fetchItems = async (token) => {
  const response = await axios.get(`${API_URL}/items`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const fetchItemTypes = async (token) => {
  const response = await axios.get(`${API_URL}/item-types`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.itemTypes; // Certifique-se de que a estrutura está correta
};

export const fetchServers = async (token) => {
  const response = await axios.get(`${API_URL}/servers`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.servers; // Certifique-se de que a estrutura está correta
};

export const buyItem = async (itemId, token) => {
  await axios.post(`${API_URL}/items/buy`, { itemId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const addItem = async (formData, token) => {
  await axios.post(`${API_URL}/items`, formData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const fetchUserDetails = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
