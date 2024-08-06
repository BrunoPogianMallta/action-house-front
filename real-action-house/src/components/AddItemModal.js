import React, { useState } from 'react';

const AddItemModal = ({ itemTypes, servers, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    saleDuration: 12,
    server: '',
    price: 0
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Adicionar Item para Venda</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Item
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleFormChange}
              required
            />
          </label>
          <label>
            Tipo do Item
            <select
              name="itemType"
              value={formData.itemType}
              onChange={handleFormChange}
              required
            >
              <option value="">Selecione o tipo</option>
              {itemTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            Duração
            <select
              name="saleDuration"
              value={formData.saleDuration}
              onChange={handleFormChange}
              required
            >
              <option value="12">12 horas</option>
              <option value="24">24 horas</option>
              <option value="48">48 horas</option>
            </select>
          </label>
          <label>
            Servidor
            <select
              name="server"
              value={formData.server}
              onChange={handleFormChange}
              required
            >
              <option value="">Selecione o servidor</option>
              {servers.map((server, index) => (
                <option key={index} value={server.serverName}>{server.serverName}</option>
              ))}
            </select>
          </label>
          <label>
            Preço
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleFormChange}
              required
              min="0"
              step="0.01"
            />
          </label>
          <div className="modal-buttons">
            <button type="submit">Adicionar Item</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
