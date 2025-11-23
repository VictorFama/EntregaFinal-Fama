import { useState, useEffect } from "react";
import ProductCard from "../../ui/product-card/ProductCard";
import FiltersBar from "../../ui/filter-bar/FilterBar";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await fetch("/jsons/products.json");
      const data = await response.json();
      setProducts(data);
      console.log("Productos cargados:", data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  getProducts();
}, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) =>
    selectedCategory ? product.category === selectedCategory : true
  );

  return (
    <div className="container mt-4 contenedor-itemlist">
      <h2 className="text-center mb-4">Lista de productos</h2>

      <FiltersBar categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
      <div className="row g-3 justify-content-center mt-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
