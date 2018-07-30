import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'

const ImageSlider = ({ images, controls }) => (
  <Carousel controls={controls}>
    {images.map(image => (
      <Carousel.Item key={image}>
        <img src={image} alt="" />
      </Carousel.Item>
    ))}
  </Carousel>
)

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  controls: PropTypes.bool.isRequired
}

export default ImageSlider
