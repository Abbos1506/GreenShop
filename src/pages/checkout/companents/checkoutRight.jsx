import { Link } from "react-router-dom";
import PaymentImg from "../../../assets/image/checkoutImg.png";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalOrder from "../../../companents/modalOrder";

const CheckoutRight = () => {
  const [order, setOrder] = useState(false);

  return (
    <div className="checkout__right">
      <h2 className="checkout__right__title">Your Order</h2>
      <div className="checkout__right__products">
        <div className="right__products__titles">
          <h3 className="right__products__titles__Products">Products</h3>
          <h3 className="right__products__titles__subtotal">Subtotal</h3>
        </div>
        <div className="checkout__right__cards">
          <div className="checkout__right__card"></div>
          <div className="checkout__right__card"></div>
          <div className="checkout__right__card"></div>
        </div>
        <div className="checkout__right__dates">
          <p className="checkout__right__dates__text">
            Have a coupon code?{" "}
            <Link to={"/savat"} className="checkout__right__dates__link">
              {" "}
              Click here
            </Link>
          </p>
          <div className="right__subtotal">
            <p className="right__subtotal__title">Subtotal</p>
            <h3 className="right__subtotal__price">$2,683.00</h3>
          </div>
          <div className="right__coupon">
            <p className="right__coupon__title">Coupon Discount</p>
            <p className="right__coupon__price">(-) 00.00</p>
          </div>
          <div className="right__shiping">
            <p className="right__shiping__title">Shiping</p>
            <h3 className="right__shiping__price">$16.00</h3>
          </div>
          <p className="view__shipping">View shipping charge</p>
          <div className="right__Total">
            <h3 className="right__Total__title">Total</h3>
            <h3 className="right__Total__price">$2,699.00</h3>
          </div>
        </div>
        <div className="right__payments">
          <div className="right__payments__cards">
            <div className="payments__card">
              <input type="radio" name="radio" />
              <img src={PaymentImg} alt="payment image" />
            </div>
            <div className="payments__card">
              <input type="radio" name="radio" />
              <p className="payments__card__title">Dorect bank transfer</p>
            </div>
            <div className="payments__card">
              <input type="radio" name="radio" />
              <p className="payments__card__title">Cash on delivery</p>
            </div>
          </div>
          <button
            className="right__payments__btn"
            onClick={() => setOrder(true)}
          >
            Place Order
          </button>
        </div>
      </div>
      {order &&
        createPortal(
          <ModalOrder onOrder={() => setOrder(false)} setOrder={setOrder} />,
          document.body
        )}
    </div>
  );
};

export default CheckoutRight;
