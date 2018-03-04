import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_PROPERTIES = gql`
  query {
    properties {
      _id
      name
      description
      rate
      currency
    }
  }
`;

const FeaturedQuery = () => (
  <Query query={GET_PROPERTIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;

      if (error) return <div>Error</div>;

      return (
        <ul>
          {data.properties.map(item => <li key={item._id}>{item.name}</li>)}
        </ul>
      );
    }}
  </Query>
);

export default FeaturedQuery;
