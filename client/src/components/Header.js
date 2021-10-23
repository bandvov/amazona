import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="row">
        <Link className="brand" to="/">
          Amazona
        </Link>
        <div className="row">
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Signin</Link>
        </div>
      </div>
    </header>
  );
}
