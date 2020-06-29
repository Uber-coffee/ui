import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './Slider.module.css';

export default class SimpleSlider extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      <div className={classes.imgs}>
        <Slider {...settings}>
          <div className={classes.img_1} />
          <div className={classes.img_2} />
          <div className={classes.img_3} />
        </Slider>
      </div>
    );
  }
}
