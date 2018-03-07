import React from 'react';
import SearchBar2 from '../../components/SearchBar/SearchBar2';
import PropertySubscriptionForm from '../../components/Property/PropertySubscriptionForm';
import PropertyListQuery from '../../components/Property/PropertyListQuery';

const PropertyList = () => (
  <div>
    <SearchBar2 />

    <section className="pri-pad">
      <div className="container">
        <div className="row">
          <PropertyListQuery />

          <div className="col-md-3 col-sm-3 sidebar">
            <PropertySubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PropertyList;
