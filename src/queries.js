import { gql } from 'apollo-boost'

export const ADD_PROPERTY = gql`
  mutation addProperty($input: PropertyInput!) {
    addProperty(input: $input) {
      id
    }
  }
`

export const GET_PROPERTIES = gql`
  query {
    properties {
      id
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

export const SIGNUP = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(data: { name: $name, email: $email, password: $password }) {
      user {
        name
        email
      }
    }
  }
`
