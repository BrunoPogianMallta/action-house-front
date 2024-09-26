import React from 'react';
import '../sidebar/Sidebar.css';  

const Sidebar = ({ user, onLogout }) => (
  <aside className="sidebar">
    <h2>Perfil do Usuário</h2>
    <p><strong>Nome:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Tipo de Conta:</strong> {user.accountType}</p>
    <p><strong>Saldo:</strong> ${user.balance ? user.balance.toFixed(2) : '0.00'}</p>
    <nav className="sidebar-nav">
      {/* <ul>
        <li><a href="/profile">Perfil</a></li>
        <li><a href="/items">Itens</a></li>
        <li><a href="/settings">Configurações</a></li>
      </ul> */}
    </nav>
    <button className="logout-button" onClick={onLogout}>Sair</button>
  </aside>
);

export default Sidebar;
