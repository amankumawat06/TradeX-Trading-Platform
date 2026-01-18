const {PositionsModel} = require("../Models/PositionsModel")

// fetch Positions data from Database
exports.allPositions = async (req,res) => {
    let allPositions = await PositionsModel.find()
    res.json(allPositions)
}