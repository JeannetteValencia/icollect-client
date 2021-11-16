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
        <div className="nav-bar">
          <div className="nav-bar-options">
            <img src="/logo.png" alt="icollect" height='{2rem}'/>
            <Link to="/" style={{ textDecoration: 'none' }}>
                  Home
            </Link>

            <Link to="/collections" style={{ textDecoration: 'none' }}>
                Collections
            </Link>
          </div>
          <div className="greetings">
            {userIsLoggedIn &&
             <p>Welcome {userData.username}!</p>}
             <Link to="/">
                <button onClick={() => this.logoutUser()} className="logout">Logout</button>
              </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
          <div className="nav-bar-options">
            <img src="/logo.png" alt="icollect" height='{2rem}'/>
            <Link to="/" style={{ textDecoration: 'none' }}>
                  Home
            </Link>

            <Link to="/collections" style={{ textDecoration: 'none' }}>
                Collections
            </Link>
          </div>
          <div className="nav-bar-auth-options">
            <Link to="/login" style={{ textDecoration: 'none' }}>
               Login
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
                    Signup
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
