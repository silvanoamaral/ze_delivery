import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({
  'qntItensCartReducer': {
    'qntItensCart': 0
  }
})

import Header from './'

describe('Header Component', () => {
  const component = renderer.create(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  const testInstance = component.root
  const element = testInstance.findByType('div')

  it('Checking class class="container"', () => {
    expect(element.props.className.includes('container')).toBe(true)
  })
})