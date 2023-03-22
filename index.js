const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URI).then(()=>console.log("DBConnection Successful!"))
.catch((err)=> {
    console.log(err);
});

app.get("/api/test", ()=>{
    console.log("Test is successful");
})

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => console.log('express is listening on:', PORT));
// app.listen(3000, () => console.log("Backend Server Is Running"));