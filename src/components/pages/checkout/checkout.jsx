import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import Loading from "../../ui/loading/Loading";
import CheckoutCard from "../../ui/checkout-card/CheckoutCard";
import MainButton from "../../ui/main-button/MainButton";


const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (cart.length === 0) {
          setItems([]);
          setLoading(false);
          return;
        }

        const productsDb = collection(db, "productos");
        const ids = cart.map((p) => p.id);

        const queryProduct = query(productsDb, where("id", "in", ids));
        const snapshotProduct = await getDocs(queryProduct);

        const productsData = snapshotProduct.docs.map((doc) => ({
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
        console.error("Error al cargar productos del checkout:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [cart]);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`container mt-4 contenedor-checkout  mb-4 ${
        dark ? "dark" : "light"
      }`}
    >
      <h2
        className={`text-center mb-4 checkout-title ${
          dark ? "dark" : "light"
        }`}
      >
        Checkout
      </h2>

      {items.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        <>
         <div className="checkout-items">
          {items.map((item) => (
            <CheckoutCard key={item.firestoreId} item={item} />
          ))}
        </div>

          <div className={`checkout-summary-card ${dark ? "dark" : "light"}`}>
            <h4>Total: ${total}</h4>
            <MainButton>
              Confirmar Compra
            </MainButton>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
