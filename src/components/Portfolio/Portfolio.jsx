import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Bill from "../../img/bill.png";
import Ecommerce from "../../img/ecommerce1.png";
import Resume from "../../img/resume.png";
import Restorant from "../../img/restorant.png";
const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Bill} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Resume} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Restorant} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
