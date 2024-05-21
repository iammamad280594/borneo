import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className="container">
        <img src={logo} alt="logo" className="logo" />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/product" className={location.pathname === '/product' ? 'active' : ''}>Product</Link></li>
          <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link></li>
        </ul>
        <img src={Menu_icon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
