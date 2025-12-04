import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebase";
import { collection, getDocs, where, query, addDoc, serverTimestamp, writeBatch, doc, increment } from "firebase/firestore";
import Loading from "../../ui/loading/Loading";
import CheckoutCard from "../../ui/checkout-card/CheckoutCard";
import MainButton from "../../ui/main-button/MainButton";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { dark } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();


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

  const handleConfirmPurchase = async () => {
    if (items.length === 0) return;

    setLoading(true);

    const order = {
      items: items.map((item) => ({
        id: item.id,
        title: item.title,
        unitPrice: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
      total: total,
      buyer: {
        name: "Victor",
        email: "Victor@test",
      },
      createdAt: serverTimestamp(),
    };
    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      const batchProducts = writeBatch(db);

      items.forEach((item) => {
      const productRef = doc(db, "productos", item.firestoreId);
      batchProducts.update(productRef, {
        stock: increment(-item.quantity),
      });
    });

    await batchProducts.commit();

      setOrderId(docRef.id);
      clearCart();
      setItems([]);
      navigate("/success", {
      state: {
        orderId: docRef.id,
      },
    });
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`container mt-4 contenedor-checkout  mb-4 ${dark ? "dark" : "light"}`}>
      <h2 className={`text-center mb-4 checkout-title ${dark ? "dark" : "light"}`}>
        Checkout
      </h2>

      {items.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        <div>
          <div className="checkout-items">
            {items.map((item) => (
              <CheckoutCard key={item.firestoreId} item={item} />
            ))}
          </div>
          <div className={`checkout-summary-card ${dark ? "dark" : "light"}`}>
            <h4>Total: ${total}</h4>
            <MainButton onClick={handleConfirmPurchase}>
              Confirmar Compra
            </MainButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
