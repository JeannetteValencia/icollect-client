// components/collections/CollectionDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LikeButton } from '../LikeButton';
import EditCollection from './EditCollection';
import AddItem from '../items/AddItem';
import ItemList from '../items/ItemList';

class CollectionDetails extends Component{
  state = {}

  componentDidMount(){
    this.getSingleCollection();
  }

  getSingleCollection = () => {
    const { params } = this.props.match;
    console.log({params})
    axios.get(`${process.env.REACT_APP_API_URL}/collections/${params.id}`, { withCredentials: true })
      .then( responseFromApi =>{
          const theCollection = responseFromApi.data;
          this.setState(theCollection);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if (this.state.title) {
        return <EditCollection theCollection={this.state} getTheCollection={this.getSingleCollection}/>
    }
}


  // DELETE collection:
  deleteCollection = () => {
    const { params } = this.props.match;
    axios.delete(`${process.env.REACT_APP_API_URL}/collections/${params.id}`, { withCredentials: true })
    .then( () =>{
        this.props.history.push('/collections');
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderAddItemForm = () => {
    if (!this.state.title) {
        this.getSingleCollection();
    } else {
        return <AddItem theCollection={this.state} getTheCollection={this.getSingleCollection} />
    }
}

  render(){
    console.log(this.state._id)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <ItemList/>
        <br/>

        <div className="collection-details-container">
          <Link to={'/collections'}>Back to Collection List</Link>
        </div>

        <LikeButton/>

        {this.props.userData._id === this.state.owner &&
          <>
            <div>{this.renderEditForm()} </div>
            <div className="details-btn-options">
              <button onClick={() => this.deleteCollection()}>Delete Collection</button>
            </div>
            <div>{this.renderAddItemForm()} </div>
          </>
          }
      </div>
    )
  }
}


export default CollectionDetails;