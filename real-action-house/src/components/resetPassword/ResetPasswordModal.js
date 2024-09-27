import React, { useState } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import Modal from 'react-modal';
import './ResetPasswordModal.css'; 
 

const ResetPasswordModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
     
      const response = await axiosInstance.post('/request-password-reset', { email });

      if (response.status !== 200) {
        throw new Error('Erro ao enviar o link de recuperação de senha.');
      }

      setSuccess(true); 
    } catch (error) {
      setError(error.response?.data?.message || 'Erro ao enviar o link de recuperação de senha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reset Password Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2>Redefinição de Senha</h2>
        <p>Digite o seu e-mail no campo abaixo e lhe enviaremos uma nova senha.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Redefinir Senha'}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Link de redefinição de senha enviado com sucesso!</p>}
        <button onClick={onRequestClose}>Fechar</button>
      </div>
    </Modal>
  );
};

export default ResetPasswordModal;
