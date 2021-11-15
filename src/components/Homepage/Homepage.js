// components/navbar/Navbar.js

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    const { userIsLoggedIn, userData } = this.props;

    if (userIsLoggedIn) {
      return (
        <div>
          <h1>Welcome Back to iCollect</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome to iCollect</h1>
        </div>
      );
    }
  }
}

export default Homepage;
