import React, { Component } from 'react'

class Product extends Component {

  componentDidMount() {
	  console.log(this.props.location.state)
  }
  
  render() {
    return (
      <h2>Product List</h2>
    )
  }
}

export default Product