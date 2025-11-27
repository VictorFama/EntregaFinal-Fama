import "./ItemListContainer.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Loading from "../../ui/loading/Loading";
import ProductCard from "../../ui/product-card/ProductCard";
import FiltersBar from "../../ui/filter-bar/FilterBar";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsDb = collection(db, "productos");
        const snapshotProduct = await getDocs(productsDb);
        const productsData = snapshotProduct.docs.map((doc) => ({firestoreId: doc.id, ...doc.data(),}));
        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    getProducts();
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filteredProducts = products.filter((product) => selectedCategory ? product.category === selectedCategory : true);
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className={`container mt-4 contenedor-itemlist ${dark ? "dark" : "light"}`}>
      <h2 className={`text-center mb-4 itemlist-title ${dark ? "dark" : "light"}`}>
        Lista de productos
      </h2>
      <FiltersBar categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
      <div className="row g-3 justify-content-center mt-3">
        {filteredProducts.map((product) => (
          <div key={product.firestoreId} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
