import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from "../../images/swiperImages/bailey-zindel-NRQV-hBF10M-unsplash.jpg"
import image2 from "../../images/swiperImages/daniela-cuevas-t7YycgAoVSw-unsplash.jpg"
import image3 from "../../images/swiperImages/ken-cheung-KonWFWUaAuk-unsplash.jpg"
import image4 from "../../images/swiperImages/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg"
import image5 from "../../images/swiperImages/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg"
import image6 from "../../images/swiperImages/ryan-schroeder-Gg7uKdHFb_c-unsplash.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import store from "../../store.json"

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    // console.log(store[1].image);
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={image1} alt='none' style={{width:"100vw" ,height:"50vh"}} className=''/></SwiperSlide>
        <SwiperSlide><img src={image2} alt='none' style={{width:"100vw" ,height:"50vh"}} className=''/></SwiperSlide>
        <SwiperSlide><img src={image3} alt='none' style={{width:"100vw" ,height:"50vh"}} className=''/></SwiperSlide>
        <SwiperSlide><img src={image4} alt='none' style={{width:"100vw" ,height:"50vh"}} className=''/></SwiperSlide>
        <SwiperSlide><img src={image5} alt='none' style={{width:"100vw" ,height:"50vh"}} className=''/></SwiperSlide>
        <SwiperSlide><img src={image6} alt='none' style={{width:"100vw" ,height:"50vh"}} className=''/></SwiperSlide>
        
        
  
      </Swiper>
    </>
  ); 
}