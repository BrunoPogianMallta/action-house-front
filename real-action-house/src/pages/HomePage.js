import React, { useState } from 'react';
import './HomePage.css';
import LoginModal from '../components/login/LoginModal';
import RegisterModal from '../components/register/RegisterModal';


const HomePage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <div className="home-page-container">
      <header className="header">
        <h1>Real Action House</h1>
        <nav className="nav"></nav>
      </header>

      <header className="home-page-header">
        <h1>Bem-vindo à Casa de Leilão</h1>
        <p>Encontre e participe dos melhores leilões de itens do World of Warcraft.</p>
      </header>

      <div className="home-page-content">
        <div className="card" onClick={openLoginModal}>
          <h2>Login</h2>
          <p>Acesse sua conta para gerenciar leilões e suas ofertas.</p>
        </div>
        <div className="card" onClick={openRegisterModal}>
          <h2>Registrar</h2>
          <p>Crie uma nova conta para começar a participar dos leilões.</p>
        </div>
        <div className="card">
          <h2>Casa de Leilão</h2>
          <p>Explore as oportunidades e participe dos leilões ativos.</p>
          <a href="/auction-house" className="card-link">Explorar</a>
        </div>
      </div>

  
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
      />

      
    </div>
  );
};

export default HomePage;
