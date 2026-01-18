require("dotenv").config()
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const Mongoose = require("mongoose")
// const {HoldingsModel} = require("./Models/HoldingsModel")
// const {PositionsModel} = require("./Models/PositionsModel")
// const {OrdersModel} = require("./Models/OrdersModel")
// const {createToken, createSecretToken} = require("./utils/SecretToken")
// const bcrypt = require("bcryptjs")
// const userModel = require("./Models/userModel")
const cookieParser = require("cookie-parser")
const holdings = require("./routes/holdingsRoute")
const positions = require("./routes/positionsRoute")
const orders = require("./routes/ordersRoute")
const auth = require("./routes/authenticationRoute")

app.use(cors({origin:["http://localhost:3001","http://localhost:3000"],credentials: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT = process.env.PORT || 8080;
const MongoURL = process.env.MONGO_URL;

// MongoDB connection Established
async function main() {
    mongoose.connect(MongoURL)
}

main().then(() => {
    console.log("Express connected to MongoDB successfully!")
}).catch((err) => {
    console.log("MongoDB connection Error ",err )
})


app.use("/",holdings)
app.use("/",positions)
app.use("/",orders)
app.use("/",auth)


// // fetch Holdings data from Database
// app.get("/allHoldings", async(req,res) => {
//     let allholdings = await HoldingsModel.find()
//     res.json(allholdings)
// })

// // fetch Positions data from Database
// app.get("/allPositions", async(req,res) => {
//     let allPositions = await PositionsModel.find()
//     res.json(allPositions)
// })

// // Buy and Sell Stock
// app.post("/newOrders", async (req, res) => {
//   const { name, qty, price, mode } = req.body;

//   let holding = await HoldingsModel.findOne({ name });

//   if (mode === "BUY") {
//     if (holding) {
//       const totalQty = holding.qty + qty;
//       const avgPrice =
//         (holding.avg * holding.qty + price * qty) / totalQty;

//       holding.qty = totalQty;
//       holding.avg = avgPrice;
//       holding.price = price;

//       await holding.save();
//     } else {
//       await HoldingsModel.create({
//         name,
//         qty,
//         avg: price,
//         price,
//         net: "0.00",
//         day: "0.00",
//         isLoss: false,
//       });
//     }
//   }

//   if (mode === "SELL") {
//     if (!holding) {
//       return res.status(400).json({
//         error: "Cannot sell stock you do not own",
//       });
//     }

//     if (qty > holding.qty) {
//       return res.status(400).json({
//         error: "Sell quantity exceeds holding quantity",
//       });
//     }

//     holding.qty -= qty;

//     // remove holdings if qty will be 0
//     if (holding.qty === 0) {
//       await HoldingsModel.deleteOne({ name });
//     } else {
//       await holding.save();
//     }
//   }

//     const order = new OrdersModel({ name, qty, price, mode });
//     await order.save();

//   res.json(order);
// });


// // Show all orders
// app.get("/allOrders",async (req,res) => {
//     let orders = await OrdersModel.find()
//     res.json(orders)
// })


// // Signup 
// app.post("/signup",async(req,res,next) => {
//   try{
//     let {email,password,username,createdAt} = req.body;
//     const existingUser = await userModel.findOne({email})
//     if(existingUser){
//       res.json({message: "email already exist,Try different email"})
//     }else{
//       let newUser = new userModel({email,password,username,createdAt})
//       await newUser.save()
//       let token = createSecretToken(newUser._id);
//       res.cookie("token", token, {
//         withCredentials: true,
//         httpOnly: false
//       });
//       res.status(201).json({message:"User signed in successfully", success: true, newUser})
//       // next()
//     }
//   }catch(err){
//     console.log(err)
//   }
// })

// // Login Route
// app.post("/login",async (req,res) => {
//   let {email,password} = req.body;
//   let user = await userModel.findOne({email,})
//   if(!user){
//     return res.status(404).json({message: "passoword or email Incorrect"})
//   }
//   const auth = await bcrypt.compare(password,user.password)
//   if(!auth){
//     return res.status(404).json({message:'Incorrect password or email' }) 
//   }
//   const token = createSecretToken(user._id)
//   res.cookie("token",token, {
//     withCredentials:true,
//     httpOnly:false
//   })
//   res.json({message:"User Logged In successfully", success: true,user})
// })


app.listen(PORT, () => {
    console.log(`Server is waiting for request on Port ${PORT}`)
})
