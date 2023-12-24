import { categoryData, categorySize } from "../../../utils/categoryData";
import PriceRange from "./PriceRange";
import SuperSaleLogo from "../../../assets/image/superSale.png";
import SuperSaleImg from "../../../assets/image/SuperSaleImg.png";

const ProductsLeft = () => {
  return (
    <div className="productsLeft">
      <div className="products__left__info">
        <div className="left__category">
          <h2 className="category__title">Categories</h2>
          {categoryData.map((item) => (
            <div className="categoty__lists" key={item.id}>
              <p className="list__text">{item.title}</p>
              <p className="list__number">{item.number}</p>
            </div>
          ))}
        </div>
        <div className="left__range">
          <PriceRange/>
          <p className="range__price">
          </p>
          <button className="range__button">Filter</button>
        </div>
        <div className="left__size">
          <h2 className="size__title">Size</h2>
          {categorySize.map((item) => (
            <div className="size__lists" key={item.id}>
              <p className="size__text">{item.title}</p>
              <p className="size__number">{item.number}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="superSale container">
        <div className="superSale__logo">
          <img src={SuperSaleLogo} alt="super sale logo" />
        </div>
        <h1 className="superSale__count">UP TO 75% OFF</h1>
        <div className="superSale__image">
          <img src={SuperSaleImg} alt="super sale image" />
        </div>
      </div>
    </div>
  );
};

export default ProductsLeft;
