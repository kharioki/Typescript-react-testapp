import * as React from 'react';

import { Logo, StyledHeader } from './styles/NavStyles';
import SickButton from './styles/SickButton';

const NavBar = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <a> Typescript App</a>
      </Logo>
      <div className="sub-bar">
        <SickButton>About</SickButton>
        <SickButton>Login</SickButton>
      </div>
    </div>
  </StyledHeader>
);

export default NavBar;
