import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div className="collection-details-container">
          <Link to={'/collections'}>Back to Collection List</Link>
        </div>
      </div>
    )
  }
}

export default ItemDetails;
