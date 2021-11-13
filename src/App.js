import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
//import authService from './components/services/auth-services';

import CollectionList from './components/collections/CollectionList';
import Navbar from './components/navbar/Navbar';
import CollectionDetails from './components/collections/CollectionDetails';
//import ItemsDetails from './components/tasks/TaskDetails';

/*import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';*/
//import AddCollection from './components/collections/AddCollection';

class App extends Component {

  /*state = {
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
          this.setState({
            user: data,
            isLoggedIn: true
          });
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
  }*/


  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/collections/:id" component={CollectionDetails}/>
          <Route exact="/collections" component={CollectionList}/>
          

        </Switch>
       
      </div>
    );
  }
}

export default App;