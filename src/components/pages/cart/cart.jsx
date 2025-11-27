import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { ThemeContext } from "../../../context/ThemeContext";
import ProductCardCart from "../../ui/product-card-cart/ProductCardCart";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/jsons/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className={`container mt-4 contenedor-cart ${dark ? "dark" : "light"}`}>
      <h2 className={`text-center mb-4 cart-title ${dark ? "dark" : "light"}`}>
        Carrito
      </h2>
      {cart.length === 0 && (
        <p className={`text-center cart-empty ${dark ? "dark" : "light"}`}>
          El carrito está vacío.
        </p>
      )}

      <div className="row justify-content-center cart-row">
        {cart.map((cartProduct) => {
          const dataProduct = products.find(
            (product) => product.id === cartProduct.id
          );

          return (
            <ProductCardCart key={cartProduct.id} product={dataProduct} quantity={cartProduct.quantity}/>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
