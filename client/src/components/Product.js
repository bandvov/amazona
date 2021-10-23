import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <h2>
          <a href={`/product/${product._id}`}>{product.name}</a>
        </h2>
        <Rating rating={product.rating} numberViews={product.numberViews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
export default Product;
