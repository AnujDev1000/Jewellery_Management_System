const mongoose = require("mongoose")

const productsModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    metal: { type: String, required: true, default: "none" },
    carat: { type: Number, required: true, default: 0 },
    category: { type: String, required: true, default: "none" },
    stone: { type: String, required: true, default: "none" },
    price: { type: Number, required: true, default: 0 },
    company: { type: String, required: true, default: "none" },
    supplier: { type: [], required: true, default: [] },
    discription: { type: String, required: true, default: "none" },

}, { timestamps: true })

module.exports = mongoose.model("products", productsModel)