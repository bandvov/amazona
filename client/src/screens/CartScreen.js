import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/customActions/productActions";
import MessageBox from "./../components/MessageBox";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function CartScreen({ match, history, location }) {
  const qty = location.search.split("=")[1] || 1;
  const productId = match.params.id;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartItems);

  useEffect(() => {
    addToCart(dispatch, productId, qty);
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    history.push("/signin?redirect=shipping");
  };
  return (
    <div className="row top">
      <div className="col-2">
        <h2>Shoping Cart</h2>
        {!cartItems.length ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shoping</Link>{" "}
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => {
              return (
                <li key={item.product}>
                  <CartItem item={item} />;
                </li>
              );
            })}
          </ul>
        )}
        <div></div>
      </div>
      <div className="col-1">
        <div className="card card-body">
          Subtotal ({cartItems.reduce((a, c) => a + +c.qty, 0)} items) : ${" "}
          {cartItems.reduce((a, c) => a + c.price * +c.qty, 0)}
          <ul>
            <li>
              <button onClick={checkoutHandler} className="primary block">
                Go to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
