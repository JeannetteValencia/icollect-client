// components/collections/AddCollection.js

import React, { Component } from 'react';
import axios from 'axios';

class AddCollection extends Component {
  state = { title: "", description: "" }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post("http://localhost:5005/api/collections", { title, description }, { withCredentials: true })
    .then( () => {
        this.props.getData();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <h4>Create a new collection</h4>
        <form onSubmit={this.handleFormSubmit} className="form-info">
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} required/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} required/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddCollection;
