import React from 'react';
import Modal from 'react-modal';
import Register from './Register';
import './Modal.css'; 

const RegisterModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Registrar</h2>
      <Register />
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default RegisterModal;
