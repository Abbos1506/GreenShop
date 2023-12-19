
const BasketProductsLeft = () => {

  return (
    <div className="basketProducts__left">
      <div className="basket__left__content">
        <h2 className="basket__left__content__products">Products</h2>
        <h2 className="basket__left__content__price">Price</h2>
        <h2 className="basket__left__content__quantity">Quantity</h2>
        <h2 className="basket__left__content__total">Total</h2>
      </div>
      <div className="basket__left__carts">
        <div className="basket__left__cart">
          <div className="basket__left__cart__quantity"></div>
        </div>
        <div className="basket__left__cart"></div>
        <div className="basket__left__cart"></div>
      </div>
    </div>
  );
};

export default BasketProductsLeft;
