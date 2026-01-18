const express = require("express")
const router = express.Router()
const {allHoldings} = require("../controllers/holdingsController")

router.get("/allHoldings", allHoldings)

module.exports = router