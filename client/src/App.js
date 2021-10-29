import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";
import { useDispatch } from "react-redux";
import { initCartItems } from "./redux/customActions/productActions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("here");
    initCartItems(dispatch);
  }, [dispatch]);

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
