import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config'; 
import useFormFields from './useFormFields';
import useMessage from './useMessage';
import { validatePasswordMatch } from '../utils/validation';

const useRegister = () => {
  const navigate = useNavigate();
  const { message, setMessage, error, setError } = useMessage();
  const [fields, handleFieldChange] = useFormFields({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const validationError = validatePasswordMatch(fields.password, fields.confirmPassword);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/register`, {
        name: fields.name,
        email: fields.email,
        password: fields.password,
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
    fields,
    handleFieldChange,
    handleSubmit,
    message,
    error,
  };
};

export default useRegister;
