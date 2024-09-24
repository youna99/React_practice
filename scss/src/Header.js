import React from 'react';
import './styles/Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <img src="/images/logo.jpg" alt="logo" className="logo" />
      <div className="search">
        <input type="text" className="input" />
        <button type="button" className="button">
          검색
        </button>
      </div>
    </nav>
  );
};

export default Header;
