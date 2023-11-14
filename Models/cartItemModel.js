// CartItemModel.js
const mongoose = require("mongoose");

const CartItemSchema = mongoose.Schema({
  useremail: String,
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'allProducts',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const CartItemModel = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItemModel;
