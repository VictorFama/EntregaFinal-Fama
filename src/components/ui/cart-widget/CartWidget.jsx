import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

const CartWidget = () => {
    return (
        <a href="#" className="cart-link">
            <FaShoppingCart />
        </a>
    )
}

export default CartWidget