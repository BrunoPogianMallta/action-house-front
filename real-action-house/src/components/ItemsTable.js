import React, { useEffect } from 'react';

const ItemsTable = ({ items, onAction }) => {
  useEffect(() => {
    console.log('Items being displayed:', items);
  }, [items]); // Log only when items change

  return (
    <table className="items-table">
      <thead>
        <tr>
          <th>Nome do Item</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Duração</th>
          <th>Servidor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item) => (
            <tr key={item.itemId} className="clickable-row" onClick={() => onAction(item.itemId)}>
              <td>{item.itemName}</td>
              <td>{item.itemType}</td>
              <td>{item.quantity}</td>
              <td>{item.saleDuration} horas</td>
              <td>{item.server}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Nenhum item disponível.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ItemsTable;
