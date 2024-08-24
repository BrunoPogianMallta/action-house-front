// src/hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/useAuth'; 
import { API_URL } from '../config';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!email || !password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const { token, user } = response.data;

      if (token) {
        login(token, user); 
        setMessage('Login bem-sucedido! Você será redirecionado.');
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

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    message,
    error,
  };
};

export default useLogin;
