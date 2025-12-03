import "./CheckoutCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const CheckoutCard = ({ item }) => {
  const { dark } = useContext(ThemeContext);

  const subtotal = item.price * item.quantity;

  return (
    <div className={`checkout-card ${dark ? "dark" : "light"} p-3 mb-3`}>
      <div className="row align-items-center">
        
        <div className="col-3 col-sm-2">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid checkout-card-img"
          />
        </div>

        <div className="col-6 col-sm-7">
          <h5 className="checkout-card-title">{item.title}</h5>
          <p className="checkout-card-text">Cantidad: {item.quantity}</p>
          <p className="checkout-card-text">Precio unitario: ${item.price}</p>
        </div>

        <div className="col-3 col-sm-3 text-end">
          <p className="checkout-card-subtitle">Subtotal</p>
          <strong className="checkout-card-subtotal">
            ${subtotal}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
