import React from 'react'
import { Carousel } from 'react-bootstrap'

import Banner1 from '../../assets/images/banner-slide1.jpg'
import Banner21 from '../../assets/images/banner-slide2.jpg'
import Banner3 from '../../assets/images/banner-slide3.jpg'

const Banner2 = () => (
  <div className="banner banner2">
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="banner-content">
          <div className="wrap">
            <div className="inner text-white">
              <div className="container">
                <div className="box">
                  <div className="price primary-color">
                    INR 3,000
                    <a href="#dummy" className="view-more">
                      View Details
                    </a>
                  </div>

                  <h5 className="mb-5">
                    <a href="#dummy">154, Thambaram</a>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="overlay overlay2">
          <img src={Banner1} alt="" />
        </figure>
      </Carousel.Item>

      <Carousel.Item>
        <div className="banner-content">
          <div className="wrap">
            <div className="inner text-white">
              <div className="container">
                <div className="box">
                  <div className="price primary-color">
                    INR 3,500
                    <a href="#dummy" className="view-more">
                      View Details
                    </a>
                  </div>

                  <h5 className="mb-5">
                    <a href="#dummy">154, Anna Nagar, Chennai</a>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="overlay overlay2">
          <img src={Banner21} alt="" />
        </figure>
      </Carousel.Item>

      <Carousel.Item>
        <div className="banner-content">
          <div className="wrap">
            <div className="inner text-white">
              <div className="container">
                <div className="box">
                  <div className="price primary-color">
                    INR 6,000
                    <a href="#dummy" className="view-more">
                      View Details
                    </a>
                  </div>

                  <h5 className="mb-5">
                    <a href="#dummy">12, Greams Road, Chennai</a>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="overlay overlay2">
          <img src={Banner3} alt="" />
        </figure>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner2
