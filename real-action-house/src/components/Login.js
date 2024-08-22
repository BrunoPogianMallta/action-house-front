import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/v1/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        // Armazena o token no localStorage
        localStorage.setItem('token', token);

        // Opcional: buscar dados do usuário com o token
        // const userResponse = await axios.get('http://localhost:3001/api/v1/user', {
        //   headers: { Authorization: `Bearer ${token}` }
        // });
        // console.log(userResponse.data);

        setMessage('Login bem-sucedido! Você será redirecionado.');
        navigate('/dashboard');  // Redireciona para o Dashboard
      } else {
        setMessage('Login bem-sucedido!');
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setError('Dados fornecidos são inválidos. Verifique o email e a senha.');
            break;
          case 401:
            setError('Email ou senha incorretos. Verifique suas credenciais e tente novamente.');
            break;
          default:
            setError(error.response.data.message || 'Erro ao fazer login.');
        }
      } else {
        setError('Erro de rede. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login - Real Action House</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="submit-button">Login</button>
      </form>
      {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>}
      <div className="links-container">
        <Link to="/register" className="link">Cadastrar-se</Link>
        <Link to="/reset-password" className="link">Esqueci minha senha</Link>
      </div>
    </div>
  );
}

export default Login;
