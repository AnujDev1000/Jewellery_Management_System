const mongoose = require("mongoose")

const productsModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    metal: { type: String, required: true, default: "none" },
    carat: { type: Number, default: 0 },
    stone: { type: String, default: "none" },
    weight: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    discription: { type: String, default: "none" },
    category: { type: {}, required: true,  default: {} },
    supplier: { type: {}, required: true, default: {} },
    stock: { type: {}, default: {} },
}, { timestamps: true })

module.exports = mongoose.model("products", productsModel)