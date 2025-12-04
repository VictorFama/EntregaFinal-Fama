import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ThemeContext } from "../../../context/ThemeContext";
import ProductCardCart from "../../ui/product-card-cart/ProductCardCart";
import Loading from "../../ui/loading/Loading";
import MainButton from "../../ui/main-button/MainButton";
import { DangerButton } from "../../ui/danger-button/DangerButton";
import { db } from "../../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (cart.length === 0) {
          setItems([]);
          return;
        }

        const productsDb = collection(db, "productos");
        const ids = cart.map((p) => p.id);
        const q = query(productsDb, where("id", "in", ids));
        const snapshot = await getDocs(q);

        const productsData = snapshot.docs.map((doc) => ({
          firestoreId: doc.id,
          ...doc.data(),
        }));

        const itemsWithQuantity = productsData.map((prod) => {
          const cartItem = cart.find((c) => c.id === prod.id);
          return {
            ...prod,
            quantity: cartItem ? cartItem.quantity : 0,
          };
        });

        setItems(itemsWithQuantity);
      } catch (error) {
        console.error("Error al cargar productos del carrito:", error);
        setItems([]);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };
    getProducts();
  }, [cart]);

  if (loading) return <Loading />;

  return (
    <div className={`container mt-4 contenedor-cart ${dark ? "dark" : "light"}`}>
      <h2 className={`text-center mb-4 cart-title ${dark ? "dark" : "light"}`}>
        Carrito
      </h2>

      {items.length === 0 && (
        <p className={`text-center cart-empty ${dark ? "dark" : "light"}`}>
          El carrito está vacío.
        </p>
      )}

      <div className="row justify-content-center cart-row">
        {items.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <ProductCardCart product={item} quantity={item.quantity} />
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <div className="cart-actions mb-4">
          <DangerButton onClick={clearCart}>
            Vaciar carrito
          </DangerButton>
          <MainButton onClick={() => navigate("/checkout")}>
            Checkout
          </MainButton>
        </div>
      )}
    </div>
  );
};

export default Cart;
