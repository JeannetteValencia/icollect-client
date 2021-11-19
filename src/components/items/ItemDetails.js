import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditItem from './EditItem';

class ItemDetails extends Component {
  state = {}

  componentDidMount(){
    this.getTheItem();
  }

  getTheItem = () => {
    const { params } = this.props.match;
    axios.get(`${process.env.REACT_APP_API_URL}/items/${params.id}`, {withCredentials: true})
    .then( responseFromApi =>{
      const theItem = responseFromApi.data;
      this.setState(theItem);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  //EDIT Item:
  renderEditForm = () => {
    if (this.state.title) {
        return <EditItem theItem={this.state} getItem={this.getTheItem}/>
    }
  }

  // DELETE Item:
  deleteItem = () => {
    const { params } = this.props.match;
    axios.delete(`${process.env.REACT_APP_API_URL}/items/${params.id}`, { withCredentials: true })
    .then( () =>{
        this.props.history.push('/collections');
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>

        <div>{this.renderEditForm()} </div>
        <div className="details-btn-options">
          <button onClick={() => this.deleteItem()}>Delete Item</button>
        </div>

          {/*Link to return to Previous Page*/}

        <div className="collection-details-container">
          <Link to={'/collections'}>Back to Collection List</Link>
        </div>
      </div>
    )
  }
}

export default ItemDetails;
