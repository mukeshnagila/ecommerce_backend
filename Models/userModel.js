const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    cart: [{type: mongoose.Schema.ObjectId, ref : "allProducts"}]
})

const userAccount = mongoose.model("userAccount", userSchema)

module.exports = userAccount;