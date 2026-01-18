const express = require("express")
const router = express.Router()
const {allOrders, addOrder } = require("../controllers/ordersController")

router.get("/allOrders", allOrders)
router.post("/newOrders", addOrder)

module.exports = router