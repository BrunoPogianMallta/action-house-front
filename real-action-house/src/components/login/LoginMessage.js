import React from 'react';

const LoginMessage = ({ message = 'Mensagem padrão', error = '' }) => {
    return (
      <div>
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}
      </div>
    );
  };
  

export default LoginMessage;
