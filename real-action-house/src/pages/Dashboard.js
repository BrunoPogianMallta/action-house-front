import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';
import goblinAvatar from '../img/goblin_avatar.png'; // Verifique se o caminho está correto
import Sidebar from '../components/Sidebar';
import ItemsTable from '../components/ItemsTable';
import AddItemModal from '../components/AddItemModal';
import useFetchData from '../hooks/useFetchData';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState({
    name: 'Nome do Usuário',
    email: 'usuario@example.com',
    accountType: 'Standard',
    balance: 1000.0
  });

  const [itemTypes, setItemTypes] = useState([]);
  const [servers, setServers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    saleDuration: 12,
    server: '',
    price: 0
  });

  const { fetchItems, fetchItemTypes, fetchServers, fetchUserDetails } = useFetchData();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const itemsResponse = await fetchItems();
        if (isMounted) setItems(itemsResponse.data);

        const itemTypesResponse = await fetchItemTypes();
        if (isMounted) {
          setItemTypes(itemTypesResponse.data.itemTypes || []);
        }

        const serversResponse = await fetchServers();
        if (isMounted) {
          setServers(serversResponse.data.servers || []);
        }

        const userResponse = await fetchUserDetails();
        if (isMounted) setUser(userResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.response ? error.response.data : error.message);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchItems, fetchItemTypes, fetchServers, fetchUserDetails]);

  const handleSearch = () => {
    const filteredItems = items.filter(item => 
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleAction = async (itemId) => {
    const confirmPurchase = window.confirm('Você tem certeza que deseja comprar este item?');
    if (confirmPurchase) {
      try {
        await axios.post('http://localhost:3001/api/v1/items/buy', { itemId }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        alert('Item comprado com sucesso!');
      } catch (error) {
        console.error('Erro ao comprar item:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3001/api/v1/items', formData, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Item adicionado para venda com sucesso!');
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao adicionar item:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Real Action House</h1>
      </header>
      <div className="dashboard-body">
        <Sidebar user={user} />
        <main className="main-content">
          <div className="table-header">
            <img src={goblinAvatar} alt="Goblin Avatar" className="goblin-avatar" />
            <input
              type="text"
              placeholder="Buscar item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Pesquisar</button>
            <button onClick={() => setShowModal(true)} className="sell-button">Vender Item</button>
          </div>
          <ItemsTable items={items} onAction={handleAction} />
          {showModal && (
            <AddItemModal
              itemTypes={itemTypes}
              servers={servers}
              onSubmit={handleSubmit}
              onClose={() => setShowModal(false)}
              formData={formData}
              onFormChange={handleFormChange}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
