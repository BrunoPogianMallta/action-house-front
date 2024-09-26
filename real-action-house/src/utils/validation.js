export const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword ? null : 'As senhas não coincidem.';
  };
  