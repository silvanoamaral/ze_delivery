import React from 'react'
import PropTypes from 'prop-types'

import formatNumber from '../../utils/formatNumber'

import './Card.scss'

const Card = props => {
  return (
    <div className='product__card'>
      <div className='image'>
        <img src={ props.product.images[0].url } />
      </div>

      <p className='title'>{ props.product.title }</p>
      <span className='price'>{formatNumber(props.product.productVariants[0].price)}</span>

      <div className='add-item'>
        <a className='add'>Adicionar</a>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  props: PropTypes.object,
  product: PropTypes.object
}