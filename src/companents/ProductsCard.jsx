import React, { useContext } from "react";
import CardContext from "../context/cardContext";
import { AppstoreAddOutlined } from "@ant-design/icons";

const ProductsCard = ({ products }) => {
  const { addToCard } = useContext(CardContext);
  return (
    <div className="products__card">
      <div className="products__card__image">
        <img src={products.image} alt={products.title} />
      </div>
      <h4 className="products__card__title">{products.title}</h4>
      <h5 className="products__card__price">${products.price}</h5>
      <div className="products__card__btn">
        <button onClick={() => addToCard(products)}>
          <AppstoreAddOutlined />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
