const Categories = require("../models/categoryModel")
const Products = require("../models/productsModel")

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
        const category = await Categories.find({_id: id})
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
        // const categorySession = await Categories.startSession()
        // await categorySession.startTransaction()

        // const category = await Categories.findOneAndDelete({id}, {session: categorySession})
        const products = await Products.find()
        await products.map(product => {
            if(product.category._id == id){
                product.category = {}
            }
        })
        res.status(200).json(products)

        // if(category){
        //      res.status(200).json(products)
        // }
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