const mongoose = require("mongoose")

const purchaseModel = mongoose.Schema({
    customer: { type: {},  default: {} },
    receipt: { type: Number, default: 0},
    quantity: { type: Number, default: 0},
    amount: { type: Number, default: 0},
    payment: { type: String, default: "cash" },
    taxAmount: { type: Number, default: "none" },
    products: { type: [], default: [] }
}, { timestamps: true })

module.exports = mongoose.model("purchases", purchaseModel)