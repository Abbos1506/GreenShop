import React, { useContext, useState } from "react";
import CardContext from "../../../context/cardContext";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const cart = ({ item }) => {
  const { removeItem } = useContext(CardContext);
  const [cardcount, setCardCount] = useState(1);
  const [total, setTotal] = useState(item.price);

  const minusCount = () => {
    setTotal(item.price - cardcount)
    setCardCount(cardcount === 1 ? 1 : cardcount - 1);
  };
  const plusCount = () => {
    setTotal(item.price * cardcount)
    setCardCount(cardcount + 1);
  };

  return (
    <div className="cartItem__cards">
      <div className="cartItem__card">
        <div className="cartItem__card__image">
          <img src={item.image} alt="" />
        </div>
        <h4 className="cartItem__card__title">{item.title}</h4>
        <p className="cartItem__card__price">${item.price}</p>
        <div className="cartItem__card__quantity">
          <button onClick={minusCount}>
            <MinusOutlined />
          </button>
          <p>{cardcount}</p>
          <button onClick={plusCount}>
            <PlusOutlined />
          </button>
        </div>
        <h3 className="cartItem__card__total">${total}</h3>
        <div className="cartItem__card__btn">
          <button onClick={() => removeItem(item.id)}>
            <DeleteOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;
