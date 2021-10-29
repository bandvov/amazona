import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/customActions/productActions";

export default function CartScreen({ match, location }) {
  console.log(location);
  console.log(match);
  const productId = match.params.id;
  const qty = location.search.split("=")[1] || 1;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("here");
    addToCart(dispatch, productId, qty);
  }, [addToCart, dispatch, productId, qty]);

  const cartItems = useSelector((state) => state.product.cartItems);
  return <pre>{JSON.stringify(cartItems, null, 2)}</pre>;
}
