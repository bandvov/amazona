import React from "react";
import QuantityDropdown from "./QuantityDropdown";
import {
  addToCart,
  deleteFromCart,
} from "../redux/customActions/productActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="row" style={{ borderBottom: "1px solid" }}>
      <div>
        <img src={item.image} alt={item.name} className="small" />
      </div>
      <div className="min-30">
        <Link to={`/product/${item.product}`}>{item.name}</Link>
      </div>
      <div>$ {item.price}</div>
      <div>
        <QuantityDropdown
          onChange={(e) => {
            addToCart(dispatch, item.product, e.target.value);
          }}
          optionItems={item.countInStock}
          defaultValue={item.qty}
        />
      </div>
      <div onClick={() => deleteFromCart(dispatch, item.product)}>
        <button>Delete</button>
      </div>
    </div>
  );
}
