import React from 'react'
import PropTypes from 'prop-types'

const PropertyContainer = ({ data }) => (
  <div className="property-wrap mb-20">
    <div className="ppt-list list-vw mb-30 featured">
      <figure>
        <span className="tag left text-uppercase bg-dark">
          {data.currency} {data.price}
        </span>
        <span className="tag right text-uppercase primary-bg">for rent</span>
        <a href="#dummy" className="image-effect overlay">
          <img
            src={data.photos[0].filePath}
            alt={data.name}
            width="349"
            height="226"
          />
        </a>
      </figure>

      <div className="content">
        <h4 className="mb-0">
          <a href="#dummy">{data.name}</a>
        </h4>

        <div className="mb-15">Chennai</div>

        <div className="content-wrap">
          <p>{data.description}</p>
        </div>

        <a
          href={`/property/${data.id}`}
          className="btn btn-success faa-parent animated-hover"
        >
          View Details <i className="fa fa-long-arrow-right faa-passing" />
        </a>
      </div>

      <div className="info">
        <ul>
          <li>
            Area &nbsp;&nbsp;-&nbsp;&nbsp; <span>{data.area} sqft.</span>
          </li>
          <li>
            Bathrooms &nbsp;&nbsp;-&nbsp;&nbsp;{' '}
            <span>{data.bathroomCount}</span>{' '}
          </li>
          <li>
            Bedrooms &nbsp;&nbsp;-&nbsp;&nbsp; <span>{data.bedroomCount}</span>{' '}
          </li>
          <li>
            Persons &nbsp;&nbsp;-&nbsp;&nbsp;{' '}
            <span>{data.accomadatesCount}</span>{' '}
          </li>
        </ul>

        <a href="#dummy" className="btn btn-link pull-right">
          <i className="fa fa-heart-o" /> Add to Wishlist
        </a>
      </div>
    </div>
  </div>
)

PropertyContainer.propTypes = {
  data: PropTypes.shape.isRequired
}

export default PropertyContainer
