import React, { useState } from 'react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../assets/style/Pueba.css";



function Example(props) {
    return (
        <Swiper className='carrusel'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='carrusel-option'>Slide 1</SwiperSlide>
      <SwiperSlide className='carrusel-option'>Slide 2</SwiperSlide>
      <SwiperSlide className='carrusel-option'>Slide 3</SwiperSlide>
      <SwiperSlide className='carrusel-option' >Slide 4</SwiperSlide>
      <SwiperSlide className='carrusel-option'>Slide 5</SwiperSlide>
    </Swiper>
    );
};


export default Example;
