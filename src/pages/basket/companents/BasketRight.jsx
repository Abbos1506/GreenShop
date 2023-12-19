import { Link } from "react-router-dom";

const BasketProductsRight = () => {
    return <div className="basketProducts__right">
        <div className="basket__right__content">
            <h2 className="basket__right__content__title">Cart Totals</h2>
            <p className="basket__right__content__coupon">Coupon Apply</p>
            <div className="basket__right__inputs">
                <input type="text" placeholder="Enter coupon code here" className="basket__right__inputs__input"/>
                <button className="basket__right__inputs__btn">Apply</button>
            </div>
            <div className="basket__right__subtotal">
                <p className="basket__right__subtotal__text">Subtotal</p>
                <h3 className="basket__right__subtotal__price">$2,683.00</h3>
            </div>
            <div className="basket__right__discount">
                <p className="basket__right__discount__text">Coupon Discount</p>
                <h3 className="basket__right__discount__price">(-) 00.00</h3>
            </div>
            <div className="basket__right__shipping">
                <p className="basket__right__shipping__text">Shipping</p>
                <h3 className="basket__right__shipping__price">$16.00</h3>
            </div>
            <div className="basket__right__change">
                <p className="basket__right__change__text">View shipping charge</p>
            </div>
            <div className="basket__right__total">
                <h3 className="basket__right__total__text">Total</h3>
                <h3 className="basket__right__total__price">$2,699.00</h3>
            </div>
            <Link to={"/checkout"}><button className="basket__right__button">proceed To Checkout</button></Link>
            <p className="basket__right__shopping"><Link to={"/shop"}>Continue Shopping</Link></p>
        </div>
    </div>
}

export default BasketProductsRight;