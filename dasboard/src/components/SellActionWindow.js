import React, { useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "./ActionWindows.css";
import GeneralContext from "./GeneralContext.js";
import axios from "axios";

const SellActionWindow = ({ stock }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock.price);
  const [error,setError] = useState('')

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    if(Number(stockQuantity) > stock.qty){
      return setError("Quantity should be less than or equal to the holding quantity")
    }
    try{
      await axios.post("http://localhost:8080/newOrders", {
        name: stock.name,
        price: stockPrice,
        qty: stockQuantity,
        mode: "SELL",
      });
      closeSellWindow();
    }catch(err) {
      if (err.response?.data?.message) {
      return setError(err.response.data.message);
    }else{
      setError("Quantity should be less than or equal to the holding quantity")
      }
    }
  };

  useEffect(() => {
    if(error){
      setTimeout(() => {
        setError("")
      }, 2000);
    }
  },[error])

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeSellWindow();
  };

  return (
    <div className="container pt-3 mb-3 actionWindow" id="sell-window" draggable="true">
      <div className="regular-order">
        <p className="fs-6 text-center text-muted">Stock: {stock.name}</p>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              disabled
            />
          </fieldset>
        </div>
      </div>

      
          {error && <p className="error-text text-center mt-3" style={{color:"#c23737"}}>{error}</p>}

      <div className="buttons">
        <span>Margin required ₹0</span>
        <div>
          <Link className="btn btn-red windowBtn" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey windowBtn" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
