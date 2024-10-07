import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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
    <div className="relative font-sans text-gray-800">
      <div 
        className="absolute inset-0 bg-cover opacity-50 z-[-1]" 
        style={{ backgroundImage: `url(${require('../img/fundo_wow.png')})` }}
      />

      <header className="fixed top-0 left-0 w-full bg-black text-white p-5 flex justify-between items-center z-50">
        <h1 className="text-2xl">
          <Link to="/">Real Action House</Link>
        </h1>
        <nav className="flex gap-5">
          <div onClick={openRegisterModal} className="cursor-pointer hover:underline text-lg">Cadastrar-se</div>
          <div onClick={openLoginModal} className="cursor-pointer hover:underline text-lg">Login</div>
        </nav>
      </header>

      <main className="pt-24 px-5">
        <section className="text-center my-8 bg-white bg-opacity-60 rounded-lg p-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-5">Descubra as Vantagens da Real Action House</h1>
          <p className="text-xl font-bold text-gray-800 ">A Real Action House oferece uma experiência única e segura para a compra de itens com dinheiro real.</p>
        </section>

        <section className="bg-white bg-opacity-60 rounded-lg shadow-lg p-5 mb-10">
          <div className="text-center mb-5">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Diminuição do Tempo de Farm</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex-1 text-left max-w-[100%] md:max-w-[70%] mb-4 md:mb-0 md:pr-10">
              <p className="text-lg md:text-5xl leading-relaxed">Economize seu tempo valioso ao adquirir itens desejados diretamente, sem precisar passar horas farmando. Com a Real Action House, você pode focar no que realmente importa: aproveitar o jogo.</p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <img 
                src={require('../img/time-is-money.png')} 
                alt="Diminuição do Tempo de Farm" 
                className="w-full h-auto max-w-[250px] md:max-w-[400px]" 
              />
            </div>
          </div>
        </section>




        <section className="bg-white bg-opacity-60 rounded-lg shadow-lg p-5 mb-10">
          <div className="text-center mb-5">
            <h2 className="text-5xl font-bold text-gray-900">Preços Acessíveis</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex-1 text-left max-w-[90%] md:max-w-[70%] mb-4 md:mb-0 md:pr-10">
              <p className="text-2xl md:text-4xl leading-relaxed">
                Oferecemos preços competitivos para garantir que você obtenha o melhor valor pelo seu dinheiro. Com diversas opções e promoções, você encontrará o que procura a preços que se encaixam no seu orçamento.
              </p>
            </div>
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <img 
                src={require('../img/preco-acessivel.jpg')} 
                alt="Preços Acessíveis" 
                className="w-full h-auto max-w-[300px] md:max-w-[500px]" 
              />
            </div>
          </div>
        </section>



        <section className="bg-white bg-opacity-60 rounded-lg shadow-lg p-5 mb-10">
          <div className="text-center mb-5">
            <h2 className="text-5xl font-bold text-gray-900">Segurança na Compra</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0">
              <img 
                src={require('../img/goblin-gordo.png')} 
                alt="Segurança na Compra" 
                className="w-full h-auto max-w-[300px] md:max-w-[500px]" 
              />
            </div>
            <div className="flex-1 text-left max-w-[90%] md:max-w-[70%] md:pl-10">
              <p className="text-lg md:text-5xl leading-relaxed">
                Na Real Action House, a segurança das suas transações é nossa prioridade. Implementamos medidas rigorosas para proteger suas informações e garantir uma experiência de compra segura e confiável.
              </p>
            </div>
          </div>
        </section>


        <section className="bg-white bg-opacity-60 rounded-lg shadow-lg p-5 mb-10">
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-gray-900">Outras Vantagens</h2>
          </div>
          <div>
            <p className="text-xl font-bold text-center">Além das vantagens mencionadas, oferecemos suporte ao cliente dedicado, uma plataforma intuitiva e a garantia de uma experiência de compra satisfatória.</p>
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
        <h2 className="text-2xl mb-4">Login</h2>
        <Login />
        <button onClick={closeLoginModal} className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Fechar</button>
      </Modal>

      {/* Modal de Register */}
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl mb-4">Registrar</h2>
        <Register />
        <button onClick={closeRegisterModal} className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Fechar</button>
      </Modal>

      
    </div>
  );
}

export default AuctionHouse;
