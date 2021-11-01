import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import { useSelector } from "react-redux";

export default function App() {
  const cartItems = useSelector((state) => state.product.cartItems);

  useEffect(() => {
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
