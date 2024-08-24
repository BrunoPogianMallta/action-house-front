import React from 'react';
import Modal from 'react-modal';
import Login from './Login';
import '../register/Modal.css'; 

const LoginModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Login</h2>
      <Login />
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default LoginModal;
