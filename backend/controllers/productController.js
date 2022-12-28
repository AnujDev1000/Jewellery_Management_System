const mongoose = require("mongoose")
const Products = require("../models/productsModel")
const Categories = require("../models/categoryModel")
const Suppliers = require("../models/suppliersModel")
const Stocks = require("../models/stockModel")

const addProduct = async (req, res) => {
    const { name, metal, carat, category, stone, weight, price, supplier, discription } = req.body

    try {
        const fCategory = await Categories.findOne({_id: category})
        const fSupplier = await Suppliers.findOne({_id: supplier})
        const newCategory = { _id: category, name: fCategory.name}
        const newSupplier = { _id: supplier, name: fSupplier.name}
        // console.log(newCategory, newSupplier)
        const product = new Products({ name, metal, carat, category: newCategory, stone, weight, price, supplier: newSupplier, discription })
        const stock = new Stocks({ availableStock: 0, product: {_id:product._id, name:product.name} })
        
        try {
            const session = await mongoose.startSession()
            await session.startTransaction()

            // // products
            product.stock = { _id: stock._id, availableStock: stock.availableStock }
            await product.save({session: session})

            // categories
            fCategory.products.push({_id:product._id, name:product.name})
            fCategory.productCount = fCategory.productCount + 1
            await fCategory.save({session: session})

            // suppliers
            fSupplier.products.push({_id:product._id, name:product.name})
            fSupplier.productCount = fSupplier.productCount + 1
            await fSupplier.save({session: session})

            // stocks
            await stock.save({session: session})

            await session.commitTransaction()
            session.endSession()
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
            res.status(400).json({error: error.message})
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({error: error.message})
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
        const product = await Products.findOne({id})
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    
    const session = await mongoose.startSession()
    await session.startTransaction()
    try {
        // products
        const product = await Products.findOneAndDelete({_id: id}, {session: session})

        // categories
        const category = await Categories.findOne({_id: product.category._id})
        category.products = category.products.filter(cat => cat._id != id)
        category.productCount = category.productCount - 1
        await category.save({session: session})

        // Suppliers
        const supplier = await Suppliers.findOne({_id: product.supplier._id})
        supplier.products = supplier.products.filter(sup => sup._id != id)
        supplier.productCount = supplier.productCount - 1
        await supplier.save({session: session})

        // stocks
        const stock = await Stocks.findOneAndDelete({_id: product.stock._id}, {session: session})

        // commit Transactions
        await session.commitTransaction()
        await session.endSession()
        res.status(200).json(product)
        
    } catch (error) {
        await session.abortTransaction()
        session.endSession()
        res.status(404).json({error: error.message})
    }
    
}

const setProduct = async (req, res) => {
    const { id } = req.params
    const newProduct = req.body
    if(newProduct.hasOwnProperty("category")){
        const fCategory = await Categories.findOne({_id: newProduct.category})
        newProduct.category = {_id: fCategory._id, name: fCategory.name}
    }
    if(newProduct.hasOwnProperty("supplier")){
        const fSupplier = await Suppliers.findOne({_id: newProduct.supplier})
        newProduct.supplier = { _id: fSupplier._id, name: fSupplier.name}
    }
    

    try {
        const product = await Products.findOneAndUpdate({_id: id}, { ...newProduct }, { new: true })
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addProduct, getProduct, deleteProduct, getSingleProduct, setProduct }