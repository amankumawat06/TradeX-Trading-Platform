const express = require("express")
const router = express.Router()
const {allPositions} = require("../controllers/positionsController")

router.get("/allPositions",allPositions)

module.exports = router