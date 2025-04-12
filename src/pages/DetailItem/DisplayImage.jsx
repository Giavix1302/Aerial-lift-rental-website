import { styled } from "@mui/material";
import Box from '@mui/material/Box'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useMediaQuery, useTheme } from '@mui/material';

const MainImage = styled("img")({
  width: "100%",
  height: "400px",
  objectFit: "contain",
  display: "block",
});

const ThumbnailImage = styled("img")({
  width: "100%",
  height: "100px",
  objectFit: "cover",
  display: 'block'
});

function AsNavFor({ images }) {
  // get breakpoint
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [quantity, setQuantity] = useState(3);

  useEffect(() => {
    if (isMd) {
      console.log("is md");
    } else if (isSmDown) {
      console.log("is sm down");
    }

  }, [isMd, isSmDown]);


  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        {images.map((image, index) => (
          <Box key={index} sx={{ border: '1px solid #ddd' }}>
            <MainImage
              src={image}
              alt="Slide"
            />
          </Box>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={quantity}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {images.map((image, index) => (
          <Box key={index} sx={{ pr: 1, display: 'block' }}>
            <ThumbnailImage
              src={image}
              alt="Slide"
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default AsNavFor;
