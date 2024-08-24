import React from 'react';

const AhTableHeader = ({ goblinAvatar, searchTerm, onSearchChange, onSearch, onSell }) => (
  <div className="table-header">
    <img src={goblinAvatar} alt="Goblin Avatar" className="goblin-avatar" />
    <input
      type="text"
      placeholder="Buscar item..."
      value={searchTerm}
      onChange={onSearchChange}
      className="search-input"
    />
    <button onClick={onSearch} className="search-button">Pesquisar</button>
    <button onClick={onSell} className="sell-button">Vender Item</button>
  </div>
);

export default AhTableHeader;
