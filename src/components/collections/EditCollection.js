import React, { Component } from 'react';
import axios from 'axios';

class EditCollection extends Component {
  state = {
    title: this.props.theCollection.title,
    description: this.props.theCollection.description
  }

  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/collections/${this.props.theCollection._id}`, { title, description }, {withCredentials: true})
    .then( () => {
      // Use the passed down api call to render the updated data
        this.props.getTheCollection();
    })
    .catch( error => console.log(error) )
  }

  handleChangeTitle = (event) => {
    this.setState({
      title:event.target.value
    })
  }

  handleChangeDesc = (event) => {
    this.setState({
      description:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditCollection;
