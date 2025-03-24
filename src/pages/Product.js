import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.2.41:4040/product/getAll") // Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product-card" key={product.productId}>
            <div className="card-header">
              <img
                src="https://via.placeholder.com/50" // Replace with product image URL if available
                alt={product.productName}
                className="product-logo"
              />
              <div className="menu-icon">⋮</div>
            </div>
            <h3 className="product-name">{product.productName}</h3>
            <p className="product-description">
              Price: ₹ {product.productPrice.toFixed(2)}
            </p>
            <p className="product-quantity">Stock: {product.productQuantity}</p>
            <div className="product-actions">
              <div className="action-icon">📧</div>
              <div className="action-icon">📞</div>
              <div className="action-icon chat">💬</div>
            </div>
          </div>
        ))
      ) : (
        <p className="loading-message">Loading products...</p>
      )}
    </div>
  );
};

export default Product;
