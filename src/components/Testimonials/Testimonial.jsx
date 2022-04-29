import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
export const Testimonial = () => {
  const clients=[{img:profilepic1,review:"He is a good Devloper "},{img:profilepic2,review:"He is a good Devloper "},{img:profilepic3,review:"He is a good Devloper "},{img:profilepic4,review:"He is a good Devloper "}]
  return ( 
    
      <div className="t-wrapper">
      <div className="t-heading">
          <span>Client always get </span>
          <span>Exeptional work </span>
          <span>From me</span>
          <div className="blur t-blur1" style={{backgroundcolor:"var(--purple)"}}></div>
          <div className="blur t-blur2" style={{backgroundcolor:"skyblue"}}></div>
      </div>

      <Swiper 
      modules={[Pagination]}
      slidesPerview={1}
      pagination={{clickable:true}}
      >
          {clients.map((client, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className="testimonial" id="Testimonials">
                  <img src={client.img}/>
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            )
          })}


      </Swiper>
    </div>
    )
  }


export default Testimonial

