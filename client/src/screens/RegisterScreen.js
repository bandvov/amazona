import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { registerUser } from "../redux/customActions/productActions";
import { setUserErrorMessage } from "../redux/reducers/userSlice";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserErrorMessage(""));
  }, []);

  const error = useSelector((state) => state.user.errorMessage);
  const loading = useSelector((state) => state.user.loading);
  const submitHandler = (e) => {
    e.preventDefault();
    registerUser(dispatch, { email, password, name });
  };
  return (
    <div>
      {loading && <div>loading...</div>}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Create Account</h2>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Name</label>
          <input
            id="name"
            name="name"
            type="name"
            value={name}
            placeholder="Enter name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
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
            Create Account
          </button>
        </div>
        <div>
          <div>
            Already have account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
