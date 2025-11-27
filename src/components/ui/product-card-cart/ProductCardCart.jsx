import "./ProductCardCart.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { CartContext } from "../../../context/CartContext";
import { ToastContext } from "../../../context/ToastContext";

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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className={`card h-100 product-cart-card ${dark ? "dark" : "light"}`}>
        <img src={product.image} className="card-img-top product-card-detail-img" alt={product.title}/>

        <div className="card-body text-center">
          <h5 className="cart-title">{product.title}</h5>
          <p className="cart-text">Cantidad: {quantity} unidades</p>
          <p className="cart-text">Precio Unitario: ${product.price}</p>
          <p className="cart-text">Precio Total: ${total}</p>
          <button onClick={handleDeleteCartProduct} className="product-card-cart-btn">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardCart;
