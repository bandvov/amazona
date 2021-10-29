import React, { useEffect } from "react";
import Product from "../components/Product";
import MessageBox from "../components/MessageBox";
import { getProducts } from "../redux/customActions/productActions";
import { useSelector, useDispatch } from "react-redux";

export default function Homescreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  return loading ? (
    "loading"
  ) : error ? (
    <MessageBox variant="danger">Oops something went wrong</MessageBox>
  ) : (
    <div className="row center">
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
}
