// components/collections/CollectionList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddCollection from './AddCollection';

class CollectionList extends Component {
  state = { listOfCollections: [] }

  getAllCollections = () =>{
    axios.get(`${process.env.REACT_APP_API_URL}/collections`, { withCredentials: true })
    .then(responseFromApi => {
      this.setState({
        listOfCollections: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllCollections();
  }

  render(){
    return(
      <div>
        <h1>List of Collections</h1>
        <div style={{margin: '2% 20%'}}>
            <AddCollection getData={() => this.getAllCollections()}/>
        </div>
        <div style={{width: '100%'}} className="elm-container">
        
          { this.state.listOfCollections.map( collection => {
            return (
              <div key={collection._id} className="collection">
                <Link to={`/collections/${collection._id}`}>
                  <h3>{collection.title}</h3>
                </Link>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default CollectionList;
