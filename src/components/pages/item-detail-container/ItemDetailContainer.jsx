import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ProductCardDetail from "../../ui/product-card-detail/ProductCardDetail";

const ItemDetailContainer = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await fetch("/jsons/products.json");
          const data = await response.json();
          const productDb = data.find((p) => p.id === parseInt(productId));
          setProduct(productDb);
          console.log("Productos cargados:", data);
        } catch (error) {
          console.error("Error al cargar productos:", error);
        }
      };
    
      getProduct();
    }, [productId]);


    return(
        <div className="container mt-4 contenedor-itemdetail">
          <h2 className="text-center mb-4">Detalle del producto</h2>
          <ProductCardDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer