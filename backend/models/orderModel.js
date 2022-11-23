const mongoose = require("mongoose")

const orderModel = mongoose.Schema({
    totalAmount: { type: Number, required: true, default: 0 },
    productAmount: { type: Number, required: true, default: 0 },
    productCount: { type: Number, required: true, default: 0},
    status: { type: String, default: "pending" },
    product: { type: {}, required: true, default: {} },
    supplier: { type: {}, required: true, default: {} },
    stock: { type: {}, required: true, default: {} },
}, { timestamps: true })

module.exports = mongoose.model("orders", orderModel)