require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const holdings = require("./routes/holdingsRoute");
const positions = require("./routes/positionsRoute");
const orders = require("./routes/ordersRoute");
const auth = require("./routes/authenticationRoute");

app.use(
  cors({
    origin: [
      "https://tradex-trading-platoform.netlify.app/",
      "https://spontaneous-wisp-f223a4.netlify.app/",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;
const MongoURL = process.env.MONGO_URL;

// MongoDB connection Established
async function main() {
  mongoose.connect(MongoURL);
}

main()
  .then(() => {
    console.log("Express connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.log("MongoDB connection Error ", err);
  });

app.use("/", holdings);
app.use("/", positions);
app.use("/", orders);
app.use("/", auth);


app.listen(PORT, () => {
  console.log(`Server is waiting for request on Port ${PORT}`);
});
