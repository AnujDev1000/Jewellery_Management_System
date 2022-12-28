const mongoose = require("mongoose")

const suppliersModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    phone: { type: String, default: "" },
    productCount: { type: Number, default: 0},
    products: { type: [], required: true, default: [] },
    orderPending: { type: Number, default: 0},
    orderCompleted: { type: Number, default: 0},
    orders: { type: [], required: true, default: [] }
}, { timestamps: true })

module.exports = mongoose.model("suppliers", suppliersModel)