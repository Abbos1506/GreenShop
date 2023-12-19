import CheckoutRight from "./checkoutRight";
import CheckoutLeft from "./checkoutleft"

const CheckoutProducts = () => {
    return <div className="checkout__products">
        <CheckoutLeft/>
        <CheckoutRight/>
    </div>
}

export default CheckoutProducts;