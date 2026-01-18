const {model} = require("mongoose")
const {userSchema} = require("../Schemas/userSchema")

const userModel = new model("user", userSchema)

module.exports = {userModel} 