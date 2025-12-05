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
  const [loading, setLoading] = useState(true);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsDb = collection(db, "productos");
        const snapshotProduct = await getDocs(productsDb);
        const productsData = snapshotProduct.docs.map((doc) => ({
          firestoreId: doc.id,
          ...doc.data(),
        }))
        .filter((product) => product.stock > 0);
        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };
    getProducts();
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filteredProducts = products.filter((product) =>
    selectedCategory ? product.category === selectedCategory : true
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`container contenedor-itemlist ${dark ? "dark" : "light"}`}>
      <h2 className={`itemlist-title ${dark ? "dark" : "light"}`}>
        Lista de productos
      </h2>
      <FiltersBar categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>

      <div className="row g-3 products-row">
        {filteredProducts.map((product) => (
          <div key={product.firestoreId} className="col-12 col-sm-6 col-md-4 col-lg-3 product-column">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
