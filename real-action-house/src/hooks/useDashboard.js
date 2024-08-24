import { useState, useEffect, useCallback } from 'react'; 

export const useDashboardData = (fetchItems, fetchItemTypes, fetchServers, fetchUserDetails) => {
  const [items, setItems] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  const [servers, setServers] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', accountType: '', balance: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsResponse, itemTypesResponse, serversResponse, userResponse] = await Promise.all([
          fetchItems(),
          fetchItemTypes(),
          fetchServers(),
          fetchUserDetails(),
        ]);

        setItems(itemsResponse.data);
        setItemTypes(itemTypesResponse.data.itemTypes || []);
        setServers(serversResponse.data.servers || []);
        setUser(userResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();
  }, [fetchItems, fetchItemTypes, fetchServers, fetchUserDetails]);

  return { items, itemTypes, servers, user, setItems };
};

export const useDashboardActions = ({ fetchItemsByName, handleItemPurchase, handleItemCreation }) => {
  const handleSearch = useCallback(async (searchTerm, setItems) => {
    try {
      const response = await fetchItemsByName(searchTerm);
      setItems(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error.response ? error.response.data : error.message);
    }
  }, [fetchItemsByName]);

  const handleAction = useCallback(async (itemId) => {
    if (window.confirm('Você tem certeza que deseja comprar este item?')) {
      try {
        await handleItemPurchase(itemId);
        alert('Item comprado com sucesso!');
      } catch (error) {
        console.error('Erro ao comprar item:', error.response ? error.response.data : error.message);
      }
    }
  }, [handleItemPurchase]);

  const handleSubmit = useCallback(async (formData, setShowModal) => {
    try {
  
      console.log('Dados enviados para criação:', formData);
      await handleItemCreation(formData);
      alert('Item adicionado para venda com sucesso!');
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao adicionar item:', error.response ? error.response.data : error.message);
    }
  }, [handleItemCreation]);

  return { handleSearch, handleAction, handleSubmit };
};
