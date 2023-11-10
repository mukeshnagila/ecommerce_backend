const mongoose = require("mongoose")

const CartItems = mongoose.Schema({
    useremail:String,
    cart:[{
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
        }
    }]
})

const userOrders = mongoose.model("userOrders", CartItems)

module.exports = userOrders;