// components/collections/AddCollection.js

import React, { Component } from 'react';
import axios from 'axios';

class AddCollection extends Component {
  state = { title: "", description: "", isShowing: false }

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

  toggleForm = () => {
    if(!this.state.isShowing){
        this.setState({isShowing: true});
    } else {
      this.setState({isShowing: false});
    }
}

  showAddCollectionForm = () => {
    if(this.state.isShowing){
      return(
        <div className="form-display">
          <h4>Create a new collection</h4>
          <form onSubmit={this.handleFormSubmit} className="form-info" >
            <label>Title:
              <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} required className="text-input"/>
            </label>
            <label>Description:
              <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} required className="text-input"/>
            </label>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }
  render(){
    return(
      <div>
        <hr/>
        <button onClick={() => this.toggleForm()}> Add Collection</button>
            { this.showAddCollectionForm() }
      </div>
    )
  }
}

export default AddCollection;
