// components/navbar/Navbar.js

import React, { Component } from 'react';
import Footer from '../footer/footer';

class Homepage extends Component {

  render() {
    return(
      <>
      <h1>Create - Follow - Learn from Collections</h1>
      <div className="homepage-container">
        <div className="homepage">
          <img src="/classes.jpeg" alt="background"/>
          <p>Improve Language Skills</p>
        </div>

        <div className="homepage">
          <img src="/makefriends.jpeg" alt="background"/>
          <p>Interact with Friends</p>
        </div>

        <div className="homepage">
          <img src="/therapy.png" alt="background"/>
          <p>Promote Intrapersonal Skills</p>
        </div>
      </div>
      <Footer/>
      </>
    
    )

  }
}

export default Homepage;
