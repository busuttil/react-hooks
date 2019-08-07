import React from 'react';
import { A } from 'hookrouter';

import './header.scss';

const Header = () => (
  <div className="header">
    <A className="header-link" href="/">
      Films
    </A>
    <A className="header-link" href="/counter">
      Counter
    </A>
  </div>
);

export default Header;
