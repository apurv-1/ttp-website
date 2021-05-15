import React from "react";
import classes from "../Styles/speakers.module.css";

//swipper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

// SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Speakers = () => {
  return (
    <div className={classes.swiper_container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiper_slide}>
          <img alt="img" src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Speakers;
