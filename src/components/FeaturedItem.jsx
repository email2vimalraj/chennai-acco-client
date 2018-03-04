import React from 'react';
import PropTypes from 'prop-types';

const FeaturedItem = ({ colClass, data }) => (
  <div className={colClass}>
    <div className="featured-wrap mb-30">
      <a href="#dummy" className="link-overlay">&nbsp;</a>
      <span className="tag left text-uppercase bg-dark">featured</span>
      <a href="#dummy" className="tag right text-uppercase bg-blue">for rent</a>

      <div className="content-wrap mb-0 text-white">
        <div className="title-wrap">
          <h4 className="mb-0 text-white">{data.name}</h4>
          <span>Chennai</span>
        </div>
        <div className="price-tag price">
          {data.currency} {data.rate}
        </div>
      </div>

      <figure className="image-effect overlay">
        <img src={data.photos[0].filePath} alt={data.description} />
      </figure>
    </div>
  </div>
);

FeaturedItem.propTypes = {
  colClass: PropTypes.string.isRequired,
  data: PropTypes.shape.isRequired,
};

export default FeaturedItem;
