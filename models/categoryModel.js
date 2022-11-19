const mongoose = require("mongoose")

const categoryModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    productCount: { type: Number, required: true,},
    products: { type: [], required: true, default: [] }
}, { timestamps: true })

module.exports = mongoose.model("categories", categoryModel)