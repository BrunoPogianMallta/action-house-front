import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Para acessar parâmetros da URL
import axiosInstance from '../auth/axiosInstance';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  // Obtém o token da URL
  const { token } = useParams(); 

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
      console.log('Token:', token);
      console.log('Nova Senha:', newPassword);

      // Enviando o token e a nova senha para o backend
      const response = await axiosInstance.post('/reset-password', {
        token,
        newPassword,
      });

      setSuccess(true);
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error.response ? error.response.data : error);
      setError(error.response ? error.response.data.error : 'Erro ao redefinir a senha.');
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
