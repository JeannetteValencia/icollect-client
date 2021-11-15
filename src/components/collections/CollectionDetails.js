// components/collections/CollectionDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LikeButton } from '../LikeButton';
import EditCollection from './EditCollection';

class Random extends Component{
  state = {}

  componentDidMount(){
    this.getSingleCollection();
  }

  getSingleCollection = () => {
    const { params } = this.props.match;
    console.log({params})
    axios.get(`http://localhost:5005/api/collections/${params.id}`, { withCredentials: true })
      .then( responseFromApi =>{
          const theCollection = responseFromApi.data;
          console.log(theCollection)
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
    axios.delete(`http://localhost:5005/api/collections/${params.id}`, { withCredentials: true })
    .then( () =>{
        this.props.history.push('/collections');
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <br/>

        <div className="collection-details-container">
          <Link to={'/collections'}>Back to Collection List</Link>
        </div>

        <div>{this.renderEditForm()} </div>

        <div className="details-btn-options">
          <button onClick={() => this.deleteCollection()}>Delete Collection</button>
          <LikeButton/>
        </div>
      </div>
    )
  }
}


export default Random;