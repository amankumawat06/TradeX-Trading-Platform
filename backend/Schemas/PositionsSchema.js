// const {Schema} = require("mongoose")
const mongoose = require("mongoose")

const PositionsSchema = new mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
})

module.exports = { PositionsSchema }