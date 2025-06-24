import React, { useState } from 'react';
import './ProductCard.css'; // We'll add styles here

const ProductCard = ({ title, description, price, image }) => {
  const [showDiscount, setShowDiscount] = useState(false);

  const discountedPrice = (price * 0.9).toFixed(2); // 10% discount

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">
        Price: ${showDiscount ? discountedPrice : price}
      </p>
      <button onClick={() => setShowDiscount(!showDiscount)}>
        {showDiscount ? 'Show Original Price' : 'Apply Discount'}
      </button>
    </div>
  );
};

export default ProductCard;
