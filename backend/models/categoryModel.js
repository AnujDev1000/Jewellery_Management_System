const mongoose = require("mongoose")

const categoryModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    productCount: { type: Number, default: 0},
    products: { type: [], default: [] }
}, { timestamps: true })

module.exports = mongoose.model("categories", categoryModel)