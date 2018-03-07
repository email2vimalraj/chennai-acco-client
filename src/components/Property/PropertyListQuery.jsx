import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import PropertyContainer from './PropertyContainer';

const GET_PROPERTIES = gql`
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
`;

const PropertyListQuery = () => (
  <Query query={GET_PROPERTIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;

      if (error) return <div>Error</div>;

      return (
        <div className="col-md-9 col-sm-9 left-block">
          <div className="sec-title icon-wrap">
            <h3>{data.properties.length} properties found in <span>Chennai Acco</span></h3>
          </div>

          {
            data.properties.map(item => (
              <PropertyContainer key={item._id} data={item} />
            ))
          }
        </div>
      );
    }}
  </Query>
);

export default PropertyListQuery;
