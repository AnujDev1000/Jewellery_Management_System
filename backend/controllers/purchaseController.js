const Purchases = require("../models/purchaseModel")
const Customers = require("../models/customerModel")

const addPurchase = async (req, res) => {
    const { customer, receipt, quantity, amount, taxAmount, products } = req.body
 
    try {
        const purchase = await Purchases({ customer, receipt, quantity, amount, taxAmount, products })
        const newCustomer = await Customers.create({name: customer.name, phone: customer.phone})

        purchase.customer = { _id: newCustomer._id, name: newCustomer.name }
        purchase.save()

        if(purchase){
            res.status(200).json(purchase)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getPurchase = async (req, res) => {
    try {
        const purchase = await Purchases.find()
        if(purchase){
            res.status(200).json(purchase)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSinglePurchase = async (req, res) => {
    const { id } = req.params

    try {
        const purchase = await Purchases.find({id})
        if(purchase){
            res.status(200).json(purchase)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deletePurchase = async (req, res) => {
    const { id } = req.params

    try {
        const purchase = await Purchases.findOneAndDelete({id})
        if(purchase){
            res.status(200).json(purchase)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setPurchase = async (req, res) => {
    const id = req.params

    try {
        const purchase = await Purchases.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(purchase){
            res.status(200).json(purchase)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addPurchase, getPurchase, deletePurchase, getSinglePurchase, setPurchase }