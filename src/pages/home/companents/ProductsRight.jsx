import { useState } from "react";
import { Link } from "react-router-dom";
import rightData from "../../../utils/rightData";
import {
  LeftOutlined,
  RightOutlined,
  DownOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const ProductsRight = () => {
  const [data, setData] = useState(1);
  const rightPage = 9;
  const lastIndex = data * rightPage;
  const firstIndex = lastIndex - rightPage;
  const Data = rightData.slice(firstIndex, lastIndex);
  const pagiPages = Math.ceil(rightData.length / rightPage);
  const numbers = [...Array(pagiPages + 1).keys()].slice(1);


  return (
    <div className="productsRight">
      <div className="right__links">
        <div className="right__items">
          <p>All Plants</p>
          <p>New Arrivals</p>
          <p>Sale</p>
        </div>
        <div className="right__sort">
          <p>Short by: Default sorting</p>
          <DownOutlined />
        </div>
      </div>
      <div className="right__cards">
        {Data.map((item) => (
          <Link to={"/shop"} className="right__card" key={item.id}>
            <div className="right__card__image">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="right__card__text">{item.title}</p>
            <p className="right__card__price">{item.price}</p>
            <button className="right__card__add">
              <AppstoreAddOutlined />
            </button>
          </Link>
        ))}
      </div>
      <div className="right__pagination">
        <button className="pagi__back__btn" onClick={backBtn}>
          <LeftOutlined />
        </button>
        {numbers.map((number, index) => (
          <li
            className={`pagi__center__numbers ${
              data === number ? "active" : " "
            }`}
            key={index}
          >
            <button className="pagi__link" onClick={() => changeNumber(number)}>
              {number}
            </button>
          </li>
        ))}
        <button className="pagi__next__btn" onClick={nextBtn}>
          <RightOutlined />
        </button>
      </div>
    </div>
  );

  function backBtn() {
    if (data !== 1) {
      setData(data - 1);
    }
  }

  function changeNumber(id) {
    setData(id);
  }

  function nextBtn() {
    if (data !== pagiPages) {
      setData(data + 1);
    }
  }
};

export default ProductsRight;
