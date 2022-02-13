import { Link } from 'react-router-dom';
import NavLinkBar from './NavLinkBar';
import Logo from './Logo';
import './navigation.css';

import React from 'react';

const Navigation = () => {
  return (
    <nav id="nav">
      <Link to="/">
        <Logo />
      </Link>
      <NavLinkBar />
    </nav>
  );
};

export default Navigation;
