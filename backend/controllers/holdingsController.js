const {HoldingsModel} = require("../Models/HoldingsModel")

// fetch Holdings data from Database
exports.allHoldings = async (req,res) => {
    let allholdings = await HoldingsModel.find()
    res.json(allholdings)
};