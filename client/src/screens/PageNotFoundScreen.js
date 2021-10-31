import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFoundScreen() {
  return (
   
      <div className="error-page">
        <h1>404</h1>
        <div>
          Page not found <Link to="/">Go to main</Link>
        </div>

    </div>
  );
}
