import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import FeaturedItem from './FeaturedItem';

const GET_PROPERTIES = gql`
  query {
    properties {
      _id
      name
      description
      rate
      currency
      photos {
        filePath
      }
    }
  }
`;

const FeaturedQuery = () => (
  <Query query={GET_PROPERTIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;

      if (error) return <div>Error</div>;

      return (
        <div className="row">
          <FeaturedItem colClass="col-md-6 col-sm-6" data={data.properties[0]} />
          <FeaturedItem colClass="col-md-6 col-sm-6" data={data.properties[1]} />
          <FeaturedItem colClass="col-md-4 col-sm-4" data={data.properties[2]} />
          <FeaturedItem colClass="col-md-4 col-sm-4" data={data.properties[3]} />
          <FeaturedItem colClass="col-md-4 col-sm-4" data={data.properties[4]} />
        </div>
      );
    }}
  </Query>
);

export default FeaturedQuery;
