import { Link } from 'react-router-dom';
import NavLinkBar from './NavLinkBar';
import Logo from './Logo';
import { StyledNav } from './Navigation.styles';

import React from 'react';

const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/chair-mart">
        <Logo />
      </Link>
      <NavLinkBar />
    </StyledNav>
  );
};

export default Navigation;
