import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Sign In</h2>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="primary block" type="submit">
            Sign In
          </button>
        </div>
        <div>
          Don't have account? <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
}
