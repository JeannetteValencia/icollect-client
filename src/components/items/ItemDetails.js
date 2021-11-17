import React, { Component } from 'react';
import axios from 'axios';


class ItemDetails extends Component {
  state = {}

  componentDidMount(){
    this.getTheItem();
  }

  getTheItem = () => {
    const { params } = this.props.match;
    console.log("PROPS>>>>>", this.props.match)
    axios.get(`${process.env.REACT_APP_API_URL}/items/${params.id}`, {withCredentials: true})
    .then( responseFromApi =>{
      const theItem = responseFromApi.data;
      console.log("THE ITEM>>>", theItem)
      this.setState(theItem);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    console.log(this.props.match)
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default ItemDetails;
