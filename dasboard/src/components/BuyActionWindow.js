import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ActionWindows.css";
import GeneralContext from "./GeneralContext.js";
import axios from "axios";

const BuyActionWindow = ({ stock }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock.price);

  const handleBuyClick = () => {
    axios.post("https://tradex-trading-platform.onrender.com/newOrders", {
      name: stock.name,
      price: Number(stockPrice),
      qty: Number(stockQuantity),
      mode: "BUY",
    });
    closeBuyWindow();
  };

  const { closeBuyWindow } = useContext(GeneralContext)

  const handleCancelClick = (e) => {
    e.preventDefault()
    closeBuyWindow()
  };

  return (
    <div className="container pt-3 mb-3 actionWindow" id="buy-window" draggable="true">
      <div className="regular-order">
        <p className="fs-6 text-center text-muted">Stock: {stock.name}</p>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              disabled
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue windowBtn"onClick={handleBuyClick} >Buy</Link>
          <Link className="btn btn-grey windowBtn" onClick={handleCancelClick}> Cancel </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
