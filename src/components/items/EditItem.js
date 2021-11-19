import React, { Component } from 'react';
import axios from 'axios';

class EditItem extends Component {
  state = {
    title: this.props.theItem.title,
    description: this.props.theItem.description,
    isShowing: false
  }

  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/items/${this.props.theItem._id}`, { title, description }, {withCredentials: true})
    .then( () => {
      // Use the passed down api call to render the updated data
        this.props.getItem();
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

  toggleForm = () => {
    if(!this.state.isShowing){
      this.setState({isShowing: true});
    } else {
      this.setState({isShowing: false});
    }
  }

  showEditItemForm = () => {
    if(this.state.isShowing){
      return (
        <div>
          <h3>Edit Item</h3>
          <form onSubmit={this.handleFormSubmit} className="form-info" >
            <label>Title:
              <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChangeTitle(e)} required className="text-input"/>
            </label>
            <label>Description:
              <textarea name="description" value={this.state.description} onChange={ e => this.handleChangeDesc(e)} required className="text-input"/>
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
        <br/>
          <button onClick={() => this.toggleForm()}> Edit Item </button>
          { this.showEditItemForm() }
      </div>
    )
  }
}

export default EditItem;
