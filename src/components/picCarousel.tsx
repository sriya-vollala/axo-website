import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "./App.css";

// Import images here
import pic1 from "../../assets/AboutPic.png";
import pic2 from "../../assets/adiya.jpg";
import pic3 from "../../assets/alexa.jpg";
import pic4 from "../../assets/angela.jpg";


const PicCarousel = () => {
  const images = [
    { src: pic1 }, {src: pic2}, {src: pic3}, {src: pic4}
    // add more images here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PicCarousel;