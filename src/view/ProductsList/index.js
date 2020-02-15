import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Product.scss'
import Card from '../../components/Card'

class Product extends Component {

  render() {
    const { state } = this.props.location

    return (
      <main className="container product">
        {state.data ?
          state.data.products.map((product, i) => (
            <Card product={product} key={i} />
          ))
          :
          <p>Não encontramos produtos, realizar uma nova pesquisa</p>
        }
      </main>
    )
  }
}

export default Product

Product.propTypes = {
  location: PropTypes.object
}