
const express = require('express');
const mongoose = require('mongoose');
const connectDatabase = require("./database/connect");
const cors = require('cors');
const Router = require ("./routes/auth");
const app = express();
// app.use(cors({
//     credentials: true,
//     origin: ['http://localhost:5173']
//   }));
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}));

app.use(express.json());
connectDatabase();
app.use("/",Router);

app.get('/',(req,res) => {
    res.send("Welcome to GharDhani");
});

//App is running at the port of 4000
app.listen(4000, () => {
    console.log("Server started at the port 4000")
})