export const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword ? null : 'As senhas não coincidem.';
  };
  
  // Validação de e-mail
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validação de senha
export const isValidPassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  return (
    password.length >= 4 &&
    password.length <= 12 &&
    hasUppercase &&
    hasLowercase
  );
};
