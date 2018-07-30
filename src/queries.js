import { gql } from 'apollo-boost'

export const ADD_PROPERTY = gql`
  mutation addProperty($input: PropertyInput!) {
    addProperty(input: $input) {
      _id
    }
  }
`

export const GET_PROPERTIES = gql`
  query {
    properties {
      _id
      name
      description
      price
      currency
      rating
      area
      bathroomCount
      bedroomCount
      accomadatesCount
      photos {
        filePath
      }
    }
  }
`
