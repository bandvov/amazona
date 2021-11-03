import React from "react";
import { Link } from "react-router-dom";

export default function OrderCartItem({ item }) {
  return (
    <div className="row" style={{ borderBottom: "1px solid" }}>
      <div>
        <img src={item.image} alt={item.name} className="small" />
      </div>
      <div className="min-30">
        <Link to={`/product/${item.product}`}>{item.name}</Link>
      </div>
      <div>
        {item.qty} x $ {item.price} = $ {item.qty * item.price}
      </div>
    </div>
  );
}
