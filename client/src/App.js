import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { initCartItems } from "./redux/customActions/productActions";

export default function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartItems);

  useEffect(() => {
    initCartItems(dispatch);
  }, []);

  useEffect(() => {
    console.log('here2');
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="grid-container">
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
}
