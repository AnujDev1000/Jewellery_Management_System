const mongoose = require("mongoose")

const stockModel = mongoose.Schema({
    availableStock: { type: Number, required: true,},
    product: { type: {}, required: true, default: {} },
}, { timestamps: true })

module.exports = mongoose.model("stocks", stockModel)