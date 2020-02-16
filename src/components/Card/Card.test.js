import React from 'react'
import { shallow } from 'enzyme'
import Card from './'

describe('Card Component', () => {
  const props = {
    id: 1234,
    images: [{
      url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/products/8503.png'
    }],
    productVariants: [{
      price: 31.31
    }],
    title: 'Skol 269ml - Pack com 15 Unidades'
  }

  const wrapper = shallow(<Card product={ props } addToCart={ () => { return null } } />)

  it('render component with the required props', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('simulates click events', () => {
    wrapper.find('.add__item a').simulate('click')
  })
})