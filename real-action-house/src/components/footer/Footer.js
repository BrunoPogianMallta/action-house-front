import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import LoginModal from '../../components/login/LoginModal';
import RegisterModal from '../../components/register/RegisterModal';

const Footer = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <>
      <footer className="bg-black text-white py-10 flex flex-col items-center w-full mt-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-5 md:px-20 ">
          
          {/* Seção Explore */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <h4 className="mb-4 text-xl font-bold">Explore</h4>
            <ul className="space-y-3 text-lg text-center md:text-left">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                {/* Alterado para abrir o modal de registro */}
                <button
                  onClick={openRegisterModal}
                  className="hover:underline text-white bg-transparent border-none cursor-pointer"
                >
                  Join
                </button>
              </li>
              <li>
                {/* Alterado para abrir o modal de login */}
                <button
                  onClick={openLoginModal}
                  className="hover:underline text-white bg-transparent border-none cursor-pointer"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>

          {/* Seção Contato */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <h4 className="mb-4 text-xl font-bold">Contato</h4>
            <ul className="text-lg text-center md:text-left">
              <li>realactionhouse@mail.com</li>
            </ul>
          </div>

          {/* Seção Social Media */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-xl font-bold">Social Media</h4>
            <ul className="space-y-3 text-lg text-center md:text-left">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaYoutube /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaDiscord /> Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center mt-8 text-base md:text-lg">
          <p>Copyright © 2024 Real Action House, LLC. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Modais */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onRequestClose={closeLoginModal} // Fechamento ao clicar fora ou pressionar Esc
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        onRequestClose={closeRegisterModal} // Fechamento ao clicar fora ou pressionar Esc
      />
    </>
  );
};

export default Footer;
