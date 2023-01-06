const mongoose = require("mongoose")

const orderModel = mongoose.Schema({
    supplier: { type: {}, required: true, default: {} },
    quantity: { type: Number, required: true, default: 0},
    amount: { type: Number, required: true, default: 0 },
    status: { type: String, default: "pending" },
    products: [],
}, { timestamps: true })

module.exports = mongoose.model("orders", orderModel)