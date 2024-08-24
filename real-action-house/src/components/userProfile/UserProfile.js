import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css'; 

function UserProfile({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    
    navigate('/');
  };

  return (
    <aside className="user-profile-container">
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Tipo de Conta:</strong> {user.accountType}</p>
      <p><strong>Saldo:</strong> ${user.balance.toFixed(2)}</p>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="/profile">Perfil</a></li>
          <li><a href="/items">Itens</a></li>
          <li><a href="/settings">Configurações</a></li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </aside>
  );
}

export default UserProfile;
