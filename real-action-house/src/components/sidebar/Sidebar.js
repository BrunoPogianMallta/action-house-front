import React, { useState } from 'react';
import '../sidebar/Sidebar.css';

const Sidebar = ({ user, onLogout }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isExpanded ? '←' : '→'}
      </button>
      {isExpanded && (
        <>
          <h2>Perfil do Usuário</h2>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Tipo de Conta:</strong> {user.accountType}</p>
          <p><strong>Saldo:</strong> ${user.balance ? user.balance.toFixed(2) : '0.00'}</p>
          <nav className="sidebar-nav">
            {/* Adicione links de navegação aqui */}
          </nav>
          <button className="logout-button" onClick={onLogout}>Sair</button>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
