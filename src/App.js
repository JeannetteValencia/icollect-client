import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import authService from './components/auth/auth-service';

import CollectionList from './components/collections/CollectionList';
import Navbar from './components/navbar/Navbar';
import CollectionDetails from './components/collections/CollectionDetails';
import ItemDetails from './components/items/ItemDetails';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';

import Homepage from './components/Homepage/Homepage';
import Footer from './components/footer/footer'

class App extends Component {

  state = {
    isLoggedIn: false,
    user: null
  };

  getTheUser = (userObj, loggedIn) => {
    this.setState({
      isLoggedIn: loggedIn,
      user: userObj
    });
  };


  fetchUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then(data => {
          if(data){
            this.setState({
              user: data,
              isLoggedIn: true
            });
          } else {
            this.setState({
              user: null,
              isLoggedIn: false
            });
          }
        })
        .catch(err => {
          this.setState({
            user: null,
            isLoggedIn: false
          });
        });
    }
  };


  componentDidMount() {
    this.fetchUser();
  }


  render() {
    return (
      <div className="App">
        <Navbar userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} getUser={this.getTheUser} />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/login" render={props => <Login {...props} getUser={this.getTheUser} />} />
          <Route exact path="/signup" render={props => <Signup {...props} getUser={this.getTheUser} />} />
          <Route exact path="/collections" render={props => <CollectionList {...props} userData={this.state.user}/>}/>
          <ProtectedRoute
            user={this.state.user}
            exact
            path="/collections/:id"
            component={CollectionDetails}
            />
            <ProtectedRoute
            user={this.state.user}
            exact
            path="/items/:id"
            component={ItemDetails}
          />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;