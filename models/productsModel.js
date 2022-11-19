const mongoose = require("mongoose")

const toId = mongoose.Schema.Types.ObjectId;


const productsModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    metal: { type: String, required: true, default: "none" },
    carat: { type: Number, default: 0 },
    category: { type: {}, default: {} },
    stone: { type: String, default: "none" },
    weight: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    supplier: { type: {}, required: true, default: {} },
    discription: { type: String, required: true, default: "none" },

}, { timestamps: true })

module.exports = mongoose.model("products", productsModel)