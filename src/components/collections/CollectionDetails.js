// components/collections/CollectionDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <h1>hello there</h1>
        <p>{this.state.title}</p>
        <p>{this.state.description}</p>
        <button onClick={() => this.deleteCollection()}>Delete Collection</button>
        <Link to={'/collections'}>Back to Collection List</Link>
        <Link to={'/Edit Collection'}>Edit Collection List</Link>
        <br/>
      </div>
    )
  }
}


export default Random;