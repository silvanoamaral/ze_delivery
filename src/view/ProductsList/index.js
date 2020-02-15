import React, { Component } from 'react'

import './Product.scss'
import Card from '../../components/Card'

class Product extends Component {

  componentDidMount() {
	  console.log(this.props.location.state)
  }
  
  render() {
    const { data } = this.props.location.state

    return (
      <main className="container product">
        {data ?
          data.products.map((product, i) => (
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