import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "./../components/CheckoutSteps";
import OrderCartItem from "../components/OrderCartItem";
import { createOrder } from "./../redux/customActions/cartActions";
import { Link } from "react-router-dom";
import MessageBox from "./../components/MessageBox";

export default function PlaceOrderScreen({ history }) {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orderSuccessfullyCreated = useSelector(
    (state) => state.cart.orderSuccessfullyCreated
  );
  const error = useSelector((state) => state.cart.error);
  const dispatch = useDispatch();

  if (!paymentMethod) {
    history.push("/payment");
  }
  const toPrice = (num) => +num.toFixed(2);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const OrderHandler = () => {
    createOrder(dispatch, {
      shippingAddress,
      paymentMethod,
      orderItems: cartItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });
  };
  return orderSuccessfullyCreated ? (
    <div>
      <h1>Order successfully created!</h1>
      <Link to="/">Continue Shopping</Link>
    </div>
  ) : (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {shippingAddress.fullName}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {`${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}, ${shippingAddress.postalCode}`}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Cart Items</h2>
                <ul>
                  {cartItems.map((item) => {
                    return (
                      <li key={item.product}>
                        <OrderCartItem item={item} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <strong>Items:</strong>
                  <div>$ {itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <strong>Shipping:</strong>
                  <div>$ {shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <strong>Tax:</strong>
                  <div>$ {taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <h2>Total:</h2>
                  <div>$ {totalPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <button onClick={OrderHandler} className="primary block">
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
