const mongoose = require("mongoose")

const customerModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    phone: { type: String, default: "" },
    products: []
}, { timestamps: true })

module.exports = mongoose.model("customers", customerModel)