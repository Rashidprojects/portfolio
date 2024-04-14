import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import project1 from '../assets/project-1.png'
import 'swiper/css'


const Footer = () => {
  return (
    <div>
      Footer
      <div>
      <Swiper 
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide changed') }
            onSwiper={(swiper) => console.log(swiper)}
      
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      </div>
    </div>
    
  )
}

export default Footer
