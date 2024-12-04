import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Project(props) {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide><Image src={props.pic1} className='rounded-md mt-6' alt='image' priority /></SwiperSlide>
        <SwiperSlide><Image src={props.pic2} className='rounded-md mt-6' alt='image' priority /></SwiperSlide>
      </Swiper>
      <p className='text-3xl mt-6'>{props.name}</p>
      <a href={props.link}><button>{props.link}</button></a>
      <p className='text-[#929292]'>{props.date}</p>
      <p className='mt-2'><span>Stack: </span>{props.stack}</p>
      <p className='mt-2'><span>{props.award} </span>{props.awards}</p>
    </div>
  )
}
