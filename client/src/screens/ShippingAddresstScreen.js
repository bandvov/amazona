import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../redux/customActions/productActions";

const shippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));

export default function ShippingAddresstScreen({ history }) {
  const shippingAddress = useSelector((state) => state.product.shippingAddress);
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [country, setCountry] = useState(shippingAddress.country);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const user = useSelector((state) => state.user.user);
  console.log(fullName, address);
  const dispatch = useDispatch();
  if (!user) {
    history.push("/signin");
  }

  const submitHandler = () => {
    saveShippingAddress(dispatch, { fullName, address, country, postalCode });
    history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Shipping Information</h2>
        </div>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            value={fullName}
            placeholder="Enter full name..."
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={address}
            placeholder="Enter address..."
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            value={country}
            placeholder="Enter country..."
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            value={postalCode}
            placeholder="Enter post code..."
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <div>
          <button className="primary block" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
