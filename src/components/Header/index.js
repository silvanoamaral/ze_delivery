import React from 'react'

import logo from '../../assets/images/logo.png'

import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <figure>
          <a href="/">
            <img src={ logo } alt="Zé delivery logo" />
          </a>
        </figure>
      </div>      
    </header>
  )
}

export default Header

