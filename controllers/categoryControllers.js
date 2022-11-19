const Categories = require("../models/categoryModel")

const addCategory = async (req, res) => {
    const { name, productCount, products } = req.body

    try {
        const category = await Categories.create({ name, productCount, products })
        if(category){
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getCategory = async (req, res) => {
    try {
        const category = await Categories.find()
        if(category){
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleCategory = async (req, res) => {
    const { id } = req.params

    try {
        const category = await Categories.find({id})
        if(category){
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.params

    try {
        const category = await Categories.findOneAndDelete({id})
        if(category){
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setCategory = async (req, res) => {
    const id = req.params

    try {
        const category = await Categories.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(category){
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addCategory, getCategory, deleteCategory, getSingleCategory, setCategory }