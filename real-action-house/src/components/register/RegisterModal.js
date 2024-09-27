import React from 'react';
import Modal from 'react-modal';
import Register from './Register';


Modal.setAppElement('#root');

const RegisterModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-2xl font-semibold mb-4">Registrar</h2>
      <Register />
      <button 
        onClick={onRequestClose} 
        className="mt-4 w-full bg-gray-300 text-gray-800 font-bold py-2 rounded hover:bg-gray-400 transition duration-200"
      >
        Fechar
      </button>
    </Modal>
  );
};

export default RegisterModal;
