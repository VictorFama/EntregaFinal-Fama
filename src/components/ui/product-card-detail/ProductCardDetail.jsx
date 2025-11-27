import './ProductCardDetail.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { CartContext } from '../../../context/CartContext';
import { ToastContext } from "../../../context/ToastContext";
import useCount from '../../hooks/useCount';
import ItemCount from '../item-count/ItemCount';

const ProductCardDetail = ({ product }) => {

  const { dark } = useContext(ThemeContext);
  const { addCartProduct } = useContext(CartContext);
  const {count, increment, decrement} = useCount({initia:1, stock:product.stock})
  const { showToast } = useContext(ToastContext);

  const handleAddCartProduct = () => {
        const newCartProduct = {
            id: product.id,
            quantity:count
        }
        addCartProduct(newCartProduct)
        showToast("Producto agregado al carrito");
    }

  return (
<div className={`container card mb-3 product-card-detail ${dark ? "dark" : "light"}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} className="card-img-top product-card-detail-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body product-card-detail-body">
              <h5 className="card-title product-card-detail-title">{product.title}</h5>
              <p className="card-text product-card-detail-text">{product.description}</p>
              <p className="card-text product-card-detail-price">${product.price}</p>
              <div className="product-card-detail-actions">
                <ItemCount count={count} increment={increment} decrement={decrement}/>
                <button onClick={handleAddCartProduct} className="product-card-detail-btn">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCardDetail;
