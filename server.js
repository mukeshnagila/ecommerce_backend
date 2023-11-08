const express = require("express");
const cors = require("cors");
const routing = require("./Routes/routing");
const connectToDatabase = require("./Config/db");
// const connectToDatabase = require("./Config/db");

const app = express();

app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use("/api", routing)
app.get("/", (req, res)=>{
    res.send("Home Page");
    console.log("Home Page");
})


app.listen(5008, async(req,res) => {
// app.listen(5008, () => {
    try{
        await connectToDatabase()
        console.log("server is running fine by PORT - 5008");
    }catch(err){
        console.log("error in running server", (err));
    }
})