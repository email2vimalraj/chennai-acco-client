import React from 'react';
import { Mutation } from 'react-apollo';
import { Alert } from 'react-bootstrap';

import { ADD_PROPERTY } from '../../queries';

class AddProperty extends React.Component {
  state = {
    formSubmitted: false,
    formError: '',
    name: '',
    currency: 'INR',
    price: 0,
    description: '',
    bedroomCount: 0,
    bathroomCount: 0,
    accomadatesCount: 0,
    area: 0,
    parking: 0,
    address: '',
    latitude: '',
    longitude: '',
  };

  handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === 'checbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  formOnCompleted = data => (
    this.setState({
      formSubmitted: true,
      formError: '',
      name: '',
      currency: 'INR',
      price: 0,
      description: '',
      bedroomCount: 0,
      bathroomCount: 0,
      accomadatesCount: 0,
      area: 0,
      parking: 0,
      address: '',
      latitude: '',
      longitude: '',
    })
  )

  formOnError = error => (
    this.setState({
      formSubmitted: false,
      formError: error,
    })
  )

  formSubmit = async (e, addProperty) => {
    e.preventDefault();

    const {
      name,
      currency,
      price,
      description,
      bedroomCount,
      bathroomCount,
      accomadatesCount,
      area,
      address,
      latitude,
      longitude,
    } = this.state;

    await addProperty({
      variables: {
        input: {
          name,
          currency,
          price,
          description,
          bedroomCount,
          bathroomCount,
          accomadatesCount,
          area,
          address,
          latitude,
          longitude,
          user: '5a9c42e933de673073171f33',
        },
      },
    });
  }

  render() {
    const {
      name,
      currency,
      price,
      description,
      bedroomCount,
      bathroomCount,
      accomadatesCount,
      area,
      parking,
      address,
      latitude,
      longitude,
      formSubmitted,
      formError,
    } = this.state;

    return (
      <main className="pri-pad">
        <div className="container">
          <h3 className="mb-30">Submit Property</h3>

          <Mutation
            mutation={ADD_PROPERTY}
            onCompleted={this.formOnCompleted}
            onError={this.formOnError}
          >
            {(addProperty, result) => (
              <div>
                { formSubmitted && <Alert bsStyle="success">Property Created Successfully</Alert> }
                { formError && <Alert bsStyle="danger">Unable to create the property!</Alert> }

                <form className="property-submit">
                  <div className="row mb-55">
                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="name">Property Title <span>*</span></label>
                      <input onChange={this.handleInputChange} type="text" id="name" name="name" value={name} />
                    </div>

                    <div className="form-group select col-sm-4 mb-30">
                      <label htmlFor="currency">Currency <span>*</span></label>
                      <select onChange={this.handleInputChange} name="currency" id="currency" value={currency}>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="price">Price <span>*</span></label>
                      <input onChange={this.handleInputChange} type="number" id="price" name="price" value={price} />
                    </div>

                    <div className="form-group col-sm-12 mb-30">
                      <label htmlFor="description">Property Description <span>*</span></label>
                      <textarea name="description" id="description" value={description} onChange={this.handleInputChange} />
                    </div>
                  </div>

                  <h6 className="mb-15">Extra Information</h6>
                  <div className="row mb-55">
                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="bedroomCount">No. of Bedrooms <span>*</span></label>
                      <input onChange={this.handleInputChange} type="number" name="bedroomCount" id="bedroomCount" value={bedroomCount} />
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="bathroomCount">No. of Bathrooms <span>*</span></label>
                      <input onChange={this.handleInputChange} type="number" name="bathroomCount" id="bathroomCount" value={bathroomCount} />
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="accomadatesCount">No. of Accomodates <span>&nbsp;</span></label>
                      <input onChange={this.handleInputChange} type="number" name="accomadatesCount" id="accomadatesCount" value={accomadatesCount} />
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="area">Area (Sq/ft) <span>&nbsp;</span></label>
                      <input onChange={this.handleInputChange} type="number" name="area" id="area" value={area} />
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="parking">Parking <span>&nbsp;</span></label>
                      <input onChange={this.handleInputChange} type="number" name="parking" id="parking" value={parking} />
                    </div>
                  </div>

                  <h6 className="mb-15">Property Location</h6>
                  <div className="row mb-55">
                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="address">Address <span>*</span></label>
                      <input onChange={this.handleInputChange} type="text" id="address" name="address" value={address} />
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="latitude">Latitude <span>*</span></label>
                      <input onChange={this.handleInputChange} type="text" id="latitude" name="latitude" value={latitude} />
                    </div>

                    <div className="form-group col-sm-4 mb-30">
                      <label htmlFor="longitude">Longitude <span>*</span></label>
                      <input onChange={this.handleInputChange} type="text" id="longitude" name="longitude" value={longitude} />
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="map-hold">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.3419418377!2d-74.03927127918426!3d40.75904032921492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2snp!4v1497343556535"
                          width="600"
                          height="450"
                          title="Location Map"
                        />
                      </div>
                    </div>
                  </div>

                  <h6 className="mb-15">Property Ameneties</h6>
                  <div className="row mb-60">
                    <div className="form-group col-sm-12">
                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="aircondition" id="aircondition" />
                        <span>Air Conditioning</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="wardrobe" id="wardrobe" />
                        <span>Wardrobes</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="clinic" id="clinic" />
                        <span>Clinic</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="internet" id="internet" />
                        <span>Internet</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="park" id="park" />
                        <span>Park</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="school" id="school" />
                        <span>School</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="supermarket" id="supermarket" />
                        <span>Supermarket / Store</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="transportation" id="transportation" />
                        <span>Transportation Hub</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="cable" id="cable" />
                        <span>Cable TV</span>
                      </div>

                      <div className="checkbox-wrap">
                        <input onChange={this.handleInputChange} type="checkbox" name="fridge" id="fridge" />
                        <span>Fridge</span>
                      </div>
                    </div>
                  </div>

                  <button type="reset" onClick={e => this.formSubmit(e, addProperty)} className="btn btn-success btn-lg shadow faa-parent animated-hover">
                    Submit Property <i className="fa fa-long-arrow-right faa-passing" />
                  </button>
                </form>
              </div>
            )}
          </Mutation>
        </div>
      </main>
    );
  }
}

export default AddProperty;
