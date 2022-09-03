import React from "react";

import { ButtonGroup } from "../../components/button-group/ButtonGroup";

import leftBg from "../../assets/Images/bg-left.svg";
import rightBg from "../../assets/Images/bg-right.svg";
import leftArr from "../../assets/Images/left-arrow.svg";
import rightArr from "../../assets/Images/right-arrow.svg";

import { Card } from "../../components/card/Card";
import { basicList } from "../../helper/constant";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./pricing.css";

export const Pricing = () => {
  return (
    <div className="pricing">
      <img src={leftBg} className="left-bg" alt="" />
      <img src={rightBg} className="right-bg" alt="" />
      <h1>IT’S EASY TO GET STARTED</h1>
      <p>choose a plan tailored to your needs</p>
      <ButtonGroup />
      <div className="card-container">
        <Card title="Basic" price="$7.9" list={basicList} />
        <Card title="Basic Plus" price="$11.2" list={basicList} />
        <Card title="Premium" price="$12.6" list={basicList} />
        <Card title="Enterprise" price="$13.2" list={basicList} />
      </div>
      <div className="mob-view">
        3
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card title="Basic" price="$7.9" list={basicList} />
          </SwiperSlide>
          <SwiperSlide>
            <Card title="Basic" price="$7.9" list={basicList} />
          </SwiperSlide>
          <SwiperSlide>
            <Card title="Basic" price="$7.9" list={basicList} />
          </SwiperSlide>
          <SwiperSlide>
            <Card title="Basic" price="$7.9" list={basicList} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-control">
        <img src={leftArr} alt="" />
        &nbsp;Swipe&nbsp;
        <img src={rightArr} alt="" />
      </div>
    </div>
  );
};
