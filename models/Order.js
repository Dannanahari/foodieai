const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    foodItem: { type: String, required: true },
    restaurant: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
