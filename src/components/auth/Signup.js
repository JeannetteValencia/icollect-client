// auth/Signup.js

import React, { Component } from 'react';
import  authService from "./auth-service";
import {Link} from 'react-router-dom';
class Signup extends Component {

  state = { username: '', password: '' }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;

    authService.signup(username, password)
    .then(createdUser => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.getUser(createdUser, true);
        this.props.history.push("/collections");
      })

      .catch(() => {
        this.setState({errorMsg: "Password needs to have at least 8 characters and must contain at least one number, one lowercase and one uppercase letter. Username must be unique."})
      });
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <label>
          Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
          Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit"> Signup </button>
        </form>

        <p>
          Already have an account?
          <Link to={"/"}> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;
