import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginMessage from './LoginMessage';
import useLogin from '../../hooks/useLogin';
import './Login.css';

const Login = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    message,
    error,
  } = useLogin();

  return (
    <div className="login-container">
      <h2>Login - Real Action House</h2>
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <LoginMessage message={message} error={error} />
      <div className="links-container">
        <Link to="/register" className="link">Cadastrar-se</Link>
        <Link to="/reset-password" className="link">Esqueci minha senha</Link>
      </div>
    </div>
  );
};

export default Login;
