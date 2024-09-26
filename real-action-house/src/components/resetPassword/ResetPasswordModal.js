import React, { useState } from 'react';
import Modal from 'react-modal';
import './ResetPasswordModal.css'; // Certifique-se de que o caminho está correto

const ResetPasswordModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/v1/request-password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o link de recuperação de senha.');
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
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
        {/* <p>Já possui cadastro? <a href="/login">Faça seu login.</a></p> */}
        <button onClick={onRequestClose}>Fechar</button>
      </div>
    </Modal>
  );
};

export default ResetPasswordModal;
