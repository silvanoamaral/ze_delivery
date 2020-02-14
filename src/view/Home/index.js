import React, { Component } from 'react'

import './Home.scss'

class Home extends Component {

  state = {
    address: '',
    message: '',
    loading: false,
  }

  callApi = async (address) => {
    try {
      const response = await fetch(`/location?address=${address}`)

      if (response.status !== 200) {
        this.setState({ message: 'Erro ao buscar endereço, tente novamente.' })
      }

      const body = await response.json()
      this.setState({ loading: false })

      return body 
    } catch(error) {
      this.setState({ loading: false })
    }      
  }

  handleChange = event => {
    this.setState({ message: '' })
    this.setState({ address: event.target.value })
  }

  //Rua Américo Brasiliense, São Paulo
  handleSubmit = async (e) => {
    e.preventDefault()

    if(this.state.address != '') {
      this.setState({ loading: true })

      try {
        let response = await this.callApi(this.state.address)

        this.props.history.push({
          pathname: '/product',
          state: { data: response.poc }
        })
      } catch(error) {
        this.setState({ message: 'Erro ao buscar endereço, tente novamente.' })
      }
    } else {
      this.setState({ message: 'preencha o campo endereço corretamente.' })
    }
  }

  render() {
    return (
      <section className='container'>
        <h1>Seu delivery de bebidas geladas a preço baixo</h1>
        <h2>Para curtir a qualquer momento</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='text' placeholder="Insira o endereço" onChange={ this.handleChange } />
          { this.state.message && <p className="message__error">{this.state.message}</p> }
          
          <button
            disabled={ this.state.loading }>
              { this.state.loading ? 'Aguarde...' : 'Buscar' }
          </button>
        </form>
      </section>
    )
  }
}

export default Home