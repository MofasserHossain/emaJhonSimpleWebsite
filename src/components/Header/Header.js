import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt={logo} />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/manage">Manage Inventory here</a>
      </nav>
    </div>
  );
};

export default Header;
