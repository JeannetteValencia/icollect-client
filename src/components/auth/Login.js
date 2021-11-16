// auth/Login.js

import React, { Component } from 'react';
import authService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { username: '', password: '', errorMsg: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    authService.login(username, password)
      .then(response => {
        this.setState({ username: '', password: '', errorMsg: null });
        if(response){
          this.props.getUser(response, true);
        } else {
          this.setState({errorMsg: "Wrong credentials, try again"})
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="auth-form-style">
        <form onSubmit={this.handleFormSubmit}>
          {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
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
