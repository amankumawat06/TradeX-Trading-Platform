import React,{useState, useEffect} from "react";
// import { positions } from "../data/data";
import axios from "axios";
import {DoughnutGraph} from "./DoughnutGraph" 

const Positions = () => {
  const [allPositions, setAllPositions] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/allPositions").then((res) => {
      setAllPositions(res.data)
    })
  },[])


  
  const data = {
    labels: allPositions.map((item) => item["name"]),
    datasets: [
      {
        label: 'Position',
        data: allPositions.map((position) => position.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((stock, idx) => {
            let currValue = stock.price * stock.qty;
            let isProfit = currValue - stock.avg * stock.qty >= 0.0;
            let profClass = isProfit ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={idx}>
                <td> {stock.product} </td>
                <td> {stock.qty} </td>
                <td> {stock.avg.toFixed(2)} </td>
                <td> {stock.price.toFixed(2)} </td>
                <td className={profClass}>
                  {" "}
                  {(currValue - stock.avg * stock.qty).toFixed(2)}{" "}
                </td>
                <td className={profClass}> {stock.net} </td>
                <td className={dayClass}> {stock.day} </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div style={{height:"450px"}} className="mt-5" >
        <DoughnutGraph data={data} />
      </div>
    </>
  );
};

export default Positions;
