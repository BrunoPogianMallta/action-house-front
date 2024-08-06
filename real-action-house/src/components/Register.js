import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('https://action-house.onrender.com/api/v1/register', {
        name,
        email,
        password,
      });

      if (response.data.message) {
        setMessage(response.data.message);
      } else {
        setMessage('Registro bem-sucedido!');
      }
    } catch (error) {
      if (error.response) {
        // Tratar mensagens específicas de erro
        switch (error.response.status) {
          case 400:
            setError('Dados fornecidos são inválidos. Verifique os campos e tente novamente.');
            break;
          case 409:
            setError('Usuário já cadastrado .');
            break;
          case 401:
            setError('Senha incorreta. Verifique e tente novamente.');
            break;
          default:
            setError(error.response.data.message || 'Erro ao fazer registro.');
        }
      } else {
        setError('Erro de rede. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Registrar - Real Action House</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Registrar</button>
      </form>
      {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>}
    </div>
  );
}

export default Register;
