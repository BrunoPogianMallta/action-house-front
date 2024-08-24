import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config'; 

const useRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setMessage('Cadastro bem-sucedido! Você será redirecionado.');
        navigate('/login');
      } else {
        setMessage('Cadastro bem-sucedido!');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Erro ao cadastrar.');
      } else {
        setError('Erro de rede. Tente novamente mais tarde.');
      }
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSubmit,
    message,
    error,
  };
};

export default useRegister;
