'use strict'

const nodeGeocoder = require('node-geocoder')

const getAddress = require('./../GetAddress')
const getProducts = require('./../ProductList')

const locationService = () => {
  //Rua Américo Brasiliense, São Paulo
  const getLocation = (req, res, next) => {
    const options = {
      provider: 'google',
      apiKey: 'AIzaSyB84S8Pg8DgtyYBrODZcJs6DK0w8fZNNd0',
      formatter: null
    }

    try {
      const address = req.query.address
      const geocoder = nodeGeocoder(options)
      return geocoder.geocode(address)
    } catch(e) {
      next()
    }
  }

  const deliveryLocation = async (req, res, next) => {
    try {
      const location = await getLocation(req, res, next)
      const sellerId = await getAddress(req, res, location[0])

      getProducts(sellerId.pocSearch[0].id)
      .then(data => {
        res.json(data)
      })
      .catch(() => {
        res.status(404).send({ error: 'Something failed!' })
      })
    } catch(e) {
      next()
    }
  }

  return {
    deliveryLocation,
    getLocation
  }  
}

module.exports = locationService()