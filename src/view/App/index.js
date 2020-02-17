import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Home from '../Home'
import Product from '../ProductsList'

import '../../assets/style/index.scss'

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Route path="/" exact component={ Home } />
      <Route path="/product" exact component={ Product } />
    </Router>
    <Footer />
    </>
  )
}

export default App