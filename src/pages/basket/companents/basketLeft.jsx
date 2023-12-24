import { useContext } from "react";
import CardContext from "../../../context/cardContext";
import Card from './cart'


const BasketProductsLeft = () => {
const { cardItems} = useContext(CardContext)

  return (
    <div className="basketProducts__left">
      <div className="basket__left__content">
        <h2 className="basket__left__content__products">Products</h2>
        <h2 className="basket__left__content__price">Price</h2>
        <h2 className="basket__left__content__quantity">Quantity</h2>
        <h2 className="basket__left__content__total">Total</h2>
      </div>
      <div className="basket__left__carts">
        {cardItems.map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default BasketProductsLeft;
