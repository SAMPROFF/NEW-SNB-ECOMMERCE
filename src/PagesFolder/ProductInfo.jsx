// import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../ContextFolder/CartContext';

const ProductInfo = () => {
  const { id } = useParams();
  const { state: { products, cart }, dispatch } = useCart();

  const product = products.find((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product.id,
    });
  };

  return (
    <div className="product-container">
      {product && (
        <div className="product-details">
          <div className="product-image">
            <img src={product.imgUrl} alt={product.title} />
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.body}</p>
            <span>${product.price}</span>
            {cart.some((p) => p.id === product.id) ? (
              <button className="btn btn-danger" onClick={handleRemoveFromCart}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
