import axiosInstance from '../auth/axiosInstance'; 
import { useNavigate } from 'react-router-dom';
import useFormFields from './useFormFields';
import useMessage from './useMessage';
import { validatePasswordMatch } from '../utils/validation';
import { useAuth } from '../auth/useAuth'; 
import { useState } from 'react'; 

const useRegister = () => {
  const navigate = useNavigate();
  const { message, setMessage, error, setError } = useMessage();
  const [fields, handleFieldChange] = useFormFields({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const { login } = useAuth(); 
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true); 

    const validationError = validatePasswordMatch(fields.password, fields.confirmPassword);
    if (validationError) {
      console.log('Validation Error:', validationError);
      setError(validationError);
      setLoading(false); 
      return;
    }

    try {
      const response = await axiosInstance.post('/register', {
        name: fields.name,
        email: fields.email,
        password: fields.password,
      });
    
      console.log('Registro Response:', response.data);
    
      if (response.data.message === 'Usuário registrado com sucesso!') {
        const loginResponse = await axiosInstance.post('/login', {
          email: fields.email,
          password: fields.password,
        });
    
        console.log('Login Response:', loginResponse.data);
    
        if (loginResponse.data.token) {
          login(loginResponse.data.token, loginResponse.data.user);
          console.log('Login bem-sucedido. Redirecionando para o dashboard...');
          setMessage('Cadastro e login bem-sucedidos! Você será redirecionado.');

        } else {
          console.log('Falha ao logar após cadastro.');
          setMessage('Cadastro bem-sucedido, mas falha ao logar.');
        }
      } else {
        console.log('Erro ao cadastrar:', response.data.message); 
        setMessage('Erro ao cadastrar.'); 
      }
    } catch (error) {
      console.error('Erro no bloco catch:', error);
      if (error.response) {
        console.error('Erro de resposta da API:', error.response);
        setError(error.response.data.message || 'Erro ao cadastrar.');
      } else {
        setError('Erro de rede. Tente novamente mais tarde.');
      }
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
