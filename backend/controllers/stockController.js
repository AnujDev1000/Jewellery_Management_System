const Stocks = require("../models/stockModel")

const addStock = async (req, res) => {
    const { availableStock, product } = req.body

    try {
        const stock = await Stocks.create({ availableStock, product })
        if(stock){
            res.status(200).json(stock)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getStock = async (req, res) => {
    try {
        const stock = await Stocks.find()
        if(stock){
            res.status(200).json(stock)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleStock = async (req, res) => {
    const { id } = req.params

    try {
        const stock = await Stocks.find({id})
        if(stock){
            res.status(200).json(stock)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteStock = async (req, res) => {
    const { id } = req.params

    try {
        const stock = await Stocks.findOneAndDelete({id})
        if(stock){
            res.status(200).json(stock)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setStock = async (req, res) => {
    const id = req.params

    try {
        const stock = await Stocks.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(stock){
            res.status(200).json(stock)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addStock, getStock, deleteStock, getSingleStock, setStock }