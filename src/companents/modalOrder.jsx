import { PlusOutlined } from "@ant-design/icons";
import ModalBodyImg from "../assets/icons/modalimg1.png";
import { message } from "antd";

const ModalOrder = ({ onOrder }) => {

    const onMessage = () => { 
        message.success("Success")
        onOrder()
    }

  return (
    <div className="modal__order__out" onClick={() => onOrder()}>
      <div className="modal__order" onClick={(c) => c.stopPropagation()}>
        <button className="modal__order__btn" onClick={() => onOrder()}>
          <PlusOutlined />
        </button>
        <div className="modal__body">
          <img
            src={ModalBodyImg}
            alt="modal image"
            className="modal__body__img"
          />
          <p className="modal__body__text">Your order has been received</p>
        </div>
        <div className="modal__order__info">
          <div className="modal__order__number">
            <p className="modal__order__number__text">Order Number</p>
            <p className="modal__order__number__number">19586687</p>
          </div>
          |
          <div className="modal__order__date">
            <p className="modal__order__date__text">Date</p>
            <div className="modal__order__date__number">15 Sep, 2021</div>
          </div>
          |
          <div className="modal__order__total">
            <p className="modal__order__total__text">Total</p>
            <p className="modal__order__total__number">2,699.00</p>
          </div>
          |
          <div className="modal__order__method">
            <p className="modal__order__method__text">Payment Method</p>
            <p className="modal__order__method__cash">Cash on delivery</p>
          </div>
        </div>
        <div className="modal__order__carts">
          <h3 className="modal__order__carts__title">Order Details</h3>
          <div className="order__carts__titles">
            <p className="order__carts__titles__products">Products</p>
            <p className="order__carts__titles__qty">Qty</p>
            <p className="order__carts__titles__subtotal">Subtotal</p>
          </div>
          <div className="modal__carts">
            <div className="modal__card"></div>
            <div className="modal__card"></div>
          </div>
          <div className="modal__shiping">
            <p className="modal__shiping__title">Shiping</p>
            <h3 className="modal__shiping__price">$16.00</h3>
          </div>
          <div className="modal__Total">
            <h3 className="modal__Total__title">Total</h3>
            <h3 className="modal__Total__price">$2,699.00</h3>
          </div>
          <p className="modal__order__txt">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
          <div className="modal__order__button">
            <button onClick={() => onMessage()}>Track your order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
