import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Carousel {...settings}> { /* Destructuring */ }
      <Wrap> { /* You Should Put the Image into a div to Make the Slider Work */ }
        <img src="./images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap> { /* You Should Put the Image into a div to Make the Slider Work */ }
        <img src="./images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap> { /* You Should Put the Image into a div to Make the Slider Work */ }
        <img src="./images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap> { /* You Should Put the Image into a div to Make the Slider Work */ }
        <img src="./images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
  padding-top: 20px;

  ul li button {
    &::before {
      font-size: 8px;
      color: rgb(150, 158, 171);
      transition: 0.4s;
    }
  }

  li.slick-active button::before {
    font-size: 10px;
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }

  @media (max-width: 815px) {
    .slick-next:before,.slick-prev:before {
      display: none;
    }
  }
`

const Wrap = styled.div`
  cursor: pointer;

  img {
    margin: auto;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 4px;
    border: 4px solid transparent;
    transition: 0.3s;

    &:hover {
      border: 4px solid rgb(249 249 249 / 0.8);
    }
  }
`