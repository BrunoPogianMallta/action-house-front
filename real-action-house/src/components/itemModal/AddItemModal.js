import React from 'react';

const AddItemModal = ({ itemTypes, servers, onSubmit, onClose, formData, onFormChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const { itemName, itemType, itemQuantity, saleDuration, server, price } = formData;

    
    const saleDurationNumber = parseInt(saleDuration, 10);

    if (!itemName || !itemType || !itemQuantity || isNaN(saleDurationNumber) || !server || !price || isNaN(price)) {
      console.error('Erro: Campos obrigatórios estão faltando ou são inválidos.');
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    
    onSubmit({
      ...formData,
      saleDuration: saleDurationNumber, 
    });

    console.log('Dados enviados para criação:', {
      ...formData,
      saleDuration: saleDurationNumber,
    });
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
              onChange={onFormChange}
              required
            />
          </label>
          <label>
            Tipo do Item
            <select
              name="itemType"
              value={formData.itemType}
              onChange={onFormChange}
              required
            >
              <option value="">Selecione o tipo</option>
              {itemTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            Quantidade
            <input
              type="number"
              name="itemQuantity"
              value={formData.itemQuantity}
              onChange={onFormChange}
              required
              min="1"
              step="1"
            />
          </label>
          <label>
            Duração
            <select
              name="saleDuration"
              value={formData.saleDuration}
              onChange={onFormChange} 
              required
            >
              <option value="">Selecione a duração</option>
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
              onChange={onFormChange} 
              required
            >
              <option value="">Selecione o servidor</option>
              {servers.map((server, index) => (
                <option key={index} value={server}>{server}</option>
              ))}
            </select>
          </label>
          <label>
            Preço
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={onFormChange} 
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
