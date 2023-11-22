// // const express = require("express");
// // const cors = require("cors");
// // const routing = require("./Routes/routing");
// // const connectToDatabase = require("./Config/db");
// // const payment_route = require("./Routes/paymentsRoute");
// // // const connectToDatabase = require("./Config/db");
// // require("dotenv").config();

// // const app = express();

// // app.use(express.json())
// // app.use(cors({
// //     origin: "*"
// // }))
// // app.use("/api", routing)
// // app.use("/api/payment", payment_route);

// // // app.use("/api", payment_route)
// // app.get("/", (req, res)=>{
// //     res.send("Home Page");
// //     console.log("Home Page");
// // })


// // app.listen(5008, async(req,res) => {
// // // app.listen(5008, () => {
// //     try{
// //         await connectToDatabase()
// //         console.log("server is running fine by PORT - 5008");
// //     }catch(err){
// //         console.log("error in running server", (err));
// //     }
// // })

// const express = require("express");
// const cors = require("cors");
// const routing = require("./Routes/routing");
// const connectToDatabase = require("./Config/db");
// const payment_route = require("./Routes/paymentsRoute");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors({
//     origin: "*"
// }))
// app.use(express.json());

// // Routes
// app.use("/api", routing);
// app.use("/api/payment", payment_route);

// // Default route
// app.get("/", (req, res) => {
//     res.send("Home Page");
//     console.log("Home Page");
// });

// app.listen(5008, async (req, res) => {
//     try {
//         await connectToDatabase();
//         console.log("server is running fine by PORT - 5008");
//     } catch (err) {
//         console.log("error in running server", err);
//     }
// });

const express = require('express');
const cors = require('cors');
const routing = require('./Routes/routing');
const connectToDatabase = require('./Config/db');
const paymentRoute = require('./Routes/paymentsRoute');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: '*'
}));
app.use(express.json());

// Routes
app.use('/api', routing);
app.use('/api/payment', paymentRoute);

// Default route
app.get('/', (req, res) => {
    res.send('Home Page');
    console.log('Home Page');
});

app.listen(5008, async (req, res) => {
    try {
        await connectToDatabase();
        console.log('server is running fine by PORT - 5008');
    } catch (err) {
        console.log('error in running server', err);
    }
});
