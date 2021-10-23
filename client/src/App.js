import React from "react";
import "./App.css";
import { products } from "./data";

export default function App() {
  return (
    <div className="grid-container">
      <header>
        <div className="row">
          <a className="brand" href="/">
            Amazona
          </a>
          <div className="row">
            <a href="/cart">Cart</a>
            <a href="/signin">Signin</a>
          </div>
        </div>
      </header>

      <div className="row center">
        {products.map((product) => {
          return (
            <div className="card">
              <a href={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <h2>
                  <a href={`/product/${product._id}`}>{product.name}</a>
                </h2>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
