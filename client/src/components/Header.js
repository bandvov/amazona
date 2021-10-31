import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  const cartItems = useSelector((state) => state.product.cartItems);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };
  document.addEventListener("click", (e) => {
    if (ref.current !== e.target) {
      setShowDropdown(false);
    }
  });
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
            <>
              <div
                style={{ color: "white", position: "relative" }}
                onMouseOver={() => setShowDropdown(true)}
              >
                {user?.name}
                &#9660;
              </div>
              {showDropdown && (
                <div
                  ref={ref}
                  style={{
                    position: "absolute",
                    padding: "1rem",
                    backgroundColor: "#203040",
                    color: "white",
                    right: 0,
                    top: "5rem",
                  }}
                >
                  <Link onClick={signOutHandler} to="#">
                    Sign Out
                  </Link>
                </div>
              )}
            </>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </div>
      </div>
    </header>
  );
}
