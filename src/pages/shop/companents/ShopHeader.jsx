import { Link } from "react-router-dom";
import rightData from "../../../utils/rightData";
import { useState } from "react";
import {
  PlusOutlined,
  MinusOutlined,
  HeartFilled,
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import RightImg1 from "../../../assets/image/rightImg1.png";

const ShopHeader = ({ setBasket }) => {
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(RightImg1);
  const [name, setName] = useState("Barberton Daisy");
  const [price, setPrice] = useState("$119.00");
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const clicked1 = () => {
    setIsActive1(true) &
      setIsActive2(false) &
      setIsActive3(false) &
      setIsActive4(false);
  };
  const clicked2 = () => {
    setIsActive1(false) &
      setIsActive2(true) &
      setIsActive3(false) &
      setIsActive4(false);
  };
  const clicked3 = () => {
    setIsActive1(false) &
      setIsActive2(false) &
      setIsActive3(true) &
      setIsActive4(false);
  };
  const clicked4 = () => {
    setIsActive1(false) &
      setIsActive2(false) &
      setIsActive3(false) &
      setIsActive4(true);
  };

  const minusCount = () => {
    return setCount(count === 1 ? 1 : count - 1);
  };

  const plusCount = () => {
    return setCount(count + 1);
  };

  return (
    <div className="shop__header">
      <div className="shop__header__links">
        <Link to={"/"}>Home</Link>
        <p>/</p>
        <Link to={"/shop"}>Shop</Link>
      </div>
      <div className="shop__header__cards">
        <div className="shop__header__swiper">
          {rightData.map((item) => (
            <div className="shop__header__card" key={item.id}>
              <div
                className="shop__header__card__image"
                onClick={() =>
                  setImage(item.image) &
                  setName(item.title) &
                  setPrice(item.price)
                }
              >
                <img src={item.image} alt="item image" />
              </div>
            </div>
          ))}
        </div>
        <div className="shop__header__bg">
          <img src={image} alt="image bg" />
        </div>
        <div className="shop__header__infos">
          <h2 className="info__title">{name}</h2>
          <p className="info__price">${price}</p>
          <h3 className="info__desc__title">Short Description:</h3>
          <p className="info__desc__text">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.{" "}
          </p>
          <div className="info__sizes">
            <h2 className="info__sizes__title">Size:</h2>
            <div className="size__btns">
              <button
                style={{
                  background: isActive1 ? "#46A358" : "",
                  color: isActive1 ? "#fff" : "",
                }}
                onClick={clicked1}
              >
                S
              </button>
              <button
                style={{
                  background: isActive2 ? "#46A358" : "",
                  color: isActive2 ? "#fff" : "",
                }}
                onClick={clicked2}
              >
                M
              </button>
              <button
                style={{
                  background: isActive3 ? "#46A358" : "",
                  color: isActive3 ? "#fff" : "",
                }}
                onClick={clicked3}
              >
                L
              </button>
              <button
                style={{
                  background: isActive4 ? "#46A358" : "",
                  color: isActive4 ? "#fff" : "",
                }}
                onClick={clicked4}
              >
                XL
              </button>
            </div>
          </div>
          <div className="info__sizes__buying">
            <button className="info__minus__btn" onClick={minusCount}>
              <MinusOutlined />
            </button>
            <p className="info__count">{count}</p>
            <button className="info__plus__btn" onClick={plusCount}>
              <PlusOutlined />
            </button>
            <Link to={"/savat"}>
              <button className="info__buying__btn">BUY NOW</button>
            </Link>
            <button className="info__buying__addTo" onClick={setBasket}>
              ADD TO CARD
            </button>
            <button className="info__buying__like">
            <HeartFilled />
            </button>
          </div>
          <div className="info__socials">
            <div className="info__socials__title">Share this products:</div>
            <div className="info__socials__icons">
              <i>
                <FacebookFilled />
              </i>
              <i>
                <TwitterSquareFilled />
              </i>
              <i>
                <LinkedinFilled />
              </i>
              <i>
                <MailOutlined />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
