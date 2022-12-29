const mongoose = require("mongoose")

const Orders = require("../models/orderModel")
const Products = require("../models/productsModel")
const Suppliers = require("../models/suppliersModel")
const Stocks = require("../models/stockModel")

const addOrder = async (req, res) => {
    const { supplier, quantity, amount, products } = req.body 

    const order = new Orders({ supplier, quantity, amount, products })

    try {
        // Orders
        await order.save()
        // Suppliers
        const fSupplier = await Suppliers.findOne({_id: supplier._id})
        fSupplier.orders.push({_id:order._id})
        fSupplier.orderPending += 1
        await fSupplier.save()

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
    const { id } = req.params
    const order = await Orders.findOne({_id: id})
    
    try {

        // stock
        order.products.map(async (product) => {
            const stock = await Stocks.findOne({_id: product.stock._id})
            stock.availableStock += product.count
            stock.save()
        })

        // Orders
        order.status = "completed"
        order.save()

        // Suppliers
        const fSupplier = await Suppliers.findOne({_id: order.supplier._id})
        fSupplier.orderPending -= 1
        fSupplier.orderCompleted += 1
        await fSupplier.save()

        res.status(200).json(order)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addOrder, getOrder, deleteOrder, getSingleOrder, setOrder }