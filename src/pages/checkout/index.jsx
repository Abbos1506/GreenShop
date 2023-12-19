import CheckoutHeader from "./companents/checkoutHeader";
import CheckoutProducts from "./companents/checkoutProducts";

const CheckoutPage = () => {
    return <div className="checkout__page">
        <CheckoutHeader/>
        <CheckoutProducts/>
    </div>
}

export default CheckoutPage;