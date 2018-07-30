import { gql } from 'apollo-boost'

export const ADD_PROPERTY = gql`
  mutation addProperty($input: PropertyCreateInput!) {
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

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
        role
      }
    }
  }
`
