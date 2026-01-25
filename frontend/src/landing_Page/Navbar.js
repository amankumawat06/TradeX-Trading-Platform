import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {

  const closeNavbar = () => {
  const navbar = document.getElementById("navbarSupportedContent");
  if (navbar) {
    const bsCollapse = new window.bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
  }
};


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3 pb-3 sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="media/Images/Tradex-logo.jpg"
            className="img-fluid zerodhalogo"
            alt="Zerodha"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/signup" className="nav-link" onClick={closeNavbar}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={closeNavbar}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link" onClick={closeNavbar}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link" onClick={closeNavbar}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
