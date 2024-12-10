import React, { useEffect, useState } from 'react';

const ItemsTable = ({ items, onAction }) => {
  const [remainingTimes, setRemainingTimes] = useState([]);

  useEffect(() => {
    const calculateRemainingTimes = () => {
      return items.map(item => {
        const now = new Date();
        const expirationDate = new Date(item.saleExpirationDate);
        const timeLeft = expirationDate - now;

        if (timeLeft <= 0) return 'Expired';

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return `${hours}h ${minutes}m `;
      });
    };

    setRemainingTimes(calculateRemainingTimes());

    const intervalId = setInterval(() => {
      setRemainingTimes(calculateRemainingTimes());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [items]);

  return (
    <table className="items-table">
      <thead>  
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>unit</th>
          {/* <th>Duração</th> */}
          <th>Servidor</th>
          <th>Preço</th>
          <th>Tempo </th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item, index) => (
            <tr key={item.itemId} className="clickable-row" onClick={() => onAction(item.itemId)}>
              <td>{item.itemName}</td>
              <td>{item.itemType}</td>
              <td>{item.quantity}</td>
              {/* <td>{item.saleDuration} horas</td> */}
              <td>{item.server}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{remainingTimes[index]}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">Nenhum item disponível.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ItemsTable;
