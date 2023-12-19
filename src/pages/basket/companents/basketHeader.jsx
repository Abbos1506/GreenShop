import { Link } from "react-router-dom";

const BasketHeader = () => {
    return <div className="basket__header">
        <div className="basket__header__link">
            <Link to={"/"}>Home</Link>/
            <Link to={"/shop"}>Shop</Link>/
            <Link to={"/savat"}>Shopping Cart</Link>
        </div>
    </div>
}

export default BasketHeader;