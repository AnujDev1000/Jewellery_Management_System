const mongoose = require("mongoose")
const Products = require("../models/productsModel")
const Categories = require("../models/categoryModel")

const addProduct = async (req, res) => {
    const { name, metal, carat, category, stone, weight, price, supplier, discription } = req.body

    try {
        const product = new Products({ name, metal, carat, category, stone, weight, price, supplier, discription })
        const cid = category._id
        const fCategory = await Categories.findOne({cid})
        try {
            const session = await mongoose.startSession()
            await session.startTransaction()
            
            await product.save(session)
            fCategory.products.push({_id:product._id, name:product.name})
            fCategory.productCount = fCategory.productCount + 1
            await fCategory.save({session})

            await session.commitTransaction()
            session.endSession()
            res.status(200).json(product)
        } catch (error) {
            res.status(400).json(error.message)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Products.find()
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params

    try {
        const product = await Products.find({id})
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const products = await Products.find()
        const cid = await Products.find({id}).select("category")._id
        const categories = await Categories.find({cid})
        try {
            const session = await mongoose.startSession()
            await session.startTransaction()

            products = products.filter(product => {
                if (product._id !== id){ return product}
            })
            await products.save(session)

            categories.products = categories.products.filter(category => {
                if (category._id !== cid){ return product}
            })
            await categories.save({session})

            await session.commitTransaction()
            session.endSession()
            res.status(200).json(product)
        } catch (error) {
            res.status(404).json(error.message)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
    
}

const setProduct = async (req, res) => {
    const id = req.params

    try {
        const product = await Products.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addProduct, getProduct, deleteProduct, getSingleProduct, setProduct }