import './ProductCardDetail.css';
import ItemCount from '../item-count/ItemCount';

const ProductCardDetail = ({ product }) => {

  return (
      <div className="container card mb-3 product-card-detail">
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
                <ItemCount stock={product.stock} />
                <button className="product-card-detail-btn">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCardDetail;
