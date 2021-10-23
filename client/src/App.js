import React from "react";
import "./App.css";
import { products } from "./data";
import Product from "./components/Product";

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
      <main>
        <div className="row center">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      </main>
      <footer className="row center">&copy; All rights reserved</footer>
    </div>
  );
}
