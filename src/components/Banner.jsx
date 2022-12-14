import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Banner = () => {
  return (
    <>
     <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper "
            >
                <SwiperSlide >
                    <img 
                        className="object-fill w-full  h-50 "
                        src="images/banner.jpg"
                        alt="image slide 1"
   
                    />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-50"
                        src="images/banner1.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-50 "
                        src="images/b2.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
     
    </>
  )
}

export default Banner