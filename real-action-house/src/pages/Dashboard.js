import React, { useState } from 'react';
import '../styles/Dashboard.css';
import goblinAvatar from '../img/goblin_avatar.png';
import Sidebar from '../components/sidebar/Sidebar';
import ItemsTable from '../components/ItemTable/ItemsTable';
import AddItemModal from '../components/itemModal/AddItemModal';
import DashboardHeader from '../components/dashboardHeader/DashboardHeader';
import TableHeader from '../components/ahTableHeader/AhTableHeader';
import { useDashboardData, useDashboardActions } from '../hooks/useDashboard';
import useFetchData from '../hooks/useFetchData';
import { useAuth } from '../auth/useAuth'; 

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    itemQuantity: 0,
    saleDuration: 12,
    server: '',
    price: 0
  });

  const { fetchItems, fetchItemsByName, fetchItemTypes, fetchServers, fetchUserDetails, handleItemPurchase, handleItemCreation } = useFetchData();
  const { items, itemTypes, servers, user, setItems } = useDashboardData(fetchItems, fetchItemTypes, fetchServers, fetchUserDetails);
  const { handleSearch, handleAction, handleSubmit } = useDashboardActions({ fetchItemsByName, handleItemPurchase, handleItemCreation });

  const { logout } = useAuth(); 

  const onSearchChange = (e) => setSearchTerm(e.target.value);

  const handleLogout = () => {
    logout(); 
  };

  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <div className="dashboard-body">
        <Sidebar user={user} onLogout={handleLogout} />
        <main className="main-content">
          <TableHeader
            goblinAvatar={goblinAvatar}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            onSearch={() => handleSearch(searchTerm, setItems)}
            onSell={() => setShowModal(true)}
          />
          <ItemsTable items={items} onAction={handleAction} />
          {showModal && (
           <AddItemModal
             itemTypes={itemTypes}
             servers={servers}
             onSubmit={() => handleSubmit(formData, setShowModal)}
             onClose={() => setShowModal(false)}
             formData={formData} 
             onFormChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
           />
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
