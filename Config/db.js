// const {MongoClient} = require("mongodb")
// const url = "mongodb://127.0.0.1:27017";
// // const url = "mongodb://localhost:27017";
// const mongoserver = new MongoClient(url);
// // console.log(mongoserver);

// const connectToDatabase = async() => {
//     try{
//         await mongoserver.connect()
//         console.log("connection success");
//     }catch(err){
//         console.log("Error In DAtabase", err);
//     }
// }

// // connection();
// const database = mongoserver.db("E-Com");

// module.exports = {connectToDatabase, database}




const cloudUrl = "mongodb+srv://nagilamukesh43:Ecom123@cluster0.yxcfo8p.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

const connectToDatabase= async() => {
    try{
        await mongoose.connect(cloudUrl)
        console.log("connection success");
    }catch(err){
        console.log("Error In DAtabase", err);
    }
}
// connectToDatabase();
module.exports = connectToDatabase;