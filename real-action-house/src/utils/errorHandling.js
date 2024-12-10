// Lidar com erros de requisição da API
export const handleApiError = (error, setError) => {
    if (error.response) {
      setError(error.response.data.message || 'Erro ao cadastrar.');
    } else {
      setError('Erro de rede. Tente novamente mais tarde.');
    }
  };
  
  // Lidar com erros de validação de senha
  export const handlePasswordValidationError = (password, confirmPassword, setError) => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return false;
    }
  
    if (password.length < 4 || password.length > 12) {
      setError('A senha deve ter entre 4 e 12 caracteres.');
      return false;
    }
  
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    if (!hasUppercase || !hasLowercase) {
      setError('A senha deve conter letras maiúsculas e minúsculas.');
      return false;
    }
  
    return true;
  };
  
  // Lidar com erro de validação de e-mail
  export const handleEmailValidationError = (email, setError) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return false;
    }
    return true;
  };
  