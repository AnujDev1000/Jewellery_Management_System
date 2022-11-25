const mongoose = require("mongoose")

const Orders = require("../models/orderModel")
const Products = require("../models/productsModel")
const Suppliers = require("../models/suppliersModel")
const Stocks = require("../models/stockModel")

const addOrder = async (req, res) => {
    const { productCount, productAmount, totalAmount, product, supplier, stock } = req.body

    const order = new Orders({ productCount, productAmount, totalAmount, product, supplier, stock })

    try {
        const session = await mongoose.startSession()
        await session.startTransaction()

        // Orders
        await order.save({session: session})

        // Suppliers
        const fSupplier = await Suppliers.findOne({_id: supplier._id})
        fSupplier.orders.push({_id:order._id})
        fSupplier.orderCount = fSupplier.orderCount + 1
        await fSupplier.save({session: session})

        // Stock
        const fStock = await Stocks.findOne({_id: stock._id})
        fStock.order = { _id: order._id }
        await fStock.save({session: session})

        await session.commitTransaction()
        session.endSession()
        res.status(200).json(order)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await Orders.find()
        if(order){
            res.status(200).json(order)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleOrder = async (req, res) => {
    const { id } = req.params

    try {
        const order = await Orders.find({id})
        if(order){
            res.status(200).json(order)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params

    try {
        const order = await Orders.findOneAndDelete({id})
        if(order){
            res.status(200).json(order)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setOrder = async (req, res) => {
    const id = req.params

    try {
        const order = await Orders.findOne({_id: id})

        const session = await mongoose.startSession()
        await session.startTransaction()

        // Orders
        order.status = "completed"
        await order.save({session: session})

        // Stock
        const fStock = await Stocks.findOne({_id: order.stock._id})
        fStock.order = {}
        fStock.availableStock = fStock.availableStock + order.productCount
        await fStock.save({session: session})

        await session.commitTransaction()
        session.endSession()

        res.status(200).json(order)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addOrder, getOrder, deleteOrder, getSingleOrder, setOrder }