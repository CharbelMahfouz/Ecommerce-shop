import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img
              loading="lazy"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
