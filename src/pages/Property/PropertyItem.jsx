import React from 'react';
import PropTypes from 'prop-types';

import SearchBar2 from '../../components/SearchBar/SearchBar2';
import PropertySubscriptionForm from '../../components/Property/PropertySubscriptionForm';
import SingleProperty from '../../components/Property/SingleProperty';

const PropertyItem = ({ match }) => (
  <div>
    <SearchBar2 />

    <section className="pri-pad">
      <div className="container">
        <div className="row">
          <SingleProperty id={match.params.id} />

          <div className="col-md-3 col-sm-3 sidebar">
            <PropertySubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

PropertyItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default PropertyItem;
