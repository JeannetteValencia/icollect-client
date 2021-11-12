// components/navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to="/collections" style={{ textDecoration: 'none' }}>Check Collections</Link></li>
    </ul>
    </nav>
  )
}

export default navbar;
