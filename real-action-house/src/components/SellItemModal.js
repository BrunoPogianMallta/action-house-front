import React from 'react';

function SellItemModal({ showModal, setShowModal, formData, handleFormChange, handleSubmit, itemTypes, servers }) {
  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
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
                Duração da Venda (horas)
                <input
                  type="number"
                  name="saleDuration"
                  value={formData.saleDuration}
                  onChange={handleFormChange}
                  required
                />
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
                  onChange={handleFormChange}
                  required
                />
              </label>
              <button type="submit">Adicionar</button>
              <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SellItemModal;
