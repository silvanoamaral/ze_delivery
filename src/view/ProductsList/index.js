import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Product.scss'
import Card from '../../components/Card'
import MiniCart from '../../components/MiniCart'

class Product extends Component {
  state = {
    currentValue: 0,
    total: 0,
    product: [],
    title: '',
    openMiniCart: false
  }

  addToCart = (price, title) => {
    const currentValue = this.state.currentValue
    const plusValue = parseFloat(currentValue) + parseFloat(price)

    let productData = this.state.product
    const data = {
      title,
      price
    }
    productData.push(data)

    this.setState({
      currentValue: plusValue,
      total: plusValue,
      title,
      product: productData,
      openMiniCart: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      openMiniCart: false
    })
  }

  render() {
    const { state } = this.props.location

    return (
      <main className="container product">
        {state.data ?
          state.data.products.map((product, i) => (
            <Card product={product} key={i} addToCart={this.addToCart} />
          ))
          :
          <p>Não encontramos produtos, realizar uma nova pesquisa</p>
        }
        <MiniCart
          total={ this.state.total }
          product={ this.state.product }
          active={ this.state.openMiniCart }
          handleCloseModal={ this.handleCloseModal }
        />
      </main>
    )
  }
}

export default Product

Product.propTypes = {
  location: PropTypes.object
}