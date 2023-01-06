const Suppliers = require("../models/suppliersModel")

const addSupplier = async (req, res) => {
    const { name, phone } = req.body

    try {
        const supplier = await Suppliers.create({ name, phone })
        if(supplier){
            res.status(200).json(supplier)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSupplier = async (req, res) => {
    try {
        const supplier = await Suppliers.find()
        if(supplier){
            res.status(200).json(supplier)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleSupplier = async (req, res) => {
    const { id } = req.params

    try {
        const supplier = await Suppliers.find({id})
        if(supplier){
            res.status(200).json(supplier)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteSupplier = async (req, res) => {
    const { id } = req.params

    try {
        const supplier = await Suppliers.findOneAndDelete({_id: id})
        if(supplier){
            res.status(200).json(supplier)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setSupplier = async (req, res) => {
    const id = req.params

    try {
        const supplier = await Suppliers.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(supplier){
            res.status(200).json(supplier)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addSupplier, getSupplier, deleteSupplier, getSingleSupplier, setSupplier }