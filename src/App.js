import React from "react";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
// import { Provider } from "react-redux";
// import store from "./store";
// import Cart from "./components/pages/Cart";
import { ContactUs } from "./components/pages/ContactUs";

// import { Router } from "express";
import Restaurants from "./components/pages/Restaurants";

function App() {
  return (
    <div>
      {/* <Restaurants /> */}

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
