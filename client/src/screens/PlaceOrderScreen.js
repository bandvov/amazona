import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "./../components/CheckoutSteps";
import OrderCartItem from "../components/OrderCartItem";

export default function PlaceOrderScreen({ history }) {
  const { fullName, address, country, city, postalCode } = useSelector(
    (state) => state.cart.shippingAddress
  );
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  const cartItems = useSelector((state) => state.cart.cartItems);
  if (!paymentMethod) {
    history.push("/payment");
  }
  const toPrice = (num) => +num.toFixed(2);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shipingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + shipingPrice + taxPrice;
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {fullName}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {`${address}, ${city}, ${country}, ${postalCode}`}
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
                        <OrderCartItem item={item} />;
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
                  <div>$ {shipingPrice.toFixed(2)}</div>
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
                <button className="primary block">Place Order</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
