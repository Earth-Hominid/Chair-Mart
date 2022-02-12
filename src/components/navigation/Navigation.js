import Logo from './Logo';
import './navigation.css';
import { Link } from 'react-router-dom';

import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
    </nav>
  );
};

export default Navigation;
