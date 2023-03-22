import React from 'react';
import logo from '../images/troll-face.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">Create your own Meme</h4>
    </header>
  );
};

export default Header;
