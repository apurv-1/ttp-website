import React from 'react';
import classes from '../Styles/speakers.module.css';

import speakerInfo from '../Information/Speakers.json';
//swipper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Speakers = () => {
  return (
    <div className={classes.swiper_container} id="Speakers">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {speakerInfo.map(
          ({ name, designation, institute_name, profile }, index) => (
            <SwiperSlide key={index} className={classes.swiper_slide}>
              <div className={classes.info_card}>
                <div className={classes.divImage}>
                  <img
                    alt="img"
                    src={profile}
                    className={classes.profile_image}
                  />
                </div>
                <div className={classes.textarea}>
                  <h4 className={classes.text}>{name}</h4>
                  <h5 className={classes.text}>{designation}</h5>
                  <h6 className={classes.text}>{institute_name}</h6>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Speakers;
