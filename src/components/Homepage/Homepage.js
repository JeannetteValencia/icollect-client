// components/navbar/Navbar.js

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class Homepage extends Component {

  render() {
    return(
      <div>
        <h4>iCollect</h4>
        <h6>an App to keep track of your favourite collections!</h6>
        <img src="/homepage.jpeg" alt="background"/>

        {/*<div className="homepage">
        <img src='/homepage.jpeg' height={'750px'} width={'100%'} alt="good-coffee-mood"/>*/}
      </div>
    )

  }
}

export default Homepage;
