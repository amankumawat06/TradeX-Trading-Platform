const { model } = require("mongoose")
const mongoose = require("mongoose")
const { HoldingsSchema } = require("../Schemas/HoldingsSchema")

// const HoldingsModel = new model("holding",HoldingsSchema)
const HoldingsModel = mongoose.model("holding",HoldingsSchema)

module.exports = { HoldingsModel }
