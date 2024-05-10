
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './Style.css';
const Banner = () => {

    const imageSize={
        height:"500px",
        weight:"1000px"
    }
  
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img style={imageSize} src="https://i.ibb.co/7YW2h3s/depositphotos-84415820-stock-photo-hand-drawing-online-courses-concept.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img style={imageSize} src="https://i.ibb.co/cXVWp6h/images-in-elearning-6-best-practices-choose-images-for-your-elearning-course-e1456486126140.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img style={imageSize} src="https://i.ibb.co/QFB00Vq/aktualnosci-e-learning.png" alt="" />
          </SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default Banner;