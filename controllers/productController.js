const Products = require("../models/productsModel")

const addProduct = async (req, res) => {
    const { name, metal, carat, category, stone, price, company, supplier, discription } = req.body

    try {
        const product = await Products.create({ name, metal, carat, category, stone, price, company, supplier, discription })
        if(product){
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getProduct = async (req, res) => {

}

module.exports = { addProduct, getProduct }