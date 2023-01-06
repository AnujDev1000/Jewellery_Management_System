const Customers = require("../models/customerModel")

const addCustomer = async (req, res) => {
    const { name, phone } = req.body
 
    try {
        const customer = await Customers.create({ name, phone })
        if(customer){
            res.status(200).json(customer)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getCustomer = async (req, res) => {
    try {
        const customer = await Customers.find()
        if(customer){
            res.status(200).json(customer)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleCustomer = async (req, res) => {
    const { id } = req.params

    try {
        const customer = await Customers.find({id})
        if(customer){
            res.status(200).json(customer)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteCustomer = async (req, res) => {
    const { id } = req.params

    try {
        const customer = await Customers.findOneAndDelete({id})
        if(customer){
            res.status(200).json(customer)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setCustomer = async (req, res) => {
    const id = req.params

    try {
        const customer = await Customers.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(customer){
            res.status(200).json(customer)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addCustomer, getCustomer, deleteCustomer, getSingleCustomer, setCustomer }