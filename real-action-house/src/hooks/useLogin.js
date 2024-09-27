import { useState } from 'react';
import axiosInstance from '../auth/axiosInstance';
import { useAuth } from '../auth/useAuth';

const useLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!credentials.email || !credentials.password) {
      setError('Todos os campos são obrigatórios.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!validateForm()) return;

    try {
      const { data: { token, user } } = await axiosInstance.post('/login', credentials);

      if (!token) {
        throw new Error('Token não recebido.');
      }

      setMessage('Login bem-sucedido! Você será redirecionado.');
      login(token, user);  // Executa o login após a mensagem
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = {
        400: 'Dados fornecidos são inválidos. Verifique o email e a senha.',
        401: 'Email ou senha incorretos. Verifique suas credenciais e tente novamente.',
      };

      setError(errorMessage[status] || data.message || 'Erro ao fazer login.');
    } else {
      setError(error.message || 'Erro de rede. Tente novamente mais tarde.');
    }
  };

  return {
    ...credentials,
    setEmail: (email) => setCredentials((prev) => ({ ...prev, email })),
    setPassword: (password) => setCredentials((prev) => ({ ...prev, password })),
    handleInputChange,
    handleSubmit,
    message,
    error,
  };
};

export default useLogin;
