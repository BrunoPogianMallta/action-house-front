import axiosInstance from '../auth/axiosInstance';
import { useNavigate } from 'react-router-dom';
import useFormFields from './useFormFields';
import useMessage from './useMessage';
import { handleApiError, handlePasswordValidationError, handleEmailValidationError } from '../utils/errorHandling';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../utils/messages'; // Importando as mensagens
import { useAuth } from '../auth/useAuth';
import { useState } from 'react';

const useRegister = () => {
  const navigate = useNavigate();
  const { message, setMessage, error, setError } = useMessage();
  const [fields, handleFieldChange] = useFormFields({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    // Validação de senha
    if (!handlePasswordValidationError(fields.password, fields.confirmPassword, setError)) {
      setLoading(false);
      return;
    }

    // Validação de e-mail
    if (!handleEmailValidationError(fields.email, setError)) {
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.post('/register', {
        name: fields.name,
        email: fields.email,
        password: fields.password,
      });

      if (response.data.message === SUCCESS_MESSAGES.registrationSuccess) {
        const loginResponse = await axiosInstance.post('/login', {
          email: fields.email,
          password: fields.password,
        });

        if (loginResponse.data.token) {
          login(loginResponse.data.token, loginResponse.data.user);
          setMessage(SUCCESS_MESSAGES.loginSuccess);
        } else {
          setMessage(SUCCESS_MESSAGES.registrationLoginFail);
        }
      } else {
        setMessage(ERROR_MESSAGES.registrationFail);
      }
    } catch (error) {
      handleApiError(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return {
    fields,
    handleFieldChange,
    handleSubmit,
    message,
    error,
    loading,
  };
};

export default useRegister;
