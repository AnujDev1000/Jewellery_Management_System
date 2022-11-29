const Employees = require("../models/employeeModel")

const addEmployee = async (req, res) => {
    const { name, phone, address, salary, type } = req.body
 
    try {
        const employee = await Employees.create({ name, phone, address, salary, type })
        if(employee){
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getEmployee = async (req, res) => {
    try {
        const employee = await Employees.find()
        if(employee){
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleEmployee = async (req, res) => {
    const { id } = req.params

    try {
        const employee = await Employees.find({id})
        if(employee){
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteEmployee = async (req, res) => {
    const { id } = req.params

    try {
        const employee = await Employees.findOneAndDelete({id})
        if(employee){
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const setEmployee = async (req, res) => {
    const id = req.params

    try {
        const employee = await Employees.findOneAndUpdate({id}, { ...req.body }, { new: true })
        if(employee){
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { addEmployee, getEmployee, deleteEmployee, getSingleEmployee, setEmployee }