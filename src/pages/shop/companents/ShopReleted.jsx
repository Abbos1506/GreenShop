import { useState } from "react";
import rightData from "../../../utils/rightData";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ShopReleted = () => {
  const [card, setCard] = useState(1);
  const cardPage = 5;
  const endIndex = card * cardPage;
  const beginIndex = endIndex - cardPage;
  const Card = rightData.slice(beginIndex, endIndex);
  const cardPagi = Math.ceil(rightData.length / cardPage);
  const number = [...Array(cardPagi + 1).keys()].slice(1);

  return (
    <div className="shop__releted">
      <div className="shop__releted__cards">
        {Card.map((item) => (
          <div className="shop__releted__card" key={item.id}>
            <div className="shop__releted__card__image">
              <img src={item.image} alt={item.title} />
            </div>
            <h2 className="shop__releted__card__title">{item.title}</h2>
            <p className="shop__releted__card__price">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="shop__releted__pagi">
        <button className="shop__pagi__back__btn" onClick={cardBack}>
          <LeftOutlined />
        </button>
        {number.map((number, index) => (
          <li
            className={`shop__pagi__numbers ${card === number ? "active" : ""}`}
            key={index}
          >
            <button
              className="shop__pagi__links"
              onClick={() => changeCardNumber(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <button className="shop__pagi__next__btn" onClick={cardNext}>
          <RightOutlined />
        </button>
      </div>
    </div>
  );

  function cardBack() {
    if (card !== 1) {
      setCard(card -1);
    }
  }

  function changeCardNumber(id) {
    setCard(id);
  }

  function cardNext() {
    if (card !== cardPagi) {
      setCard(card +1);
    }
  }
};

export default ShopReleted;
