const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URI).then(()=>console.log("DBConnection Successful!"))
.catch((err)=> {
    console.log(err);
});

app.use(cors());


app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(PORT, () => console.log('express is listening on:', PORT));
