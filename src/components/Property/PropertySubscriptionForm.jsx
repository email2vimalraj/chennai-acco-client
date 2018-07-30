import React from 'react'

const PropertySubscriptionForm = () => (
  <div className="alert-message sidebar-form mb-20 ">
    <h6>Get daily property email alert in your inbox</h6>
    <form action="#">
      <div className="form-group">
        <input type="text" placeholder="Enter your email address" />
      </div>

      <div className="form-group">
        <button type="submit">
          create alert <i className="fa fa-long-arrow-right" />
        </button>
      </div>
    </form>
  </div>
)

export default PropertySubscriptionForm
