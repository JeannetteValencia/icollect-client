// components/collections/CollectionList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import AddCollection from './AddCollection';

class CollectionList extends Component {
  state = { listOfCollections: [] }

  getAllCollections = () =>{
    axios.get(`http://localhost:5005/api/collections`, { withCredentials: true })
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
        <div style={{width: '100%'}}>
        
          { this.state.listOfCollections.map( collection => {
            console.log(collection._id)
            return (
              <div key={collection._id}>
                <Link to={`/collections/${collection._id}`}>
                  <h3>{collection.title}</h3>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{collection.description} </p> */}
              </div>
            )})
          }
        </div>
        {/*<div style={{width: '40%', float:"right"}}>
            <AddCollection getData={() => this.getAllCollections()}/> {/* <== !!!
        </div>*/}
      </div>
    )
  }
}

export default CollectionList;
