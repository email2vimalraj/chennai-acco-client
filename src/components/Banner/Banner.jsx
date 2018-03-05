import React from 'react';
import { Carousel } from 'react-bootstrap';

import Banner1 from '../../assets/images/banner-slide1.jpg';
import Banner2 from '../../assets/images/banner-slide2.jpg';
import Banner3 from '../../assets/images/banner-slide3.jpg';

const Banner = () => (
  <div className="banner overlay">
    <div className="banner-content">
      <div className="wrap">
        <div className="inner text-white">
          <h1 className="lh-normal mb-10 text-white text-center hide-mobile">
            Discover your dream home to live
          </h1>

          <form action="#" className="form-inline">
            <div className="form-group keyword">
              <input type="text" placeholder="Enter your keywords" />
            </div>

            <div className="form-group">
              <button type="submit">Search <i className="fa fa-long-arrow-right" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Carousel controls={false}>
      <Carousel.Item>
        <img src={Banner1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner3} alt="" />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Banner;
