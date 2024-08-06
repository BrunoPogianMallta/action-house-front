import React from 'react';

const ItemsTable = ({ items, onAction }) => (
  <table className="items-table">
    <thead>
      <tr>
        <th>Nome do Item</th>
        <th>Tipo</th>
        <th>Duração</th>
        <th>Servidor</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      {items.length > 0 ? (
        items.map((item, index) => (
          <tr key={index} className="clickable-row" onClick={() => onAction(item.itemId)}>
            <td>{item.itemName}</td>
            <td>{item.itemType}</td>
            <td>{item.saleDuration} horas</td>
            <td>{item.server}</td>
            <td>${item.price.toFixed(2)}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5">Nenhum item disponível.</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ItemsTable;
