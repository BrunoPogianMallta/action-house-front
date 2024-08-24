import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './AuctionHouse.css';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Footer from '../components/footer/Footer'; 


Modal.setAppElement('#root');

const AuctionHouse = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <div className="auction-house-container">
      <header className="header">
        <h1><Link to="/">Real Action House</Link></h1>
        <nav className="nav">
          <div onClick={openRegisterModal} className="nav-link">Cadastrar-se</div>
          <div onClick={openLoginModal} className="nav-link">Login</div>
        </nav>
      </header>
      
      <main className="main-content">
        <section className="auction-house-header">
          <h1>Descubra as Vantagens da Real Action House</h1>
          <p>A Real Action House oferece uma experiência única e segura para a compra de itens com dinheiro real.</p>
        </section>

        <section className="auction-house-section">
          <div className="section-title">
            <h2>Diminuição do Tempo de Farm</h2>
          </div>
          <div className="section-content">
            <div className="text-content">
              <p>Economize seu tempo valioso ao adquirir itens desejados diretamente, sem precisar passar horas farmando. Com a Real Action House, você pode focar no que realmente importa: aproveitar o jogo.</p>
            </div>
            <div className="image-content">
              <img src={require('../img/time-is-money.png')} alt="Diminuição do Tempo de Farm" />
            </div>
          </div>
        </section>

        <section className="auction-house-section">
          <div className="section-title">
            <h2>Preços Acessíveis</h2>
          </div>
          <div className="section-content">
            <div className="text-content">
              <p>Oferecemos preços competitivos para garantir que você obtenha o melhor valor pelo seu dinheiro. Com diversas opções e promoções, você encontrará o que procura a preços que se encaixam no seu orçamento.</p>
            </div>
            <div className="image-content">
              <img src={require('../img/preco-acessivel.jpg')} alt="Preços Acessíveis" />
            </div>
          </div>
        </section>

        <section className="auction-house-section">
            <div className="section-title">
                <h2>Segurança na Compra</h2>
            </div>
            <div className="section-content">
                <div className="image-content">
                <img src={require('../img/goblin-gordo.png')} alt="Segurança na Compra" />
                </div>
                <div className="text-content">
                    <p>Na Real Action House, a segurança das suas transações é nossa prioridade. Implementamos medidas rigorosas para proteger suas informações e garantir uma experiência de compra segura e confiável.</p>
                </div>
            </div>
        </section>

        <section className="auction-house-section">
          <div className="section-title">
            <h2>Outras Vantagens</h2>
          </div>
          <div className="section-content">
            <p>Além das vantagens mencionadas, oferecemos suporte ao cliente dedicado, uma plataforma intuitiva e a garantia de uma experiência de compra satisfatória.</p>
          </div>
        </section>
      </main>

      {/* Modal de Login */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Login</h2>
        <Login />
        <button onClick={closeLoginModal} className="modal-close-button">Fechar</button>
      </Modal>

      {/* Modal de Register */}
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Registrar</h2>
        <Register />
        <button onClick={closeRegisterModal} className="modal-close-button">Fechar</button>
      </Modal>

      <Footer /> 
    </div>
  );
}

export default AuctionHouse;
