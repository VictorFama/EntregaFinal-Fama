import './CartWidget.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    const { dark } = useContext(ThemeContext);
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-link ${dark ? "dark" : "light"}`}>
            <FaShoppingCart />
            <span className={`counter ${dark ? "dark" : "light"}`}>
                {totalQuantity}
            </span>
        </Link>
    )
}

export default CartWidget