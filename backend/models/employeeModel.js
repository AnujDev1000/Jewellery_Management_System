const mongoose = require("mongoose")

const employeeModel = mongoose.Schema({
    name: { type: String, required: true, default: "none" },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    salary: { type: Number, required: true, default: 00 },
    type: { type: String, default: "" },
}, { timestamps: true })

module.exports = mongoose.model("employees", employeeModel)