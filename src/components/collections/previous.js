

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditCollection from './EditCollection';

class CollectionDetails extends Component {
  state = {}

  componentDidMount(){
    this.getSingleCollection();
  }

  getSingleCollection = () => {
    const { params } = this.props.match;
    console.log({params})
    axios.get(`http://localhost:5005/api/collections/${params.id}`)
      .then( responseFromApi =>{
          const theCollection = responseFromApi.data;
          this.setState(theCollection);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(this.state.title){
      return <EditCollection theCollection={this.state} getTheCollection={this.getSingleCollection} />
    }
  }

// DELETE collection:
  deleteCollection = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5005/api/collections/${params.id}`)
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
        <h1>Hello</h1>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteCollection()}>Delete Collection</button>
        <br/>
        <Link to={'/collections'}>Back to Collection List</Link>
      </div>
    )
  }
}

export default CollectionDetails;
