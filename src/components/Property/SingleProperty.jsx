import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ImageSlider from '../Banner/ImageSlider';

const GET_PROPERTY = gql`
  query getProperty($id: String) {
    property(id: $id) {
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

const SingleProperty = ({ id }) => (
  <Query query={GET_PROPERTY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;

      if (error) return <div>Error...</div>;

      const {
        name,
        currency,
        price,
        description,
        rating,
        area,
        bathroomCount,
        bedroomCount,
        accomadatesCount,
        photos,
      } = data.property;

      const imageFilePaths = photos.map(photo => photo.filePath);

      return (
        <div className="col-md-9 col-sm-9 property-single left-block">
          <div className="title mb-20">
            <h2 className="mb-0 lh-normal">{name}</h2>
            <span>Greams Road / Chennai</span>
            <span className="price primary-bg text-white">{currency} {price}</span>
          </div>

          <div className="gallery-wrap thumb-gallery mb-40">
            <span className="tag left text-uppercase primary-bg text-white">for rent</span>

            <ImageSlider images={imageFilePaths} controls />
          </div>

          <div className="box border mb-40 requtest-form">
            <form>
              <div className="left">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Email Address" />
                </div>

                <div className="form-group">
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>

              <div className="right">
                <div className="form-group">
                  <textarea defaultValue={`I am interested in this ${name} for
                    rent at Greams Road / Chennai, priced at ${currency} ${price}.`}
                  />
                </div>
              </div>

              <div className="right checkbox-wrap">
                <input type="checkbox" />
                <span>
                  I&#8217;m happy to receive emails from Chennai Acco
                  & specially selected agents.&nbsp;
                </span>
              </div>

              <div className="left">
                <div className="form-group">
                  <button type="submit">
                    Request Details <i className="fa fa-long-arrow-right" />
                  </button>
                </div>
              </div>
            </form>
            <div className="clearfix" />
          </div>

          <div className="row mb-40">
            <div className="col-sm-4 left-block ppt-info">
              <div className="box border">
                <div className="box-title">
                  <h6 className="mb-0 lh-normal">Property Information</h6>
                </div>

                <div className="detail info">
                  <ul>
                    <li>
                      Area <span>{area} sq/ft</span>
                    </li>
                    <li>
                      Bathrooms <span>{bathroomCount}</span>
                    </li>
                    <li>
                      Bedrooms <span>{bedroomCount}</span>
                    </li>
                    <li>
                      Accomadates <span>{accomadatesCount}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-8">
              <div className="box border content-wrap mb-0">
                <h4 className="title mb-20">Property Description</h4>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="box border mb-40">
            <h4 className="title mb-20">Amenities</h4>
            <ul className="amenities">
              <li>Air Conditioning</li>
              <li>Built-In Wardrobes</li>
              <li>Clinic</li>
              <li>Dishwasher</li>
              <li>Internet</li>
              <li>Park</li>
              <li>School</li>
              <li>Supermarket / Store</li>
              <li>Transportation Hub</li>
            </ul>
          </div>

          <div className="box border mb-40">
            <h4 className="title mb-20">Location Map</h4>
            <div className="map-hold overlay">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.3419418377!2d-74.03927127918426!3d40.75904032921492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2snp!4v1497343556535"
                width="600"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                title="Location Map"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);

export default SingleProperty;
