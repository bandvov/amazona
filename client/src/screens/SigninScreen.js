import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { signinUser } from "../redux/customActions/productActions";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.errorMessage);
  const loading = useSelector((state) => state.user.loading);
  const submitHandler = (e) => {
    e.preventDefault();
    signinUser(dispatch, { email, password });
  };
  return (
    <div>
      {loading && <div>loading...</div>}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Sign In</h2>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
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
            type={showPassword ? "text" : "password"}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            style={{
              cursor: "pointer",
              padding: ".8rem 1rem",
              position: "absolute",
              right: 0,
              bottom: "10px",
            }}
            onClick={() => setShowPassword(!showPassword)}
          >
            &#x1f441;
          </i>
        </div>
        <div>
          <button className="primary block" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <div>
            Don't have account? <Link to="/register">Create Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
