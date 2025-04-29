// components/Carousel.jsx
"use client"

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick without SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Carousel = ({img}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(img);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {img.map((item,index)=>(
          <figure key={index} className="h-[500px]">
            <img src={item} alt="" className="w-full" />
          </figure>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
