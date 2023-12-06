import React from "react";
import { Carousel } from "antd";
import sliderData from "../utils/sliderData";

const SliderComp = () => {
  return (
    <Carousel autoplay className="slider">
      {sliderData.map((item) => (
        <div className="slider__content" key={item.id}>
          <div className="slider__info">
            <p className="slider__info__txt">{item.txt}</p>
            <h1 className="slider__info__title">{item.title} <span>Planet</span></h1>
            <p className="slider__info__text">{item.text}</p>
            <button className="slider__info__btn">SHOP NOW</button>
          </div>
          <div className="slider__image">
            <img src={item.image} alt="slider image" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SliderComp;
