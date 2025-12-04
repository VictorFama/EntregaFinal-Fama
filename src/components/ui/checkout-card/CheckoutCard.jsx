import "./CheckoutCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const CheckoutCard = ({ item }) => {
  const { dark } = useContext(ThemeContext);

  const subtotal = item.price * item.quantity;

  return (
    <div className={`checkout-card ${dark ? "dark" : "light"}`}>
      <div className="checkout-card-container">
        <div className="row checkout-card-row">
          
          <div className="col-3 col-sm-2 checkout-card-col-image">
            <img src={item.image} alt={item.title} className="checkout-card-img"/>
          </div>

          <div className="col-6 col-sm-7 checkout-card-col-info">
            <h5 className="checkout-card-title">{item.title}</h5>
            <p className="checkout-card-text">Cantidad: {item.quantity}</p>
            <p className="checkout-card-text">Precio unitario: ${item.price}</p>
          </div>

          <div className="col-4 col-sm-3 checkout-card-col-subtotal">
            <p className="checkout-card-subtitle">Subtotal</p>
            <strong className="checkout-card-subtotal">
              ${subtotal}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
