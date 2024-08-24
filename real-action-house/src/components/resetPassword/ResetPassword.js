import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css'; 

function ResetPassword() {
  return (
    <div>
      <h2>Recuperar Senha - Real Action House</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <button type="submit">Enviar Link de Recuperação</button>
      </form>
      <div className="links">
        <Link to="/">Voltar para Login</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
