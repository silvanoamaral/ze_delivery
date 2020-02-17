import React from 'react'
import { mount } from 'enzyme'
import Home from './'

describe('Home Component', () => {
  const wrapper = mount(<Home />)

  it('Render component', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('Submit form', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => null })
  })

  it('Value invalid input="text"', () => {
    const inputSearch = wrapper.find('form').find('input')
    inputSearch.simulate('change', { target: { value: 'Peter Parker' } })
    expect(wrapper.state().address).toEqual('Peter Parker')
  })

  it('Value "Rua Américo Brasiliense" in input="text"', async () => {
    const inputSearch = wrapper.find('form').find('input')
    inputSearch.simulate('change', { target: { value: 'Rua Américo Brasiliense' } })
    wrapper.find('form').simulate('submit', { preventDefault: () => null })
    expect(wrapper.state().address).toEqual('Rua Américo Brasiliense')
  }) 
})