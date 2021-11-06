import React from "react";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import OrderCartItem from "../components/OrderCartItem";
import MessageBox from "../components/MessageBox";

export default function OrderScreen({ history, match }) {
  const shippingAddress = useSelector(
    (state) => state.cart.createdOrder.shippingAddress
  );
  const paymentMethod = useSelector(
    (state) => state.cart.createdOrder.paymentMethod
  );
  const orderItems = useSelector(
    (state) => state.cart.createdOrder?.orderItems
  );
  const isDelivered = useSelector(
    (state) => state.cart.createdOrder.isDelivered
  );
  const isPaid = useSelector((state) => state.cart.createdOrder.isPaid);
  const deliveredAt = useSelector(
    (state) => state.cart.createdOrder.deliveredAt
  );
  const paidAt = useSelector((state) => state.cart.createdOrder.paidAt);
  if (!orderItems) {
    history.push("/");
  }
  const error = useSelector((state) => state.cart.error);

  const toPrice = (num) => +num.toFixed(2);
  const itemsPrice = orderItems?.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <h1>Your Order Id: {match.params.id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {shippingAddress?.fullName}
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  {`${shippingAddress?.address}, ${shippingAddress?.city}, ${shippingAddress?.country}, ${shippingAddress?.postalCode}`}
                  <MessageBox variant={isDelivered ? "success" : "danger"}>
                    {isDelivered ? deliveredAt : "Not delivered"}
                  </MessageBox>
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {paymentMethod}
                  <MessageBox variant={isPaid ? "success" : "danger"}>
                    {isPaid ? paidAt : "Not paid"}
                  </MessageBox>
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {orderItems?.map((item) => {
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
                  <div>$ {itemsPrice?.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <strong>Shipping:</strong>
                  <div>$ {shippingPrice?.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <strong>Tax:</strong>
                  <div>$ {taxPrice?.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <h2>Total:</h2>
                  <div>$ {totalPrice?.toFixed(2)}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
