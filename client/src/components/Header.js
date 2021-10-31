import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const cartItems = useSelector((state) => state.product.cartItems);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };
  return (
    <header>
      <div className="row">
        <Link className="brand" to="/">
          Amazona
        </Link>
        <div className="row">
          <div>
            <Link to="/cart">Cart</Link>
            {cartItems.length > 0 && (
              <span className="badge">
                {cartItems.length < 100 ? cartItems.length : "99+"}
              </span>
            )}
          </div>
          {user ? (
            <div style={{ color: "white" }} onClick={signOutHandler}>
              {user?.name}
            </div>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </div>
      </div>
    </header>
  );
}
