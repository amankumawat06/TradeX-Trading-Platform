import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css"

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://tradex-trading-platform.onrender.com/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);


  return (
    <>
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map((order, idx) => (
            <tr key={idx}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td
                className={order.mode == "BUY" ? "buyStock" : "sellStock"}
                style={{ fontSize: "16px" }}
              >
                {order.mode}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
    </>
  );
};

export default Orders;
