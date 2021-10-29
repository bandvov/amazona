import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.product.cartItems);
  return (
    <header>
      <div className="row">
        <Link className="brand" to="/">
          Amazona
        </Link>
        <div className="row">
          <div>
            <Link to="/cart">Cart</Link>
            {cartItems.length && (
              <span className="badge">
                {cartItems.length < 100 ? cartItems.length : "99+"}
              </span>
            )}
          </div>

          <Link to="/signin">Signin</Link>
        </div>
      </div>
    </header>
  );
}
