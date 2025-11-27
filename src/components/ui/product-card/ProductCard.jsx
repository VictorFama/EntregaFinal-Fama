import './ProductCard.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { dark } = useContext(ThemeContext);

  const navigateProductDetail = () => {
    navigate(`/itemdetail/${product.id}`);
  }
  return (
    <div className={`card h-100 shadow-sm product-card ${dark ? "dark" : "light"}`}>
      <img src={product.image} className="card-img-top product-card__img" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center card-price">
        <span className="fw-bold">${product.price}</span>
        <button onClick={navigateProductDetail} className="btn-detail">Ver detalle</button>
      </div>
    </div>
  );
};

export default ProductCard;
