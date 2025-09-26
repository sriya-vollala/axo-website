import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "./App.css";

// Import images here
import pic1 from "../assets/Slide1.jpg";
import pic2 from "../assets/Slide2.jpg";
import pic3 from "../assets/Slide3.jpg";
import pic4 from "../assets/Slide4.jpg";
import pic5 from "../assets/Slide5.jpg";
import pic6 from "../assets/Slide6.jpg";
import pic7 from "../assets/Slide7.jpg";
import pic8 from "../assets/Slide8.jpg";
import pic9 from "../assets/Slide9.jpg";
import pic10 from "../assets/Slide10.jpg";
import pic11 from "../assets/Slide11.jpg";
import pic12 from "../assets/Slide12.jpg";
import pic13 from "../assets/Slide13.jpg";


const PicCarousel = () => {
  const images = [
    { src: pic1 }, {src: pic2}, {src: pic3}, {src: pic4}, {src: pic5}, {src: pic6}, {src: pic7}, {src: pic8}, {src: pic9}, {src: pic10}, {src: pic11}, {src: pic12}, {src: pic13}
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