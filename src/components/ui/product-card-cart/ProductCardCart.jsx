import "./ProductCardCart.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { CartContext } from "../../../context/CartContext";
import { ToastContext } from "../../../context/ToastContext";
import { DangerButton } from "../danger-button/DangerButton";

const ProductCardCart = ({ product, quantity }) => {
  const { dark } = useContext(ThemeContext);
  const { deleteCartProduct } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  if (!product) return null;
  const total = product.price * quantity;
  
  const handleDeleteCartProduct = () => {
    deleteCartProduct(product.id);
    showToast("Producto eliminado del carrito");
  };

  return (
      <div className={`card product-cart-card ${dark ? "dark" : "light"}`}>
        <img src={product.image} className="card-img-top product-card-detail-img" alt={product.title}/>

        <div className="card-body text-center">
          <h5 className="cart-title">{product.title}</h5>
          <p className="cart-text">Cantidad: {quantity} unidades</p>
          <p className="cart-text">Precio Unitario: ${product.price}</p>
          <p className="cart-text">Precio Total: ${total}</p>
          <DangerButton onClick={handleDeleteCartProduct}>Eliminar</DangerButton>
        </div>
      </div>
  );
};

export default ProductCardCart;
