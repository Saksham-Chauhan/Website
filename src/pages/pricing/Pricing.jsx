import React from "react";

import { ButtonGroup } from "../../components/button-group/ButtonGroup";

import leftBg from "../../assets/Images/bg-left.svg";
import rightBg from "../../assets/Images/bg-right.svg";

import "./pricing.css";
import { Card } from "../../components/card/Card";
import { basicList } from "../../helper/constant";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export const Pricing = () => {
  return (
    <div className="pricing">
      <img src={leftBg} className="left-bg" alt="" />
      <img src={rightBg} className="right-bg" alt="" />
      <h1>IT’S EASY TO GET STARTED</h1>
      <p>choose a plan tailored to your needs</p>
      <ButtonGroup />
      {/* <div className='card-container'>
        <Card title="Basic" price="$7.9"  list={basicList}/>
        <Card title="Basic Plus" price="$11.2"  list={basicList}/>
        <Card title="Premium" price="$12.6"  list={basicList}/>
        <Card title="Enterprise" price="$13.2"  list={basicList}/>
      </div> */}

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide style={{ ...styleObj }}>
          <Card title="Basic" price="$7.9" list={basicList} />
        </SwiperSlide>
        <SwiperSlide style={{ ...styleObj }}>
          <Card title="Basic Plus" price="$11.2" list={basicList} />
        </SwiperSlide>
        <SwiperSlide style={{ ...styleObj }}>
          <Card title="Premium" price="$12.6" list={basicList} />
        </SwiperSlide>
        <SwiperSlide style={{ ...styleObj }}>
          <Card title="Enterprise" price="$13.2" list={basicList} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const styleObj = {
  transform:
    "translate3d(calc(-1808px + 7.25%), 0px, -100px) rotateZ(2deg) scale(1) !important",
};
