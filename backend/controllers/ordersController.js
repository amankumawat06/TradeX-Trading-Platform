const {HoldingsModel} = require("../Models/HoldingsModel");
const {OrdersModel} = require("../Models/OrdersModel");

// Buy and Sell Stock
exports.addOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;

  let holding = await HoldingsModel.findOne({ name });

  if (mode === "BUY") {
    if (holding) {
      const totalQty = holding.qty + qty;
      const avgPrice = (holding.avg * holding.qty + price * qty) / totalQty;

      holding.qty = totalQty;
      holding.avg = avgPrice;
      holding.price = price;

      await holding.save();
    } else {
      await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "0.00",
        day: "0.00",
        isLoss: false,
      });
    }
  }

  if (mode === "SELL") {
    if (!holding) {
      return res.status(400).json({
        error: "Cannot sell stock you do not own",
      });
    }

    if (qty > holding.qty) {
      return res.status(400).json({
        error: "Sell quantity exceeds holding quantity",
      });
    }

    holding.qty -= qty;

    // remove holdings if qty will be 0
    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ name });
    } else {
      await holding.save();
    }
  }

  const order = new OrdersModel({ name, qty, price, mode });
  await order.save();

  res.json(order);
};



// Show all orders
exports.allOrders = async(req, res) => {
  let orders = await OrdersModel.find();
  res.json(orders);
};
