import React from 'react';

const LoginMessage = ({ message = 'Mensagem padrão', error = '' }) => {
  return (
    <div className="mt-4">
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default LoginMessage;
