import "./Success.css";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import MainButton from "../../ui/main-button/MainButton";

const Success = () => {

    const { dark } = useContext(ThemeContext);

    const location = useLocation();
    const orderId = location.state?.orderId || "Sin ID";

    const navigate = useNavigate();

  return (
    <div className={`success-container ${
        dark ? "dark" : "light"
      }`}>
        <h2>¡Gracias por su compra!</h2>
        <p>Su número de orden es:</p>
        <h3 className="order-id">{orderId}</h3>
        <MainButton onClick={() => navigate("/")}>
            Volver al inicio
        </MainButton>
    </div>
  );
};

export default Success;
