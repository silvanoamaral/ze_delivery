import React from 'react'
import PropTypes from 'prop-types'

import formatNumber from '../../utils/formatNumber'
import addDefaultSrc from '../../utils/addDefaultSrc'

import './Card.scss'

const Card = props => {
  return (
    <div className='product__card'>
      <div className='image'>
        <img src={ props.product.images[0].url } onError={ addDefaultSrc } />
      </div>

      <p className='title'>{ props.product.title }</p>
      <span className='price'>{formatNumber(props.product.productVariants[0].price)}</span>

      <div className='add__item'>
        <a onClick={() => props.addToCart(props.product.productVariants[0].price, props.product.title)}
        >Adicionar</a>
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  props: PropTypes.object,
  product: PropTypes.object,
  addToCart: PropTypes.func
}