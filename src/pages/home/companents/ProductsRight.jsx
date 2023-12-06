import rightData from "../../../utils/rightData";
import RightPagination from "./RightPagination";

const ProductsRight = () => {
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
        </div>
      </div>
      <div className="right__cards">
        {rightData.map((item) => (
          <div className="right__card" key={item.id}>
            <div className="right__card__image">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="right__card__text">{item.title}</p>
            <p className="right__card__price">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="right__pagination">
        <RightPagination />
      </div>
    </div>
  );
};

export default ProductsRight;
