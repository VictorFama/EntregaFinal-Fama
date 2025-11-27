import "./ItemDetailContainer.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { db } from "../../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import ProductCardDetail from "../../ui/product-card-detail/ProductCardDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productsDb = collection(db, "productos");
        const queryProduct = query(
          productsDb,
          where("id", "==", Number(productId))
        );
        const snapshotProduct = await getDocs(queryProduct);
        if (!snapshotProduct.empty) {
          const doc = snapshotProduct.docs[0];
          const productDb = {
            firestoreId: doc.id,
            ...doc.data(),
          };
          setProduct(productDb);
        } else {
          console.warn("Producto no encontrado en Firestore");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al cargar producto:", error);
        setProduct(null);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <div className={`container mt-4 contenedor-itemdetail ${dark ? "dark" : "light"}`}>
      <h2 className={`text-center mb-4 itemdetail-title ${dark ? "dark" : "light"}`}>
        Detalle del producto
      </h2>
      {product ? (<ProductCardDetail product={product}/>) : (<p className="text-center">Cargando producto...</p>)}
    </div>
  );
};

export default ItemDetailContainer;
