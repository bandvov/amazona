import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

export default function Homescreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((e) => {
        if (e) {
          setError(true);
        }
      });
  }, []);

  if (error) {
    return <div>Oops something went wrong</div>;
  }

  return loading ? (
    "loading"
  ) : (
    <div className="row center">
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
}
