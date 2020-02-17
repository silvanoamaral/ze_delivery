import React from 'react'
import { shallow } from 'enzyme'
import Footer from './'

describe('Footer Component', () => {
  const wrapper = shallow(<Footer />)

  it('Render component', () => {
    expect(wrapper.length).toEqual(1)
  })
})