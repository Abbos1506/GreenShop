import ShopReleted from "../shop/companents/ShopReleted";
import BasketHeader from "./companents/basketHeader";
import BasketProducts from "./companents/basketProducts";

const BasketPage = () => {
  return <div className="basket__page">
    <BasketHeader/>
    <BasketProducts/>
    <div className="basket__releted">
      <h3 className="basket__releted__title">You may be interested in</h3>
    </div>
    <ShopReleted/>
  </div>;
};

export default BasketPage;
