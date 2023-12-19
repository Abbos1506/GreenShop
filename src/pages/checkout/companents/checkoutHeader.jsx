import { Link } from "react-router-dom";

const CheckoutHeader = () => {
    return <div className="checkout__header">
        <div className="checkout__header__links">
            <Link to={"/"}>Home</Link>/
            <Link to={"/shop"}>Shop</Link>/
            <Link to={"/savat"}>Shopping Cart</Link>/
            <Link to={"/checkout"}>Checkout</Link>
        </div>
    </div>
}

export default CheckoutHeader;