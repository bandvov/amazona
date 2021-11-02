import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentMethod as setPaymentMethodToStore } from "../redux/reducers/productSlice";

export default function PaymentMethodScreen({ history }) {
  const payMethod = useSelector((state) => state.product.paymentMethod);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState(payMethod);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setPaymentMethodToStore(paymentMethod));
    history.push("/order");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Payment Method</h2>
        </div>
        <div>
          <div>
            <input
              id="paypal"
              checked={paymentMethod === "paypal"}
              type="radio"
              name="paymentMethod"
              value={"paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor={"paypal"}>Paypal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              id="stripe"
              checked={paymentMethod === "stripe"}
              type="radio"
              name="paymentMethod"
              value={"stripe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor={"stripe"}>Stripe</label>
          </div>
        </div>
        <div>
          <button className="primary">Continue</button>
        </div>
      </form>
    </div>
  );
}
