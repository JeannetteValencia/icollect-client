// components/navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../auth/auth-service'

class Navbar extends Component {
  logoutUser = () => {
    authService.logout().then(() => {
      this.props.getUser(null, false);
    });
  };

  render() {
    const { userIsLoggedIn, userData } = this.props;

    if (userIsLoggedIn) {
      return (
        <div>
          <nav className="nav-style">
          <ul className="nav-bar-ul">
          
            <li>
              <Link to="/collections" style={{ textDecoration: 'none' }}>
                Collections
              </Link>
            </li>
            {userIsLoggedIn &&
             <li>Welcome {userData.username}!</li>}
             <li>
              <Link to="/" style={{ textDecoration: 'none' }}>
                HomePage
              </Link>
            </li>
            <li>
              <Link to="/">
                <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul className="nav-bar-ul-auth">
              <li>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  Login 
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
