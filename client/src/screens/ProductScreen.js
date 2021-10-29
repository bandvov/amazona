import React, { useState, useEffect } from "react";
import Rating from "./../components/Rating";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/customActions/productActions";

export default function ProductScreen({ match, history }) {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productId = match.params.id;

  useEffect(() => {
    getProduct(dispatch, productId);
  }, []);

  const product = useSelector((state) => state.product.product);
  const addQuantity = () => {
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div className="row top">
      <div className="col-2">
        <img className="large" src={product.image} alt={product.name} />
      </div>
      <div className="col-1">
        <div className="card-body">
          <h2>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h2>
          <Rating rating={product.rating} numberViews={product.numberViews} />
          <div className="price">Price: {product.price}</div>
          <div>
            Description: <div>{product.description}</div>
          </div>
        </div>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <div className="row">
            Price:
            <div className="price">${product.price}</div>
          </div>
          <div className="row">
            Status:
            {product.countInStock ? (
              <div className="success">In Stock</div>
            ) : (
              <div className="error">Not Available</div>
            )}
          </div>
          <div>
            {product.countInStock && (
              <>
                <div className="row">
                  <div>Qty</div>
                  <select
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option value={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                </div>
                <button onClick={addQuantity} className="primary block">
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
