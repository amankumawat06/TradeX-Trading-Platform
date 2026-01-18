import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_Page/home/HomePage";
import AboutPage from "./landing_Page/about/AboutPage";
import Pricing from "./landing_Page/pricing/PricingPage";
import Products from "./landing_Page/products/ProductPage";
import Signup from "./landing_Page/signup/Signup";
import Support from "./landing_Page/support/SupportPage";
import Navbar from "./landing_Page/Navbar"
import Footer from "./landing_Page/Footer";
import PageNotFound from "./landing_Page/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./landing_Page/signup/Login";
// import Dashboard from ""

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
