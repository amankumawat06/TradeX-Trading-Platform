const express = require("express")
const router = express.Router()
const {login,signup} = require("../controllers/authenticationController")
const {userVerification} = require("../middlewares/authenticationMiddleware")

router.post("/signup", signup)
router.post("/login", login)
router.post("/", userVerification)

module.exports = router