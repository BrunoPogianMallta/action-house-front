import React from 'react';
import useResetPassword from '../../hooks/useResetPassword';

import { Link } from 'react-router-dom';

import './ResetPassword.css'; 

function ResetPassword() {
  const {
    email,
    loading,
    error,
    success,
    handleEmailChange,
    handleSubmit
  } = useResetPassword();

  return (
    <div>
      <h2>Recuperar Senha - Real Action House</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Link de Recuperação'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Link de recuperação enviado com sucesso!</p>}
      <div className="links">
        <Link to="/">Voltar para Login</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
