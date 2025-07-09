import React, { useState } from 'react';
import { FiMenu, FiX, FiYoutube } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>다독다독</h2>
            <span>BookTalk</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={toggleMenu}>홈</a>
            <a href="#videos" onClick={toggleMenu}>추천영상</a>
            <a href="#cast" onClick={toggleMenu}>출연진</a>
            <a href="#books" onClick={toggleMenu}>도서판매</a>
            <a href="#chatbot" onClick={toggleMenu}>AI 챗봇</a>
            <a href="#contact" onClick={toggleMenu}>문의하기</a>
          </nav>

          <div className="nav-actions">
            <a 
              href="https://www.youtube.com/@dadokbooktalk" 
              className="youtube-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube size={24} />
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;