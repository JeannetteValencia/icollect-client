import React, { Component } from 'react';
import axios from 'axios';

class AddItem extends Component {
  state = { title: "", description: "", isShowing: false } // `isShowing` will help us to toggle add task form

  handleFormSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title;
    const description = this.state.description;
    const collectionID = this.props.theCollection._id;

    axios.post(`${process.env.REACT_APP_API_URL}/items`, { title, description, collectionID }, {withCredentials: true})
    .then( (newitem) => {
      //Display the updated list
      this.props.getTheCollection();
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

  showAddItemForm = () => {
    if(this.state.isShowing){
      return(
        <div>
          <h3>Add new Item to the collection</h3>
            <form onSubmit={this.handleFormSubmit}>
              <label>Title:</label>
              <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
              <label>Description:</label>
              <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
              <input type="submit" value="Submit" />
            </form>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <br/>
        <br/>
        <button onClick={() => this.toggleForm()}> Add Item </button>
        { this.showAddItemForm() }
      </div>
    )
  }
}

export default AddItem;
