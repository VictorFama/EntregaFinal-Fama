import './ProductCardDetail.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { CartContext } from '../../../context/CartContext';
import { ToastContext } from "../../../context/ToastContext";
import useCount from '../../hooks/useCount';
import ItemCount from '../item-count/ItemCount';
import MainButton from "../../ui/main-button/MainButton";

const ProductCardDetail = ({ product }) => {

  const { dark } = useContext(ThemeContext);
  const { cart, addCartProduct } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const cartItem = cart.find((p) => p.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const availableStock = Math.max(product.stock - quantityInCart, 0);

  const { count, increment, decrement, reset } = useCount({ initialState: availableStock > 0 ? 1 : 0, stock: availableStock,});

  const handleAddCartProduct = () => {
    if (availableStock <= 0) {
      showToast("No hay más stock disponible de este producto");
      return;
    }

        const quantityToAdd = Math.min(count, availableStock);

        const newCartProduct = {
            id: product.id,
            quantity: quantityToAdd
        }
        addCartProduct(newCartProduct)
        showToast("Producto agregado al carrito");
        reset();;
    }

  return (
<div className={`container card mb-3 product-card-detail ${dark ? "dark" : "light"}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.image} className="card-img-top product-card-detail-img" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="product-card-detail-body">
              <h5 className="product-card-detail-title">{product.title}</h5>
              <p className="product-card-detail-text">{product.description}</p>
              <p className="product-card-detail-price">${product.price}</p>
              <div className="product-card-detail-actions">
                <ItemCount count={count} increment={increment} decrement={decrement}/>
                <MainButton onClick={handleAddCartProduct}>Agregar al carrito</MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCardDetail;
