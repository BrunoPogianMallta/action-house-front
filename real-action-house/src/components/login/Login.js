import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoginMessage from './LoginMessage';
import useLogin from '../../hooks/useLogin';
import ResetPasswordModal from '../resetPassword/ResetPasswordModal';
// import './Login.css';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    message,
    error,
  } = useLogin();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <span onClick={openModal} className="reset-password-link">Esqueci minha senha</span>
      </div>
      <ResetPasswordModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default Login;
