const mongoose = require("mongoose")

const purchaseModel = mongoose.Schema({
    customer: { type: {},  default: {} },
    recipt: { type: {},  default: {} },
    quantity: { type: Number, default: 0},
    amount: { type: Number, default: 0},
    payment: { type: String, default: "none" },
    taxRate: { type: String, default: "none" },
    taxAmount: { type: Number, default: "none" },
    goldRate: { type: Number, default: "none" },
    silverRate: { type: Number, default: "none" },
    products: { type: [], default: [] }
}, { timestamps: true })

module.exports = mongoose.model("purchases", purchaseModel)