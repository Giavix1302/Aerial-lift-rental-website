import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.jpg";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
];

const ImageSlide = ({ image }) => {
  return (
    <div style={{}}>
      <img
        src={image}
        alt="Slide"
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
    </div>
  );
}

export default function Slide() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider
      {...settings}
      style={{ backgroundColor: "red", borderRadius: "10px", overflow: "hidden", boxShadow: "1px 1px 12px 4px rgba(0, 0, 0, 0.2)" }}

    >
      {images.map((image, index) => (
        <ImageSlide key={index} image={image} />
      ))}
    </Slider>
  );
}
//https://th.bing.com/th/id/OIP.0x9_Hfe1PqCQ51RJZkGlhwHaHa?rs=1&pid=ImgDetMain