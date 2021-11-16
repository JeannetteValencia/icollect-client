// components/collections/AddCollection.js

import React, { Component } from 'react';
import axios from 'axios';

class AddCollection extends Component {
  state = { title: "", description: "" }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post(`${process.env.REACT_APP_API_URL}/collections`, { title, description }, { withCredentials: true })
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
      <div className="form-display">
        <h4>Create a new collection</h4>
        <form onSubmit={this.handleFormSubmit} className="form-info" >
          <label>Title:
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} required/>
          </label>
          <label>Description:
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} required/>
          </label>
          <label> 
            <input width='{20%}'background-color='#F4CDD5' type="submit" value="Submit" />
          </label>

        </form>
      </div>
    )
  }
}

export default AddCollection;
