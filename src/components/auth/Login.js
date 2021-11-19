// auth/Login.js

import React, { Component } from 'react';
import authService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { username: '', password: '', errorMsg: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    authService.login(username, password)
      .then(response => {
        this.setState({ username: '', password: '', errorMsg: null });
        this.props.getUser(response, true);
        this.props.history.push("/");
      })

      .catch(() => this.setState({errorMsg: "Wrong credentials, try again"}));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
          </label>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </label>

          <button type="submit"> Login </button>
        </form>

        <p>
          Don't have account?
          <Link to={'/signup'}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default Login;
