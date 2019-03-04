import * as React from 'react';
import { Link } from 'react-router-dom';

import { Logo, StyledHeader } from './styles/NavStyles';
import SickButton from './styles/SickButton';

const NavBar = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link to="/">
          <a> Typescript App</a>
        </Link>
      </Logo>

      <div className="sub-bar">
        <Link to="/about">
          <SickButton>About</SickButton>
        </Link>
        <Link to="/login">
          <SickButton>Login</SickButton>
        </Link>
      </div>
    </div>
  </StyledHeader>
);

export default NavBar;
