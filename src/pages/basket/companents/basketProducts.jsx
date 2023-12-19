import BasketProductsRight from "./BasketRight";
import BasketProductsLeft from "./basketLeft";

const BasketProducts = () => {
  return (
    <div className="basket__prosucts">
      <BasketProductsLeft />
      <BasketProductsRight/>
    </div>
  );
};

export default BasketProducts;
