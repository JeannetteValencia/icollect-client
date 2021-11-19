// components/collections/CollectionList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ItemList extends Component {
  state = { arrOfItems: [] }

  getAllItems = () =>{
    /*const {params} = this.props.match;
    axios.get(`${process.env.REACT_APP_API_URL}/${params}/items`, { withCredentials: true })*/

    axios.get(`${process.env.REACT_APP_API_URL}/items`, { withCredentials: true })
    .then(responseFromApi => {
      return this.setState({
        arrOfItems: responseFromApi.data
      })
    })
    .then()
  }

  componentDidMount() {
    this.getAllItems();
  }

  render(){
    return(
      <div>
        <h4>List of Items</h4>

        <div className="elm-container">
          {this.state.arrOfItems.length>0 ?
            this.state.arrOfItems.map( item => {
              return (
                  <div key={item._id}>
                    <Link to={`/items/${item._id}`}>
                      <h3>{item.title}</h3>
                    </Link>
                    {/* <p style={{maxWidth: '400px'}} >{collection.description} </p> */}
                  </div>
                )})
          : <h2>loading the list</h2>
          }
        </div>
      </div>
    )
  }
}

export default ItemList;
