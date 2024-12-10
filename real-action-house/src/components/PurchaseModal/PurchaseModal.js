import React from 'react';

const PurchaseModal = ({ item, onConfirm, onCancel }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmar Compra</h2>
        <p>Você deseja comprar o item <strong>{item.name}</strong> por <strong>{item.price}</strong>?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button">Sim</button>
          <button onClick={onCancel} className="cancel-button">Não</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
