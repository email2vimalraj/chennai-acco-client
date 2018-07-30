import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import FeaturedItem from './FeaturedItem'

const GET_PROPERTIES = gql`
  query {
    properties(orderBy: rating_DESC, first: 5) {
      id
      name
      description
      price
      currency
      rating
      photos {
        filePath
      }
    }
  }
`

const FeaturedQuery = () => (
  <Query query={GET_PROPERTIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>

      if (error) return <div>Error</div>

      return (
        <div className="row">
          {data.properties.map(item => (
            <FeaturedItem
              colClass="col-md-6 col-sm-6"
              key={item.id}
              data={item}
            />
          ))}
        </div>
      )
    }}
  </Query>
)

export default FeaturedQuery
