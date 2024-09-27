import { useState } from 'react';
import axiosInstance from '../auth/axiosInstance'; 

const useResetPassword = () => {
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
      setError(error.response?.data?.error || error.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    loading,
    error,
    success,
    handleEmailChange,
    handleSubmit,
  };
};

export default useResetPassword;
