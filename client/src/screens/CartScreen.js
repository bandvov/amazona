import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/customActions/productActions";

export default function CartScreen({ match, location }) {

  const productId = match.params.id;
  const qty = location.search.split("=")[1] || 1;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartItems);
  
  useEffect(() => {
    addToCart(dispatch, productId, qty);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [dispatch, productId, qty, cartItems]);

  return <pre>cart</pre>;
}
