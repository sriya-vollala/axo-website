import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images and info here
import LyreIcon from './LyreIcon';
import LyreInfo from './LyreInfo';
import PhiloInfo from './PhiloInfo';
import HeraInfo from './HeraInfo';
import FlowerInfo from './FlowerInfo';
import ColorInfo from './ColorInfo';
import RibbonIcon from './RibbonIcon';
import FlowerIcon from './FlowerIcon';
import HeraIcon from './HeraIcon';
import ColorIcon from './ColorIcon';

const PicCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    responsive: [ // breakpoint for mobile screens
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      {/* wrap content inside the <Slider> component */}
      <Slider {...settings}>
        {/* The pairs are direct children of slider */}
        <div className='icon-text-pair'>
            <div className='icon-wrapper'>
                <LyreIcon />
            </div>
            <div className='icon-text-wrapper'>
                <LyreInfo />
            </div>
        </div>
        <div className='icon-text-pair'>
            <div className='icon-wrapper'>
                <RibbonIcon />
            </div>
            <div className='icon-text-wrapper'>
                <PhiloInfo />
            </div>
        </div>
        <div className='icon-text-pair'>
            <div className='icon-wrapper'>
                <HeraIcon />
            </div>
            <div className='icon-text-wrapper'>
                <HeraInfo />
            </div>
        </div>
        <div className='icon-text-pair'>
            <div className='icon-wrapper'>
                <FlowerIcon />
            </div>
            <div className='icon-text-wrapper'>
                <FlowerInfo />
            </div>
        </div>
        <div className='icon-text-pair'>
            <div className='icon-wrapper'>
                <ColorIcon />
            </div>
            <div className='icon-text-wrapper'>
                <ColorInfo />
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default PicCarousel;