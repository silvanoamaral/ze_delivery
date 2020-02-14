'use strict'

const { request } = require('graphql-request')

const getAddress = (req, res, location) => {
  let apiUrl = `https://api.code-challenge.ze.delivery/public/graphql`

  const variables = {
    "algorithm": "NEAREST",
    "lat": location.latitude,
    "long": location.longitude,
    "now": new Date()
  }

  let query = `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
    }
  }`

  return request(apiUrl, query, variables)
}

module.exports = getAddress