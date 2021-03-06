import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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

    const { dispatch } = this.props
    dispatch({ type: 'QNT_ITENS_CART' })
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
        {state ?
          state.data.products.map((product, i) => (
            <Card product={product} key={i} addToCart={this.addToCart} />
          ))
          :
          <div className="not__found">
            <p>Não encontramos produtos, realizar uma nova pesquisa.</p>
          </div>
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

export default connect()(Product)

Product.propTypes = {
  dispatch: PropTypes.func,
  location: PropTypes.object
}