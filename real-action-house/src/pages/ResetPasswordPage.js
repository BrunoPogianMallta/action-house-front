import React, { useState } from 'react';
import { API_URL } from '../config';
import './ResetPasswordPage.css'; 

const ResetPasswordPage = ({ token }) => {
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      console.log('Token:', token); // Verifica o token
      console.log('Nova Senha:', newPassword); // Verifica a nova senha
  
      const response = await fetch(`${API_URL}/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }), // Formata o corpo da requisição
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao redefinir a senha.');
      }
  
      setSuccess(true);
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <h2>Redefinir Senha</h2>
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="form-group">
            <label htmlFor="newPassword">Nova Senha:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
              placeholder="Digite sua nova senha"
            />
          </div>
          <button type="submit" disabled={loading} className="submit-button">
            {loading ? 'Redefinindo...' : 'Redefinir Senha'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Senha redefinida com sucesso!</p>}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
