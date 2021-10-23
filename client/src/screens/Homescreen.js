import React from "react";
import Product from "../components/Product";
import { products } from "../data";

export default function Homescreen() {
  return (
    <div className="row center">
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
}
