import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes";

export default function App() {
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
