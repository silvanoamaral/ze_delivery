'use strict'

const { request } = require('graphql-request')

const getProducts = (id) => {
    
  let apiUrl = `https://api.code-challenge.ze.delivery/public/graphql`

  const variables = {
    "id": id,
    "search": "",
    "categoryId": null
  }

  let query = `query poc($id: ID!, $categoryId: Int, $search: String){
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          inventoryItemId
          shortDescription
          title
          published
          volume
          volumeUnit
          description
          subtitle
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }`

  return request(apiUrl, query, variables)
}

module.exports = getProducts