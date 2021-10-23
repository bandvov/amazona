import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <h2>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h2>
        <Rating rating={product.rating} numberViews={product.numberViews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
export default Product;
